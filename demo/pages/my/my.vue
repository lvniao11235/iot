<template>
	<view class="my-page">
		
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
			...mapState(["appName"])
		},
		onLoad() {
	
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
</style>
