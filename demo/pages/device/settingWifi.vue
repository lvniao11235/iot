<template>
	<view class="setting-wifi">
		<view class="tip">选择设备工作的Wi-Fi</view>
		<picker @change="bindPickerChange" :value="index" :range="wifis" range-key="SSID">
			<view class="uni-input">{{wifis[index].SSID}}</view>
		</picker>
		<view class="next">下一步</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				wifis:[],
				index: 0,
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
			　　title:'设备配网'
			});
			let _this = this;
			wx.startWifi({
				success:res=>{
					console.log(res);
					wx.getWifiList({
						success:res=>{
							console.log(res);
							wx.onGetWifiList(res=>{
								_this.wifis.push(...res.wifiList);
							})
						},
						fail:res=>{
							console.log(res);
						}
					})
				}
			})
			
		},
		methods: {
			
		}
	}
</script>

<style>
	
	
	.setting-wifi .next{
		width:80%;
		margin:auto;
		text-align:center;
		position:absolute;
		bottom:80px;
		left:0;
		right:0;
		background-color:rgba(22, 155, 213, 1);
		color:#fff;
		border-radius:5px;
		height:30px;
		line-height:30px;
		vertical-align:middle;
	}
</style>
