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
				addr:'北京的家'
			},
			{
				id:2,
				addr:'我的家'
			}
		],
		currentAddress:{
				id:2,
				addr:'我的家'
			}
	},
	mutations:{
		setAppName(state, newAppName){
			state.appName = newAppName;
		},
		setCode(state, code){
			state.code = code;
		}
	}
})

export default store