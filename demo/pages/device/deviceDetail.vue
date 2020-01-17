<template>
	<view class="device-detail">
		<navbar :back="true" :title="selectDevice.NickName"></navbar>
		<view class="title">
			<view class="title-left">
				<view>{{deviceStatus.PM25.Value}}μg/m³</view>
				<view>空气质量：{{quality[deviceStatus.PM25Level.Value]}}</view>
				<view><label>温度：{{deviceStatus.CurrentTemperature.Value}}°C</label><label>湿度：{{deviceStatus.CurrentHumidity.Value}}%</label></view>
				<view>
					<label style="position:relative;margin-left:0;">CO
					<label style="position:relative;font-size:8px;">2</label>：{{deviceStatus.CO2.Value}}</label>
					<label>甲醛浓度：{{deviceStatus.HCHO.Value}}%</label>
				</view>
			</view>
			<view class="title-right">
				<cover-image :src="selectDevice.DeviceModelImageUrl"></cover-image>
			</view>
		</view>
		<view class="parameter">
			<view>
				<view class="title">滤芯剩余</view>
				<view class="param1">
					<view @click="moveToLeft" class="fa fa-angle-left"></view>
					<view class=" hscroll" ref="hscroll">
						<view class="hscroll-container" :style="{width:(paramWidth * paramLength) + 'px', left:left+'px'}">
							<view class="param-item hscroll-item" :style="{width:paramWidth + 'px'}">
								<view>--</view>
								<view>活性炭</view>
							</view>
							<view class="param-item hscroll-item" :style="{width:paramWidth + 'px'}">
								<view>82%</view>
								<view>PM2.5</view>
							</view>
							<view class="param-item hscroll-item" :style="{width:paramWidth + 'px'}">
								<view>84%</view>
								<view>PM2.5</view>
							</view>
						</view>
					</view>
					<view @click="moveToRight" class="fa fa-angle-right"></view>
				</view>
			</view>
			<view>
				<view class="title">过滤颗粒物</view>
				<view class="params">
					<label>--</label>
				</view>
			</view>
		</view>
		<view class="ad">
			<label class="fa fa-exclamation-circle"></label>
			<label>当前滤芯是非原装，请及时更换！</label>
			<label @click="goToSubscribe">去订阅</label>
		</view>
		<view class="btns">
			<view class="btn auto" @click="switchWorkMode" 
				v-if="deviceStatus != null && deviceStatus.hasOwnProperty('WorkMode')"
				:class="{'selected':deviceStatus.WorkMode.Value == 1}">
				<view class="btn-name">自动模式</view>
				<view class="btn-icon">
					<cover-image 
						:src="!deviceStatus.WorkMode.Value == 1 ? '/static/images/whiteauto.png':'/static/images/auto.png'"></cover-image>
				</view>
				<view class="btn-state">{{deviceStatus.WorkMode.Value == 1 ? '已启用':'未启用'}}</view>
			</view>
			<view class="btn" @click="switchSpeed"
				v-if="deviceStatus != null && deviceStatus.hasOwnProperty('WindSpeed')">
				<view class="btn-name">风速</view>
				<view class="btn-icon">
					<cover-image src="/static/images/fan.png"></cover-image>
				</view>
				<view class="btn-state">{{deviceStatus.WindSpeed.Value}}档</view>
			</view>
			<view class="btn sleep" @click="switchSleep" 
				v-if="deviceStatus != null && deviceStatus.hasOwnProperty('SleepMode')"
				:class="{'selected':deviceStatus.SleepMode.Value}">
				<view class="btn-name">睡眠模式</view>
				<view class="btn-icon">
					<cover-image 
						:src="!deviceStatus.SleepMode.Value ? '/static/images/sleep.png':'/static/images/whitesleep.png'"></cover-image>
				</view>
				<view class="btn-state">{{deviceStatus.SleepMode.Value ? '已启用':'未启用'}}</view>
			</view>
			<view class="btn" @click="switchClock"
				v-if="deviceStatus.hasOwnProperty('clock')">
				<view class="btn-name">定时</view>
				<view class="btn-icon">
					<cover-image src="/static/images/clock.png"></cover-image>
				</view>
				<view class="btn-state">{{deviceStatus.clock ? '已启用':'未启用'}}</view>
			</view>
			<view class="btn sleep" @click="switchChildLock"
				v-if="deviceStatus.hasOwnProperty('ChildLockSwitch')"
				:class="{'selected':deviceStatus.ChildLockSwitch.Value}">
				<view class="btn-name">童锁</view>
				<view class="btn-icon">
					<cover-image 
						:src="!deviceStatus.ChildLockSwitch.Value ? '/static/images/sleep.png':'/static/images/whitesleep.png'"></cover-image>
				</view>
				<view class="btn-state">{{deviceStatus.ChildLockSwitch.Value ? '打开':'关闭'}}</view>
			</view>
			<view class="btn sleep" @click="switchHumidified"
				v-if="deviceStatus.hasOwnProperty('Humidified')"
				:class="{'selected':deviceStatus.Humidified.Value}">
				<view class="btn-name">加湿</view>
				<view class="btn-icon">
					<cover-image 
						:src="!deviceStatus.Humidified.Value ? '/static/images/sleep.png':'/static/images/whitesleep.png'"></cover-image>
				</view>
				<view class="btn-state">{{deviceStatus.Humidified.Value ? '打开':'关闭'}}</view>
			</view>
			<view class="btn sleep" @click="switchIonsSwitch"
				v-if="deviceStatus.hasOwnProperty('IonsSwitch')"
				:class="{'selected':deviceStatus.IonsSwitch.Value}">
				<view class="btn-name">离子团</view>
				<view class="btn-icon">
					<cover-image 
						:src="!deviceStatus.IonsSwitch.Value ? '/static/images/sleep.png':'/static/images/whitesleep.png'"></cover-image>
				</view>
				<view class="btn-state">{{deviceStatus.IonsSwitch.Value ? '打开':'关闭'}}</view>
			</view>
		</view>
		<view @click="shutdown" class="close-btn">
			<cover-image 
				:src="deviceStatus.PowerSwitch.Value ? '/static/images/start.png':'/static/images/shut-down.png'"></cover-image>
			</view>
	</view>
</template>

<script>
	import { mapState, mapMutations} from 'vuex';
	import {getDevice} from '@/api/device';
	export default {
		data() {
			return {
				quality:[
					"优","良","轻度污染","中度污染","重度污染","严重污染"
				],
				deviceStatus:{},
				paramWidth:40,
				left:0,
				paramLength:3,
				paramDispLength:2
			}
		},
		computed:{
			...mapState(["selectDevice"])
		},
		onLoad() {
			uni.createSelectorQuery().select('.hscroll').boundingClientRect(e=>{
                this.paramWidth = e.width/this.paramDispLength;
            }).exec()
			getDevice(this.selectDevice.Id).then(res=>{
				this.deviceStatus = res.data;
				this.deviceStatus.WindSpeed = 1;
				this.deviceStatus.clock = false;	
				this.$store.commit('setSelectDeviceProperty', {deviceStatus:this.deviceStatus})
			})
		},
		mounted(){
			
		},
		onUnload(){
			console.log("onUnload")
		},
		methods: {
			moveToLeft(){
				if(this.left <= -1*(this.paramLength-this.paramDispLength) * this.paramWidth){
					this.left = -1*(this.paramLength-this.paramDispLength) * this.paramWidth;
				} else {
					this.left -= this.paramWidth;
				}
				
			}, 
			moveToRight(){
				if(this.left < 0){
					this.left += this.paramWidth;
				}
				if(this.left == 0){
					this.left = 0;
				}
			},
			saveDevice(){
				uni.request({
					url:'http://39.98.107.68:8000/Api/AirPurifierDetails',
					dataType:'json',
					method:'PUT',
					data:this.selectDevice,
					success:res=>{
					}
				})
			},
			...mapMutations([
				"setSelectDeviceProperty", 
			]),
			switchWorkMode(){
				this.deviceStatus.WorkMode.Value = 
					this.deviceStatus.WorkMode.Value == 1 ? 0:1;
				this.$store.commit('setSelectDeviceProperty', {deviceStatus:this.deviceStatus})
			},
			switchSpeed(){
				let speed = this.deviceStatus.WindSpeed
				this.deviceStatus.WindSpeed = (speed+1) % 6;
				this.$store.commit('setSelectDeviceProperty', {deviceStatus:this.deviceStatus})
			},
			switchIonsSwitch(){
				this.deviceStatus.IonsSwitch.Value =
					!this.deviceStatus.IonsSwitch.Value;
				this.$store.commit('setSelectDeviceProperty', {deviceStatus:this.deviceStatus})
			},
			switchHumidified(){
				this.deviceStatus.Humidified.Value =
					!this.deviceStatus.Humidified.Value;
				this.$store.commit('setSelectDeviceProperty', {deviceStatus:this.deviceStatus})
			},
			switchChildLock(){
				this.deviceStatus.ChildLockSwitch.Value =
					!this.deviceStatus.ChildLockSwitch.Value;
				this.$store.commit('setSelectDeviceProperty', {deviceStatus:this.deviceStatus})
			},
			switchSleep(){
				this.deviceStatus.SleepMode.Value =
					!this.deviceStatus.SleepMode.Value;
				this.$store.commit('setSelectDeviceProperty', {deviceStatus:this.deviceStatus})
			},
			switchClock(){
				//this.$store.commit("setSelectDeviceClock", true)
				uni.navigateTo({
					url:'./setTimer'
				})
			},
			shutdown(){
				this.deviceStatus.PowerSwitch.Value =
					!this.deviceStatus.PowerSwitch.Value;
				this.$store.commit("setSelectDeviceProperty", {deviceStatus:this.deviceStatus})
			},
			goToSubscribe(){
				uni.navigateTo({
					url:'./subscribe'
				})
			}
		}
	}
</script>

<style>
	.device-detail > .title{
		font-size:0;
	}
	
	.device-detail > .title .title-left{
		width:calc(100% - 100px);
		height:130px;
		display:inline-block;
		
	}
	
	.device-detail > .title .title-left > view{
		height:30px;
		line-height:30px;
		vertical-align:middle;
		padding-left:16px;
		color:#555555;
		font-size:14px;
	}
	
	.device-detail > .title .title-left > view:first-child{
		color:black;
		font-size:20px;
		font-weight:bold;
		height:40px;
		line-height:40px;
	}
	
	.device-detail > .title .title-left > view > label:last-child{
		display:inline-block;
		margin-left:20px;
	}
	.device-detail > .title .title-right{
		width:100px;
		height:100px;
		position:relative;
		display:inline-block;
	}
	
	.device-detail > .title .title-right cover-image{
		width:50px;
		height:80px;
		position:absolute;
		top:0;
		right:0;
		bottom:0;
		left:0;
		margin:auto;
	}
	
	.device-detail .parameter{
		width:calc(100% - 20px);
		height:90px;
		margin:10px auto;
		box-shadow:0px 3px 5px #C0C0C0;
		font-size:0px;
		border-radius:5px;
	}
	
	.device-detail .parameter > view{
		display:inline-block;
		width:50%;
		box-sizing:border-box;
		font-size:14px !important;
		line-height:30px;
		vertical-align:middle;
	}
	
	.device-detail .parameter > view:first-child{
		float:left;
	}
	
	.device-detail .parameter > view:last-child{
		float:right;
	}
	
	.device-detail .parameter .title{
		text-align:center;
		font-weight:bold;
		color:#333333;
	}
	
	.device-detail .parameter .params{
		height:15px;
		padding:10px 0px;
		text-align:center;
		color:#b1b1b1;
	}
	
	.device-detail .parameter > view:first-child .params{
		border-right:1px solid #b1b1b1;
	}
	
	.device-detail .parameter > view:first-child .params > label{
		display:inline-block;
		box-sizing: border-box;
		width:33.33%;
		height:15px;
		line-height:15px;
		border-right:1px solid #b1b1b1;
		color:#b1b1b1;
		text-align:center;
	}
	
	.device-detail .parameter > view:first-child .params > label:last-child{
		border-right:none;
	}
	
	.device-detail .parameter > view:first-child .remarks > label{
		display:inline-block;
		box-sizing: border-box;
		width:33.33%;
		height:15px;
		line-height:15px;
		color:#b1b1b1;
		text-align:center;
		font-size:9px;
	}
	
	.device-detail .ad{
		font-size:14px;
		padding:5px 16px;
		clear:both;
	}
	
	.device-detail .ad>label:first-child{
		color:#DD524D;
	}
	
	.device-detail .ad>label:nth-child(2){
		color:rgba(22, 155, 213, 1);
	}
	.device-detail .ad>label:last-child{
		color:black;
		display:inline-block;
		margin-left:20px;
		
	}
	
	.device-detail .btns{
		font-size:0;
	}
	
	.device-detail .btns .btn{
		width:calc(50% - 20px);
		box-shadow:0 3px 5px #c0c0c0;
		display:inline-block;
		position:relative;
		font-size:14px;
		padding:5px;
		margin:5px;
		border-radius:5px;
	}
	
	.device-detail .btns .btn .btn-icon{
		width:20px;
		height:20px;
		position:absolute;
		top:5px;
		right:10px;
	}
	
	.device-detail .btns .btn .btn-state{
		margin-top:10px;
		margin-bottom:5px;
		color:#b1b1b1;
		font-size:12px;
	}
	
	.device-detail .btns .btn.auto.selected,
	.device-detail .btns .btn.sleep.selected{
		background-color:#26B37A;
		color:#fff;
	}
	
	.device-detail .btns .btn.auto.selected > .btn-state,
	.device-detail .btns .btn.sleep.selected > .btn-state{
		color:#fff;
	}
	
	
	.device-detail .close-btn{
		height:50px;
		width:50px;
		margin:30px auto;
		box-shadow: 0 0 10px #808080;
		border-radius:25px;
	}
	
	.param1 > view{
		display:inline-block;
		float:left;
	}
	
	.param1 > .hscroll{
		width:calc(100% - 40px) !important;
		overflow:hidden;
	}
	
	.param1 .hscroll-container{
		position:relative;
	}
	
	.param1 > view:first-child,
	.param1 > view:last-child{
		line-height:40px;
		vertical-align:bottom;
		width:20px;
		text-align:center;
	}
	
	.param1 > view:first-child{
		float:left;
	}
	
	.param1 > view:last-child{
		float:right;
	}
	.param-item{
		width:60px;
		text-align:center;
		line-height:20px;
		vertical-align:middle;
	}
</style>
