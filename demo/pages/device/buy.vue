<template>
	<view>
		<navbar :back="false" url="device" title="服务订阅"></navbar>
		<cover-image src="/static/images/timg.jpg"></cover-image>
		<view class="page-bottom">
			<view class="btn" :class="{'disable':!flag}" @click="goToServiceDetail">确定</view>
		</view>
	</view>
</template>

<script>
	import { mapState} from 'vuex'; 
	import {buyService} from '@/api/device';
	export default {
		data:function(){
			return { 
				flag:false,
				orderId:null
			}
		},
		computed:{
			...mapState(["currentService", "currentUser", "selectDevice"])
		},
		onLoad(e){
			buyService({
				price:this.currentService.presentPrice,
				serviceConfigId:this.currentService.serviceConfigId,
				unionId:this.currentUser.OpenId,
				deviceName:this.selectDevice.deviceName
			}).then(res=>{
				if(res.data.data){
					console.log(res);
					this.flag = true;
					this.orderId = res.data.data;
				} else {
					uni.showModal({
						title:'提示',
						content:res.data.msg,
						showCancel:false,
						success:res=>{
							uni.switchTab({
								url:'./device'
							})
						}
					})
				}
				
			}).catch(res=>{
				console.log(res);
			})
			
		},
		methods:{
			goToServiceDetail(){
				uni.navigateTo({
					url:`./serviceDetail?orderId=${this.orderId}`
				})
			}
		}
	}
</script>

<style>
	.page-bottom .btn.disable{
		background-color:#B1B1B1;
	}
</style>
