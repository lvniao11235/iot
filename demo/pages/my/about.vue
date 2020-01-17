<template>
	<view class="my-about">
		<navbar :back="true" title="关于"></navbar>
		<view class="icon-list-item">
			<label class="label">小程序版本号</label>
			<view class="value">
				<label>1.0.0</label>
			</view>
		</view>
		<view class="icon-list-item">
			<label class="label">基础库版本</label>
			<view class="value">
				<label>2.9.4</label>
			</view>
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
</style>
