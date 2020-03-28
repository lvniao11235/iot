<template>
	<view class="manager-address">
		<navbar :back="true" title="管理家庭"></navbar>
		<template v-for="addr in address">
			<view :key="addr.id" class="icon-list-item">
				<label class="icon"><image src="../../static/images/building.png"></image></label>
				<label class="label">{{addr.familyName}}</label>
				<view class="btns">
					<label @click="modify(addr.id)">修改</label>
					<label @click="remove(addr.id)" style="color:red;">删除</label>
				</view>
			</view>
		</template>
		<view class="btn" @click="create">添加</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	import { listFamilyBindDevices, deleteFamily, listFamilys } from '@/api/address';
	
	export default {
		computed:{
			...mapState(["address", "currentAddress", "currentUser"]) 
		},
		mounted(){
		},
		methods:{
			modify(id){
				uni.navigateTo({
					url:'./modifyAddress' + '?id=' + id
				})
			},
			remove(id){
				if(id == this.currentAddress.id){
					uni.showModal({
						title:'提示',
						content:'不能删除当前家庭',
						showCancel:false
					})
					return;
				}
				listFamilyBindDevices(id).then(res=>{
					if(res.data.data && res.data.data.length > 0){
						uni.showModal({
							title:'提示',
							content:'该家庭下有设备数据，不能删除',
							showCancel:false
						})
					} else {
						return deleteFamily(id)
					}
				}).then(res=>{
					if(res && res.data.msg == "删除成功"){
						return listFamilys(this.currentUser.OpenId)
					}
				}).then(res=>{
					if(res){
						this.$store.commit("setAddress", res.data.data)
					}
				})
				
			},
			create(){
				uni.navigateTo({
					url:'./addAddress?type=1'
				})
			}
		}
	}
</script>

<style>
	.manager-address .icon-list-item .icon{
		height:16px !important;
		
		top:0;
		margin-right:5px;
	}
	.manager-address .btn{
		width:80%;
		position:absolute;
		bottom:60px;
		right:0;
		left:0;
		margin:auto;
		background-color:#10AB6C;
		height:35px;
		line-height:35px;
		vertical-align:middle;
		color:#fff;
		text-align:center;
		border-radius:2px;
	}
</style>
