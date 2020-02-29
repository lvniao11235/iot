<template>
	<view>
		<navbar :back="true" url="device" title="服务订阅"></navbar>
		<cover-image src="/static/images/timg.jpg"></cover-image>
		<!-- <view class="page-bottom">
			<view class="btn" :class="{'disable':!flag}" @click="goToServiceDetail">确定</view>
		</view> -->
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
				console.log(res);
				this.flag = true;
				this.orderId = res.data.data;
			}).catch(res=>{
				console.log(res);
			})
			
		},
		methods:{
			goToServiceDetail(){
				uni.request({
					url:'http://qingyun.kiwihealthcare123.com/mp/SendMessage',
					method:"POST",
					data:{
						unionid:this.currentUser.OpenId,
						cost:this.currentService.presentPrice,
						name:this.currentService.description
					},
					success:res=>{
						if(this.flag){
							uni.navigateTo({
								url:`./serviceDetail?orderId=${this.orderId}`
							})
						}
					}
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
