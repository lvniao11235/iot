<template>
	<view class="device-detail">
		<navbar :back="true" :title="selectDevice.NickName"></navbar>
		<view class="title">
			<view class="title-left">
				<view class="pm25" v-if="deviceStatus.PM25">{{deviceStatus.PM25 + 'μg/m³'}}</view>
				<view >空气质量：优</view>
				<view>
					<label v-if="deviceStatus.CurrentTemperature">温度：{{deviceStatus.CurrentTemperature + '°C'}}</label>
					<label style="margin-left:20px;" v-if="deviceStatus.CurrentHumidity">湿度：{{deviceStatus.CurrentHumidity + '%'}}</label>
				</view>
				<view>
					<label v-if="deviceStatus.CO2" style="position:relative;margin-left:0;">CO
					<label style="position:relative;font-size:8px;">2</label>：{{deviceStatus.CO2 + 'ppm'}}</label>
				</view>
				<view>
					<label v-if="deviceStatus.HCHO">甲醛浓度：{{deviceStatus.HCHO + 'mg/m³'}}</label>
				</view>
			</view>
			<view class="title-right">
				<cover-image :src="selectDevice.imageUrl"></cover-image>
			</view>
		</view>
		
		<template v-for="row in deviceStatus.dispParametersRow">
			<view class="disParameters" :key="row">
				<view class="dispParameter">
					<view class="leftParameter"  :class="{'not-array':!deviceStatus[deviceStatus.dispParameters[row*2]].isArray}">
						<template v-if="deviceStatus[deviceStatus.dispParameters[row*2]].isArray">
							<view class="parameter-title">{{deviceStatus[deviceStatus.dispParameters[row*2]].title}}</view>
							<view class="parameter-value">
								<view @click="moveToLeft(deviceStatus[deviceStatus.dispParameters[row*2]], row*2)" class="fa fa-angle-left"></view>
								<view class=" short-hscroll1 hscroll" ref="hscroll">
									<view class="hscroll-container" :style="{width:(arguementWidth * (deviceStatus[deviceStatus.dispParameters[row*2]].length)) + 'px', left:left[deviceStatus.dispParameters[row*2]]+'px'}">
										<view class="param-item hscroll-item" :style="{width:arguementWidth + 'px'}"
											v-for="(filter, index) in deviceStatus[deviceStatus.dispParameters[row*2]].value" :key="filter">
											<view>{{filter ? filter:'0'}}{{deviceStatus[deviceStatus.dispParameters[row*2]].unit}}</view>
											<view>滤芯{{index+1}}</view>
										</view>
									</view>
								</view>
								<view @click="moveToRight(deviceStatus[deviceStatus.dispParameters[row*2]], row*2)" class="fa fa-angle-right"></view>
							</view>
						</template>
						<template v-else>
							<view class="parameter-title">{{deviceStatus[deviceStatus.dispParameters[row*2]].title}}</view>
							<view class="parameter-value">
								{{deviceStatus[deviceStatus.dispParameters[row*2]].value}}{{deviceStatus[deviceStatus.dispParameters[row*2]].unit}}
							</view>
						</template>
					</view>
					
					<view class="rightParameter" v-if="deviceStatus.dispParameters.length > (row*2+1)" :class="{'not-array':!deviceStatus[deviceStatus.dispParameters[row*2+1]].isArray}">
						<template v-if="deviceStatus[deviceStatus.dispParameters[row*2+1]].isArray">
							<view class="parameter-title">{{deviceStatus[deviceStatus.dispParameters[row*2+1]].title}}</view>
							<view class="parameter-value">
								<view @click="moveToLeft(deviceStatus[deviceStatus.dispParameters[row*2+1]], row*2+1)" class="fa fa-angle-left"></view>
								<view class=" short-hscroll1 hscroll" ref="hscroll">
									<view class="hscroll-container" :style="{width:(arguementWidth * (deviceStatus[deviceStatus.dispParameters[row*2+1]].length)) + 'px', left:left[deviceStatus.dispParameters[row*2+1]]+'px'}">
										<view class="param-item hscroll-item" :style="{width:arguementWidth + 'px'}"
											v-for="(filter, index) in deviceStatus[deviceStatus.dispParameters[row*2+1]].value" :key="filter">
											<view>{{filter ? filter:'0'}}{{deviceStatus[deviceStatus.dispParameters[row*2+1]].unit}}</view>
											<view>滤芯{{index+1}}</view>
										</view>
									</view>
								</view>
								<view @click="moveToRight(deviceStatus[deviceStatus.dispParameters[row*2+1]], row*2+1)" class="fa fa-angle-right"></view>
							</view>
						</template>
						<template v-else>
							<view class="parameter-title">{{deviceStatus[deviceStatus.dispParameters[row*2+1]].title}}</view>
							<view class="parameter-value">
								{{deviceStatus[deviceStatus.dispParameters[row*2+1]].value}}{{deviceStatus[deviceStatus.dispParameters[row*2+1]].unit}}
							</view>
						</template>
					</view>
				</view>
			</view>
		</template>
		<view class="ad">
			<label class="fa fa-exclamation-circle"></label>
			<label>当前滤芯是非原装，请及时更换！</label>
			<label @click="goToSubscribe">去订阅<label class="fa fa-angle-right"></label></label>
		</view>
		<view class="btns">
			<view class="btn auto" @click="switchWorkMode" 
				v-if="deviceStatus.WorkMode != null"
				:class="{'selected':deviceStatus.WorkMode}">
				<view class="btn-name">自动模式</view>
				<view class="btn-icon">
					<cover-image 
						:src="!deviceStatus.WorkMode ? '/static/images/zidong.png':'/static/images/nozidong.png'"></cover-image>
				</view>
				<view class="btn-state">{{deviceStatus.WorkMode ? '已启用':'未启用'}}</view>
			</view>
			<view class="btn" @click="switchSpeed"
				v-if="deviceStatus.WindSpeed != null">
				<view class="btn-name">风速</view>
				<view class="btn-icon">
					<cover-image src="/static/images/fan.png"></cover-image>
				</view>
				<view class="btn-state">{{deviceStatus.WindSpeed}}档</view>
			</view>
			<view class="btn sleep" @click="switchSleep" 
				v-if="deviceStatus.SleepMode != null"
				:class="{'selected':deviceStatus.SleepMode}">
				<view class="btn-name">睡眠模式</view> 
				<view class="btn-icon">
					<cover-image 
						:src="!deviceStatus.SleepMode ? '/static/images/sleep.png':'/static/images/whitesleep.png'"></cover-image>
				</view>
				<view class="btn-state">{{deviceStatus.SleepMode ? '已启用':'未启用'}}</view>
			</view>
			<view class="btn" @click="switchClock"
				v-if="deviceStatus.LocalTimer != null">
				<view class="btn-name">定时</view>
				<view class="btn-icon">
					<cover-image src="/static/images/clock.png"></cover-image>
				</view>
				<view class="btn-state">{{deviceStatus.LocalTimer ? '已启用':'未启用'}}</view>
			</view>
			<view class="btn sleep" @click="switchChildLock"
				v-if="deviceStatus.ChildLockSwitch != null"
				:class="{'selected':deviceStatus.ChildLockSwitch}">
				<view class="btn-name">童锁</view>
				<view class="btn-icon">
					<cover-image 
						:src="!deviceStatus.ChildLockSwitch ? '/static/images/child.png':'/static/images/whitechild.png'"></cover-image>
				</view>
				<view class="btn-state">{{deviceStatus.ChildLockSwitch ? '打开':'关闭'}}</view>
			</view>
			<view class="btn sleep" @click="switchHumidified"
				v-if="deviceStatus.Humidified != null"
				:class="{'selected':deviceStatus.Humidified}">
				<view class="btn-name">加湿</view>
				<view class="btn-icon">
					<cover-image 
						:src="!deviceStatus.Humidified ? '/static/images/water.png':'/static/images/whitewater.png'"></cover-image>
				</view>
				<view class="btn-state">{{deviceStatus.Humidified ? '打开':'关闭'}}</view>
			</view>
			<view class="btn sleep" @click="switchIonsSwitch"
				v-if="deviceStatus.IonsSwitch != null"
				:class="{'selected':deviceStatus.IonsSwitch}">
				<view class="btn-name">离子团</view>
				<view class="btn-icon">
					<cover-image 
						:src="!deviceStatus.IonsSwitch ? '/static/images/ion.png':'/static/images/waterion.png'"></cover-image>
				</view>
				<view class="btn-state">{{deviceStatus.IonsSwitch ? '打开':'关闭'}}</view>
			</view>
		</view>
		<view @click="shutdown" class="close-btn">
			<cover-image 
				:src="deviceStatus.PowerSwitch ? '/static/images/start.png':'/static/images/shut-down.png'"></cover-image>
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
				LifeparamWidth:60,
				Runtimeleft:0,
				LifeTimeleft:0,
				paramLength:4,
				RuntimeparamLength:4,
				LifeTimeLength:4,
				paramDispLength:4,
				LifeTimeparamDispLength:4,
				width:0,
				parameterWidth:0,
				arguementWidth:0,
				left:{
					FilterLifeTimePercent:0,
					Runtime:0,
					LifeTime:0
				}
			}
		},
		computed:{
			...mapState(["selectDevice"])
		},
		mounted(){
			
		},
		onLoad() {
			
			getDevice(this.selectDevice.deviceName).then(res=>{
				this.deviceStatus = {};
				if(res.data.data && res.data.data.datas && res.data.data.datas.length > 0){
					for(let i=0; i<res.data.data.datas.length; i++){
						let data = res.data.data.datas[i];
						this.deviceStatus[data.identifier] = data.value;
					}
				}
				// this.deviceStatus.workMode = this.deviceStatus.workMode == "手动" ? false:true;
				// this.deviceStatus.sleepMode = this.deviceStatus.sleepMode == "开" ? true:false;
				// this.deviceStatus.timeEnable = this.deviceStatus.timeEnable == "未启用" ? false:true;
				// this.deviceStatus.windSpeed = this.deviceStatus.windSpeed != "null" ? parseInt(this.deviceStatus.windSpeed):0;
				// this.deviceStatus.powerSwitch = false;
				let FilterLifeTimePercent = {};
				FilterLifeTimePercent.isArray = true;
				FilterLifeTimePercent.name = "FilterLifeTimePercent";
				FilterLifeTimePercent.unit = '%';
				FilterLifeTimePercent.title = "滤芯剩余";
				FilterLifeTimePercent.left = 0;
				FilterLifeTimePercent.value = [];
				for(let prop in this.deviceStatus){
					if(prop.indexOf("FilterLifeTimePercent") > -1){
						FilterLifeTimePercent.value.push(this.deviceStatus[prop])
					}
				}
				FilterLifeTimePercent.length = FilterLifeTimePercent.value.length;
				if(FilterLifeTimePercent.value.length > 0){
					this.deviceStatus.FilterLifeTimePercent = FilterLifeTimePercent;
				}
				
				let Runtime = {};
				Runtime.name = "Runtime";
				Runtime.isArray = true;
				Runtime.unit = 'h';
				Runtime.title = "运行时间";
				Runtime.left = 0;
				Runtime.value = [];
				for(let prop in this.deviceStatus){
					if(prop.indexOf("Runtime") > -1){
						Runtime.value.push(this.deviceStatus[prop])
					}
				}
				Runtime.length = Runtime.value.length;
				if(Runtime.value.length > 0){
					this.deviceStatus.Runtime = Runtime;
				}
				
				let LifeTime = {};
				LifeTime.name = "LifeTime";
				LifeTime.unit = 'h';
				LifeTime.left = 0;
				LifeTime.title = "滤芯剩余时间";
				LifeTime.isArray = true;
				LifeTime.value = [];
				for(let prop in this.deviceStatus){
					if(prop.indexOf("FilterLifeTimeDays") > -1){
						LifeTime.value.push(this.deviceStatus[prop])
					}
				}
				LifeTime.length = LifeTime.value.length;
				if(LifeTime.value.length > 0){
					this.deviceStatus.LifeTime = LifeTime;
				}
				
				if(this.deviceStatus.hasOwnProperty("TVOC")){
					this.deviceStatus.dispTVOC = {
						value: parseFloat(this.deviceStatus.TVOC).toFixed(4),
						isArray:false,
						title:"TVOC_VOC浓度",
						unit:'mg/m³'
					};
				}
				
				if(this.deviceStatus.hasOwnProperty("WaterShortageStatus")){
					this.deviceStatus.dispWaterShortageStatus = {
						value: this.deviceStatus.WaterShortageStatus == "0" ? "缺水":"缺水",
						isArray:false,
						title:"加湿缺水状态",
						unit:''
					}
				}
				
				let dispParameters = [];
				if(this.deviceStatus.hasOwnProperty("FilterLifeTimePercent")){
					dispParameters.push("FilterLifeTimePercent")
				}
				if(this.deviceStatus.hasOwnProperty("dispTVOC")){
					dispParameters.push("dispTVOC")
				}
				if(this.deviceStatus.hasOwnProperty("Runtime")){
					dispParameters.push("Runtime")
				}
				if(this.deviceStatus.hasOwnProperty("dispWaterShortageStatus")){
					dispParameters.push("dispWaterShortageStatus")
				}
				if(this.deviceStatus.hasOwnProperty("LifeTime")){
					dispParameters.push("LifeTime")
				}
				if(dispParameters.length > 0){
					this.deviceStatus.dispParameters = dispParameters;
					this.deviceStatus.dispParametersRow = [];
					for(let j=0; j<this.deviceStatus.dispParameters.length/2; j++){
						this.deviceStatus.dispParametersRow.push(j)
					}
				}
				
				
				this.deviceStatus.HCHO = this.deviceStatus.hasOwnProperty("HCHO") ? parseFloat(this.deviceStatus.HCHO).toFixed(4):null;
				
				
				if(this.deviceStatus.hasOwnProperty("PowerSwitch")){
					this.deviceStatus.PowerSwitch = this.deviceStatus.PowerSwitch ? true:false;
				} else {
					this.deviceStatus.PowerSwitch = null;
				}
				
				if(this.deviceStatus.hasOwnProperty("WindSpeed")){
					this.deviceStatus.WindSpeed = this.deviceStatus.WindSpeed ? this.deviceStatus.WindSpeed:0;
				} else {
					this.deviceStatus.WindSpeed = null;
				}
				
				if(this.deviceStatus.hasOwnProperty("WorkMode")){
					this.deviceStatus.WorkMode = this.deviceStatus.WorkMode ? true:false;
				} else {
					this.deviceStatus.WorkMode = null;
				}
				
				if(this.deviceStatus.hasOwnProperty("IonsSwitch")){
					this.deviceStatus.IonsSwitch = this.deviceStatus.IonsSwitch ? true:false;
				} else {
					this.deviceStatus.IonsSwitch = null;
				}
				
				if(this.deviceStatus.hasOwnProperty("ChildLockSwitch")){
					this.deviceStatus.ChildLockSwitch = this.deviceStatus.ChildLockSwitch ? true:false;
				} else {
					this.deviceStatus.ChildLockSwitch = null;
				}
				
				if(this.deviceStatus.hasOwnProperty("LocalTimer")){
					this.deviceStatus.LocalTimer = this.deviceStatus.LocalTimer ? true:false;
				} else {
					this.deviceStatus.LocalTimer = null;
				}
				
				if(this.deviceStatus.hasOwnProperty("SleepMode")){
					this.deviceStatus.SleepMode = this.deviceStatus.SleepMode ? true:false;
				} else {
					this.deviceStatus.SleepMode = null;
				}
				
				if(this.deviceStatus.hasOwnProperty("Humidified")){
					this.deviceStatus.Humidified = this.deviceStatus.Humidified ? true:false;
				} else {
					this.deviceStatus.Humidified = null;
				}
				
				this.$store.commit('setSelectDeviceProperty', {deviceStatus:this.deviceStatus})
			})
		},
		mounted(){
			uni.createSelectorQuery().select('.device-detail').boundingClientRect(e=>{
			    this.parameterWidth = e.width/2 - 10;
				this.arguementWidth = (this.parameterWidth - 10 - 10)/2;
			}).exec()
		},
		onUnload(){
			console.log("onUnload")
		}, 
		methods: {
			moveToLeft(e, index){
				let left = this.left[e.name];
				if(left < 0){
					console.log(left)
					left = left + this.arguementWidth;
				}
				if(left == 0){
					left = 0;
				}
				this.left[e.name] = left
				
				
			}, 
			moveToRight(e, index){
				let left = this.left[e.name];
				if(left <= -1*(e.value.length-2) * this.arguementWidth){
					left = -1*(e.value.length-2) * this.arguementWidth;
				} else {
					left = left - this.arguementWidth;
				}
				this.left[e.name] = left
			},
			RuntimemoveToLeft(){
				if(this.Runtimeleft < 0){
					this.Runtimeleft += this.paramWidth;
				}
				if(this.Runtimeleft == 0){
					this.Runtimeleft = 0;
				}
				
				
			}, 
			RuntimemoveToRight(){
				if(this.Runtimeleft <= -1*(this.RuntimeparamLength-this.paramDispLength) * this.paramWidth){
					this.Runtimeleft = -1*(this.RuntimeparamLength-this.paramDispLength) * this.paramWidth;
				} else {
					this.Runtimeleft -= this.paramWidth;
				}
			},
			
			LifeTimemoveToLeft(){
				if(this.LifeTimeleft < 0){
					this.LifeTimeleft += this.LifeparamWidth;
				}
				if(this.LifeTimeleft == 0){
					this.LifeTimeleft = 0;
				}
				
				
			}, 
			LifeTimemoveToRight(){
				if(this.LifeTimeleft <= -1*(this.LifeTimeparamLength-this.LifeTimeparamDispLength) * this.LifeparamWidth){
					this.LifeTimeleft = -1*(this.LifeTimeparamLength-this.LifeTimeparamDispLength) * this.LifeparamWidth;
				} else {
					this.LifeTimeleft -= this.LifeparamWidth;
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
				this.deviceStatus.WorkMode = 
					this.deviceStatus.WorkMode == true ? false:true;
				this.$store.commit('setSelectDeviceProperty', {deviceStatus:this.deviceStatus})
			},
			switchSpeed(){
				let speed = this.deviceStatus.WindSpeed
				this.deviceStatus.WindSpeed = (speed+1) % 6;
				this.$store.commit('setSelectDeviceProperty', {deviceStatus:this.deviceStatus})
			},
			switchIonsSwitch(){
				this.deviceStatus.IonsSwitch =
					!this.deviceStatus.IonsSwitch;
				this.$store.commit('setSelectDeviceProperty', {deviceStatus:this.deviceStatus})
			},
			switchHumidified(){
				this.deviceStatus.Humidified =
					!this.deviceStatus.Humidified;
				this.$store.commit('setSelectDeviceProperty', {deviceStatus:this.deviceStatus})
			},
			switchChildLock(){
				this.deviceStatus.ChildLockSwitch =
					!this.deviceStatus.ChildLockSwitch;
				this.$store.commit('setSelectDeviceProperty', {deviceStatus:this.deviceStatus})
			},
			switchSleep(){
				this.deviceStatus.SleepMode =
					!this.deviceStatus.SleepMode;
				this.$store.commit('setSelectDeviceProperty', {deviceStatus:this.deviceStatus})
			},
			switchClock(){
				//this.$store.commit("setSelectDeviceClock", true)
				this.deviceStatus.LocalTimer = true;
				this.$store.commit('setSelectDeviceProperty', {deviceStatus:this.deviceStatus})
				uni.navigateTo({
					url:'./setTimer'
				})
			},
			shutdown(){
				this.deviceStatus.PowerSwitch =
					!this.deviceStatus.PowerSwitch;
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
	.disParameters{
		width:calc(100% - 20px);
		height:90px;
		margin:10px auto;
		box-shadow:0px 3px 5px #C0C0C0;
		font-size:0px;
		border-radius:5px;
		color:#585858;
	}
	.leftParameter{
		float:left;
	}
	.rightParameter{
		float:right;
	}
	.leftParameter, .rightParameter{
		display:inline-block;
		width:50%;
		font-size:14px;
		padding-top:5px;
	}
	.leftParameter > .parameter-title,
	.rightParameter > .parameter-title{
		text-align:center;
	}
	.leftParameter > .parameter-value,
	.rightParameter > .parameter-value{
		height:60px;
		width:calc(100% - 10px);
		padding:0 5px;
		box-sizing: content;
		border-right:1px solid #C0C0C0;
	}
	.rightParameter > .parameter-value{
		border-right:none;
	}
	.rightParameter.not-array > .parameter-value,
	.leftParameter.not-array > .parameter-value{
		
		line-height:60px;
		vertical-align:middle;
		text-align:center;
	}
	
	.leftParameter > .parameter-value{
		border-right:1px solid #C0C0C0;
	}
	.leftParameter > .parameter-value > view,
	.rightParameter > .parameter-value > view{
		display:inline-block;
		float:left;
	}
	
	.leftParameter > .parameter-value > .hscroll,
	.rightParameter > .parameter-value > .hscroll{
		width:calc(100% - 10px) !important;
	}
	.leftParameter > .parameter-value > .fa,
	.rightParameter > .parameter-value > .fa{
		position:relative;
		top:25px;
	}
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
		color:#585858;
		font-size:15px;
	}
	
	.device-detail > .title .title-left > .pm25{
		color:#585858;
		font-size:30px;
		height:40px;
		line-height:40px;
	}
	
	.device-detail > .title .title-left > view > label:last-child{
		display:inline-block;
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
		color:#585858;
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
		font-size:14px;
	}
	
	.device-detail .parameter .params{
		height:15px;
		padding:10px 0px;
		text-align:center;
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
		font-size:15px;
		padding:5px 15px;
		clear:both;
	}
	
	.device-detail .ad>label:first-child{
		color:#EE4441;
	}
	
	.device-detail .ad>label:nth-child(2){
		color:#6E6E6E;
	}
	.device-detail .ad>label:last-child{
		color:#10AB6C;
		display:inline-block;
		float:right;
		
	}
	
	.device-detail .btns{
		font-size:0;
		width:calc(100% - 30px);
		margin:10px auto;
	}
	
	.device-detail .btns .btn{
		width:calc(50% - 17px);
		box-shadow:0 3px 5px #c0c0c0;
		display:inline-block;
		position:relative;
		box-sizing: content-box;
		font-size:14px;
		padding:5px;
		border-radius:5px;
		margin-bottom:15px;
	}
	
	.device-detail .btns > .btn:nth-child(even){
		margin-left:14px;
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
		background-color:#10AB6C;
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
