<template>
	<view class="my-service">
		<navbar :back="true" title="订阅服务"></navbar>
		<view v-if="devices && devices.length > 0" >
			<view @click="goToServiceDetail" class="icon-list-item big-icon" v-for="device in devices" :key="device.Id">
				<label class="icon"><image src="/static/images/v2.png"></image></label>
				<label class="label">{{device.NickName}}</label>
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
	import {devices} from '@/api/device';
	import {mapState} from 'vuex';
	export default {
		data:function(){
			return {
				devices:[]
			}
		},
		computed:{
			...mapState(["currentUser"])
		},
		onLoad(){
			devices(this.currentUser.OpenId).then(res=>{
				if(res.data && res.data.length > 0){
					this.devices.push(...res.data);
				} else {
					this.devices = [];
				}
			})
		},
		methods:{
			goToServiceDetail(){
				uni.navigateTo({
					url:'../device/serviceDetail'
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
