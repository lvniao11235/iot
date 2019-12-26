<template>
	<view>
		<view class="title-image"><image src="../../static/images/title.png"></image></view>
		<view class="login-btns">
			<button open-type="getUserInfo" 
				@getuserinfo="onGetUserInfo" lang="zh_CN">
				
				微信授权登录
			</button>
			<view @click="phone_login">手机号登录</view>
		</view>
		<view class="login-agree">登录即代表您同意《<label @click="goToClause">健康生活用户服务条款</label>》</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	import {uuid} from '../../utils/common.js'
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
			uni.$on('Wechat_login', this.login)
			uni.$on('Wechat_GetOpenId', this.getOpenId)
			uni.$on('Wechat_CheckUser', this.checkUser)
			uni.$on('Wechat_RegisterUser', this.registerUser)
		},
		data:function(){
			return {
				currentUser:null
			}
		},
		methods:{
			...mapMutations(["setCode", "setCurrentUser"]),
			onGetUserInfo(res){
				if(res.detail && res.detail.userInfo){
					this.$store.commit("setCurrentUser", res.detail.userInfo)
					this.currentUser = res.detail.userInfo;
					uni.$emit('Wechat_login')
				}
			},
			login(){
				uni.login({
					provider:"weixin",
					success:res=>{
						this.currentUser.code = res.code;
						uni.$emit('Wechat_GetOpenId')
					},
				});
			},
			getOpenId(){
				wx.request({
					url:'http://qingyun.kiwihealthcare123.com/getopenid.py?code=' + this.currentUser.code,
					method:'GET',
					success:res=>{
						if(res.statusCode == 200){
							let data = JSON.parse(res.data.replace(/\'/g, '\"'))
							uni.$emit('Wechat_CheckUser', {openid:data.openid})
						}
					},
					fail:res=>{
						console.log(res)
					},
				});
			},
			checkUser(openid){
				this.currentUser.OpenId = openid.openid;
				wx.request({
					url:'http://39.98.107.68:8000/api/endusers/'+this.currentUser.OpenId,
					method:"GET",
					dataType:'json',
					success:res=>{
						if(res.data && res.data !== ""){
							this.currentUser = res.data;
							this.$store.commit('setCurrentUser', this.currentUser)
							uni.switchTab({
								url:'../index/index'
							})
						} else {
							uni.$emit('Wechat_RegisterUser')
						}
					},
					fail:res=>{
						console.log(res)
					},
					complete:()=>{
						console.log("complete")
					}
				})
			},
			registerUser(){
				wx.request({
					url:'http://39.98.107.68:8000/api/endusers/',
					dataType:'json',
					method:'POST',
					data:{
						"OpenId":this.currentUser.OpenId,
						"Name":this.currentUser.nickName,
						"PSW":"123",
						"PhoneNumber":"123456"
					},
					success:res=>{
						this.currentUser = res.data;
						this.$store.commit('setCurrentUser', this.currentUser)
						uni.switchTab({
							url:'../index/index'
						})
					},
					fail:res=>{
						console.log(res)
					}
				})
			},
			getPhoneNumber(res){
				console.log(res)
			},
			wechat_login(){
				let _this = this;
				
				uni.login({
					provider:"weixin",
					success:res=>{
						console.log(res);
						// if(res.errMsg == "login:ok"){
						// 	_this.$state.commit("setCode", res.code);
						// }
						uni.getUserInfo({
							provider:"weixin",
							success:res=>{
								console.log(res);
								// if(res.errMsg == "login:ok"){
								// 	_this.$state.commit("setCode", res.code);
								// }
							},
							fail:res=>{
								console.log(res);
							}
						})
					},
					fail:res=>{
						console.log(res);
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
