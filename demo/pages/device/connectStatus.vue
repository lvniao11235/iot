<template>
	<view class="connect-status">
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
	export default {
		data:function(){
			return {
				connected:true
			}
		},
		methods:{
			next(){
				uni.request({
					url:'http://39.98.107.68:8000/Api/AirPurifierDetails',
					dataType:'json',
					method:'post',
					data:{
						CO2: 8.2,
						ChildLockSwitch: false,
						CurrentHumidity: 4,
						CurrentTemperature: 10.1,
						FilterLifeTimeDays_1: 17.1,
						FilterLifeTimeDays_2: 18.1,
						FilterLifeTimeDays_3: 19.1,
						FilterLifeTimeDays_4: 20.1,
						FilterLifeTimePercent_1: 21,
						FilterLifeTimePercent_2: 22,
						FilterLifeTimePercent_3: 23,
						FilterLifeTimePercent_4: 24,
						FilterStatus_1: 11,
						FilterStatus_2: 12,
						FilterStatus_3: 13,
						FilterStatus_4: 14,
						HCHO: 15.1,
						Humidified: false,
						Id: "C9Ayx5tBofxtroZlF" + (Math.random() * 100),
						IonsSwitch: false,
						LocalTimerOffId: 0,
						LocalTimerOnId: 0,
						PM25: 2,
						PM25Level: 3,
						PowerSwitch: false,
						Runtime_1: 25.1,
						Runtime_2: 26.1,
						Runtime_3: 27.1,
						Runtime_4: 28.1,
						TVOC: 30.1,
						WaterShortageStatus: false,
						WindSpeed: 5,
						WorkMode: false,
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
		margin-top:100px;
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
		background-color:rgba(22, 155, 213, 1);
		color:#fff;
		border-radius:5px;
		height:30px;
		line-height:30px;
		vertical-align:middle;
	}
</style>
