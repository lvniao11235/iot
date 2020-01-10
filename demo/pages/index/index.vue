<template>
	<view class="index-page">
		<view class="header">
			<view class="address-switch" @click="switchAddress">
				{{currentAddress.addr}}<label class="fa fa-angle-right"></label>
			</view>
			<view class="info">
				<view class="location">北京</view>
				<view><label>空气质量：良</label><label>温度：4°C</label></view>
				<view><label>湿度：23%</label><label>PM2.5：6μg/m³</label></view>
			</view>
			<view class="img"></view>
			<view></view>
		</view>
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
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import uCharts from '@/u-charts/u-charts.js';
	var _self;
	var canvasObj = {};
	    
	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				tips: '',
				pixelRatio: 1,
				serverData: '',
				itemCount: 10,
				sliderMax: 50
			}
		},
		onLoad() {
			_self = this;
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
		},
		onReady() {
			this.fillData();
		},
		methods: {
			switchAddress() {
				uni.navigateTo({
					url: '../address/addressList'
				})
			},
			fillData() {
				
				let LineA = {
					categories: [],
					series: []
				};
				LineA.categories = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
				LineA.series = [{
					name:'mine',
					data:[20, 25, 25, 30, 20, 25, 25, 30, 20, 25, 25, 30, 20, 25, 25, 30, 20, 25, 25, 30, 20, 25, 25, 30],
					color:'#1890ff',
					type:'line',
					show:true,
					pointShape:'circle',
					legendShape:'line'
				}, {
					name:'average',
					data:[15, 20, 21, 19, 15, 20, 21, 19, 15, 20, 21, 19, 15, 20, 21, 19, 15, 20, 21, 19, 15, 20, 21, 19],
					color:'#2fc25b',
					type:'line',
					show:true,
					pointShape:'circle',
					legendShape:'line'
				}, {
					name:'out_door',
					data:[10, 15, 17, 8, 10, 15, 17, 8, 10, 15, 17, 8, 10, 15, 17, 8, 10, 15, 17, 8, 10, 15, 17, 8],
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
					padding:[15,15,0,15],
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
						disableGrid: false,
						type: 'grid',
						gridType: 'dash',
						itemCount: 4, 
						scrollShow: true, 
						scrollAlign: 'left',
						//scrollBackgroundColor:'#F7F7FF',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条背景颜色,默认为 #EFEBEF
						//scrollColor:'#DEE7F7',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条颜色,默认为 #A6A6A6
					},
					yAxis: {
						//disabled:true
						gridType: 'dash',
						splitNumber: 8,
						min: 10,
						max: 60,
						format: (val) => {
							return Math.floor(val);
						}
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: true,
					dataPointShape: true,
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
		color:#26B37A;
	}
	
	.qiun-charts > view:first-child{
		margin-left:10px;
		border-left:3px solid #26B37A;
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
		background-color: #fff;
		height: 50px;
		width: 50px;
	}

	.index-page .header>view {
		background-color: #26b37a;
	}

	.index-page .header>view:last-child {
		height: 50px;
		width: 100%;
		background-color: #26b37a;
		border-bottom-left-radius: 200px;
		border-bottom-right-radius: 200px;
	}

	.index-page .header .info {
		color: #fff;
		line-height: 20px;
		vertical-align: middle;
		font-size: 10px;
		padding: 0 16px;
	}

	.index-page .header .info label,
	.index-page .parameters .info label {
		display: inline-block;
		width: 100px;
		height: 20px;
		font-size: 12px;
	}

	.index-page .parameters {
		width: calc(90% - 20px);
		height: 80px;
		margin: auto;
		background-color: #fff;
		box-shadow: 0 5px 10px #C0C0C0;
		position: relative;
		top: -40px;
		border-radius: 10px;
		padding: 10px;
	}

	.index-page .parameters>view:first-child {
		font-size: 14px;
		color: #8F8F8F;
	}

	.index-page .parameters>view:first-child label {
		font-size: 30px;
		display: inline-block;
		width: 40px;
		text-align: center;
		color: #26b37a;
	}
	
	.index-page .box1{
		width:100%;
		height:300px;
	}
	
	page {
			background: #F2F2F2;
			width: 750upx;
			overflow-x: hidden;
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
	
		.charts {
			width: 750upx;
			height: 500upx;
			background-color: #FFFFFF;
		}
	
		/* 横屏样式 */
		.qiun-charts-rotate {
			width: 700upx;
			height: 1100upx;
			background-color: #FFFFFF;
			padding: 25upx;
		}
	
		.charts-rotate {
			width: 700upx;
			height: 1100upx;
			background-color: #FFFFFF;
		}
	
		/* 圆弧进度样式 */
		.qiun-charts3 {
			width: 750upx;
			height: 250upx;
			background-color: #FFFFFF;
			position: relative;
		}
	
		.charts3 {
			position: absolute;
			width: 250upx;
			height: 250upx;
			background-color: #FFFFFF;
		}
	
		.qiun-tip {
			display: block;
			width: auto;
			overflow: hidden;
			padding: 15upx;
			height: 30upx;
			line-height: 30upx;
			margin: 10upx;
			background: #ff9933;
			font-size: 30upx;
			border-radius: 8upx;
			justify-content: center;
			text-align: center;
			border: 1px solid #dc7004;
			color: #FFFFFF;
		}
</style>
