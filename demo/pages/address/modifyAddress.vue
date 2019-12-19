<template>
	<view style="padding-top:50px;">
		<view class="label-form-item">
			<label>家庭名称</label>
			<input v-model="currentAddress.addr"></input>
		</view>
		<view class="label-form-item">
			<label>家庭所在城市</label>
			<view class="city"></view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		data:function(){
			return {
				currentAddress:null
			}
		},
		computed:{
			...mapState(["address"]) 
		},
		mounted(){
			uni.setNavigationBarTitle({
			　　title:'修改家庭'
			})
		},
		onLoad(e){
			this.currentAddress = this.address.find(x=>x.id == e.id);
		},
		methods:{
			modify(id){
				
			},
			remove(id){
				
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
</style>
