<template>
	<view>
		<template v-for="addr in address">
			<view :key="addr.id" class="icon-list-item">
				<label class="icon"><image src="../../static/images/Dingyue.PNG"></image></label>
				<label class="label">{{addr.addr}}</label>
				<view class="btns">
					<label @click="modify(addr.id)">修改</label>
					<label @click="remove(addr.id)" style="color:red;">删除</label>
				</view>
			</view>
		</template>
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
			　　title:'管理家庭'
			})
		},
		methods:{
			modify(id){
				uni.navigateTo({
					url:'./modifyAddress' + '?id=' + id
				})
			},
			remove(id){
				this.$store.commit("removeAddress", id);
			}
		}
	}
</script>

<style>
</style>
