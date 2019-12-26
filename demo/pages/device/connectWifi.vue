<template>
	<view class="connect-wifi">
		<view>
			<view class="fa fa-exclamation-circle"></view>
			<view>请将手机连接到名称为Airpurfier-xxx的Wi-Fi，连接成功后，返回小程序当中</view>
		</view>
		<view @click="next">已设置wifi</view>
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
		position:relative;
		height:100%;
		width:100%;
	}
	.connect-wifi > view:first-child{
		position:absolute;
		top:0;
		right:0;
		bottom:0;
		left:0;
		margin:auto;
		height:200px;
		width:100%;
	}
	
	.connect-wifi > view:first-child > view:first-child{
		font-size:60px;
		text-align:center;
		width: 100%;
		color:#26b37a;
	}
	
	.connect-wifi > view:first-child > view:last-child{
		width:80%;
		word-break: break-all;
		margin:20px auto;
	}
	
	.connect-wifi > view:last-child{
		position:absolute;
		bottom:50px;
		left:0;
		right:0;
		margin:auto;
		height:30px;
		width:200px;
		background-color:#26b37a;
		color:#fff;
		line-height:30px;
		vertical-align:middle;
		text-align:center;
	}
</style>
