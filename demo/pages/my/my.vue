<template>
	<view class="my-page">
		<navbar title="我的"></navbar>
		<view class="head">
			<cover-image :src="currentUser.avatarUrl"></cover-image>
			<label>{{currentUser.nickName}}</label>
			<label class="fa fa-angle-right"></label>
		</view>
		<view class="icon-list-item" @click="jumpTo(0)">
			<label class="icon"><image src="/static/images/Dingyue.PNG"></image></label>
			<label class="label">服务订阅</label>
			<view class="value">
				<label></label>
				<label class="value-icon fa fa-angle-right"></label>
			</view>
		</view>
		<view class="icon-list-item" @click="jumpTo(1)">
			<label class="icon"><image src="/static/images/link.PNG"></image></label>
			<label class="label">设备共享</label>
			<view class="value">
				<label></label>
				<label class="value-icon fa fa-angle-right"></label>
			</view>
		</view>
		<view class="icon-list-item" @click="jumpTo(2)">
			<label class="icon"><image src="/static/images/question.PNG"></image></label>
			<label class="label">帮助中心</label>
			<view class="value">
				<label></label>
				<label class="value-icon fa fa-angle-right"></label>
			</view>
		</view>
		<view class="icon-list-item" @click="jumpTo(3)">
			<label class="icon"><image src="/static/images/edit.png"></image></label>
			<label class="label">意见反馈</label>
			<view class="value">
				<label></label>
				<label class="value-icon fa fa-angle-right"></label>
			</view>
		</view>
		<view class="icon-list-item" @click="jumpTo(4)">
			<label class="icon"><image src="/static/images/bell.PNG"></image></label>
			<label class="label">消息提醒</label>
			<view class="value">
				<label></label>
				<label class="value-icon fa fa-angle-right"></label>
			</view>
		</view>
		<view class="icon-list-item" @click="jumpTo(5)">
			<label class="icon"><image src="/static/images/abouts.png"></image></label>
			<label class="label">关于</label>
			<view class="value">
				<label></label>
				<label class="value-icon fa fa-angle-right"></label>
			</view>
		</view>
		<view class="icon-list-item" @click="jumpTo(6)">
			<label class="icon"><image src="/static/images/config.png"></image></label>
			<label class="label">设置</label>
			<view class="value">
				<label></label>
				<label class="value-icon fa fa-angle-right"></label>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		data() {
			return {
				urls:[
					'./service',
					'./share',
					'./help',
					'./opinion',
					'./message',
					'./about',
					'./config'
				]
			}
		},
		computed:{
			...mapState(["currentUser"])
		},
		onLoad() {
			uni.setNavigationBarTitle({
			　　title:'我的'
			})
		},
		methods: {
			jumpTo(id){
				uni.navigateTo({
					url:this.urls[id]
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.text-area {
		display: flex;
		justify-content: center;
	}
	
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.my-page .head{
		height:60px;
		background-color:#fff;
		position:relative;
		
		
	}
	
	.my-page .head cover-image{
		display:inline-block;
		height:50px;
		width:50px;
		border-radius:25px;
		margin-top:5px;
		float:left;
		margin-left:10px;
	}
	
	.my-page .head label{
		display:inline-block;
		height:50px;
		width:50px;
		line-height:50px;
		vertical-align:middle;
		margin-left:10px;
		float:left;
		margin-top:5px;
	}
	
	.my-page .head .fa{
		float:right;
		width:30px;
		text-align:center;
		color:#B1B1B1;
	}
	
	.my-page .icon-list-item{
		padding:0px 3px 0px 5px;
	}
	
	.my-page .icon-list-item .value-icon{
		font-size:16px !important;
	}
	
	.my-page .icon-list-item > label{
		display:inline-block;
		margin-left:5px;
	}
</style>
