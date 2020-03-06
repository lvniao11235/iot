<template>
	<view class="share-device-page">
		<navbar :back="true" title="设备共享"></navbar>
		<view class="icon-list-item border">
			<label class="label">共享管理</label>
			<view class="value" @click="goToShareManage">
				<label></label>
				<label class="value-icon fa fa-angle-right" ></label>
			</view>
		</view>
		<view class="icon-list-item border">
			<label class="label">设备权限</label>
			<view class="value">
				<label>只能查看</label>
				<label class="value-icon fa fa-angle-right"></label>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			goToShareManage(){
				uni.navigateTo({
					url:'./shareManage'
				})
			}
		}
	}
</script>

<style>
</style>
