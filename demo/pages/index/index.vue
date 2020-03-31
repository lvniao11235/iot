<template>
	<view class="index-page">
		<navbar :isHome="true" :bgColor="'#10AB6C'" :fgColor="'#fff'" :showAddress="true" :title="'首页'"></navbar>
		<view class="header" v-if="currentUser != null">
			<view class="info">
				<view class="location">{{currentAddress.city ? currentAddress.city:"--"}}</view>
				<view><label>空气质量：{{testweather.data.quality ? testweather.data.quality:"--"}}</label><label>温度：{{testweather.data.wendu ? testweather.data.wendu + '°C':"--"}}</label></view>
				<view><label>湿度：{{testweather.data.shidu ? testweather.data.shidu:"--"}}</label><label style="width:150px;">PM2.5：{{testweather.data.pm25?testweather.data.pm25 + 'μg/m³':"--"}}</label></view>
			</view>
			<view class="img"><cover-image src="/static/images/sun.png"></cover-image></view>
			<view class="mask" v-if="devices && devices.length > 0"></view>
		</view>
		<view class="header no-user" v-else>
			<view>欢迎使用清云健康小程序</view>
			<view>要使用小程序控制设备</view>
			<view>请先进行登录</view>
		</view>
		<view v-if="devices && devices.length > 0">
			<view class="parameters">
				<view><label>{{familyData && familyData.airQuality ? familyData.airQuality:'--'}}</label>室内环境</view>
				<view class="info"><label>温度：{{familyData && familyData.currentTemperature ? familyData.currentTemperature:'--'}}</label><label>湿度：{{familyData && familyData.currentHumidity?familyData.currentHumidity:'--'}}</label></view>
				<view class="info" ><label style="width:200px;">PM2.5：{{familyData && familyData.pm25?familyData.pm25:'--'}}</label></view>
			</view>
			<view class="qiun-charts">
				<view>统计数据</view>
				<view class="switch-btns">
					<view @click="changeLineData(1)" :class="{'selected':lineDataType == 1}">日</view>
					<view @click="changeLineData(2)" :class="{'selected':lineDataType == 2}">月</view>
					<view @click="changeLineData(3)" :class="{'selected':lineDataType == 3}">年</view>
				</view>
				<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" disable-scroll=true @touchstart="touchLineA" @touchmove="moveLineA" @touchend="touchEndLineA"></canvas>
			</view>
		</view>
		<view v-else>
			<view class="no-device" style="z-index:1;">
				<image src="/static/images/phone.png"></image>
				<view>添加设备，更多服务</view>
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
				cWidth: '',
				cHeight: '',
				tips: '',
				pixelRatio: 1,
				serverData: '',
				itemCount: 10,
				sliderMax: 50,
				devices:[],
				familyData:{},
				testweather:{},
				categories:[],
				mins:[],
				averages:[],
				maxs:[],
				times:[],
				lineDataType:1
			}
		},
		computed:{
			...mapState(["currentAddress", "devices", "currentUser", "address", "currentFamilyData", "testweather"])
		},
		onLoad(e) {
			if(e.goto){
				switch(e.goto){
					case "serviceDetail":
						uni.navigateTo({
							url:`../device/serviceDetail?orderId=${e.orderId}&type=1`
						})
				}
			}
			//this.$store.commit("setCurrentUser", {})
			uni.showLoading({})
			uni.setNavigationBarTitle({
			　　title:'首页'
			})
			this.wechatLogin();
			_self = this;
			
		},
		onShow(){
			this.$store.commit("setCurrentTab", '/pages/index/index')
			this.showDialog = false;
			if(this.currentAddress){
				listFamilyBindDevices(this.currentAddress.id).then(res=>{
					if(res.data.data && res.data.data.length > 0){
						this.$store.commit("setDevices", res.data.data)
						this.devices = [];
						this.devices.push(...res.data.data);
					} else {
						this.$store.commit("setDevices", [])
						this.devices = [];
					}
				})
			}
			this.changeLineData(this.lineDataType);
			
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
					if(res){
						if(res.data.data && res.data.data.length == 0){
							uni.navigateTo({
								url:'../address/addAddress'
							})
						} else {
							let addrs = res.data.data
							getCurFamilyId(this.currentUser.OpenId).then(res=>{
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
										}
										if(res.data.data && res.data.data.avgPm25Value){
											this.times = [];
											this.mins = [];
											this.maxs = [];
											this.averages = [];
											for(let i=0; i< res.data.data.avgPm25Value.length; i++){
												this.times.push(res.data.data.avgPm25Value[i].index)
												this.averages.push(res.data.data.avgPm25Value[i].value)
												this.maxs.push(res.data.data.avgPm25Value[i].value + 10)
												this.mins.push(res.data.data.avgPm25Value[i].value - 10)
											}
											uni.createSelectorQuery().select(".index-page").boundingClientRect(e=>{
												this.cWidth = e.width;
												this.cHeight = 200;
												this.fillData(this.times, this.mins, this.averages, this.maxs)
											}).exec();
											
										}
									})
								} else {
									this.$store.commit("setcurrentAddress", addrs[0])
								}
							})
							this.$store.commit("setAddress", res.data.data)
							return listFamilyBindDevices(res.data.data[0].id)
						}
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
						uni.hideLoading();
					}
				}).catch(res=>{
					uni.hideLoading();
					if(res.errMsg.startsWith("getUserInfo:fail")){
						
						//this.showDialog = true;
						this.$store.commit("setCurrentUser", null)
					}
				})
			},
			changeLineData(type){
				this.lineDataType = type;
				if(!this.currentAddress){
					return;
				}
				getFamilyAvgData(type, this.currentAddress.id).then(res=>{
					if(res.data.data && res.data.data.avgPm25Value){
						this.times = [];
						this.mins = [];
						this.maxs = [];
						this.averages = [];
						for(let i=0; i< res.data.data.avgPm25Value.length; i++){
							this.times.push(res.data.data.avgPm25Value[i].index)
							this.averages.push(res.data.data.avgPm25Value[i].value)
							this.maxs.push(res.data.data.avgPm25Value[i].value + 10)
							this.mins.push(res.data.data.avgPm25Value[i].value - 10)
						}
						uni.createSelectorQuery().select(".index-page").boundingClientRect(e=>{
							this.cWidth = e.width;
							this.cHeight = 200;
							this.fillData(this.times, this.mins, this.averages, this.maxs)
						}).exec();
						
					}
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
			fillData(times, mins, averages, maxs) {
				
				let LineA = {
					categories: [],
					series: []
				};
				LineA.categories = times;
				LineA.series = [{
					name:'mine',
					data:maxs,
					color:'#1890ff',
					type:'line',
					show:true,
					pointShape:'circle',
					legendShape:'line'
				}, {
					name:'average',
					data:averages,
					color:'#2fc25b',
					type:'line',
					show:true,
					pointShape:'circle',
					legendShape:'line'
				}, {
					name:'out_door',
					data:mins,
					color:'#facc14',
					type:'line',
					show:true,
					pointShape:'circle',
					legendShape:'line'
				}];
				this.showLineA("canvasLineA", LineA);
			},
					
			showLineA(canvasId, chartData) {
				canvasObj[canvasId] = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'line',
					fontSize: 11,
					padding:[15,15,15,15],
					legend:{
						show:true,
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
						itemCount: 30,
						scrollAlign: 'left',
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
					dataLabel: true,
					dataPointShape: true
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
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
			
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
		border-left:3px solid #10AB6C;
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
		right: 8px;
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
	.index-page .parameters .info label {
		display: inline-block;
		width: 130px;
		height: 20px;
		font-size: 14px;
	}
	
	.index-page .parameters .info label{
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
			width: 100%;
			height: 500upx;
			background-color: #FFFFFF;
		}
		
		.qiun-charts > view:first-child{
			color:#585858;
			font-size:18px;
		}
	
		.charts {
			width: 100%;
			height: 500upx;
			background-color: #FFFFFF;
		}
	
		/* 横屏样式 */
		.qiun-charts-rotate {
			width: 100%;
			height: 1100upx;
			background-color: #FFFFFF;
			padding: 25upx;
		}
	
		.charts-rotate {
			width: 100%;
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
</style>
