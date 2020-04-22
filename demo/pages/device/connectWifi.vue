<template>
	<view class="connect-wifi">
		<navbar :back="true" title="设备配网"></navbar>
		<view class="tip">
			<view class="fa fa-exclamation-circle"></view>
			<view>请将手机连接到名称为Airpurfier-xxx的Wi-Fi，连接成功后，返回小程序当中</view>
		</view>
		<view class="bottom-group">
			<view class="max-btn" @click="next">已设置wifi</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			next(){
				uni.navigateTo({
					url:'./settingWifi'
				})
			}
		}
	}
</script>

<style>
	page, .connect-wifi{
		
	}
	.connect-wifi .tip{
		position:absolute;
		top:0;
		right:0;
		bottom:0;
		left:0;
		margin:auto;
		height:200px;
		width:100%;
	}
	
	.connect-wifi .tip > view:first-child{
		font-size:60px;
		text-align:center;
		width: 100%;
		color:#10AB6C;
	}
	
	.connect-wifi .tip > view:last-child{
		width:80%;
		word-break: break-all;
		margin:20px auto;
	}
	
	
</style>
