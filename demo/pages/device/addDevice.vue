<template>
	<view class="add-device">
		<navbar :back="true" title="添加设备"></navbar>
		<!-- <view class="search" @click="search">
			<cover-image src="/static/images/find.png"></cover-image>
			<label>搜索</label>
		</view> -->
		<view class="brands">
			<view class="brand-item" 
				v-for="brand in brands"
				:class="{'selected':brand.id == currentBrand.id}"
				:key="brand.id" @click="selectItem(brand)">{{brand.name}}</view>
		</view>
		<view class="products">
			<view v-if="products && products.length > 0">
				<view class="product-item" @click="selectProduct(product)"
					v-for="product in products"
					:key="product.productKey">
					<view class="image-container">
						<cover-image :src="product.imageUrl"></cover-image>
					</view>
					<view>{{product.deviceTypeName}}</view>
				</view>
			</view>
			<view class="empty-products" v-else>
				<image src="../../static/images/no-data.png"></image>
				<view>没有对应产品</view>
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
				currentBrand:null,
				brands:[],
				products:[]
			}
		},
		onLoad() {
			products().then(res=>{
				if(res.data.data && res.data.data.length > 0){
					this.brands = res.data.data;
					this.currentBrand = this.brands[0];
					this.$store.commit("setSelectBrand", this.brands[0]);
				} else {
					this.brands = [];
					this.currentBrand = null;
					this.$store.commit("setSelectBrand", null);
				}
			})
		},
		watch:{
			currentBrand(value){
				uni.showLoading({
					title:"数据加载中"
				})
				product(value.id).then(res=>{
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
			}
		},
		methods: {
			...mapMutations(["setSelectBrand", "setSelectProduct"]),
			selectItem(brand){
				this.currentBrand = brand;
				this.$store.commit("setSelectBrand", brand);
			},
			search(){
				uni.navigateTo({
					url:"./searchDevice?brandid=" + this.currentBrand.id
				})
			},
			selectProduct(product){
				this.$store.commit("setSelectProduct", product)
				uni.navigateTo({
					url:"./settingDevice"
				})
			}
		}
	}
</script>

<style>
	page, .add-device{
		position:relative;
		height:100%;
		width:100%;
		font-size:0px;
	}
	
	.add-device .search{
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
	
	.add-device .search cover-image{
		height:20px;
		width:20px;
		display:inline-block;
	}
	
	.add-device .search label{
		position:relative;
		top:-5px;
	}
	
	.add-device .brands{
		width:100px;
		position:relative;
		height:calc(100% - 40px);
		background-color:#f2f2f2;
		font-size:14px;
		display:inline-block;
	}
	
	.add-device .products{
		width:calc(100% - 105px);
		position:relative;
		height:calc(100% - 40px);
		display:inline-block;
		float:right;
	}
	
	.add-device .brand-item{
		text-align:center;
		height:30px;
		line-height:30px;
		vertical-align:middle;
	}
	
	.add-device .brand-item.selected{
		background-color:#fff;
	}
	
	.add-device .product-item{
		width:50%;
		font-size:14px;
		display:inline-block;
	}
	
	.add-device .product-item .image-container{
		width:100%;
		height:100px;
		position:relative;
		
	}
	
	.add-device .product-item .image-container cover-image{
		width:50px;
		height:80px;
		position:absolute;
		top:0;
		right:0;
		bottom:0;
		left:0;
		margin:auto;
	}
	
	.add-device .product-item > view:last-child{
		text-align:center;
		font-size:14px;
	}
	
	.empty-products{
		padding:20px 0px;
		color:#B1B1B1;
		text-align: center;
	}
	.empty-products image{
		width:100px;
		height:100px;
		margin:20px auto;
	}
	
	.empty-products view{
		font-size:14px;
	}
</style>
