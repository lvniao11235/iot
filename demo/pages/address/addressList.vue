<template>
	<view class="address-list">
		<navbar :back="true" :url="currentTab" :isTabPage="currentTab && currentTab.length > 0"  title="家庭列表"></navbar>
		<template v-for="addr in address">
			<view @click="selectAddress(addr)" :key="addr.id" class="icon-list-item" :class="{'selected':currentAddress.id == addr.id}">
				<label class="icon"><image style="height:14px;width:14px;top:0;" src="../../static/images/building.png"></image></label>
				<label class="label">{{addr.familyName}}</label>
				<label v-if="currentAddress.id == addr.id" class="checked fa fa-check"></label>
			</view>
			<view class="line-separate" :key="addr.id"></view>
		</template>
		<view :key="addr.id" class="icon-list-item" @click="gotoManager" style="text-align:center;">
			<label class="icon"><image style="width:16px;height:16px;" src="../../static/images/bianji.png"></image></label>
			<label class="label">家庭管理</label>
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	import { setCurFamilyId } from '@/api/user'
	export default {
		computed:{
			...mapState(["address", "currentAddress", "currentUser", "currentTab"]) 
		},
		mounted(){
		},
		methods:{
			...mapMutations(["setcurrentAddress"]),
			gotoManager(){
				uni.navigateTo({
					url:'./managerAddress'
				})
			},
			selectAddress(addr){
				setCurFamilyId(addr.id, this.currentUser.OpenId).then(res=>{
					if(res){
						
					}
				})
				this.$store.commit("setcurrentAddress", addr)
			}
		}
	}
</script>

<style>
	.address-list .icon-list-item .icon{
		height:16px !important;
		
		top:0;
		margin-right:5px;
	}
	.address-list .icon-list-item.selected .checked{
		color:#10AB6C;
		float:right;
		display:inline-block;
		height:40px;
		line-height:40px;
		vertical-align:middle;
	}
</style>
