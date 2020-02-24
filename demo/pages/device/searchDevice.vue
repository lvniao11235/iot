<template>
	<view class="search-device">
		<navbar :back="true" title="搜索设备"></navbar>
		<view class="search">
			<cover-image src="/static/images/find.png"></cover-image>
			<label>搜索</label>
		</view>
		<view class="products">
			<view class="product-item" v-if="!products">
				<view class="image-container">
					<cover-image :src="selectProduct.imageUrl" @click="settingDevice(selectProduct)"></cover-image>
				</view>
				<view>{{selectProduct.deviceTypeName}}</view>
			</view>
			<view v-else>
				<view class="product-item" v-for="pro in products" :key="pro.productKey">
					<view class="image-container">
						<cover-image :src="pro.imageUrl" @click="settingDevice(pro)"></cover-image>
					</view>
					<view>{{pro.deviceTypeName}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	import {product, products} from '@/api/device';
	export default {
		data() {
			return {
				product:null,
				products:null
			}
		},
		computed:{
			...mapState(["selectProduct"])
		},
		onLoad(e) {
			if(e.brandid){
				this.products = [];
				product(e.brandid).then(res=>{
					this.products = [];
					if(res.data.data && res.data.data.length > 0){
						res.data.data.forEach(x=>{
							this.products.push(x)
						})
						uni.hideLoading()
					} else {
						uni.hideLoading()
					}
				})
			} else {
				this.products = null;
			}
		},
		methods: {
			...mapMutations(["setSelectProduct"]),
			settingDevice(product){
				this.$store.commit("setSelectProduct", product);
				uni.navigateTo({
					url:'./settingDevice'
				})
			}
		}
	}
</script>

<style>
	
	.search-device .search{
		height:25px;
		width:90%;
		margin:7.5px auto;
		box-sizing: border-box;
		border:1px solid #333333;
		border-radius:5px;
		text-align:center;
		font-size:12px;
		line-height:25px;
		vertical-align:middle;
		position:relative;
	}
	
	.search-device .search cover-image{
		height:20px;
		width:20px;
		display:inline-block;
	}
	
	.search-device .search label{
		position:relative;
		top:-5px;
	}
	
	.search-device .product-item{
		width:100%;
		font-size:14px;
		display:inline-block;
		text-align:center;
		border-bottom:1px solid #b1b1b1;
		padding-bottom:20px;
	}
	
	.search-device .product-item:last-child{
		border-bottom:none;
	}
	
	.search-device .product-item .image-container{
		width:100%;
		height:150px;
		position:relative;
		
	}
	
	.search-device .product-item .image-container cover-image{
		width:50px;
		height:80px;
		position:absolute;
		top:0;
		right:0;
		bottom:0;
		left:0;
		margin:auto;
	}
</style>
