<template>
	<view class="config-device">
		
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
			...mapState(["currentAddress", "devices"])
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
		},
	}
</script>

<style>
</style>
