<template>
	<view class="create-address" style="padding-top:50px;">
		<navbar :back="true" title="添加家庭"></navbar>
		<view class="label-form-item">
			<view>家庭名称</view>
			<input v-model="currentAddress.addr"></input>
		</view>
		<view class="label-form-item">
			<view :class="{'hasvalue':currentAddress && currentAddress.city.length > 0}">家庭所在城市</view>
			<view class="city" @click="selectCity">{{currentAddress.city}}</view>
		</view>
		<view class="btn" @click="save">保存</view>
	</view>
</template>

<script>
	import {  mapState, mapMutations } from 'vuex';
	export default {
		data:function(){
			return {
				currentAddress:{
					id:0,
					addr:'',
					city:'',
				},
			}
		},
		computed:{
			...mapState(["modifyAddress"]) 
		},
		mounted(){
		},
		onLoad(e){
			this.$store.commit("setModifyAddress", this.currentAddress);
		},
		onShow(){
			if(this.modifyAddress && this.modifyAddress.id == this.currentAddress.id){
				this.currentAddress.city = this.modifyAddress.city;
			}
		},
		methods:{
			...mapMutations(["setModifyAddress", "changeAddress"]),
			selectCity(){
				uni.navigateTo({
					url:'../../components/CitySelect'
				})
			},
			save(){
				this.$store.commit("createAddress", this.currentAddress);
				uni.navigateBack();
			}
		}
	}
</script>

<style>
	.create-address .label-form-item{
		width:80%;
		margin:10px auto;
	}
	
	.create-address .label-form-item > view{
		font-size:15px;
		color:#585858;
		margin-bottom:6px;
		font-weight:bold;
	}
	.label-form-item{
		margin-bottom:10px;
	}
	.label-form-item > label{
		width:120px;
		text-align:left;
		display:inline-block;
		padding-left:10px;
	}
	
	.label-form-item > input,
	.label-form-item > .city{
		display:inline-block;
		width:100%;
		border-radius:5px;
		position:relative;
		height:40px;
		line-height:40px;
		top:10px;
		padding:0 5px;
		background-color:#F3F5F4;
		font-weight:normal !important;
		color:#585858;
	}
	
	.hasvalue{
		position:relative;
		display:inline-block;
		top:10px;
	}
	
	.create-address .btn{
		width:80%;
		position:absolute;
		bottom:60px;
		right:0;
		left:0;
		margin:auto;
		background-color:#10AB6C;
		height:40px;
		line-height:40px;
		vertical-align:middle;
		color:#fff;
		text-align:center;
		border-radius:2px;
		font-size:16px;
	}
</style>
