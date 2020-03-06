<template>
	<view class="share-device-page">
		<navbar :back="true" title="设备共享"></navbar>
		<view class="icon-list-item border">
			<label class="label">共享人1</label>
			<view class="value">
				<label>186 3345 7890</label>
			</view>
		</view>
		<view class="max-btn" @click="addShareName" style="margin:50px auto;width:calc(100% - 32px);">添加共享人</view>
		<view class="dialog-container" v-if="showDialog">
			<view class="dialog-mask"></view>
			<view class="prompt-dialog">
				<view class="dialog-title">请输入手机号</view>
				<input class="dialog-input" v-model="newDeviceName"></input>
				<view class="btn-group">
					<view class="dialog-cancel" @click="addShareCancel">取消</view>
					<view class="dialog-ok" @click="addShareOk">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showDialog:false,
			}
		},
		methods:{
			addShareName(){
				this.showDialog = true;
			},
			addShareCancel(){
				this.showDialog = false;
			},
			addShareOk(){
				this.showDialog = false;
			}
		}
	}
</script>

<style>
</style>
