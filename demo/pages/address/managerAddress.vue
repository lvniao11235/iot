<template>
	<view class="manager-address">
		<navbar :back="true" title="管理家庭"></navbar>
		<uni-swipe-action >
			<uni-swipe-action-item v-for="(addr, index) in address" :key="addr.id"  :options="options2" @change="change" @click="bindClick($event, addr)">
				<view class="cont"><image src="../../static/images/building.png"></image>{{addr.familyName}}</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
		<view class="bottom-group">
			<view class="max-btn" @click="create">添加</view>
		</view>
		
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	import { listFamilyBindDevices, deleteFamily, listFamilys } from '@/api/address';
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'
	export default {
		components: {
			uniSwipeAction,
			uniSwipeActionItem
		},
		data:function(){
			return {
				isOpened: true,
				options2: [{
						text: '编辑',
						icon:'/static/images/amodify.png',
						style: {
							backgroundColor: '#F2BD7C'
						}
					}, {
						text: '删除',
						icon:'/static/images/remove.png',
						style: {
							backgroundColor: '#F27C7F'
						}
					}],
				showButton:[]
			}
		},
		computed:{
			...mapState(["address", "currentAddress", "currentUser"]) 
		},
		onLoad(){
			this.address.forEach(x=>{
				this.showButton.push(false);
			})
		},
		mounted(){
		},
		methods:{
			bindClick(e, addr) {
				if(e.content.text == "编辑"){
					this.modify(addr.id);
				} else if (e.content.text == "删除"){
					this.remove(addr.id);
				}
			},
			change(e) {
				let flag = !this.showButton[e];
				for(let i=0; i<this.showButton.length; i++){
					this.showButton[i] = false;
				}
				this.showButton[e] = flag;
			},
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
						uni.showModal({
							content:'删除家庭后，绑定的所有设备都会解绑',
							showCancel:true,
							success:res=>{
								if(res.confirm){
									deleteFamily(id).then(res=>{
										if(res && res.data.msg == "删除成功"){
											return listFamilys(this.currentUser.OpenId)
										}
									}).then(res=>{
										if(res){
											this.$store.commit("setAddress", res.data.data)
										}
									})
								}
								
							}
						})
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
	
	.cont {
			flex: 1;
			height: 45px;
			line-height: 45px;
			padding: 0 15px;
			position: relative;
			background-color: #fff;
			font-size: 15px;
			border-bottom-color: #F5F5F5;
			border-bottom-width: 1px;
			border-bottom-style: solid;
		}
	.cont image{
		height:14px;
		width:14px;
		top:0;
		display:inline-block;
		margin-right:5px;
	}
</style>
