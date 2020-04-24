<template>
	<view class="add-address-page">
		<navbar :back="true" title="修改家庭"></navbar>
		<view class="content-container">
			<view class="input-group">
				<view class="input-label">家庭名称</view>
				<view class="input-control">
					<input placeholder="请输入家庭名称" v-model="addressName"></input>
				</view>
			</view>
			<view class="input-group">
				<view class="input-label">家庭所在城市</view>
				<view class="input-control">
					<input placeholder="请选择城市" disabled class="city" @click="selectCity" v-model="currentAddress.city"></input>
					<lable class="fa fa-angle-right"></lable>
				</view>
			</view>
		</view>
		<view class="bottom-group">
			<view class="max-btn" @click="createAddress">修改家庭</view>
		</view>
	</view>
</template>

<script>
	import {  mapState, mapMutations } from 'vuex';
	import {updateFamily} from '@/api/address';
	export default{
		data:function(){
			return {
				addressName:'',
				familyId:'',
				cityId:'',
				currentAddress:{
					id:0,
					familyName:'',
					city:'',
					cityid:'',
				},
			}
		},
		computed:{
			...mapState(["address", "currentUser", "modifyAddress"]) 
		},
		onLoad(e){
			this.currentAddress = this.address.find(x => x.id == e.id);
			this.familyId = this.currentAddress.id;
			this.$store.commit("setModifyAddress", this.currentAddress);
			this.addressName = this.currentAddress.familyName;
			this.id = this.currentAddress.id;
		},
		onShow(){
			if(this.modifyAddress && this.modifyAddress.id == this.currentAddress.id){
				this.currentAddress = this.modifyAddress;
			}
		},
		methods:{
			...mapMutations(["setModifyAddress", "changeAddress"]),
			selectCity(){
				uni.navigateTo({
					url:'../../components/CitySelect'
				})
			},
			createAddress(){
				if(this.addressName == null || this.addressName.length == 0 
					|| this.currentAddress == null || this.currentAddress.city.length == 0){
					uni.showModal({
						title:'提示',
						content:'家庭名称和城市不能为空',
						showCancel:false
					})
				} else {
					this.currentAddress.familyName = this.addressName;
					this.currentAddress.id = this.id;
					this.cityId=this.currentAddress.cityid;
					this.$store.commit("changeAddress", this.currentAddress);
					updateFamily(this.currentAddress.city, this.cityId, this.familyId, this.addressName).then(res=>{
						if(res.data.msg == '编辑成功'){
							uni.navigateBack({
								
							})
						}
					})
					
				}
				
			}
		}
	}
</script>

<style>
	.content-container{
		width:calc(100% - 28px);
		margin:0 auto;
	}
	
	.input-group{
		margin-bottom:10px;
	}
	
	.input-group .input-label{
		color:#585858;
		font-size:15px;
		height:25px;
		vertical-align:middle;
		font-weight:bold;
	}
	
	.input-group .input-control{
		width:100%;
		box-sizing: content-box;
		height:40px;
		background-color:#F3F5F4;
		position:relative;
	}
	
	.input-group .input-control input{
		width:calc(100% - 10px);
		margin:0 5px;
		height:100%;
		line-height:40px;
		vertical-align:middle;
		display:inline-block;
	}
	
	.input-group .input-ok{
		width:100%;
		height:40px;
		background-color:#10AB6C;
		color:#fff;
		font-size:16px;
		text-align:center;
		vertical-align:middle;
		margin-top:40px;
		line-height:40px;
	}
	
	.add-address-page .city{
		width:calc(100% - 30px) !important;
		margin:0 !important;
		margin-left:5px !important;
		height:100%;
		line-height:40px;
		vertical-align:middle;
		display:inline-block;
	}
</style>
