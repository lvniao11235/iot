<template>
	<view>
		<navbar></navbar>
		<view class="title-image">健康生活</view>
		<view class="login-btns">
			<!-- <button open-type="getUserInfo" 
				@getuserinfo="onGetUserInfo" withCredentials="true" lang="zh_CN">
				微信授权登录
			</button> -->
			<button open-type="getPhoneNumber" withCredentials="true" lang="zh_CN" @getphonenumber="getPhoneNumber">微信登录</button>
		</view>
		<view>1.21</view>
		<view class="login-agree">登录即代表您同意《<label @click="goToClause">健康生活用户服务条款</label>》</view>
		
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	import {getOpenId, getUser, updateUser, decodeUserInfo, loginWechat, getUserInfoWechat, setCurFamilyId} from '@/api/user';
	import {listFamilys} from '@/api/address';
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
				showDialog:false,
				currentUser:{},
				encrypt:null,
				first:false
			}
		},
		methods:{
			...mapMutations(["setCode", "setCurrentUser", "setAddress"]),
			addAddress(address){
				this.$store.commit("setAddress", address)
			},
			OnWechatAuthorized(){
				this.showDialog = false;
			},
			getPhoneNumber: function(e) {
				if(e.detail.errMsg == "getPhoneNumber:fail user deny"){
					uni.showModal({
						title:'授权失败',
						content:e.detail.errMsg,
						showCancel:false
					})
					return;
				}
				let _this = this;
				console.log(e);
				this.encrypt = e.detail;
				if (e.detail && e.detail.errMsg && e.detail.errMsg != 'getPhoneNumber:ok') {
					uni.showModal({
						title:'授权失败',
						content:e.detail.errMsg,
						showCancel:false
					})
				} else {
					getUserInfoWechat().then(res=>{
						uni.showLoading({})
						this.currentUser = res.userInfo;
						this.$store.commit("setCurrentUser", this.currentUser)
						return loginWechat();
					}).then(res=>{
						return getOpenId(res)
					}).then(res=>{
						if(res.data.data.unionid){
							this.currentUser.OpenId = res.data.data.unionid;
							this.currentUser.sessionKey = res.data.data.sessionKey;
							this.$store.commit("setCurrentUser", this.currentUser)
							return decodeUserInfo(this.encrypt.encryptedData, this.encrypt.iv, this.currentUser.OpenId);
						} 
					}).then(res=>{
						if(res.data.data && res.data.data.phoneNumber){
							this.currentUser.phone = res.data.data.phoneNumber;
							this.$store.commit("setCurrentUser", this.currentUser)
							return getUser(this.currentUser.OpenId);
						} else {
							uni.hideLoading()
							uni.showModal({
								title:'授权失败',
								content:'获取电话失败',
								showCancel:false
							})
						}
					}).then(res=>{
						if(res){
							this.first = res.data.data.avatarUrl == null 
								&& res.data.data.nickName == null;
							this.currentUser = {
								...res.data.data,
								...this.currentUser
							}
							console.log(JSON.stringify(this.currentUser))
							this.$store.commit("setCurrentUser", this.currentUser)
							if(this.first){
								updateUser({
									avatarUrl:this.currentUser.avatarUrl,
									nickName:this.currentUser.nickName,
									phone:this.currentUser.phone,
									unionId:this.currentUser.OpenId
								}).then(res=>{
									if(res){
										return listFamilys(this.currentUser.OpenId);
									}
								}).then(res=>{
									uni.hideLoading()
									if(res.data.data && res.data.data.length == 0){
										uni.navigateTo({
											url:'../address/addAddress'
										})
									} else {
										this.addAddress(res.data.data)
										uni.switchTab({
											url:'../index/index'
										})
									}
								})
							} else {
								updateUser({
									avatarUrl:this.currentUser.avatarUrl,
									nickName:this.currentUser.nickName,
									phone:this.currentUser.phone,
									unionId:this.currentUser.OpenId
								}).then(res=>{
									if(res){
										return listFamilys(this.currentUser.OpenId);
									}
								}).then(res=>{
									uni.hideLoading()
									if(res.data.data && res.data.data.length == 0){
										uni.navigateTo({
											url:'../address/addAddress'
										})
									} else {
										this.addAddress(res.data.data)
										uni.switchTab({
											url:'../index/index'
										})
									}
								})
							}
						}
					}).catch(res=>{
						uni.hideLoading()
						if(res.errMsg == "getUserInfo:fail scope unauthorized"){
							this.showDialog = true;
							
						}
						uni.showModal({
							title:'授权失败',
							content:e.detail.errMsg,
							showCancel:false
						})
					});
				}
 
				// 				console.log(JSON.stringify(e.encryptedData));
				// 				console.log(JSON.stringify(e.iv));
			},
			phone_login(){
				uni.navigateTo({
					url:'./phoneLogin'
				})
				
			},
			onGetUserInfo(res){
				if(res.detail && res.detail.userInfo){
					this.currentUser = res.detail.userInfo;
					this.$store.commit("setCurrentUser", this.currentUser)
					uni.showLoading({
						
					})
					loginWechat().then(res=>{
						return getOpenId(res);
					}).then(res=>{
						if(res.data.data.unionid){
							this.currentUser.OpenId = res.data.data.unionid;
							this.$store.commit("setCurrentUser", this.currentUser)
							return getUser(this.currentUser.OpenId);
						}
					}).then(res=>{
						if(res){
							this.first = res.data.data.avatarUrl == null 
								&& res.data.data.nickName == null;
							this.currentUser = {
								...res.data.data,
								...this.currentUser
							} 
							console.log(JSON.stringify(this.currentUser))
							this.$store.commit("setCurrentUser", this.currentUser)
							
							if(this.first){
								updateUser({
									avatarUrl:this.currentUser.avatarUrl,
									nickName:this.currentUser.nickName,
									phone:null,
									unionId:this.currentUser.OpenId
								}).then(res=>{
									if(res){
										return listFamilys(this.currentUser.OpenId);
									}
								}).then(res=>{
									uni.hideLoading()
									if(res.data.data && res.data.data.length == 0){
										uni.navigateTo({
											url:'../address/addAddress'
										})
									} else {
										this.addAddress(res.data.data)
										uni.switchTab({
											url:'../index/index'
										})
									}
								})
							} else {
								return listFamilys(this.currentUser.OpenId);
								uni.hideLoading()
								uni.switchTab({
									url:'../index/index'
								})
							}
						}
					}).then(res=>{
						uni.hideLoading()
						if(res.data.data && res.data.data.length == 0){
							uni.navigateTo({
								url:'../address/addAddress'
							})
						} else {
							this.addAddress(res.data.data)
							uni.switchTab({
								url:'../index/index'
							})
						}
					}).catch(res=>{
						uni.hideLoading()
					})
				}
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
		font-size:16px;
		border-radius:2px;
		width:80%;
		margin:auto;
	}
	
	.login-btns > button:first-child{
		background-color:#10AB6C;
		color:#fff;
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
