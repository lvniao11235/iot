<template>
	<view class="service-detail">
		<view class="head">订阅服务特享</view> 
		<view class="icon-list-item border" style="border-top:1px solid #B1B1B1;">
			<label class="label">订单标号</label>
			<view class="value">
				<label>1424567890</label>
			</view>
		</view>
		<view class="icon-list-item border">
			<label class="label">交易时间</label>
			<view class="value">
				<label>{{$moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}}</label>
			</view>
		</view>
		<view class="icon-list-item border">
			<label class="label">服务类型</label>
			<view class="value">
				<label>{{currentService.type}}</label>
			</view>
		</view>
		<view class="icon-list-item border">
			<label class="label">有效期</label>
			<view class="value">
				<label>{{$moment(new Date()).format("YYYY-MM-DD") + '~' + $moment(new Date()).add(365, 'days').format("YYYY-MM-DD")}}</label>
			</view>
		</view>
		<view class="icon-list-item border">
			<label class="label">订单状态</label>
			<view class="value">
				<label>{{currentService.state ? currentService.state : '未付款'}}</label>
			</view>
		</view>
		<view class="icon-list-item border">
			<label class="label">实付金额</label>
			<view class="value">
				<label>￥{{currentService.price}}.00</label>
			</view>
		</view>
		<view class="info">
			<view class="head">订阅服务特享</view> 
			<view class="service">1.订阅服务器，一年内最多<span>免费</span>更换一次滤芯。厂家会根据当前设备的滤芯使用情况，在滤芯使用完之前联系用户</view>
			<view class="service">2.同品牌产品<span>98折</span>优惠特享</view>
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
			...mapState(["currentService"])
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
	
	.service-detail > .info{
		padding:10px;
	}
	.service-detail > .info .head,
	.service-detail > .head{
		border-left:3px solid #26B37A;
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
