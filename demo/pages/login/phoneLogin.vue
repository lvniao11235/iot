<template>
	<view>
		<navbar :back="true" title="手机号登录"></navbar>
		<view class="title-image">健康生活</view>
		<view class="page-center login-form" v-bind:style="{width:'90%', height:'100px'}">
			<view>
				<input class="phone" v-model="currentUser.phone" :class="phoneClass" @focus="phoneFocus" @blur="phoneBlur" placeholder="请输入手机号" focus="true"></input>
			</view>
			<view class="verify-code"  :class="codeClass" >
				<input @focus="codeFocus" @blur="codeBlur"  placeholder="请输入验证码"></input>
				<label>获取验证码</label>
			</view>
			<view @click="login">登录/注册</view>
		</view>
		<view class="login-agree">登录即代表您同意《<label>健康生活用户服务条款</label>》</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	export default{
		data:function(){
			return {
				phoneClass:'',
				codeClass:''
			}
		},
		computed:{
			...mapState(["currentUser"])
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
		color:#10AB6C;
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
	
	.verify-code{
		background-color:#EEF8F4;
		box-sizing: content-box;
		height:40px;
		font-size:16px;
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
		color:#10AB6C;
	}
	
	.login-form input{
		height:40px;
		line-height:40px;
		vertical-align:middle;
		box-sizing: content-box;
		background-color:#EEF8F4;
		padding:0px 5px;
	}
	
	.login-form .phone.focus,
	.verify-code.focus{
		border:1px solid #10AB6C;
		box-sizing: content-box;
	}
	
	.login-form > view{
		margin-bottom:10px;
	}
	.login-form > view:last-child{
		background-color:#10AB6C;
		height:40px;
		line-height:40px;
		vertical-align:middle;
		font-size:16px;
		color:#fff;
		text-align:center;
		border-radius:2px;
	}
	
	.login-agree{
		width:100%;
		position:absolute;
		bottom:50px;
		text-align:center;
		font-size:12px;
	}
	
	.login-agree label{
		color:#10AB6C;
	}
</style>
