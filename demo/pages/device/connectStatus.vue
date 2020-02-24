<template>
	<view class="connect-status">
		<navbar :back="true" title="设备配网"></navbar>
		<view v-if="connected" class="success-tip">恭喜您！配网成功，开始使用您的设备吧！</view>
		<view v-else class="fail-tip">
			<view>配网失败，请重新尝试</view>
			<view>· 请确认您连接的 Wi-Fi 是否为 2.4GHz 频段</view>
			<view>· 请把手机和设备放到靠近路由器的地方</view>
			<view>· 请确认密码是否正确</view>
		</view>
		<view class="next" @click="next">确定</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex';
	import {addDevice} from '@/api/device';
	export default {
		data:function(){
			return {
				connected:true
			}
		},
		computed:{
			...mapState(["currentUser", "selectProduct"])
		},
		methods:{
			next(){
				addDevice({
					deviceName: this.selectProduct.productKey,
					unionId: this.currentUser.OpenId
				}).then(res=>{
					if(res){
						
					}
				})
				uni.request({
					url:'http://39.98.107.68:8000/Api/devices',
					dataType:'json',
					method:'post',
					data:{
						Id:this.$moment().format("YYYYMMDDHHmmss"),
						NickName:this.selectProduct.Name,
						OwnerId:this.currentUser.OpenId,
						DeviceModelId:this.selectProduct.Id,
						LastOnlineTime:this.$moment().format("YYYY-MM-DD HH:mm:ss"),
						ActiveTime:this.$moment().format("YYYY-MM-DD HH:mm:ss"),
					},
					success:res=>{
						uni.switchTab({
							url:'./device'
						})
					}
				})
				
			}
		}
	}
</script>

<style>
	
	.connect-status .success-tip,
	.connect-status .fail-tip{
		margin:auto;
		position:relative;
		top:100px;
		padding:20px;
		line-height:30px;
		vertical-align:middle;
	}
	
	.connect-status .success-tip{
		width:50%;
		height:60px;
		text-align:left;
	}
	
	.connect-status .fail-tip{
		width:90%;
		height:120px;
		text-align:left;
		font-size:12px;
	}
	
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
</style>
