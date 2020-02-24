<template>
	<view class="device">
		<navbar :showAddress="true" title="智能设备"></navbar>
		<view class="has-device" v-if="devices && devices.length > 0">
			<view class="mydevice">我的设备</view>
			<view class="devices">
				<view class="device-item" v-for="device in devices"
				 :key="device.Id" @click="selectDevice(device)">
					<view>
						<label>{{shortName(device.NickName)}}</label>
						<label @click.stop="configDevice(device)" v-if="true" class="title-right">设置<label class="fa fa-angle-right"></label></label>
						<label v-else class="title-right">共享</label>
					</view>
					<view class="quality">空气质量：{{'优'}}</view>
					<cover-image :src="device.DeviceModelImageUrl"></cover-image>
				</view>
				<view class="add-device" @click="addDevice">
					<view class="hori"></view>
					<view class="vert"></view>
				</view>
			</view>
		</view>
		<view class="no-device" v-else>
			<image src="../../static/images/no-data.png"></image>
			<view style="color:#333333;">您还没有智能设备</view>
			<view>您还没有智能设备，请通过</view>
			<view>app添加设备，这样您可以尽快开始使用</view>
			<view @click="addDevice">立即添加</view>
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	import {devices} from '@/api/device';
	export default {
		data() {
			return {
				quality:[
					"优","良","轻度污染","中度污染","重度污染","严重污染"
				]
			}
		},
		computed:{
			...mapState(["currentAddress", "devices", "currentUser"])
		},
		onLoad() {
			console.log("onLoad")
			uni.setNavigationBarTitle({
			　　title:'智能硬件'
			})
			
		},
		onHide(){
			console.log("onHide")
		},
		onShow(){
			devices(this.currentUser.OpenId).then(res=>{
				if(res.data && res.data.length > 0){
					this.$store.commit("setDevices", res.data)
				} else {
					this.$store.commit("setDevices", [])
				}
			})
		},
		mounted(){
			console.log("mounted")
		},
		created(){
			console.log("created")
		},
		beforeCreate(){
			console.log("beforeCreate")
		},
		beforeMount(){
			console.log("beforeMount")
		},
		destroyed(){
			console.log("destroyed")
		},
		methods: {
			shortName(name){
				if(name && name.length > 4){
					return name.substr(0, 4) + "...";
				}
				return name;
			},
			...mapMutations(["setSelectDevice", "setDevices"]),
			switchAddress(){
				uni.navigateTo({
					url:'../address/addressList'
				})
			},
			addDevice(){
				uni.navigateTo({
					url:'./addDevice'
				})
			},
			selectDevice(device){
				this.$store.commit("setSelectDevice", device);
				uni.navigateTo({
					url:'./deviceDetail'
				})
			},
			configDevice(device){
				this.$store.commit("setSelectDevice", device);
				uni.navigateTo({
					url:`./configDevice?id=${device.Id}`
				})
			}
		}
	}
</script>

<style>
	page{
		background-color:#f2f2f2;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: left;
	}
	
	.text-area {
		display: flex;
		justify-content: center;
	}
	
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.no-device image{
		width:150px;
		height:150px;
		display:block;
		margin:auto;
		margin-top:50px;
		margin-bottom:20px;
	}
	
	.no-device > view:first-child{
		color:#333333 !important;
	}
	.no-device > view{
		text-align:center;
		font-size:12px;
		color:#8f8f8f;
		margin-bottom:5px;
	}
	
	.no-device > view:last-child{
		width:150px;
		height:30px;
		line-height:30px;
		vertical-align:middle;
		text-align:center;
		border:1px solid #10AB6C;
		margin:20px auto;
		color:#10AB6C;
	}
	
	.device .has-device .add-device{
		float:right;
		font-size:13px;
		line-height:20px;
		vertical-align:middle;
		margin-top:5px;
		margin-right:16px;
	}
	
	
	.device .has-device .mydevice{
		border-left:2px solid #10AB6C;
		height:20px;
		line-height:20px;
		vertical-align:middle;
		margin-left:16px;
		padding-left:5px;
		font-size:18px;
		margin-top:10px;
		margin-bottom:10px;
		color:#323232;
	}
	
	.device .devices{
		font-size:0px;
		padding:0 5px;
		width:calc(100% - 32px);
		margin:auto;
	}
	
	.device .device-item{
		width:calc(50% - 17px);
		box-sizing: content-box;
		background-color:#fff;
		font-size:14px;
		display:inline-block;
		box-shadow:0 0 5px #8F8F8F;
		border-radius:5px;
		padding:5px;
		margin-bottom:15px;
		
	}
	
	.device .devices > .device-item:nth-child(even){
		margin-left:14px;
	}
	
	.device .device-item > view:first-child > label:first-child{
		color:#585858;
		font-size:15px;
	}
	.device .device-item .title-right{
		float:right;
		margin-right:10px;
		color:#10AB6C;
		font-size:12px;
	}
	
	.device .device-item .title-right > .fa{
		color:#B1B1B1;
		display:inline-block;
		margin:3px;
		text-align:center;
		margin-right:0px;
	}
	
	.device .device-item cover-image{
		width:35px;
		height:70px
	}
	
	.device .device-item .quality{
		color:#9B9B9B;
		margin-top:5px;
		margin-bottom:10px;
		font-size:12px;
	}
	
	.devices .add-device{
		position:fixed;
		bottom:30px;
		right:10px;
		background-color:#10AB6C;
		height:50px;
		width:50px;
		border-radius:25px;
		line-height:50px;
		text-align:center;
		color:#fff;
		font-size:24px;
	}
	
	.devices .add-device > view{
		display:inline-block;
	}
	
	.devices .add-device .hori{
		border-top:1px solid #fff;
		width:24px;
		position:absolute;
		top:24px;
		left:13px;
	}
	
	.devices .add-device .vert{
		border-left:1px solid #fff;
		height:24px;
		position:absolute;
		top:13px;
		left:24px;
	}
	
	
	
	.devices .add-device .fa{
		height:50px;
		line-height:50px;
		vertical-align:middle;
		font-size:30px;
	}
</style>
