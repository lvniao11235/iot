<template>
	<view class="my-message">
		<navbar :back="true" title="消息提醒"></navbar>
		<view class="help-item">
			<view class="help-item-title">购买订阅服务<label>今天 13:37:33</label></view>
			<view class="help-item-content">尊敬的用户，您已购买订阅服务！</view>
		</view>
		<view class="help-item">
			<view class="help-item-title">设备发起绑定通知<label>今天 13:37:33</label></view>
			<view class="help-item-content">您绑定的设备又发了绑定申请，请您确认是否为本人操作。如若不是，请尽快与客服联系！</view>
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
	.my-message .help-item{
		padding:16px;
	}
	
	.my-message .help-item-content{
		margin-top:5px;
		color:#8F8F8F;
	}
	
	.my-message .help-item-title{
		color:#000000;
		font-weight:bold;
	}
	.my-message .help-item-title label{
		float:right;
		color:#B1B1B1;
		font-weight: normal;
		font-size:14px;
	}
	
	
</style>
