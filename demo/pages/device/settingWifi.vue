<template>
	<view class="setting-wifi">
		<navbar :back="true" title="设备配网"></navbar>
		<view class="tip"><label class="fa fa-exclamation-circle" style="color:#26b37a;"></label>选择设备工作的Wi-Fi</view>
		<view style="margin-left:10px;">SSID</view>
		<picker @change="bindPickerChange" :value="index" :range="wifis" range-key="SSID">
			<view class="uni-input">{{wifis[index].SSID}}</view>
		</picker>
		<view style="margin-left:10px;">密码</view>
		<input password="true"></input>
		<view class="next" @click="next">下一步</view>
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
			bindPickerChange(e){
				this.index = parseInt(e.detail.value);
			},
			next(){
				uni.navigateTo({
					url:'./connectStatus'
				})
			}
		}
	}
</script>

<style>
	.setting-wifi .tip{
		margin:16px;
	}
	
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
	
	.setting-wifi picker,
	.setting-wifi input{
		border:1px solid #000000;
		width:calc(100% - 40px);
		height:30px;
		line-height:30px;
		vertical-align:middle;
		margin:auto;
		padding:0 10px;
	}
</style>
