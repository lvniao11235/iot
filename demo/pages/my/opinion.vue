<template>
	<view class="my-opinion">
		<navbar :back="true" title="意见反馈"></navbar>
		<view>您宝贵的意见，是我们不断进步的动力</view>
		<textarea :class="{'focus':hasFocus}" @focus="focus" @blur="blur" focus></textarea>
		<view class="confirm-btn">提交</view>
	</view>
</template>

<script>
	export default {
		data:function(){
			return {
				hasFocus:false
			}
		},
		onLoad(){
		},
		methods:{
			focus(){
				this.hasFocus = true;
			}, 
			blur(){
				this.hasFocus = false;
			}
		}
	}
</script>

<style>
	.my-opinion{
		padding:0px 16px;
	}
	
	.my-opinion textarea{
		height:100px;
		width:100%;
		box-sizing: border-box;
		border:1px solid #B1B1B1;
		margin:10px 0px;
		padding:5px;
	}
	
	.my-opinion textarea.focus{
		border-color:#10AB6C;
		box-shadow: 0px 0px 5px #10AB6C;
	}
	
	.confirm-btn{
		background-color:#10AB6C;
		width:100%;
		color:#fff;
		text-align:center;
		height:40px;
		line-height:40px;
		vertical-align:middle;
	}
</style>
