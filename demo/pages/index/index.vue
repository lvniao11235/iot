<template>
	<view class="index-page">
		<navbar :isHome="true" :bgColor="'#10AB6C'" :fgColor="'#fff'" :showAddress="true" :title="'首页'"></navbar>
		<view class="header">
			<view class="info">
				<view class="location">北京</view>
				<view><label>空气质量：良</label><label>温度：4°C</label></view>
				<view><label>湿度：23%</label><label>PM2.5：6μg/m³</label></view>
			</view>
			<view class="img"><cover-image src="/static/images/sun.png"></cover-image></view>
			<view class="mask" v-if="devices && devices.length > 0"></view>
		</view>
		<view v-if="devices && devices.length > 0">
			<view class="parameters">
				<view><label>优</label>室内环境</view>
				<view class="info"><label>温度：22°C</label><label>湿度：23%</label></view>
				<view class="info"><label>PM2.5：3μg/m³</label></view>
			</view>
			<view class="qiun-charts">
				<view>统计数据</view>
				<view class="switch-btns">
					<view class="selected">日</view>
					<view>月</view>
					<view>年</view>
				</view>
				<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" disable-scroll=true @touchstart="touchLineA" @touchmove="moveLineA" @touchend="touchEndLineA"></canvas>
			</view>
		</view>
		<view v-else>
			<view class="no-device">
				<cover-image src="/static/images/phone.png"></cover-image>
				<view>添加设备，更多服务</view>
				<view @click="addDevice" class="empty-btn">去添加</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import uCharts from '@/u-charts/u-charts.js';
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
				cWidth: '',
				cHeight: '',
				tips: '',
				pixelRatio: 1,
				serverData: '',
				itemCount: 10,
				sliderMax: 50,
				devices:[]
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
			　　title:'首页'
			})
			_self = this;
			uni.createSelectorQuery().select(".index-page").boundingClientRect(e=>{
				this.cWidth = e.width;
				this.cHeight = 200;
				this.fillData();
			}).exec();
			
			
			devices(this.currentUser.OpenId).then(res=>{
				if(res.data && res.data.length > 0){
					this.devices.push(...res.data);
				} else {
					this.devices = [];
				}
			})
		},
		onShow(){
			devices(this.currentUser.OpenId).then(res=>{
				if(res.data && res.data.length > 0){
					this.$store.commit("setDevices", res.data)
					this.devices = [];
					this.devices.push(...res.data);
				} else {
					this.$store.commit("setDevices", [])
					this.devices = [];
				}
			})
		},
		onReady() {
			
		},
		methods: {
			switchAddress() {
				uni.navigateTo({
					url: '../address/addressList'
				})
			},
			addDevice(){
				uni.navigateTo({
					url:'../device/addDevice'
				})
			},
			fillData() {
				
				let LineA = {
					categories: [],
					series: []
				};
				LineA.categories = [0, 3, 6, 9, 12, 15, 18, 21, 23];
				LineA.series = [{
					name:'mine',
					data:[20, 25, 25, 30, 20, 25, 25, 30, 20],
					color:'#1890ff',
					type:'line',
					show:true,
					pointShape:'circle',
					legendShape:'line'
				}, {
					name:'average',
					data:[15, 20, 21, 19, 15, 20, 21, 19, 15],
					color:'#2fc25b',
					type:'line',
					show:true,
					pointShape:'circle',
					legendShape:'line'
				}, {
					name:'out_door',
					data:[10, 15, 17, 8, 10, 15, 17, 8, 10],
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
		top: 10px;
		right: 16px;
		height: 50px;
		width: 50px;
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
		width: 110px;
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
		
		.index-page .no-device cover-image{
			width:80px;
			height:100px;
			margin:10px auto;
		}
		
		.index-page .no-device > view{
			margin:5px auto;
		}
		
		.index-page .no-device > view:last-child{
			width:150px;
			height:30px;
			line-height:30px;
			vertical-align:middle;
			text-align:center;
			border:1px solid #10AB6C;
			margin:20px auto;
			color:#10AB6C;
		}
</style>
