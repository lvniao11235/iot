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
		modifyAddress:null
	},
	mutations:{
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