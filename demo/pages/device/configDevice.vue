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
		<!-- <view class="icon-list-item border">
			<label class="label">设备共享</label>
			<view class="value" @click="shareDevice">
				<label>{{selectDevice.share ? "已共享":"未共享"}}</label>
				<label class="value-icon fa fa-angle-right"></label>
			</view>
		</view> -->
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
				uni.showModal({
				    content: '是否要解绑该设备',
				    success: res=> {
				        if (res.confirm) {
							unBindDevice(this.selectDevice.deviceId).then(res=>{
								if(res.data.msg == "删除成功"){
									uni.switchTab({
										url:'./device'
									})
								} else {
									uni.showModal({
									    title: '提示',
									    content: '解除失败',
									    success: res=> {
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
				    }
				});
				
			}
		},
	}
</script>

<style>
	
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
