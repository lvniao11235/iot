<template>
	<view class="setting-time-page">
		<navbar :back="true" :title="title"></navbar>
		<view class="time">{{value[0] < 10 ? '0'+value[0]:value[0]}}:{{value[1] < 10 ? '0'+value[1]:value[1]}}</view>
		<picker-view :indicator-style="indicatorStyle" :value="value" @change="bindChange">
			<picker-view-column>
				<view class="item" v-for="(item,index) in hours" :key="index">{{item}}</view>
			</picker-view-column>
			<picker-view-column>
				<view class="item" v-for="(item,index) in minutes" :key="index">{{item}}</view>
			</picker-view-column>
		</picker-view>
		<view class="wide-separate"></view>
		<view style="height:40px;line-height:40px;padding-left:16px;color:#323232;font-size:14px;font-weight:bold;">重复</view>
		<view class="line-separate"></view>
		<view class="weeks">
			<view class="week-item" :class="{'selected':week.selected}" 
				@click="selectDay(week)" v-for="week in weeks" :key="week.id">周{{week.text}}</view>
		</view>
		<view style="heigh:64px"></view>
		<view class="bottom-group">
			<view class="max-btn" @click="ok" style="background-color:#10AB6C;color:#fff;font-size:15px;">确定</view>
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	export default{
		data:function(){
			let date = new Date();
			let hours = [];
			for(let i=0; i<24; i++){
				hours.push(i);
			}
			let minutes = [];
			for(let i=0; i<59; i++){
				minutes.push(i);
			}
			return {
				title:'',
				type:0,
				hours:hours,
				minutes:minutes,
				value:[date.getHours(), date.getMinutes()],
				indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;`,
				weeks:[
					{text:'一', id:1, selected:false},
					{text:'二', id:2, selected:false},
					{text:'三', id:3, selected:false},
					{text:'四', id:4, selected:false},
					{text:'五', id:5, selected:false},
					{text:'六', id:6, selected:false},
					{text:'日', id:7, selected:false},
				]
			}
		},
		computed:{
			...mapState(["startTime", "shutdownTime"])
		},
		onLoad(e){
			this.type = e.type;
			this.title = e.type == 1 ? "定时开机":"定时关机"
		},
		mounted(){
			let time = null;
			if(this.type == 1){
				time = this.startTime;
			} else {
				time = this.shutdownTime;
			}
			for(let i=0; i<time.weeks.length; i++){
				this.weeks[time.weeks[i].id - 1].selected = true;
			}
			let times = time.time.split(":");
			this.value = [];
			this.value.push(parseInt(times[0]));
			this.value.push(parseInt(times[1]));
		},
		methods:{
			...mapMutations([
				"setStartTime", "setShutdownTime"
			]),
			bindChange(e){
				if(e){
					this.value = e.detail.value;
				}
			},
			selectDay(week){
				week.selected = !week.selected;
			},
			ok(){
				let time = {};
				time.time = `${this.value[0]}:${this.value[1]}`;
				time.weeks = [];
				for(let i=0; i<this.weeks.length; i++){
					if(this.weeks[i].selected){
						time.weeks.push(this.weeks[i]);
					}
				}
				if(this.type == 1){
					this.$store.commit("setStartTime", time);
				} else {
					this.$store.commit("setShutdownTime", time);
				}
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style>
	picker-view {
	        width: 100%;
	        height: 200px;
			margin-bottom:30px;
	    }
	.setting-time-page .item {
		line-height: 40px;
		height:40px;
		text-align: center;
	}
	
	.setting-time-page .time{
		height:60px;
		line-height:60px;
		vertical-align:middle;
		text-align:center;
		color:#323232;
		font-size:32px;
		
	}
	
	.setting-time-page .weeks{
		margin:10px 16px;
		width:calc(100% - 32px);
	}
	
	.setting-time-page .week-item{
		width:calc(20% - 12px);
		margin-right:12px;
		height:29px;
		background-color:#eef8f4;
		line-height:29px;
		vertical-align:middle;
		text-align:center;
		font-size:11px;
		color:#585858;
		margin-bottom:10px;
		display:inline-block;
	}
	.setting-time-page .week-item.selected{
		background-color:#10AB6C;
		color:#fff;
	}
	
	
</style>
