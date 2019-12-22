import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		appName:"demo",
		code:null,
		address:[
			{
				id:1,
				addr:'北京的家',
				city:'北京'
			},
			{
				id:2,
				addr:'我的家',
				city:'西安'
			}
		],
		currentAddress:{
			id:2,
			addr:'我的家',
			city:'西安'
		},
		modifyAddress:null,
		brands:[
			{id:1, name:"美的", products:[
				{id:1, name:"V2空气净化器", img:'/static/images/v2.png'},
				{id:2, name:"V3空气净化器", img:'/static/images/v3.png'}
			]},
			{id:2, name:"沁园", products:[
				{id:1, name:"V2空气净化器", img:'/static/images/v2.png'},
				{id:2, name:"V3空气净化器", img:'/static/images/v3.png'}
			]},
			{id:3, name:"海尔", products:[
				{id:1, name:"V2空气净化器", img:'/static/images/v2.png'},
				{id:2, name:"V3空气净化器", img:'/static/images/v3.png'}
			]},
			{id:4, name:"Blue air", products:[
				{id:1, name:"V2空气净化器", img:'/static/images/v2.png'},
				{id:2, name:"V3空气净化器", img:'/static/images/v3.png'}
			]},
			{id:5, name:"华为", products:[
				{id:1, name:"V2空气净化器", img:'/static/images/v2.png'},
				{id:2, name:"V3空气净化器", img:'/static/images/v3.png'}
			]},
		],
		selectBrand:null,
		selectProduct:null,
	},
	mutations:{
		setSelectProduct(state, product){
			state.selectProduct = product;
		},
		setSelectBrand(state, brand){
			state.selectBrand = brand;
		},
		createAddress(state, address){
			let max = 0;
			state.address.forEach(x=>{
				if(max < x.id) max = x.id;
			})
			address.id = max+1;
			state.address.push(address);
		},
		removeAddress(state, id){
			let index = state.address.indexOf(x=>x.id == id);
			state.address.splice(index, 1);
		},
		changeAddress(state, address){
			let temp = state.address.find(x=>x.id == address.id);
			temp.addr = address.addr;
			temp.city = address.city;
			//state.address = state.address;
		},
		setModifyAddress(state, address){
			state.modifyAddress = address;
		},
		setAppName(state, newAppName){
			state.appName = newAppName;
		},
		setCode(state, code){
			state.code = code;
		}
	}
})

export default store