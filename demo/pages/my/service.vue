<template>
	<view class="my-service">
		<navbar :back="true" title="订阅服务"></navbar>
		<view v-if="services && services.length > 0" >
			<view @click="goToServiceDetail(service.orderId)" class="icon-list-item big-icon" v-for="service in services" :key="service.orderId">
				<label class="icon"><image :src="service.imageUrl"></image></label>
				<label class="label">{{service.productName}}</label>
				<view class="value">
					<label></label>
					<label class="value-icon fa fa-angle-right"></label>
				</view>
			</view>
		</view>
		<view v-else>
			<view class="no-service">
				<view>您暂未购买任何订阅服务!</view>
				<view class="btn">去购买</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {devices, getOrders} from '@/api/device';
	import {mapState} from 'vuex';
	export default {
		data:function(){
			return {
				services:[]
			}
		},
		computed:{
			...mapState(["currentUser"])
		},
		onLoad(){
			getOrders(this.currentUser.OpenId).then(res=>{
				if(res.data.data && res.data.data.length > 0){
					this.services.push(...res.data.data);
				} else {
					this.services = [];
				}
			})
		},
		methods:{
			goToServiceDetail(orderId){
				uni.navigateTo({
					url:`../device/serviceDetail?orderId=${orderId}&type=1`
				})
			}
		}
	}
</script>

<style>
	.no-service{
		position:absolute;
		top:0;
		right:0;
		bottom:0;
		left:0;
		margin:auto;
		text-align:center;
		width:80%;
		height:82px;
	}
	
	.no-service > view:first-child{
		margin-bottom:20px;
	}
	.no-service .btn{
		width:150px;
		height:40px;
		line-height:40px;
		vertical-align: middle;
		text-align:center;
		border:1px solid #10AB6C;
		color:#10AB6C;
		display:inline-block;
	}
	
	.my-service .icon-list-item{
		margin-bottom:20px;
	}
</style>
