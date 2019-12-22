<template>
	<view class="create-address" style="padding-top:50px;">
		<view class="label-form-item">
			<label>家庭名称</label>
			<input v-model="currentAddress.addr"></input>
		</view>
		<view class="label-form-item">
			<label :class="{'hasvalue':currentAddress && currentAddress.city.length > 0}">家庭所在城市</label>
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
			uni.setNavigationBarTitle({
			　　title:'添加家庭'
			})
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
		width:calc(100% - 160px);
		border:1px solid #333333;
		border-radius:5px;
		position:relative;
		height:30px;
		line-height:30px;
		top:10px;
		padding:0 5px;
	}
	
	.hasvalue{
		position:relative;
		display:inline-block;
		top:10px;
	}
	
	.create-address .btn{
		width:60%;
		position:absolute;
		bottom:60px;
		right:0;
		left:0;
		margin:auto;
		background-color:rgba(74, 144, 226, 1);
		height:35px;
		line-height:35px;
		vertical-align:middle;
		color:#fff;
		text-align:center;
		border-radius:5px;
	}
</style>
