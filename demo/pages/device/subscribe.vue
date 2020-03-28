<template>
	<view class="subscribe-service">
		<navbar :back="true" title="服务订阅"></navbar>
		<radio-group @change="selectService">
			<view class="services hscroll">
				<view class="hscroll-container" style="width:430px;">
					<view class="service-item hscroll-item" v-for="service in services" :key="service.serviceConfigId">
						<view><radio :value="service.serviceConfigId"></radio></view>
						<view>{{service.serviceDuration}}年期服务</view>
						<view>原价：￥{{service.originalPrice}}</view>
						<view>现价：￥{{service.presentPrice}}</view>
					</view>
				</view>
			</view>
		</radio-group>
		<view class="info">
			<view class="head">服务描述</view>
			<view class="service" v-for="desc in descriptions" :key="desc">{{desc}}</view>
		</view>
		<view class="page-bottom">
			<view class="info">需付金额：￥{{currentService ? currentService.presentPrice:"0.00"}}</view>
			<view class="btn" @click="goToServiceDetail">开通</view>
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	import {services, getOrderDetailByDeviceId} from '@/api/device';
	export default {
		data() {
			return {
				services:[],
				price:0,
				descriptions:[],
			}
		},
		computed:{
			...mapState(["currentService", "selectDevice"]),
			
		},
		onLoad() {
			this.$store.commit("setCurrentService", null)
			uni.setNavigationBarTitle({
			　　title:'服务订阅'
			})
			getOrderDetailByDeviceId(this.selectDevice.deviceId).then(res=>{
				if(res.data && res.data.data && res.data.data.orderId){
					let orderid = res.data.data.orderId;
					uni.showModal({
						title:'提示',
						content:'已购买服务',
						showCancel:false,
						success:res=>{
							uni.navigateTo({
								url:`./serviceDetail?orderId=${orderid}`
							})
						}
					})
				} else {
					return services(this.selectDevice.productKey);
				}
			}).then(res=>{
				this.services = [];
				if(res.data.data && res.data.data.length > 0){
					this.services.push(...res.data.data)
					if(this.services[0].description && this.services[0].description.length > 0){
						this.descriptions = this.services[0].description.split("\n")
					}
					
					this.selectService = this.services[0]
				}
			}).catch(res=>{
				console.log(res)
			})
		},
		mounted(){
			
		},
		methods: {
			...mapMutations(["setSelectDevice", "setCurrentService"]),
			selectService(e){
				let service = this.services.find(x=>x.serviceConfigId == e.detail.value);
				
				if(service){
					if(service.description && service.description.length > 0){
						this.descriptions = service.description.split("\n")
					}
					this.$store.commit("setCurrentService", service)
				}
			},
			goToServiceDetail(){
				if(this.currentService){
					uni.navigateTo({
						url:`./buy`
					})
				}
				
			}
		},
	}
</script>

<style>
	
	.service-item{
		border:1px solid #B1B1B1;
		border-radius:5px;
		padding:5px;
		width:130px;
		margin-left:10px;
		display:inline-block;
		box-sizing: border-box;
	}
	
	.service-item > view:first-child{
		text-align:right;
	}
	
	.service-item > view:nth-child(2){
		text-align:center;
		line-height:50px;
		vertical-align:middle;
		font-size:16px;
		color:#333333;
		font-weight:bold;
	}
	
	.service-item > view:nth-child(3){
		text-align:center;
		line-height:18px;
		vertical-align:middle;
		font-size:12px;
		color:#CFCFCF;
		text-decoration: line-through;
	}
	
	.service-item > view:nth-child(4){
		text-align:center;
		line-height:20px;
		vertical-align:middle;
		font-size:14px;
		color:#10AB6C;
		font-weight:bold;
	}
	
	.subscribe-service > .info{
		padding:10px;
	}
	.subscribe-service > .info .head{
		border-left:3px solid #10AB6C;
		color:#333333;
		font-size:20px;
		font-weight:bold;
		padding-left:3px;
		margin:10px 0px;
	}
	
	.subscribe-service > .info .service{
		line-height:20px;
		font-size:14px;
		vertical-align: middle;
	}
	
	.subscribe-service > .info .service span{
		color:#DD524D;
	}
	
	
</style>
