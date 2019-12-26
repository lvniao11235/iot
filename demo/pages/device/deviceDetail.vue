<template>
	<view class="device-detail">
		<view class="title">
			<view class="title-left">
				<view>{{currentDevice.PM25}}μg/m³</view>
				<view>空气质量：{{quality[currentDevice.PM25Level-1]}}</view>
				<view><label>温度：{{currentDevice.CurrentTemperature}}°C</label><label>湿度：{{currentDevice.CurrentHumidity}}%</label></view>
				<view>
					<label style="position:relative;margin-left:0;">CO
					<label style="position:relative;font-size:8px;">2</label>：{{currentDevice.CO2}}</label>
					<label>甲醛浓度：{{currentDevice.HCHO}}%</label>
				</view>
			</view>
			<view class="title-right">
				<cover-image :src="selectDevice.img"></cover-image>
			</view>
		</view>
		<view class="parameter">
			<view>
				<view class="title">滤芯剩余</view>
				<view class="params">
					<label>{{currentDevice.FilterLifeTimePercent_1}}%</label>
					<label>{{currentDevice.FilterLifeTimePercent_2}}%</label>
					<label>{{currentDevice.FilterLifeTimePercent_3}}%</label>
				</view>
				<view class="remarks">
					<label>活性炭</label>
					<label>PM2.5</label>
					<label>花粉、烟雾</label>
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
			<label>去订阅</label>
		</view>
		<view class="btns">
			<view class="btn auto" @click="switchWorkMode" 
				:class="{'selected':currentDevice.WorkMode}">
				<view class="btn-name">自动模式</view>
				<view class="btn-icon">
					<cover-image 
						:src="!currentDevice.WorkMode ? '/static/images/auto.png':'/static/images/whiteauto.png'"></cover-image>
				</view>
				<view class="btn-state">{{currentDevice.auto ? '已启用':'未启用'}}</view>
			</view>
			<view class="btn" @click="switchSpeed">
				<view class="btn-name">风速</view>
				<view class="btn-icon">
					<cover-image src="/static/images/fan.png"></cover-image>
				</view>
				<view class="btn-state">{{currentDevice.WindSpeed}}档</view>
			</view>
			<view class="btn sleep" @click="switchSleep" 
				:class="{'selected':currentDevice.sleep}">
				<view class="btn-name">睡眠模式</view>
				<view class="btn-icon">
					<cover-image 
						:src="!currentDevice.sleep ? '/static/images/sleep.png':'/static/images/whitesleep.png'"></cover-image>
				</view>
				<view class="btn-state">{{currentDevice.sleep ? '已启用':'未启用'}}</view>
			</view>
			<view class="btn" @click="switchClock">
				<view class="btn-name">定时</view>
				<view class="btn-icon">
					<cover-image src="/static/images/clock.png"></cover-image>
				</view>
				<view class="btn-state">{{currentDevice.clock ? '已启用':'未启用'}}</view>
			</view>
			<view class="btn sleep" @click="switchChildLock"
				:class="{'selected':currentDevice.ChildLockSwitch}">
				<view class="btn-name">童锁</view>
				<view class="btn-icon">
					<cover-image 
						:src="!currentDevice.ChildLockSwitch ? '/static/images/sleep.png':'/static/images/whitesleep.png'"></cover-image>
				</view>
				<view class="btn-state">{{currentDevice.ChildLockSwitch ? '打开':'关闭'}}</view>
			</view>
			<view class="btn sleep" @click="switchHumidified"
				:class="{'selected':currentDevice.Humidified}">
				<view class="btn-name">加湿</view>
				<view class="btn-icon">
					<cover-image 
						:src="!currentDevice.Humidified ? '/static/images/sleep.png':'/static/images/whitesleep.png'"></cover-image>
				</view>
				<view class="btn-state">{{currentDevice.Humidified ? '打开':'关闭'}}</view>
			</view>
			<view class="btn sleep" @click="switchIonsSwitch"
				:class="{'selected':currentDevice.IonsSwitch}">
				<view class="btn-name">离子团</view>
				<view class="btn-icon">
					<cover-image 
						:src="!currentDevice.IonsSwitch ? '/static/images/sleep.png':'/static/images/whitesleep.png'"></cover-image>
				</view>
				<view class="btn-state">{{currentDevice.IonsSwitch ? '打开':'关闭'}}</view>
			</view>
		</view>
		<view @click="shutdown" class="close-btn">
			<cover-image 
				:src="currentDevice.PowerSwitch ? '/static/images/start.png':'/static/images/shut-down.png'"></cover-image>
			</view>
	</view>
</template>

<script>
	import { mapState, mapMutations} from 'vuex';
	export default {
		data() {
			return {
				currentDevice:null,
				quality:[
					"优","良","轻度污染","中度污染","重度污染","严重污染"
				]
			}
		},
		computed:{
			...mapState(["selectDevice"])
		},
		onLoad() {
			uni.setNavigationBarTitle({
			　　title:this.selectDevice.name
			})
			uni.request({
				url:'http://39.98.107.68:8000/Api/AirPurifierDetails',
				dataType:'json',
				success:res=>{
					if(res.data && res.data.length > 0){
						this.currentDevice = res.data[0]
					}
				}
			})
		},
		mounted(){
			
		},
		onUnload(){
			console.log("onUnload")
		},
		methods: {
			saveDevice(){
				uni.request({
					url:'http://39.98.107.68:8000/Api/AirPurifierDetails',
					dataType:'json',
					method:'PUT',
					data:this.currentDevice,
					success:res=>{
					}
				})
			},
			...mapMutations([
				"setSelectDeviceAuto", 
				"setSelectDeviceSleep", 
				"setSelectDeviceSpeed",
				"setSelectDeviceStart"
			]),
			switchWorkMode(){
				this.currentDevice.WorkMode = !this.currentDevice.WorkMode
				this.saveDevice();
				//this.$store.commit("setSelectDeviceAuto", !this.selectDevice.auto)
			},
			switchSpeed(){
				let speed = this.currentDevice.WindSpeed;
				this.currentDevice.WindSpeed = (speed+1) % 6;
				this.saveDevice();
				//this.$store.commit("setSelectDeviceSpeed", speed)
			},
			switchIonsSwitch(){
				this.currentDevice.IonsSwitch = !this.currentDevice.IonsSwitch
				this.saveDevice();
			},
			switchHumidified(){
				this.currentDevice.Humidified = !this.currentDevice.Humidified
			},
			switchChildLock(){
				this.currentDevice.ChildLockSwitch = !this.currentDevice.ChildLockSwitch
			},
			switchSleep(){
				this.$store.commit("setSelectDeviceSleep", !this.selectDevice.sleep)
			},
			switchClock(){
				this.$store.commit("setSelectDeviceClock", true)
				uni.navigateTo({
					url:'./setTimer'
				})
			},
			shutdown(){
				this.$store.commit("setSelectDeviceStart", !this.selectDevice.start)
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
		background-color:rgba(74, 144, 226, 1);
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
</style>
