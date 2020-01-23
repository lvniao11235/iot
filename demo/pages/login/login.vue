<template>
	<view>
		<navbar></navbar>
		<view class="title-image">健康生活</view>
		<view class="login-btns">
			<button open-type="getUserInfo" 
				@getuserinfo="onGetUserInfo" withCredentials="true" lang="zh_CN">
				微信授权登录
			</button>
			<view @click="phone_login">手机号登录</view>
		</view>
		<view>1.16</view>
		<view class="login-agree">登录即代表您同意《<label @click="goToClause">健康生活用户服务条款</label>》</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	import {getOpenId, getUser, registerUser} from '@/api/user';
	export default {
		computed:{
			...mapState(["code"])
		},
		mounted(){
			uni.setNavigationBarTitle({
			　　title:'健康生活'
			})
		},
		onLoad(){
			//this.login(true);
		},
		data:function(){
			return {
				currentUser:{}
			}
		},
		methods:{
			...mapMutations(["setCode", "setCurrentUser"]),
			phone_login(){
				uni.navigateTo({
					url:'./phoneLogin'
				})
				
			},
			onGetUserInfo(res){
				if(res.detail && res.detail.userInfo){
					this.$store.commit("setCurrentUser", res.detail.userInfo)
					this.currentUser = res.detail.userInfo;
					this.login();
					uni.showLoading({
						title: '登录中...'
					});
				}
			},
			login(flag){
				if(flag){
					uni.getUserInfo({
						provider:"weixin",
						success:res=>{
							this.currentUser = {
								...this.currentUser,
								...res.userInfo
							}
						}
					})
				}
				uni.login({
					provider:"weixin",
					success:res=>{
						this.currentUser.code = res.code;
						getOpenId(res.code).then(res=>{
							this.currentUser.OpenId = res.data.unionid;
							return getUser(res.data.unionid);
						}).then(res=>{
							if(res.data){
								this.currentUser = {
									...this.currentUser,
									...res.data
								};
								this.$store.commit('setCurrentUser', this.currentUser)
								uni.hideLoading()
								uni.switchTab({
									url:'../index/index'
								})
							} else {
								if(!flag){
									return registerUser({
										"OpenId":this.currentUser.OpenId,
										"Name":this.currentUser.nickName,
										"PSW":"123",
										"PhoneNumber":"123456"
									})
								}
							}
						}).then(res=>{
							this.currentUser = {
								...this.currentUser,
								...res.data
							};
							this.$store.commit('setCurrentUser', this.currentUser)
							uni.hideLoading()
							uni.switchTab({
								url:'../index/index'
							})
						}).catch(res=>{
							uni.hideLoading();
						})
					},
				});
			},
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
	
	.login-btns > view,
	.login-btns > button{
		height:45px;
		line-height:45px;
		box-sizing:border-box;
		font-size:13px;
		border-radius:22.5px;
		width:60%;
		margin:auto;
	}
	
	.login-btns > button:first-child{
		background-color:#26B37A;
		color:#fff;
	}
	
	.login-btns > view:last-child{
		background-color:#fff;
		margin-top:20px;
		color:#26B37A;
		border:1px solid #26B37A;
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
