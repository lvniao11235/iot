<template>
	<view>
		<navbar :back="true" title="手机号登录"></navbar>
		<view class="title-image">健康生活</view>
		<view class="page-center login-form" v-bind:style="{width:'90%', height:'100px'}">
			<view>
				<input :class="phoneClass" @focus="phoneFocus" @blur="phoneBlur" placeholder="请输入手机号" focus="true"></input>
			</view>
			<view class="verify-code">
				<input :class="codeClass" @focus="codeFocus" @blur="codeBlur"  placeholder="请输入验证码"></input>
				<label>获取验证码</label>
			</view>
			<view @click="login">登录/注册</view>
		</view>
		<view class="login-agree">登录即代表您同意《<label>健康生活用户服务条款</label>》</view>
	</view>
</template>

<script>
	export default{
		data:function(){
			return {
				phoneClass:'',
				codeClass:''
			}
		},
		mounted(){
			uni.setNavigationBarTitle({
			　　title:'手机登录'
			})
		},
		methods:{
			phoneFocus(e){
				this.phoneClass="focus"
			},
			phoneBlur(e){
				this.phoneClass=""
			},
			codeFocus(e){
				this.codeClass="focus"
			},
			codeBlur(e){
				this.codeClass=""
			},
			login(){
				uni.showToast({
					title:'请输入正确的手机号',
					duration:2000
				})
				// uni.switchTab({
				// 	url:"../index/index"
				// })
			}
		}
	}
</script>

<style>
	page{
		position:relative;
		height:100%;
		width:100%;
	}
	.title-image{
		text-align:center;
		position:relative;
		top:100px;
		color:#26B37A;
		font-size:30px;
		font-weight:bold;
	}
	.title-image image{
		width:127px;
		height:31px;
	}
	
	.page-center{
		position:absolute;
		top:0;
		right:0;
		bottom:0;
		left:0;
		margin:auto;
	}
	
	.verify-code input{
		width:calc(100% - 95px);
		display:inline-block;
	}
	
	.verify-code label{
		width:85px;
		display:inline-block;
		float:right;
		height:40px;
		line-height:40px;
		vertical-align:middle;
		color:#26B37A;
	}
	
	.login-form input{
		height:40px;
		line-height:40px;
		vertical-align:middle;
		box-sizing: border-box;
	}
	
	.login-form input.focus{
		border-bottom:1px solid #26B37A;
	}
	
	.login-form > view{
		margin-bottom:10px;
	}
	.login-form > view:last-child{
		background-color:#26B37A;
		height:35px;
		line-height:35px;
		vertical-align:middle;
		color:#fff;
		text-align:center;
		border-radius:5px;
	}
	
	.login-agree{
		width:100%;
		position:absolute;
		bottom:50px;
		text-align:center;
		font-size:12px;
	}
	
	.login-agree label{
		color:#26B37A;
	}
</style>
