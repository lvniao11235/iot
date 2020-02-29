<template>
	<view class="set-timer">
		<navbar :back="true" title="设置定时"></navbar>
		<view>
			<view class="title">
				定时开机
				<switch @change="switchTurnOn" :checked="selectDevice.turnOn"/>
				<label v-if="startTime" style="font-size:13px;float:right;color:#adadad;">
					<label style="display:inline-block;margin-right:3px">{{startTime.time}}</label>
					<label>每周 <label style="display:inline-block;margin-right:3px" v-for="day in startTime.weeks" :key="day.id">{{day.text}}</label></label>
				</label>
			</view>
		</view>
		<view>
			<view class="title">
				定时关机
				<switch @change="switchTurnOff" :checked="selectDevice.turnOff"/>
				<label v-if="shutdownTime" style="font-size:13px;float:right;color:#adadad;">
					<label style="display:inline-block;margin-right:3px">{{shutdownTime.time}}</label>
					<label>每周 <label style="display:inline-block;margin-right:3px" v-for="day in shutdownTime.weeks" :key="day.id">{{day.text}}</label></label>
				</label>
			</view>
			
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations} from 'vuex';
	export default {
		data() {
			return {
				turnofftime:null
			}
		},
		computed:{
			...mapState(["selectDevice", "startTime", "shutdownTime"])
		},
		onLoad() {
			uni.setNavigationBarTitle({
			　　title:'设置定时'
			})
		},
		methods:{
			...mapMutations([
				"setSelectDeviceTurnOn", 
				"setSelectDeviceTurnOff",
				"setSelectDeviceTurnOnTime"
			]),
			switchTurnOn(e){
				uni.navigateTo({
					url:'./settingTime?type=1'
				})
			},
			switchTurnOff(e){
				uni.navigateTo({
					url:'./settingTime?type=0'
				})
			},
			turnOnRepeat(){
				uni.navigateTo({
					url:'./repeat?type=1' 
				})
			},
			turnOffRepeat(){
				uni.navigateTo({
					url:'./repeat?type=0' 
				})
			},
			setTurnOnTime(e){
				this.$store.commit("setSelectDeviceTurnOnTime", e.detail.value)
			},
			setTurnOffTime(e){
				this.$store.commit("setSelectDeviceTurnOffTime", e.detail.value)
			}
		}
	}
</script>

<style>
	.set-timer > view{
		border-bottom:1px solid #f7f7f7;
		width:100%;
		height:50px;
		line-height:50px;
		vertical-align:middle;
	}
	
	.set-timer > view > .title{
		height:50px;
		line-height:50px;
		vertical-align:middle;
		padding:0px 10px;
	}
	
	.set-timer > view > .title switch{
		float:right;
	}
	
	
</style>
