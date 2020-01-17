<template>
	<view class="my-help">
		<navbar :back="true" title="帮助中心"></navbar>
		<view class="help-item">
			<view class="help-item-title">1. 无法连接网络怎么办？</view>
			<view class="help-item-content">回答：请确认Wi-Fi频段是否是2.4GHZ，并检查看密码是否正确。</view>
		</view>
		<view class="help-item">
			<view class="help-item-title">2. 购买的订阅服务是自己申请更换配件吗？</view>
			<view class="help-item-content">回答：当滤芯即将到达使用寿命，我们会提前与您联系，安排发货。</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(){
		},
	}
</script>

<style>
	.help-item{
		padding:16px;
	}
	
	.help-item-content{
		margin-left:1em;
		margin-top:5px;
		color:#8F8F8F;
	}
	
	.help-item-title{
		color:#000000;
		font-weight:bold;
	}
	
</style>
