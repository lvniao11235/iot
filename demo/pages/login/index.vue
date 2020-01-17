<template>
	<view class="login-index-page">
		<navbar></navbar>
		<view>
			<view class="registed" v-if="registed">
				<view>您已经注册，页面跳转中...</view>
			</view>
			<view class="unregisted" v-else>
				<view>您尚未注册，请跳转到注册页面</view>
				<view @click="goToRegister" class="empty-btn">去注册</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	import {getOpenId, getUser, registerUser} from '@/api/user';
	export default {
		data:function(){
			return {
				registed:false,
				currentUser:{}
			}
		},
		onLoad(e){
			var param = {value:10};
			uni.getUserInfo({
				provider:"weixin",
				success:res=>{
					this.currentUser = {
						...this.currentUser,
						...res.userInfo
					}
				}
			})
			uni.login({
				provider:"weixin",
				success:res=>{
					this.currentUser.code = res.code;
					getOpenId(res.code).then(res=>{
						let str = res.data.replace(/\'/g, '\"');
						str = str.substr(0, str.indexOf('}')+1)
						let data = JSON.parse(str)
						this.currentUser.OpenId = data.openid;
						return getUser(data.openid);
					}).then(res=>{
						uni.hideLoading();
						if(res.data){
							this.registed = true;
							this.currentUser = {
								...this.currentUser,
								...res.data
							};
							this.$store.commit('setCurrentUser', this.currentUser)
							console.log(param.value)
							uni.switchTab({
								url:'../index/index'
							})
						} else {
							this.registed = false;
						}
					}).catch(res=>{
						uni.hideLoading();
					})
				},
			});
		},
		methods:{
			...mapMutations(["setCurrentUser"]),
			goToRegister(){
				uni.navigateTo({
					url:'./login'
				})
			}
		}
	}
</script>

<style>
	.login-index-page .registed,
	.login-index-page .unregisted{
		position:absolute;
		top:0;
		right:0;
		bottom:0;
		left:0;
		margin:auto;
		width:80%;
		text-align:center;
	}
	
	.login-index-page .registed{
		height:20px;
		line-height:20px;
		vertical-align:middle;
	}
	
	.login-index-page .unregisted{
		height:70px;
		
	}
	
	.login-index-page .unregisted > view:first-child{
		height:20px;
		line-height:20px;
		vertical-align:middle;
		margin-bottom:10px;
	}
</style>
