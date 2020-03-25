<template>
	<view class="modify-user-page">
		<navbar :back="true" title="个人信息"></navbar>
		<view class="icon-list-item image-list-item" @click="jumpTo(1)">
			<label class="label">头像</label>
			<view class="value">
				<label><cover-image class="image-value" :src="avatarUrl"></cover-image></label>
				<label class="value-icon fa fa-angle-right"></label>
			</view>
			<view class="border"></view>
		</view>
		<view></view>
		<view class="icon-list-item" @click="jumpTo(2)">
			<label class="label">昵称</label>
			<view class="value" style="position:absolute;right:5px;top:0px;">
				<label>{{nickName}}</label>
				<label class="value-icon fa fa-angle-right"></label>
			</view>
			<view class="border"></view>
		</view>
		<view class="icon-list-item" @click="jumpTo(3)">
			<label class="label">性别</label>
			<view class="value">
				<label>{{gender == 1 ? '男':'女'}}</label>
				<label class="value-icon fa fa-angle-right"></label>
			</view>
			<view class="border"></view>
		</view>
		<view class="icon-list-item" @click="jumpTo(4)">
			<label class="label">出生日期</label>
			<view class="value">
				<label>{{$moment(birthday).format("YYYY-MM-DD")}}</label>
				<label class="value-icon fa fa-angle-right"></label>
			</view>
			<view class="border"></view>
		</view>
		<!-- <view class="bottom-group">
			<view class="max-btn" @click="modify" style="">修改</view>
		</view> -->
		<view class="dialog-container" v-if="showDialog">
			<view class="dialog-mask"></view>
			<view class="prompt-dialog" v-if="showNameDialog">
				<view class="dialog-title">修改昵称</view>
				<input class="dialog-input" v-model="nickName"></input>
				<view class="btn-group">
					<view class="dialog-cancel" @click="modifyNameCancel">取消</view>
					<view class="dialog-ok" @click="modifyNameOk">确定</view>
				</view>
			</view>
			<view class="prompt-dialog" v-if="showGenderDialog" style="height:130px;">
				<view class="dialog-title">修改性别</view>
				<view class="dialog-content">
					<radio-group @change="genderChange">
						<label class="radio"><radio value="1" :checked="gender == 1" />男</label>
						<label class="radio"><radio value="0" :checked="gender == 0" />女</label>
					</radio-group>
				</view>
				<view class="btn-group">
					<view class="dialog-cancel" @click="modifyGenderCancel">取消</view>
					<view class="dialog-ok" @click="modifyGenderOk">确定</view>
				</view>
			</view>
			
			<view class="prompt-dialog" v-if="showBirthdayDialog" style="height:130px;">
				<view class="dialog-title">修改出生日期</view>
				<view class="dialog-content">
					<picker mode="date" lang="zh_CN" :value="birthday" @change="bindBirthdayChange">
						<view class="uni-input">{{birthday}}</view>
					</picker>
				</view>
				<view class="btn-group">
					<view class="dialog-cancel" @click="modifyBirthdayCancel">取消</view>
					<view class="dialog-ok" @click="modifyBirthdayOk">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	import {updateUser} from '@/api/user';
	
	export default {
		data:function(){
			return {
				showDialog:false,
				showImageDialog:false,
				showNameDialog:false,
				showGenderDialog:false,
				showBirthdayDialog:false,
				avatarUrl:'',
				nickName:'',
				
				gender:1,
				birthday:'',
			}
		},
		computed:{
			...mapState(["currentUser"])
		},
		onLoad (){
			this.avatarUrl = this.currentUser.avatarUrl;
			this.nickName = this.currentUser.nickName;
			this.gender = this.currentUser.gender;
			if(!this.currentUser.birthday){
				this.birthday = this.$moment(new Date()).format("YYYY-MM-DD");
				this.currentUser.birthday = this.birthday;
			} else {
				this.birthday = this.currentUser.birthday;
			}
			
		},
		methods:{
			...mapMutations(["modifyCurrentUser"]),
			modify(){
				let user = {
					avatarUrl:this.avatarUrl, 
					nickName:this.nickName, 
					gender:this.gender, 
					birthday:this.birthday
				}
				this.$store.commit("modifyCurrentUser", user);
				user.unionId = this.currentUser.OpenId;
				updateUser(user).then(res=>{
					if(res){
						uni.navigateBack({
							
						})
					}
				})
			},
			jumpTo(type){
				// this.showDialog = true;
				// switch(type){
				// 	case 1: this.showImageDialog = true; break;
				// 	case 2: this.showNameDialog = true; break;
				// 	case 3: this.showGenderDialog = true; break;
				// 	case 4: this.showBirthdayDialog = true; break;
				// }
			},
			modifyNameCancel(){
				this.showDialog = false;
				this.showNameDialog = false;
				this.nickName = this.currentUser.nickName;
			},
			modifyNameOk(){
				this.showDialog = false;
				this.showNameDialog = false;
			},
			modifyGenderCancel(){
				this.showDialog = false;
				this.showGenderDialog = false;
				this.gender = this.currentUser.gender;
			},
			modifyGenderOk(){
				this.showDialog = false;
				this.showGenderDialog = false;
			},
			genderChange(e){
				this.gender = parseInt(e.detail.value)
			},
			bindBirthdayChange(e){
				this.birthday = e.detail.value;
			},
			modifyBirthdayCancel(){
				this.showDialog = false;
				this.showBirthdayDialog = false;
				this.birthday = this.currentUser.birthday;
			},
			modifyBirthdayOk(){
				this.showDialog = false;
				this.showBirthdayDialog = false;
			},
		}
	}
</script>

<style>
	.icon-list-item > .border{
		width:calc(100% - 10px);
		margin-left:10px;
		border-bottom:1px solid #F2F2F2;
		margin-top:3px;
	}
	
	.modify-user-page .icon-list-item{
		padding:0px 3px 0px 5px;
	}
</style>
