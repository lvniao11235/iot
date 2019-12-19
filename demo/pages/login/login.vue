<template>
	<view>
		<view class="title-image"><image src="../../static/images/title.png"></image></view>
		<view class="login-btns">
			<view @click="wechat_login">微信授权登录</view>
			<view @click="phone_login">手机号登录</view>
		</view>
		<view class="login-agree">登录即代表您同意《<label @click="goToClause">健康生活用户服务条款</label>》</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	export default {
		computed:{
			...mapState(["code"])
		},
		mounted(){
			uni.setNavigationBarTitle({
			　　title:'健康生活'
			})
		},
		methods:{
			...mapMutations(["setCode"]),
			wechat_login(){
				let _this = this;
				uni.login({
					provider:"weixin",
					success:res=>{
						if(res.errMsg == "login:ok"){
							_this.$state.commit("setCode", res.code);
						}
					}
				})
			},
			getUserInfo(e){
				console.log(e)
			},
			phone_login(){
				uni.navigateTo({
					url:"./phoneLogin"
				})
			},
			goToClause(){
				uni.navigateTo({
					url:"./clause"
				})
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
		top:70px;
	}
	.title-image image{
		width:127px;
		height:31px;
	}
	
	.login-btns{
		position:absolute;
		top:0;
		right:0;
		bottom:0;
		left:0;
		margin:auto;
		height:110px;
		text-align:center;
	}
	
	.login-btns > view{
		height:45px;
		line-height:45px;
		box-sizing:border-box;
		font-size:13px;
		border-radius:22.5px;
		width:60%;
		margin:auto;
	}
	
	.login-btns > view:first-child{
		background-color:rgba(102, 204, 51, 1);
		color:#fff;
	}
	
	.login-btns > view:last-child{
		background-color:#fff;
		margin-top:20px;
		color:#4A90E2;
		border:1px solid rgba(74, 144, 226, 1);
	}
	
	.login-agree{
		width:100%;
		position:absolute;
		bottom:50px;
		text-align:center;
		font-size:12px;
	}
	
	.login-agree label{
		color:#1890FF;
	}
</style>
