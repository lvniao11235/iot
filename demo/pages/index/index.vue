<template>
	<view class="index-page">
		<navbar :isHome="true" :bgColor="'#10AB6C'" :fgColor="'#fff'" :showAddress="true" :title="'首页'"></navbar>
		<view class="header" v-if="currentUser != null">
			<view class="info">
				<view class="location" style="padding-top:20px;">{{currentAddress.city ? currentAddress.city:"--"}}</view>
				<view style="margin-top:3px;"><label style="width:120px;">空气质量：{{testweather.data.quality ? testweather.data.quality:"--"}}</label><label style="width:120px;">温度：{{testweather.data.wendu ? testweather.data.wendu + '°C':"--"}}</label></view>
				<view style="margin-top:3px;"><label style="width:120px;">湿度：{{testweather.data.shidu ? testweather.data.shidu:"--"}}</label><label style="width:150px;">PM2.5：{{testweather.data.pm25?testweather.data.pm25 + 'μg/m³':"--"}}</label></view>
			</view>
			<view class="img"><cover-image  :src="weatherIcon"></cover-image></view>
			<view class="mask" v-if="devices && devices.length > 0"></view>
		</view>
		<view class="header no-user" v-else>
			<view>欢迎使用清云健康小程序</view>
			<view>要使用小程序控制设备</view>
			<view>请先进行登录</view>
		</view>
		<view v-if="devices && devices.length > 0">
			<view class="parameters" style="overflow:hidden">
				<view><label style="width:auto;margin-bottom:5px;">{{familyData && familyData.airQuality ? familyData.airQuality:'--'}}</label>室内环境</view>
				<view style="margin-bottom:5px;" class="info"><label>温度：{{familyData && familyData.currentTemperature ? familyData.currentTemperature:'--'}}</label><label>湿度：{{familyData && familyData.currentHumidity?familyData.currentHumidity:'--'}}</label></view>
				<view style="margin-bottom:5px;" class="info" ><label style="width:200px;">PM2.5：{{familyData && familyData.pm25?familyData.pm25:'--'}}</label></view>
			</view>
			<view class="qiun-charts">
				<view><label class="title-border"></label>统计数据</view>
				<template v-if="hasLineData">
					<!-- <view class="switch-btns">
						<view style="margin-right:5px;" @click="changeLineData(1)" :class="{'selected':lineDataType == 1}">日</view>
						<view style="margin-right:5px;" @click="changeLineData(2)" :class="{'selected':lineDataType == 2}">月</view>
						<view @click="changeLineData(3)" :class="{'selected':lineDataType == 3}">年</view>
					</view> -->
					<canvas canvas-id="canvasLineA" disable-scroll=true id="canvasLineA" class="charts" @touchstart="touchLineA" @touchmove="moveLineA" @touchend="touchEndLineA"></canvas>
				</template>
				<template v-else>
					<view class="nolinedata">
						<image src="../../static/images/nolinedata.png"></image>
						<view>暂无数据！</view>
					</view>
				</template>
			</view>
		</view>
		<view v-else>
			<view class="no-device" style="z-index:1;">
				<image src="/static/images/phone.png"></image>
				<view style="color:#adadad;">添加设备，更多服务</view>
				<view @click="addDevice" class="empty-btn">去添加</view>
			</view>
		</view>
		<view class="dialog-container" v-if="showDialog && currentUser == null">
			<view class="dialog-mask"></view>
			<view class="prompt-dialog" style="height:170px;">
				<view class="dialog-title">提示</view>
				<view class="dialog-content">
					请先登录小程序，才可以添加设备。
				</view>
				<view class="btn-group single-btn">
					<navigator class="dialog-cancel" open-type="exit" target="miniProgram">拒绝</navigator>
					<view class="dialog-ok" @click="loginOk">去登录</view>
				</view>
			</view>
		</view>
		<view class="pushinfo-dialog" v-if="showPushInfo">
			<view class="pushinfo-header">
				<label>{{'智能推荐'}}</label>
				<image @click="closePushInfo" src="../../static/images/close.png"></image>
			</view>
			<view class="pushinfo-content">
				<view>{{pushInfos[pushInfoType-1].content}}</view>
				<view @click="pushInfoClick(pushInfoType)">{{pushInfos[pushInfoType-1].btnContent}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState, mapMutations
	} from 'vuex';
	import uCharts from '@/u-charts/u-charts.js';
	import {listFamilyBindDevices, listFamilys, get} from '@/api/address';
	import { login, decodeUserInfo, setCurFamilyId, getCurFamilyId, getFamilyAvgData } from '@/api/user';
	var _self;
	var canvasObj = {};
	import {devices} from '@/api/device';
	// import navbar from '../../components/navbar';
	export default {
		// components:{
		// 	navbar
		// },
		data() {
			return {
				showDialog:false,
				cWidth: uni.upx2px(750),
				cHeight: uni.upx2px(500),
				tips: '',
				pixelRatio: 1,
				serverData: '',
				itemCount: 10,
				sliderMax: 50,
				devices:[],
				familyData:null,
				testweather:{},
				categories:[],
				mins:[],
				averages:[],
				maxs:[],
				times:[],
				lineDataType:1,
				weathers:[
					{label:'晴', name:'sunny', icon:'/static/images/sunny.png'},
					{label:'云', name:'cloud', icon:'/static/images/cloud.png'},
					{label:'雪', name:'snow', icon:'/static/images/snow.png'},
					{label:'雨', name:'rain', icon:'/static/images/rain.png'},
					{label:'雾', name:'fog', icon:'/static/images/fog.png'},
					{label:'沙', name:'sand', icon:'/static/images/sand.png'},
					{label:'尘', name:'dust', icon:'/static/images/dust.png'},
					{label:'霾', name:'haze', icon:'/static/images/haze.png'},
					{label:'阴', name:'overcast', icon:'/static/images/overcast.png'},
				],
				weatherIcon:'/static/images/sunny.png',
				cityWeatherData:{},
				showExecute:true,
				showPushInfo:false,
				pushInfos:[
					{
						content:"为了让您及时使用上干净的水源，建议您为净水器设置在7:30时定时开机",
						btnContent:"去设置",
						type:1,
					},
					{
						content:"让定时关机帮您省钱，建议您为净水器设置每天21:30时定时关机",
						btnContent:"去设置",
						type:2,
					},
					{
						content:"当前城市空气质量为中度污染，建议您一键开启所有空气净化器",
						btnContent:"一键开机",
						type:3,
					}
				],
				pushInfoType:1,
				lineData:[],
				hasLineData:false,
				lineColors:[
					'#10AB6C', '#ED4040', '#4B92DF', '#08CFC4', '#F5A623',
					'#6E58E5', '#DC3CF5', '#EECE1F', '#2F94AD', '#A443E8'
					
				]
			}
		},
		computed:{
			...mapState(["currentAddress", "devices", "currentUser", "address", "currentFamilyData", "testweather"])
		},
		onLoad(e) {
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			_self = this;
			this.showExecute = false;
			if(e.goto){
				switch(e.goto){
					case "serviceDetail":
						uni.navigateTo({
							url:`../device/serviceDetail?orderId=${e.orderId}&type=1`
						})
					case "pushInfo":
						this.pushInfoType = e.type;
						this.showPushInfo = true;
						break;
				}
			}
			//this.$store.commit("setCurrentUser", {})
			uni.showLoading({})
			uni.setNavigationBarTitle({
			　　title:'首页'
			})
			if(this.currentUser && this.currentUser.OpenId){
				this.lineDataType = 1;
				if(this.currentAddress){
					listFamilyBindDevices(this.currentAddress.id).then(res=>{
						if(res.data.data && res.data.data.length > 0){
							this.$store.commit("setDevices", res.data.data)
							this.devices = [];
							this.devices.push(...res.data.data);
							return getFamilyAvgData(1, this.currentAddress.id).then(res=>{
								
								if(res.data.data && res.data.data.familyData){
									this.familyData = res.data.data.familyData
									this.$store.commit("setCurrentFamilyData", res.data.data.familyData)
								} else {
									this.familyData = null
								}
								
								if(res.data.data && res.data.data.cityData){
									//this.testweather = res.data.data.cityData;
									this.cityWeatherData = res.data.data.cityData;
									this.changeWeatherIcon(res.data.data.cityData);
								}
								this.displayLineData(res.data.data);
							})
						} else {
							this.$store.commit("setDevices", [])
							this.devices = [];
						}
						
					})
					get(this.currentAddress.cityId).then(res=>{
						if(res.data.data){
							this.$store.commit("setWeatherData", res.data.data)
							this.testweather=res.data.data;
						}
					})
				}
				this.showExecute = true;
				uni.hideLoading();
				return;
			}
			this.wechatLogin();
			
			
		},
		onShow(){
			//this.testweather = {};
			this.$store.commit("setCurrentTab", '/pages/index/index')
			this.showDialog = false;
			if(this.showExecute){
				this.lineDataType = 1;
				if(this.currentAddress){
					listFamilyBindDevices(this.currentAddress.id).then(res=>{
						if(res.data.data && res.data.data.length > 0){
							this.$store.commit("setDevices", res.data.data)
							this.devices = [];
							this.devices.push(...res.data.data);
							return getFamilyAvgData(1, this.currentAddress.id).then(res=>{
								
								if(res.data.data && res.data.data.familyData){
									this.familyData = res.data.data.familyData
									this.$store.commit("setCurrentFamilyData", res.data.data.familyData)
								} else {
									this.familyData = null
								}
								if(res.data.data && res.data.data.cityData){
									//this.testweather = res.data.data.cityData;
									this.cityWeatherData = res.data.data.cityData;
									this.changeWeatherIcon(res.data.data.cityData);
								}
								this.displayLineData(res.data.data);
							})
						} else {
							this.$store.commit("setDevices", [])
							this.devices = [];
						}
						
					})
					get(this.currentAddress.cityId).then(res=>{
						if(res.data.data){
							this.$store.commit("setWeatherData", res.data.data)
							this.testweather=res.data.data;
						}
					})
				}
			}
			//this.wechatLogin();
			// if(this.currentAddress){
			// 	listFamilyBindDevices(this.currentAddress.id).then(res=>{
			// 		if(res.data.data && res.data.data.length > 0){
			// 			this.$store.commit("setDevices", res.data.data)
			// 			this.devices = [];
			// 			this.devices.push(...res.data.data);
			// 		} else {
			// 			this.$store.commit("setDevices", [])
			// 			this.devices = [];
			// 		}
			// 	})
			// }
			
			
		},
		onReady() {
			
		},
		methods: {
			...mapMutations(["setCurrentUser", "setAddress", 
				"setcurrentAddress", "setCurrentTab", 
				"setCurrentFamilyData", "setWeatherData",
				"setOpenId"]),
			wechatLogin(){
				login().then(res=>{
					if(res.firstLogin){
						uni.hideLoading();
						// this.$store.commit("setOpenId", res.OpenId)
						// //this.showDialog = true;
						// uni.navigateTo({
						// 	url:'../address/addAddress'
						// })
						this.$store.commit("setCurrentUser", null)
					} else {
						this.$store.commit("setCurrentUser", res);
						return listFamilys(res.OpenId)
					}
				}).then(res=>{
					if(res.data.data && res.data.data.length == 0){
						uni.navigateTo({
							url:'../address/addAddress'
						})
					} else {
						this.$store.commit("setAddress", res.data.data)
						return getCurFamilyId(this.currentUser.OpenId)
					}
				}).then(res=>{
						if(res.data.data){
							this.$store.commit("setcurrentAddress", res.data.data)
							get(res.data.data.cityId).then(res=>{
								if(res.data.data){
									this.$store.commit("setWeatherData", res.data.data)
									this.testweather=res.data.data;
								}
							})
							getFamilyAvgData(1, res.data.data.id).then(res=>{
								if(res.data.data && res.data.data.familyData){
									this.familyData = res.data.data.familyData
									this.$store.commit("setCurrentFamilyData", res.data.data.familyData)
								} else {
									this.familyData = null
								}
								if(res.data.data && res.data.data.cityData){
									//this.testweather = res.data.data.cityData;
									this.cityWeatherData = res.data.data.cityData;
									this.changeWeatherIcon(res.data.data.cityData);
								}
								this.displayLineData(res.data.data);
							})
							return listFamilyBindDevices(res.data.data.id)
						} else {
							this.$store.commit("setcurrentAddress", res.data.data[0])
							return listFamilyBindDevices(res.data.data[0].id)
						}
					}).then(res=>{
						if(res){
							if(res.data.data && res.data.data.length > 0){
								this.$store.commit("setDevices", res.data.data)
								this.devices = [];
								this.devices.push(...res.data.data);
							} else {
								this.$store.commit("setDevices", [])
								this.devices = [];
							}
							
						}
						uni.hideLoading();
						this.showExecute = true;
					}).catch(res=>{
						uni.hideLoading();
						this.showExecute = true;
						if(res.errMsg.startsWith("getUserInfo:fail")){
							
							//this.showDialog = true;
							this.$store.commit("setCurrentUser", null)
						}
					})
				},
			changeWeatherIcon(citydata){
				for(let i=0; i<this.weathers.length; i++){
					if(citydata.weather.indexOf(this.weathers[i].label) > -1){
						this.weatherIcon = this.weathers[i].icon;
						return;
					}
				}
			},
			changeLineData(type){
				this.lineDataType = type;
				if(!this.currentAddress){
					return;
				}
				getFamilyAvgData(type, this.currentAddress.id).then(res=>{
					this.displayLineData(res.data.data);
				})
			},
			loginCancel(){
				uni.hideLoading();
				this.showDialog = false;
			},
			loginOk(){
				uni.hideLoading();
				this.showDialog = false;
				uni.navigateTo({
					url:'../login/index'
				})
			},
			OnWechatAuthorized(){
				uni.navigateTo({
					url:'../login/login'
				})
			},
			onGetUserInfo(){
				uni.navigateTo({
					url:'../login/login'
				})
			},
			switchAddress() {
				uni.navigateTo({
					url: '../address/addressList'
				})
			},
			addDevice(){
				if(this.currentUser == null){
					this.showDialog = true;
				} else {
					uni.navigateTo({
						url:'../device/addDevice'
					})
				}
				
			},
			displayLineData(data){
				if(data && data.avgPm25Value){
					let arr = [];
					arr.push(...data.avgPm25Value);
					this.lineData = [];
					for(let i=0; i< arr.length; i++){
						if(arr[i].values && 
							arr[i].values.length > 0){
							var e = {
								name:'',
								value:[],
								time:[]
							};
							let temp = arr[i];
							e.name = temp.deviceName;
							let times = [];
							for(let j=0; j<temp.values.length; j++){
								
								let time = this.$moment(new Date(parseInt(temp.values[j].time))).format("HH:mm");
								if(times.indexOf(time) == -1){
									times.push(time)
									e.time.push(new Date(parseInt(temp.values[j].time)));
									e.value.push(parseFloat(temp.values[j].value))
								}
							}
							
							this.lineData.push(e);
						}
					}
					this.fillData(this.lineData)
					this.hasLineData = true;
				} else {
					this.hasLineData = false;
				}
			},
			fillData(data) {
				
				let LineA = {
					categories: [],
					series: []
				};
				let start = 0;
				// if(data[0].time.length > 8){
				// 	start = data[0].time.length - 8;
				// }
				let max = 0;
				for(let i=1; i<data.length; i++){
					if(data[i].time.length > data[max].time.length){
						max = i;
					}
				}
				LineA.categories = data[max].time.splice(start);
				for(let i=0; i<data.length; i++){
					LineA.series.push({
						name:data[i].name,
						data:data[i].value.splice(start),
						color:this.lineColors[i],
						type:'line',
						show:true,
						pointShape:'circle',
						legendShape:'line'
					})
				}
				this.showLineA("canvasLineA", LineA);
			},
					
			showLineA(canvasId, chartData) {
				canvasObj[canvasId] = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'line',
					fontSize: 11,
					padding:[15,15,15,15],
					showToolTipTitle:true,
					toolTipTitle:this.$moment(new Date).format("MM月DD日"),
					toolTipTitleFormat:(option, index)=>{
						return this.$moment(option.categories[index]).format("MM月DD日 HH:mm");
					},
					legend:{
						show:false,
						padding:5,
						lineHeight:11,
						margin:5,
						format:val=>{
							return val+'μg/m³';
						}
					},
					dataLabel: false,
					dataPointShape: false,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: false,
					enableScroll: true, //开启图表拖拽功能
					xAxis: {
						itemCount: 8,
						scrollShow: true,
						scrollAlign: 'left',
						labelCount:2,
						scrollColor:"#fff",
						scrollBackgroundColor:"#fff",
						format:val=>{
							return this.$moment(val).format("HH:mm");
						}
					},
					yAxis: {
						min: 10,
						max: 60,
						format: (val) => {
							return Math.floor(val);
						}
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: false,
					dataPointShape: false,
					extra: {
						lineStyle: 'straight'
					},
				});
			},	
			touchLineA(e) {
				canvasObj['canvasLineA'].scrollStart(e);
			},
			moveLineA(e) {
				canvasObj['canvasLineA'].scroll(e);
			},
			touchEndLineA(e) {
				canvasObj['canvasLineA'].scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvasObj['canvasLineA'].showToolTip(e, {
					format: function(item, category) {
						return item.name + ':' + item.data + "μg/m³"
					}
				});
			},
			pushInfoClick(type){
				let url = '';
				switch(type){
					case 1:
						url = `/pages/device/settingTime?type=1`;
						break;
					case 2:
						url = `/pages/device/settingTime?type=2`;
						break;
				}
				uni.navigateTo({
					url:url
				})
			},
			closePushInfo(){
				this.showPushInfo = false;
			}
		},
		computed: {
			...mapState(["currentAddress", "currentUser"])
		},
		mounted() {
			uni.setNavigationBarTitle({
				title: '首页'
			})
		},
	}
</script>

<style>
	page, .index-page{
		background-color:#fff;
	}
	
	.index-page .location{
		font-size:14px;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: left;
	}
	.qiun-charts{
		padding-top:5px;
	}
	.qiun-charts .switch-btns{
		text-align:right;
		padding-right:16px;
		font-size:14px;
	}
	.qiun-charts .switch-btns > view{
		display:inline-block;
		width:30px;
		text-align:center;
	}
	
	.qiun-charts .switch-btns > view.selected{
		color:#10AB6C;
	}
	
	.qiun-charts > view:first-child{
		margin-left:10px;
		padding-left:5px;
		font-size:20px;
		font-weight:bold;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.index-page .header {
		position: relative;
	}

	.index-page .header .img {
		position: absolute;
		top: 0px;
		right: 20px;
		height: 46px;
		width: 46px;
	}

	.index-page .header>view {
		background-color: #10AB6C;
	}

	.index-page .header>view.mask {
		height: 50px;
		width: 100%;
		background-color: #10AB6C;
		border-bottom-left-radius: 200px;
		border-bottom-right-radius: 200px;
	}

	.index-page .header > .info {
		color: #fff;
		line-height: 20px;
		vertical-align: middle;
		font-size: 16px;
		padding: 0 16px;
		padding-bottom:10px;
	}

	.index-page .header .info label,
	.index-page .parameters label {
		display: inline-block;
		width: 130px;
		height: 20px;
		font-size: 14px;
	}
	
	.index-page .parameters label{
		width:130px;
		font-size:16px;
	}

	.index-page .parameters {
		width: calc(90% - 20px);
		height: 100px;
		margin: auto;
		background-color: #fff;
		box-shadow: 0 5px 10px #C0C0C0;
		position: relative;
		top: -40px;
		border-radius: 12px;
		padding: 10px;
		color:#585858;
		font-size:16px;
	}

	.index-page .parameters>view:first-child {
		font-size: 14px;
		color: #6E6E6E;
	}

	.index-page .parameters>view:first-child label {
		font-size: 42px;
		display: inline-block;
		width: 40px;
		margin-right:5px;
		text-align: center;
		color: #10AB6C !important;
	}
	
	.index-page .box1{
		width:100%;
		height:300px;
	}
	
	
		.qiun-padding {
			padding: 2%;
			width: 96%;
		}
	
		.qiun-wrap {
			display: flex;
			flex-wrap: wrap;
		}
	
		.qiun-rows {
			display: flex;
			flex-direction: row !important;
		}
	
		.qiun-columns {
			display: flex;
			flex-direction: column !important;
		}
	
		.qiun-common-mt {
			margin-top: 10upx;
		}
	
		.qiun-bg-white {
			background: #FFFFFF;
		}
	
		.qiun-title-bar {
			width: 96%;
			padding: 10upx 2%;
			flex-wrap: nowrap;
		}
	
		.qiun-title-dot-light {
			border-left: 10upx solid #0ea391;
			padding-left: 10upx;
			font-size: 32upx;
			color: #000000
		}
	
		/* 通用样式 */
		.qiun-charts {
			width: 750upx;
			height: 500upx;
			background-color: #FFFFFF;
		}
		
		.qiun-charts > view:first-child{
			color:#585858;
			font-size:18px;
		}
	
		.charts {
			width: 750upx;
			height: 500upx;
			background-color: #FFFFFF;
		}
	
		/* 横屏样式 */
		.qiun-charts-rotate {
			width: 750upx;
			height: 1100upx;
			background-color: #FFFFFF;
			padding: 25upx;
		}
	
		.charts-rotate {
			width: 750upx;
			height: 1100upx;
			background-color: #FFFFFF;
		}
	
		.index-page .no-device{
			text-align:center;
			margin-top:40px;
		}
		
		.index-page .no-device image{
			width:160px;
			height:135px;
			margin:10px auto;
		}
		
		.index-page .no-device > view{
			margin:5px auto;
		}
		
		.index-page .no-device > view:last-child{
			width:200px;
			height:40px;
			line-height:40px;
			vertical-align:middle;
			text-align:center;
			border:1px solid #10AB6C;
			margin:20px auto;
			color:#10AB6C;
		}
		
		.header.no-user > view{
			text-align:center;
			color:#fff;
			font-size:18px;
		}
		
		.header.no-user > view:first-child{
			padding-top:20px;
			padding-bottom:30px;
			font-size:22px;
		}
		
		.header.no-user > view:last-child{
			padding-bottom:20px;
		}
		
		.pushinfo-dialog{
			width:calc(100% - 32px);
			margin:0 auto;
			box-shadow:0 0 5px #8F8F8F;
			position:fixed;
			bottom:10px;
			left:0;
			right:0;
			background-color:#fff;
			border-radius:5px;
		}
		
		.pushinfo-dialog .pushinfo-header{
			font-size:14px;
			padding:2px 5px;
		}
		
		.pushinfo-dialog .pushinfo-header > label:first-child{
			font-weight:bold;
		}
		
		.pushinfo-dialog .pushinfo-header > image:last-child{
			font-weight:normal;
			float:right;
			height:14px;
			width:14px;
			position:relative;
			top:5px;
			right:5px;
		}
		
		.pushinfo-dialog .pushinfo-content{
			font-size:12px;
			padding:5px;
		}
		
		.pushinfo-dialog .pushinfo-content > view:first-child{
			display:inline-block;
			width:calc(100% - 100px);
		}
		
		.pushinfo-dialog .pushinfo-content > view:last-child{
			display:inline-block;
			width:75px;
			background-color:#10AB6C;
			height:20px;
			line-height:20px;
			vertical-align:middle;
			text-align:center;
			color:#fff;
			border-radius:3px;
			float:right;
			margin-top:7px;
			margin-right:10px;
		}
		
		.nolinedata image{
			height:85px;
			width:115px;
			display:block;
			margin:20px auto;
			margin-bottom:5px;
		}
		
		.nolinedata view{
			text-align:center;
			font-size:16px;
			color:#adadad;
		}
</style>
