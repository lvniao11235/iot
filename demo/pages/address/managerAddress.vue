<template>
	<view class="manager-address">
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
		<view class="btn" @click="create">添加</view>
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
			},
			create(){
				uni.navigateTo({
					url:'./createAddress'
				})
			}
		}
	}
</script>

<style>
	.manager-address .btn{
		width:60%;
		position:absolute;
		bottom:60px;
		right:0;
		left:0;
		margin:auto;
		background-color:rgba(74, 144, 226, 1);
		height:35px;
		line-height:35px;
		vertical-align:middle;
		color:#fff;
		text-align:center;
		border-radius:5px;
	}
</style>
