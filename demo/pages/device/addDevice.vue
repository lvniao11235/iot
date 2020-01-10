<template>
	<view class="add-device">
		<view class="search" @click="search">
			<cover-image src="/static/images/find.png"></cover-image>
			<label>搜索</label>
		</view>
		<view class="brands">
			<view class="brand-item" 
				v-for="brand in brands"
				:class="{'selected':brand.Id == currentBrand.Id}"
				:key="brand.Id" @click="selectItem(brand)">{{brand.Name}}</view>
		</view>
		<view class="products">
			<view class="product-item" @click="selectProduct(product.Id)"
				v-for="product in products"
				:key="product.Id">
				<view class="image-container">
					<cover-image :src="product.DeviceImageBase64String"></cover-image>
				</view>
				<view>{{product.Name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	export default {
		data() {
			return {
				currentBrand:null,
				brands:[],
				products:[]
			}
		},
		onLoad() {
			
			uni.request({
				url:'http://39.98.107.68:8000/Api/M_Brand',
				dataType:'json',
				success:res=>{
					if(res.data && res.data.length > 0){
						this.brands = res.data;
						this.currentBrand = this.brands[0];
						this.$store.commit("setSelectBrand", this.brands[0]);
					}
				}
			})
		},
		watch:{
			currentBrand(value){
				uni.request({
					url:'http://39.98.107.68:8000/Api/M_DeviceModel',
					dataType:'json',
					success:res=>{
						if(res.data && res.data.length > 0){
							this.products = res.data;
						}
					}
				})
			}
		},
		methods: {
			...mapMutations(["setSelectBrand"]),
			selectItem(brand){
				this.currentBrand = brand;
				this.$store.commit("setSelectBrand", brand);
			},
			search(){
				uni.navigateTo({
					url:"./searchDevice"
				})
			},
			selectProduct(id){
				uni.navigateTo({
					url:"./searchDevice?id=" + id
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
</style>
