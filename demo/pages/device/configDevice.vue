<template>
	<view class="config-device">
		<navbar :back="true" title="设置设备"></navbar>
		<view class="icon-list-item border">
			<label class="label">设备名称</label>
			<view class="value" @click="modifyDeviceName">
				<label>{{selectDevice.deviceComment}}</label>
				<label class="value-icon fa fa-angle-right" ></label>
			</view>
		</view>
		<view class="icon-list-item border">
			<label class="label">设备共享</label>
			<view class="value" @click="shareDevice">
				<label>{{selectDevice.share ? "已共享":"未共享"}}</label>
				<label class="value-icon fa fa-angle-right"></label>
			</view>
		</view>
		<view class="icon-list-item border">
			<label class="label">服务订阅</label>
			<view class="value" @click="goToSubscribe">
				<label>{{selectDevice.subscribe ? "已订阅":"去订阅"}}</label>
				<label class="value-icon fa fa-angle-right"></label>
			</view>
		</view>
		<view class="icon-list-item border">
			<label class="label">更换家庭</label>
			<view class="value">
				<label class="value-icon fa fa-angle-right"></label>
			</view>
		</view>
		<view class="dialog-container" v-if="showDialog">
			<view class="dialog-mask"></view>
			<view class="prompt-dialog">
				<view class="dialog-title">修改设备名称</view>
				<input class="dialog-input" v-model="newDeviceName"></input>
				<view class="btn-group">
					<view class="dialog-cancel" @click="modifyDeviceNameCancel">取消</view>
					<view class="dialog-ok" @click="modifyDeviceNameOk">确定</view>
				</view>
			</view>
		</view>
		<view class="bottom-group">
			<view class="max-btn" @click="removeDevice" style="">解除绑定</view>
		</view>
	</view>
	
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	import {getDevice, removeDevice, updateDeviceComment} from '@/api/device';
	import {unBindDevice} from '@/api/address';
	export default {
		data() {
			return {
				showDialog:false,
				newDeviceName:''
			}
		},
		computed:{
			...mapState(["selectDevice", "currentUser"])
		},
		onLoad(e) {
			uni.setNavigationBarTitle({
			　　title:'设备设置'
			});
			getDevice(e.id).then(res=>{
				console.log(res.data)
			})
		},
		mounted(){
			
		},
		methods: {
			...mapMutations(["setSelectDevice"]),
			shareDevice(){
				uni.navigateTo({
					url:'./shareDevice'
				})
			},
			modifyDeviceName(){
				this.showDialog = true;
				this.newDeviceName = this.selectDevice.deviceComment;
			},
			modifyDeviceNameCancel(){
				this.showDialog = false;
			},
			modifyDeviceNameOk(){
				this.showDialog = false;
				if(this.newDeviceName && this.newDeviceName.trim().length >= 0){
					this.selectDevice.deviceComment = this.newDeviceName
					updateDeviceComment(this.selectDevice.deviceComment, this.selectDevice.deviceId).then(res=>{
						if(res){
							
						}
					})
				} else {
					uni.showModal({
						title:'提示',
						content:'请输入新的设备名',
						showCancel:false
					})
				}
			},
			goToSubscribe(){
				uni.navigateTo({
					url:'./subscribe'
				})
			},
			removeDevice(){
				unBindDevice(this.selectDevice.deviceId).then(res=>{
					if(res.data.msg == "删除成功"){
						uni.switchTab({
							url:'./device'
						})
					} else {
						uni.showModal({
						    title: '提示',
						    content: '解除失败',
						    success: function (res) {
						        if (res.confirm) {
						            console.log('用户点击确定');
						        } else if (res.cancel) {
						            console.log('用户点击取消');
						        }
						    }
						});
					}
					
				})
			}
		},
	}
</script>

<style>
	.dialog-container .dialog-mask{
		width:100%;
		height:100%;
		position:fixed;
		background-color:#000000;
		opacity: 0.3;
		top:0;
		z-index:10000;
	}
	
	.dialog-container .prompt-dialog{
		width:80%;
		height:173px;
		position:absolute;
		top:0;
		right:0;
		bottom:0;
		left:0;
		margin:auto;
		border-radius:10px;
		background-color:#fff;
		opacity: 1 !important;
		z-index:10001;
	}
	
	.dialog-container .prompt-dialog .dialog-title{
		height:50px;
		width:100%;
		text-align:center;
		line-height:50px;
		vertical-align:middle;
		font-size:17px;
		font-weight:bold;
		color:#030303;
	}
	
	.dialog-container .prompt-dialog .dialog-input{
		width:calc(100% - 40px) !important;
		margin:20px auto;
		height:40px;
		line-height:40px;
		vertical-align:middle;
		border:1px solid #4d4d4d;
		box-sizing: content-box;
	}
	
	.dialog-container .prompt-dialog .btn-group{
		border-top:1px solid #4d4d4d;
	}
	.dialog-container .prompt-dialog .dialog-cancel,
	.dialog-container .prompt-dialog .dialog-ok{
		width:50%;
		display:inline-block;
		text-align:center;
		height:40px;
		line-height:40px;
		vertical-align:middle;
		box-sizing: border-box;
		font-size:17px;
	}
	
	.dialog-container .prompt-dialog .dialog-cancel{
		border-right:1px solid #4d4d4d;
		
	}
	
	.dialog-container .prompt-dialog .dialog-ok{
		color:#10AB6C;
	}
	.config-device .btn{
		width:60%;
		height:40px;
		line-height:40px;
		vertical-align:middle;
		text-align:center;
		color:#fff;
		background-color:rgba(255, 51, 0, 1);
		border-radius:5px;
		margin:50px auto;
	}
</style>
