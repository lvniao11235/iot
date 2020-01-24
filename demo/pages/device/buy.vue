<template>
	<view>
		<navbar :back="true" title="服务订阅"></navbar>
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
				flag:false
			}
		},
		computed:{
			...mapState(["currentService", "currentUser", "selectDevice"])
		},
		onLoad(e){
			buyService({
				Creation:this.$moment().format("YYYY-MM-DD HH:mm:ss"),
				Status:' 未开始',
				Amount:this.currentService.CurrentCost,
				EndUserName:this.currentUser.Name,
				EndUserId:this.currentUser.OpenId,
				ShippingAddress:'锦业路',
				ServiceContent1:'订阅服务器，一年内最多免费更换一次滤芯',
				DeviceModelId:this.selectDevice.DeviceModelId,
				EstimatedServiceTime:this.$moment().add(30, "days").format("YYYY-MM-DD HH:mm:ss"),
				ServiceConfigId:this.currentService.Id
			}).then(res=>{
				console.log(res);
				this.flag = true;
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
						cost:this.currentService.CurrentCost,
						name:this.currentService.ServiceType
					},
					success:res=>{
						if(this.flag){
							uni.navigateTo({
								url:'./serviceDetail'
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
