<template>
	<view class="content">
		<view class="address-switch" @click="switchAddress">
			{{currentAddress.addr}}<label class="fa fa-angle-right"></label>
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
			...mapState(["currentAddress"])
		},
		onLoad() {

		},
		mounted(){
			uni.setNavigationBarTitle({
			　　title:'首页'
			})
		},
		methods: {
			switchAddress(){
				uni.navigateTo({
					url:'../address/addressList'
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: left;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.address-switch{
		text-align:left;
		padding-left:16px;
		font-size:20px;
	}
	
	.address-switch label{
		display:inline-block;
		margin-left:5px;
	}
</style>
