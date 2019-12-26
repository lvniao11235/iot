<template>
	<view class="device">
		<view class="address-switch">
			<label @click="switchAddress">{{currentAddress.addr}}<label class="fa fa-angle-right"></label></label>
			<view @click="addDevice" class="add-device" v-if="devices && devices.length > 0">
				<label>添加设备</label><label class="fa fa-plus"></label>
			</view>
		</view>
		<view class="has-device" v-if="devices && devices.length > 0">
			<view class="mydevice">我的设备</view>
			<view class="devices">
				<view class="device-item" v-for="device in devices"
				 :key="device.id" @click="selectDevice(device)">
					<view>
						<label>{{device.name}}</label>
						<label @click.stop="configDevice(device)" v-if="!device.share" class="title-right fa fa-ellipsis-v"></label>
						<label v-else class="title-right">共享</label>
					</view>
					<view class="quality">空气质量：{{device.quality}}</view>
					<cover-image :src="device.img"></cover-image>
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
	export default {
		data() {
			return {
			}
		},
		computed:{
			...mapState(["currentAddress", "devices"])
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
			console.log("onShow")
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
			...mapMutations(["setSelectDevice"]),
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
					url:'./configDevice'
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
		border:1px solid rgba(74, 144, 226, 1);
		margin:20px auto;
		color:rgba(74, 144, 226, 1);
	}
	
	.device .address-switch .add-device{
		float:right;
		font-size:13px;
		line-height:20px;
		vertical-align:middle;
		margin-top:5px;
		margin-right:16px;
	}
	
	.device .address-switch .add-device .fa{
		height:20px;
		width:20px;
		text-align:center;
		background-color:rgba(22, 155, 213, 1);
		color:#fff;
		border-radius:10px;
		line-height:20px !important;
		vertical-align:middle !important;
	}
	
	.device .has-device .mydevice{
		border-left:2px solid rgba(22, 155, 213, 1);
		height:20px;
		line-height:20px;
		vertical-align:middle;
		margin-left:16px;
		padding-left:5px;
		font-size:14px;
		margin-top:10px;
		margin-bottom:10px;
	}
	
	.device .devices{
		font-size:0px;
	}
	
	.device .device-item{
		width:calc(50% - 20px);
		margin:5px;
		background-color:#fff;
		font-size:14px;
		display:inline-block;
		box-shadow:0 0 5px #8F8F8F;
		padding:5px;
		border-radius:5px;
	}
	
	.device .device-item .title-right{
		float:right;
		margin-right:10px;
		color:#C0C0C0;
		font-size:12px;
	}
	
	.device .device-item .title-right.fa{
		color:rgba(22, 155, 213, 1);
		width:30px;
		text-align:center;
		margin-right:0px;
	}
	
	.device .device-item cover-image{
		width:35px;
		height:70px
	}
	
	.device .device-item .quality{
		color:#c0c0c0;
		margin-top:5px;
		margin-bottom:10px;
		font-size:12px;
	}
	
</style>
