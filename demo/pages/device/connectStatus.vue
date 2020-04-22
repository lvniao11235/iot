<template>
	<view class="connect-status">
		<navbar :back="true" title="设备配网"></navbar>
		<view v-if="connected" style="text-align:center;" class="success-tip">
			<image style="height:64px;width:64px;display:block;margin:0 auto;margin-bottom:20px;" src="../../static/images/right.png"></image>
			恭喜您！配网成功，开始使用您的设备吧！
		</view>
		<view v-else class="fail-tip">
			<view>配网失败，请重新尝试</view>
			<view>· 请确认您连接的 Wi-Fi 是否为 2.4GHz 频段</view>
			<view>· 请把手机和设备放到靠近路由器的地方</view>
			<view>· 请确认密码是否正确</view>
		</view>
		<view class="bottom-group">
			<view class="max-btn" @click="next">确定</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex';
	import {addDevice, registerDevice} from '@/api/device';
	import {familyBindDevice} from '@/api/address';
	export default {
		data:function(){
			return {
				connected:true
			}
		},
		computed:{
			...mapState(["currentUser", "selectProduct", "currentAddress"])
		},
		methods:{
			next(){
				registerDevice(this.selectProduct.productKey).then(res=>{
					if(res){
						return familyBindDevice(res.data.data, this.currentAddress.id)
					}
				}).then(res=>{
					if(res.data.data){
						uni.switchTab({
							url:'./device'
						})
					} else {
						uni.showModal({
						    title: '提示',
						    content: res.data.msg,
						    success: function (res) {
						        if (res.confirm) {
						            uni.switchTab({
						            	url:'./device'
						            })
						        }
						    }
						});
					}
				})
				// uni.request({
				// 	url:'http://39.98.107.68:8000/Api/devices',
				// 	dataType:'json',
				// 	method:'post',
				// 	data:{
				// 		Id:this.$moment().format("YYYYMMDDHHmmss"),
				// 		NickName:this.selectProduct.Name,
				// 		OwnerId:this.currentUser.OpenId,
				// 		DeviceModelId:this.selectProduct.Id,
				// 		LastOnlineTime:this.$moment().format("YYYY-MM-DD HH:mm:ss"),
				// 		ActiveTime:this.$moment().format("YYYY-MM-DD HH:mm:ss"),
				// 	},
				// 	success:res=>{
				// 		uni.switchTab({
				// 			url:'./device'
				// 		})
				// 	}
				// })
				
			}
		}
	}
</script>

<style>
	
	
	
	
	.connect-status .fail-tip > view:first-child{
		text-align:center;
	}
	.connect-status .next{
		width:80%;
		margin:auto;
		text-align:center;
		position:absolute;
		bottom:80px;
		left:0;
		right:0;
		background-color:#10AB6C;
		color:#fff;
		border-radius:5px;
		height:30px;
		line-height:30px;
		vertical-align:middle;
	}
	
	.success-tip, .fail-tip{
		position:absolute;
		top:0;
		right:0;
		bottom:0;
		left:0;
		margin:auto;
		width:60%;
	}
	
	.success-tip{
		height:100px;
	}
	
	.fail-tip{
		height:120px;
		text-align:left;
	}
</style>
