<template>
	<view class="my-page">
		<navbar  title="我的"></navbar>
		<view class="head" v-if="currentUser != null">
			<cover-image :src="currentUser.avatarUrl"></cover-image>
			<label>{{currentUser.nickName}}</label>
			<label class="fa fa-angle-right"></label>
		</view>
		<view class="head head-no-user" @click="loginOrRegister" v-else>
			<label class="fa fa-user-circle-o"></label>
			<label>登录/注册</label>
		</view>
		<view class="icon-list-item">
			<label class="icon"><image src="/static/images/dingyue.png"></image></label>
			<label class="label">服务订阅</label>
			<view class="value">
				<label></label>
				<label class="value-icon fa fa-angle-right"></label>
			</view>
			<view class="border"></view>
		</view>
		<view class="icon-list-item">
			<label class="icon"><image src="/static/images/link.png"></image></label>
			<label class="label">设备共享</label>
			<view class="value">
				<label></label>
				<label class="value-icon fa fa-angle-right"></label>
			</view>
			<view class="border"></view>
		</view>
		<view class="icon-list-item">
			<label class="icon"><image src="/static/images/question.png"></image></label>
			<label class="label">帮助中心</label>
			<view class="value">
				<label></label>
				<label class="value-icon fa fa-angle-right"></label>
			</view>
			<view class="border"></view>
		</view>
		<view class="icon-list-item">
			<label class="icon"><image src="/static/images/edit.png"></image></label>
			<label class="label">意见反馈</label>
			<view class="value">
				<label></label>
				<label class="value-icon fa fa-angle-right"></label>
			</view>
			<view class="border"></view>
		</view>
		<view class="icon-list-item">
			<label class="icon"><image src="/static/images/bell.png"></image></label>
			<label class="label">消息提醒</label>
			<view class="value">
				<label></label>
				<label class="value-icon fa fa-angle-right"></label>
			</view>
			<view class="border"></view>
		</view>
		<view class="icon-list-item">
			<label class="icon"><image src="/static/images/abouts.png"></image></label>
			<label class="label">关于</label>
			<view class="value">
				<label></label>
				<label class="value-icon fa fa-angle-right"></label>
			</view>
			<view class="border"></view>
		</view>
		<view class="icon-list-item">
			<label class="icon"><image src="/static/images/config.png"></image></label>
			<label class="label">设置</label>
			<view class="value">
				<label></label>
				<label class="value-icon fa fa-angle-right"></label>
			</view>
		</view>
		<view class="dialog-container" v-if="showDialog">
			<view class="dialog-mask"></view>
			<view class="prompt-dialog" style="height:170px;" v-if="showLoginDialog">
				<view class="dialog-title">提示</view>
				<view class="dialog-content">
					请先完成登录，再进行操作
				</view>
				<view class="btn-group single-btn">
					<navigator class="dialog-cancel" open-type="exit" target="miniProgram">拒绝</navigator>
					<view class="dialog-ok" @click="loginOk">去登录</view>
				</view>
			</view>
			<view class="prompt-dialog" style="height:170px;"  v-if="showAuthDialog">
				<view class="dialog-title">提示</view>
				<view class="dialog-content">
					如果要使用小程序，需要进行登录才可以，请点击允许进行登录。
				</view>
				<view class="btn-group single-btn">
					<navigator class="dialog-cancel" open-type="exit" target="miniProgram">拒绝</navigator>
					<view class="dialog-ok" @click="auth">去登录</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState, mapMutations
	} from 'vuex';
	import {listFamilyBindDevices, listFamilys} from '@/api/address';
	import { login, decodeUserInfo, setCurFamilyId, getCurFamilyId } from '@/api/user';
	export default {
		data() {
			return {
				showDialog:false,
				showAuthDialog:false,
				showLoginDialog:false,
				urls:[
					'./service',
					'./share',
					'./help',
					'./opinion',
					'./message',
					'./about',
					'./config',
					'./modifyUser'
				]
			}
		},
		computed:{
			...mapState(["currentAddress", "devices", "currentUser", "address"])
		},
		onLoad() {
			uni.setNavigationBarTitle({
			　　title:'我的'
			})
		},
		methods: {
			...mapMutations(["setCurrentUser", "setAddress", "setcurrentAddress"]),
			jumpTo(id){
				
			},
			loginOk(){
				uni.hideLoading();
				this.showDialog = false;
				this.showLoginDialog = false;
				this.showAuthDialog = false;
				uni.navigateTo({
					url:'../login/login'
				})
			},
			auth(){
				uni.hideLoading();
				this.showDialog = false;
				this.showLoginDialog = false;
				this.showAuthDialog = false;
				uni.navigateTo({
					url:'../login/index'
				})
			},
			loginOrRegister(){
				login().then(res=>{
					if(res.firstLogin){
						uni.hideLoading();
						this.showDialog = true;
						this.showLoginDialog = true;
						this.$store.commit("setCurrentUser", null)
					} else {
						this.$store.commit("setCurrentUser", res);
						return listFamilys(res.OpenId)
					}
					
				}).then(res=>{
					if(res){
						if(res.data.data && res.data.data.length == 0){
							uni.navigateTo({
								url:'../address/addAddress'
							})
						} else {
							let addrs = res.data.data
							getCurFamilyId(this.currentUser.OpenId).then(res=>{
								if(res.data.data){
									let addr = addrs.find(x=>x.id == res.data.data);
									if(addr){
										this.$store.commit("setcurrentAddress", addr)
									}
								} else {
									this.$store.commit("setcurrentAddress", res.data.data[0])
								}
							})
							this.$store.commit("setAddress", res.data.data)
							return listFamilyBindDevices(res.data.data[0].id)
						}
					}
				}).then(res=>{
					if(res){
						if(res.data.data && res.data.data.length > 0){
							this.$store.commit("setDevices", res.data.data)
							this.devices = [];
							this.devices.push(...res.data.data);
						} else {
							this.$store.commit("setDevices", [])
							this.devices = [];
						}
						uni.hideLoading();
						uni.switchTab({
							url:'./my'
						})
					}
				}).catch(res=>{
					uni.hideLoading();
					if(res.errMsg.startsWith("getUserInfo:fail")){
						
						this.showDialog = true;
						this.showAuthDialog = true;
						this.$store.commit("setCurrentUser", null)
					}
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
	
	.my-page .head-no-user > label{
		float:none !important;
	}
	
	.my-page .head-no-user > label:first-child{
		width:auto;
		font-size:40px;
	}
	
	.my-page .head-no-user > label:last-child{
		width:auto;
	}
	
	.icon-list-item > .border{
		width:calc(100% - 10px);
		margin-left:10px;
		border-bottom:1px solid #F2F2F2;
		margin-top:3px;
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
