<template>
	<view class="config-device">
		<view class="icon-list-item border">
			<label class="icon"><image src="/static/images/Dingyue.PNG"></image></label>
			<label class="label">设备名称</label>
			<view class="value">
				<label>{{selectDevice.name}}</label>
				<label class="value-icon fa fa-angle-right"></label>
			</view>
		</view>
		<view class="icon-list-item border">
			<label class="icon"><image src="/static/images/Dingyue.PNG"></image></label>
			<label class="label">设备共享</label>
			<view class="value">
				<label>{{selectDevice.share ? "已共享":"未共享"}}</label>
				<label class="value-icon fa fa-angle-right"></label>
			</view>
		</view>
		<view class="icon-list-item border">
			<label class="icon"></label>
			<label class="label">服务订阅</label>
			<view class="value" @click="goToSubscribe">
				<label>{{selectDevice.subscribe ? "已订阅":"去订阅"}}</label>
				<label class="value-icon fa fa-angle-right"></label>
			</view>
		</view>
		<view class="icon-list-item border">
			<label class="icon"></label>
			<label class="label">更换家庭</label>
			<view class="value">
				<label class="value-icon fa fa-angle-right"></label>
			</view>
		</view>
		<view class="btn">解除绑定</view>
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
			...mapState(["selectDevice"])
		},
		onLoad() {
			uni.setNavigationBarTitle({
			　　title:'设备设置'
			})
		},
		mounted(){
			
		},
		methods: {
			...mapMutations(["setSelectDevice"]),
			goToSubscribe(){
				uni.navigateTo({
					url:'./subscribe'
				})
			}
		},
	}
</script>

<style>
	.config-device .btn{
		width:60%;
		height:40px;
		line-height:40px;
		vertical-align:middle;
		text-align:center;
		color:#fff;
		background-color:rgba(255, 51, 0, 1);
		border-radius:5px;
		margin:50px auto;
	}
</style>
