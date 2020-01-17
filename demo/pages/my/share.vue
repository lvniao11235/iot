<template>
	<view class="my-share">
		<navbar :back="true" title="设备共享"></navbar>
		<view class="icon-list-item big-icon" v-for="device in devices" :key="device.Id">
			<label class="icon"><image src="/static/images/v2.png"></image></label>
			<label class="label">{{device.NickName}}<image src="/static/images/link.png"></image></label>
			<view class="value">
				<label></label>
				<label class="value-icon fa fa-angle-right"></label>
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
	}
</script>

<style>
	.my-share .icon-list-item .label> image{
		width:20px;
		height:23px;
		position:relative;
		top:6px;
		display:inline-block;
		margin-left:5px;
	}
	
	.my-share .icon-list-item{
		margin-bottom:20px;
	}
	
	
</style>
