<template>
	<view class="subscribe-service">
		<radio-group @change="selectService">
			<view class="services hscroll">
				<view class="hscroll-container" style="width:430px;">
					<view class="service-item hscroll-item" v-for="service in services" :key="service.type">
						<view><radio :value="service.type"></radio></view>
						<view>{{service.type}}</view>
						<view>原价：￥{{service.oldprice}}.00</view>
						<view>现价：￥{{service.price}}.00</view>
					</view>
				</view>
			</view>
		</radio-group>
		<view class="info">
			<view class="head">订阅服务特享</view> 
			<view class="service">1.订阅服务器，一年内最多<span>免费</span>更换一次滤芯。厂家会根据当前设备的滤芯使用情况，在滤芯使用完之前联系用户</view>
			<view class="service">2.同品牌产品<span>98折</span>优惠特享</view>
		</view>
		<view class="page-bottom">
			<view class="info">需付金额：￥{{currentService ? currentService.price:0}}.00</view>
			<view class="btn" @click="goToServiceDetail">开通</view>
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	export default {
		data() {
			return {
				
				price:0
			}
		},
		computed:{
			...mapState(["services", "currentService"])
		},
		onLoad() {
			uni.setNavigationBarTitle({
			　　title:'服务订阅'
			})
		},
		mounted(){
			
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
		color:#26B37A;
		font-weight:bold;
	}
	
	.subscribe-service > .info{
		padding:10px;
	}
	.subscribe-service > .info .head{
		border-left:3px solid #26B37A;
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
