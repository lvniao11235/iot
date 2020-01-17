<template>
	<view class="repeat">
		<navbar :back="true" title="定时开机"></navbar>
		<radio-group @change="selected">
			<view class="repeat-item">执行一次<radio  :checked="value == 0" :value="0"/></view>
			<view class="repeat-item">每天<radio :checked="value == 1"  :value="1"/></view>
			<view class="repeat-item">工作日<radio :checked="value == 2"  :value="2"/></view>
			<view class="repeat-item">自定义<radio :checked="value == 3"  :value="3"/></view>
		</radio-group>
		<view class="btn" @click="ok">确定</view>
	</view>
</template>

<script>
	import { mapState, mapMutations} from 'vuex';
	export default {
		data() {
			return {
				type:-1,
				value:-1,
				values:["执行一次", "每天", "工作日", "自定义"]
			}
		},
		computed:{
			...mapState(["selectDevice"])
		},
		onLoad(e) {
			uni.setNavigationBarTitle({
			　　title:'重复'
			})
			this.type = parseInt(e.type);
			if(this.type == 1){
				if(this.selectDevice.turnOnRepeat)
					this.value = this.values.indexOf(this.selectDevice.turnOnRepeat)
				else 
					this.value = -1
			} else {
				if(this.selectDevice.turnOffRepeat)
					this.value = this.values.indexOf(this.selectDevice.turnOffRepeat)
				else 
					this.value = -1
			}
			
		},
		methods:{
			...mapMutations(["setSelectDeviceRepeat"]),
			selected(e){
				this.value = parseInt(e.detail.value);
				
			},
			ok(){
				if(this.value != -1){
					this.$store.commit("setSelectDeviceRepeat",
						{
							type:this.type,
							value:this.values[this.value],
						})
					uni.navigateBack({
						
					})
				}
				
			}
		}
	}
</script>

<style>
	.repeat .repeat-item{
		height:50px;
		line-height:50px;
		vertical-align:middle;
		width:calc(90% - 20px);
		margin:20px auto;
		padding:0px 10px;
		border:1px solid #000000;
		border-radius:10px;
	}
	
	.repeat .repeat-item radio{
		float:right;
		margin-right:20px;
	}
	
	.repeat .btn{
		background-color:rgba(22, 155, 213, 1);
		height:40px;
		line-height:40px;
		vertical-align:middle;
		text-align:center;
		width:60%;
		margin:30px auto;
		color:#fff;
		border-radius:5px;
	}
</style>
