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
		<view class="box1">
			<mpvue-echarts ref="pieChart" :echarts="echarts" :onInit="onInit" />
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import * as echarts from 'echarts'
	import mpvueEcharts from 'mpvue-echarts'

	    function initChart(canvas, width, height) {
	        debugger
	        const chart = echarts.init(canvas, null, {
	            width: width,
	            height: height
	        })
	        canvas.setChart(chart)
	
	        var option = {
	        title: {
	            text: '某站点用户访问来源',
	            subtext: '纯属虚构',
	            x: 'center'
	        },
	        tooltip: {
	            trigger: 'item',
	            formatter: "{a} {b} : {c} ({d}%)"
	        },
	        legend: {
	            orient: 'vertical',
	            bottom: '10%',
	            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
	        },
	        series: [{
	            name: '访问来源',
	            type: 'pie',
	            radius: '55%',
	            center: ['50%', '40%'],
	            data: [{
	                    value: 335,
	                    name: '直接访问'
	                },
	                {
	                    value: 310,
	                    name: '邮件营销'
	                },
	                {
	                    value: 234,
	                    name: '联盟广告'
	                },
	                {
	                    value: 135,
	                    name: '视频广告'
	                },
	                {
	                    value: 1548,
	                    name: '搜索引擎'
	                }
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }]
	    };
	    
	    
	        chart.setOption(option)
	        return chart
	    }
	export default {
		components: {
			mpvueEcharts
		},
		data() {
			return {
				title: 'Hello',
				echarts,
				onInit: initChart
			}
		},
		computed: {
			...mapState(["currentAddress", "currentUser"])
		},
		onLoad() {
			// uni.login({
			// 	provider:"weixin",
			// 	success:res=>{
			// 		console.log(res)
			// 	}
			// })
			// uni.getUserInfo({
			// 	provider:"weixin",
			// 	success:res=>{
			// 		console.log(res)
			// 	}
			// })
		},
		mounted() {
			uni.setNavigationBarTitle({
				title: '首页'
			})
		},
		methods: {
			switchAddress() {
				uni.navigateTo({
					url: '../address/addressList'
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: left;
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
</style>
