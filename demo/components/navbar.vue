<template name="navbar">
	<view class="navbar-component" 
		:style="{height:(45 + paddingTop) + 'px', 
			backgroundColor:background}">
		<view 
			:style="{Top:0, paddingTop:paddingTop+'px', 
				backgroundColor:background,
				color:color}">
			<view @click="switchAddress" :style="{color:addressColor}" v-if="showAddress && currentAddress != null" class="address">{{familyName}}<label class="fa fa-angle-right"></label></view>
			<view @click="navigateBack" class="back" v-if="back"><label class="fa fa-angle-left"></label></view>
			<label class="navbar-title">{{dispTitle}}</label>
		</view>
	</view>
</template>

<script>
	import address from './address';
	import {mapState} from 'vuex';
	export default{
		name:'navbar',
		components:{
			address
		},
		props:["bgColor", "fgColor", "showAddress", "title", "back", "isHome", "url", "isTabPage"],
		data:function(){
			return {
				paddingTop:uni.getSystemInfoSync().statusBarHeight,
				backgroundColor:'#fff',
				foregroudColor:'#000'
			}
		},
		
		computed:{
			...mapState(["appName", "currentAddress"]),
			background(){
				return this.bgColor? this.bgColor:this.backgroundColor
			},
			color(){
				return this.fgColor? this.fgColor:this.foregroudColor
			},
			dispTitle(){
				return this.title? this.title:this.appName
			},
			addressColor(){
				return this.isHome ? "#fff" : "#585858"
			},
			familyName(){
				if(this.currentAddress && this.currentAddress.familyName){
					if(this.currentAddress.familyName.length > 5){
						return this.currentAddress.familyName.substr(0, 5) + '...';
					} else {
						return this.currentAddress.familyName;
					}
				}
				return "";
			}
		},
		methods:{
			switchAddress(){
				uni.navigateTo({
					url:'/pages/address/addressList',
					success:res=>{
						console.log(res)
					},
					fail:res=>{
						console.log(res)
					}
				})
			},
			navigateBack(){
				let pages = getCurrentPages();
				let befpage = pages[pages.length - 2];
				if(this.url && this.url.length > 0){
					if(this.isTabPage && this.url == "/pages/index/index"){
						uni.switchTab({
							url:this.url
						});
						befpage.onLoad({});
					} else if(this.isTabPage){
						uni.switchTab({
							url:this.url
						})
					}
					else {
						uni.navigateTo({
							url:this.url
						})
					}
				} else {
					uni.navigateBack({
						success:function(){
							
						}
					})
				}
				
			}
		}
	}
</script>

<style>
	.navbar-component, 
	.navbar-component > view{
		width:100%;
		
	}
	
	.navbar-component .navbar-title{
		font-size:18px;
	}
	
	.navbar-component > view{
		height:45px;
		position:fixed;
		z-index:10000;
		line-height:45px;
		vertical-align:middle;
		text-align:center;
		color:#fff;
	}
	
	.navbar-component .address{
		display:inline-block;
		position:absolute;
		min-width:60px;
		left:0px;
		height:45px;
		z-index:10001;
		font-size:15px;
		padding-left:5px;
	}
	
	.navbar-component .address label{
		display:inline-block;
		margin-left:5px;
	}
	
	.navbar-component .back{
		display:inline-block;
		width:50px;
		position:absolute;
		left:0px;
		height:45px;
		z-index:10001;
		font-size:30px;
		font-weight:bold;
	}
</style>
