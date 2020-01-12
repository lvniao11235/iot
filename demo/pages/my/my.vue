<template>
	<view class="my-page">
		<view class="head">
			<cover-image :src="currentUser.avatarUrl"></cover-image>
			<label>{{currentUser.nickName}}</label>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		data() {
			return {
			}
		},
		computed:{
			...mapState(["currentUser"])
		},
		onLoad() {
			uni.setNavigationBarTitle({
			　　title:'我的'
			})
		},
		methods: {
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.text-area {
		display: flex;
		justify-content: center;
	}
	
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.my-page .head{
		height:60px;
		background-color:#fff;
		position:relative;
		
		
	}
	
	.my-page .head cover-image{
		display:inline-block;
		height:50px;
		width:50px;
		border-radius:25px;
		margin-top:5px;
		float:left;
		margin-left:10px;
	}
	
	.my-page .head label{
		display:inline-block;
		height:50px;
		width:50px;
		line-height:50px;
		vertical-align:middle;
		margin-left:10px;
		float:left;
		margin-top:5px;
	}
</style>
