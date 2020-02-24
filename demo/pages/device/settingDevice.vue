<template>
	<view class="setting-device">
		<navbar :back="true" title="设备配置"></navbar>
		<view class="tip">按照下图的提示，长按配置按钮 10s 以上，确认 LED 灯变成闪烁状态</view>
		<cover-image class="product" :src="selectProduct.imageUrl"></cover-image>
		<view class="confirm"><radio-group @change="change"><radio>已确认上述操作</radio></radio-group></view>
		<view class="next" :class="{'enable':confirm, 'disable':!confirm}"  @click="next">下一步</view>
	</view>
</template>

<script>
	import { mapState} from 'vuex';
	export default {
		data() {
			return {
				confirm:false
			}
		},
		computed:{
			...mapState(["selectProduct"])
		},
		onLoad() {
			uni.setNavigationBarTitle({
			　　title:'设备配置'
			})
		},
		methods: {
			change(){
				this.confirm = true;
			},
			next(){
				if(this.confirm){
					uni.navigateTo({
						url:'./connectWifi'
					})
				}
			}
		}
	}
</script>

<style>
	.setting-device .tip{
		width:80%;
		position:relative;
		top:30px;
		margin:auto;
		margin-bottom:30px;
		word-break:break-word;
		
	}
	
	.setting-device .product{
		width:100px;
		margin:20px auto;
		display:block;
	}
	
	.setting-device .confirm{
		display:block;
		width:80%;
		margin:auto;
		text-align:center;
		position:absolute;
		bottom:100px;
		left:0;
		right:0;
		
	}
	
	.setting-device .next{
		width:80%;
		margin:auto;
		text-align:center;
		position:absolute;
		bottom:40px;
		left:0;
		right:0;
		
		color:#fff;
		border-radius:5px;
		height:30px;
		line-height:30px;
		vertical-align:middle;
	}
	
	.setting-device .next.enable{
		background-color:#10AB6C;
	}
	
	.setting-device .next.disable{
		background-color:#8F8F8F;
	}
</style>
