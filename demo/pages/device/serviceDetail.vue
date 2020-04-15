<template>
	<view class="service-detail">
		<navbar :back="true" :url="back" :isTabPage='true' title="订阅服务"></navbar>
		<view class="head">订阅信息</view> 
		<view class="icon-list-item border" style="border-top:1px solid #B1B1B1;">
			<label class="label">订单编号</label>
			<view class="value">
				<label>{{currentService.orderId}}</label>
			</view>
		</view>
		<view class="icon-list-item border">
			<label class="label">交易时间</label>
			<view class="value">
				<label>{{$moment(currentService.createTime).format("YYYY-MM-DD HH:mm:ss")}}</label>
			</view>
		</view>
		<view class="icon-list-item border">
			<label class="label">服务期限</label>
			<view class="value"> 
				<label>{{currentService.serviceDuration}}年期服务</label>
			</view>
		</view>
		<view class="icon-list-item border">
			<label class="label">有效期</label>
			<view class="value">
				<label>{{$moment(currentService.createTime).format("YYYY-MM-DD") + '~' + $moment(currentService.endTime).format("YYYY-MM-DD")}}</label>
			</view>
		</view>
		<view class="icon-list-item border">
			<label class="label">订单状态</label>
			<view class="value">
				<label>{{currentService.orderStatus}}</label>
			</view>
		</view>
		<view class="icon-list-item border">
			<label class="label">实付金额</label>
			<view class="value">
				<label>￥{{currentService.price}}</label>
			</view>
		</view>
		<view class="info">
			<view class="head">订阅服务特享</view> 
			<view class="service" v-for="desc in descriptions" :key="desc">{{desc}}</view>
		</view>
		<!-- <view class="page-bottom">
			<view class="btn" @click="goToDevices">确定</view>
		</view> -->
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	import {getOrderDetail} from '@/api/device';
	export default {
		data() {
			return {
				type:0,
				price:0,   
				back:null,
				descriptions:[],
			}
		},
		computed:{
			...mapState(["currentService"])
		},
		onLoad(e) {
			this.type = e.type;
			uni.setNavigationBarTitle({
			　　title:'服务订阅'
			})
			getOrderDetail(e.orderId).then(res=>{
				if(res.data.data){
					this.$store.commit("setCurrentService", res.data.data)
				}
			})
			this.descriptions = this.currentService.description.split("\n")
		},
		mounted(){
			if(this.type == 1){
				this.back = null
			} else {
				this.back = './device'
			}
		},
		methods: {
			...mapMutations(["setSelectDevice", "setCurrentService"]),
			selectService(e){
				let service = this.services.find(x=>x.type == e.detail.value);
				if(service){
					this.$store.commit("setCurrentService", service)
				}
				
			},
			goToServiceDetail(){
				uni.navigateTo({
					url:'./serviceDetail'
				})
			},
			goToDevices(){
				// if(this.type == 1){
				// 	this.back = null
				// 	uni.navigateBack({
						
				// 	})
				// } else {
				// 	this.back = './device'
				// 	uni.switchTab({
				// 		url:
				// 	})
				// }
				
			}
		},
	}
</script>

<style>
	.hscroll{
		overflow:scroll;
		width:100%;
		padding:10px 0px;
	}
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
	
	.service-detail > .info{
		padding:10px;
	}
	.service-detail > .info .head,
	.service-detail > .head{
		border-left:3px solid #10AB6C;
		color:#333333;
		font-size:20px;
		font-weight:bold;
		padding-left:3px;
		margin:10px 0px;
	}
	
	.service-detail > .head{
		margin-left:10px;
		
	}
	
	.service-detail > .icon-list-item:first-child{
		border-top:1px solid #B1B1B1;
	}
	
	.service-detail > .info .service{
		line-height:20px;
		font-size:14px;
		vertical-align: middle;
	}
	
	.service-detail > .info .service span{
		color:#DD524D;
	}
	
	
</style>
