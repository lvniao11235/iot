<template>
	<view>
		<template v-for="addr in address">
			<view :key="addr.id" class="icon-list-item">
				<label class="icon"><image src="../../static/images/Dingyue.PNG"></image></label>
				<label class="label">{{addr.addr}}</label>
			</view>
		</template>
		<view :key="addr.id" class="icon-list-item" @click="gotoManager">
			<label class="icon"><image src="../../static/images/Dingyue.PNG"></image></label>
			<label class="label">家庭管理</label>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		computed:{
			...mapState(["address"]) 
		},
		mounted(){
			uni.setNavigationBarTitle({
			　　title:'家庭列表'
			})
		},
		methods:{
			gotoManager(){
				uni.navigateTo({
					url:'./managerAddress'
				})
			}
		}
	}
</script>

<style>
</style>
