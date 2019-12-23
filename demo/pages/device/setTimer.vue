<template>
	<view class="set-timer">
		<view>
			<view class="title">定时开机<switch @change="switchTurnOn" :checked="selectDevice.turnOn"/></view>
			<view class="options" v-if="selectDevice.turnOn">
				<view class="repeat" @click="turnOnRepeat">重复
					<label class="repeat-value" v-if="selectDevice.turnOnRepeat">{{selectDevice.turnOnRepeat}}</label>
					<label class="fa fa-angle-right"></label>
				</view>
				<view class="timer">
					<picker mode="time" @change="setTurnOnTime" :value="selectDevice.turnOnTime">
						<view class="timer-disp">
							时间
							<label class="timer-value">{{selectDevice.turnOnTime}}</label>
							<label class="fa fa-angle-right"></label>
						</view>
					</picker>
				</view>
			</view>
		</view>
		<view>
			<view class="title">定时关机<switch @change="switchTurnOff" :checked="selectDevice.turnOff"/></view>
			<view class="options" v-if="selectDevice.turnOff">
				<view class="repeat" @click="turnOffRepeat">重复
					<label class="repeat-value"  v-if="selectDevice.turnOffRepeat">{{selectDevice.turnOffRepeat}}</label>
					<label class="fa fa-angle-right"></label>
				</view>
				<view class="timer">
					<picker mode="time" @change="setTurnOffTime" :value="selectDevice.turnOffTime">
						<view class="timer-disp">
							时间
							<label class="timer-value">{{selectDevice.turnOffTime}}</label>
							<label class="fa fa-angle-right"></label>
						</view>
					</picker>
				</view>
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
			...mapState(["selectDevice"])
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
				this.$store.commit("setSelectDeviceTurnOn", e.detail.value);
			},
			switchTurnOff(e){
				this.$store.commit("setSelectDeviceTurnOff", e.detail.value);
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
		border:1px solid #000000;
		border-radius:10px;
		width:calc(90% - 10px);
		margin:10px auto;
	}
	
	.set-timer > view > .title{
		height:50px;
		line-height:50px;
		vertical-align:middle;
		padding:10px;
	}
	
	.set-timer > view > .title switch{
		float:right;
		margin-right:20px;
	}
	
	.set-timer .options > view{
		height:40px;
		line-height:40px;
		vertical-align:middle;
		padding:10px;
		border-top:1px solid #000000;
	}
	
	.set-timer .options .fa{
		float:right;
		margin-right:20px;
		font-size:35px;
		color:#B1B1B1;
	}
	
	.set-timer .options .repeat-value{
		color:#C0C0C0;
		display:inline-block;
		margin-left:20px;
		font-size:12px;
	}
	
	.set-timer .options > .timer,
	.set-timer .options > .repeat{
		padding:0 10px;
		height:40px;
		line-height:40px;
		vertical-align:middle;
	}
	
	.set-timer .options .timer-disp{
		height:40px;
		line-height:40px;
		vertical-align:middle;
	}
	.set-timer .options > .timer > picker  .timer-value{
		color:#C0C0C0;
		display:inline-block;
		margin-left:20px;
		font-size:12px;
		
	}
</style>
