import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{ 
		appName:"健康生活",
		code:null,
		address:[],
		currentAddress:null,
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
		devices:[
		],
		selectDevice:null,
		currentUser:null,
		services:[
			{ type:'一年期服务', price:230, oldprice:199},
			{ type:'二年期服务', price:478, oldprice:399},
			{ type:'三年期服务', price:770, oldprice:599},
		],
		currentService:null,
		startTime:null,
		shutdownTime:null,
		currentTab:null,
		currentFamilyData:{},
		testweather:{},
		openId:null
	},
	mutations:{
		setOpenId(state, openId){
			state.openId = openId;
		},
		setWeatherData(state, data){
			state.testweather = data;
		},
		setCurrentFamilyData(state, data){
			state.currentFamilyData = data;
		},
		setCurrentTab(state, tab){
			state.currentTab = tab;
		},
		modifyCurrentUser(state, data){
			let user = state.currentUser;
			user.avatarUrl = data.avatarUrl;
			user.nickName = data.nickName;
			user.gender = data.gender;
			user.birthday = data.birthday;
			state.currentUser = user;
		},
		setAddress(state, address){
			state.address = address;
			if(state.address && state.address.length > 0){
				state.currentAddress = state.address[0]
			}
		},
		setStartTime(state, startTime){
			state.startTime = startTime;
		},
		setShutdownTime(state, shutdownTime){
			state.shutdownTime = shutdownTime;
		},
		setcurrentAddress(state, addr){
			state.currentAddress = addr;
			if(state.address && state.address.length > 0){
				
				let index = state.address.findIndex(x=>x.id == addr.id);
				if(index == -1){
					state.address.push(addr);
				}
			} else {
				state.address = [];
				state.address.push(addr);
			}
		},
		setCurrentService(state, service){
			state.currentService = service;
		},
		setSelectDeviceProperty(state, data){
			state.selectDevice[data.property] = data.value;
			let device = state.selectDevice;
			state.selectDevice = null;
			state.selectDevice = device;
		},
		setDevices(state, devices){
			state.devices = devices;
		},
		setCurrentUser(state, user){
			state.currentUser = user;
		},
		setSelectDeviceStart(state, flag){
			state.selectDevice.start = flag;
			let device = state.selectDevice;
			state.selectDevice = null;
			state.selectDevice = device;
		},
		setSelectDeviceTurnOnTime(state, time){
			state.selectDevice.turnOnTime = time;
			let device = state.selectDevice;
			state.selectDevice = null;
			state.selectDevice = device;
		},
		setSelectDeviceTurnOffTime(state, time){
			state.selectDevice.turnOffTime = time;
			let device = state.selectDevice;
			state.selectDevice = null;
			state.selectDevice = device;
		},
		setSelectDeviceRepeat(state, value){
			if(value.type == 1){
				state.selectDevice.turnOnRepeat = value.value;
			} else {
				state.selectDevice.turnOffRepeat = value.value;
			}
			let device = state.selectDevice;
			state.selectDevice = null;
			state.selectDevice = device;
		},
		setSelectDeviceTurnOn(state, flag){
			state.selectDevice.turnOn = flag;
			let device = state.selectDevice;
			state.selectDevice = null;
			state.selectDevice = device;
		},
		setSelectDeviceTurnOff(state, flag){
			state.selectDevice.turnOff = flag;
			let device = state.selectDevice;
			state.selectDevice = null;
			state.selectDevice = device;
		},
		setSelectDeviceClock(state, flag){
			state.selectDevice.clock = flag;
			let device = state.selectDevice;
			state.selectDevice = null;
			state.selectDevice = device;
		},
		setSelectDeviceSpeed(state, speed){
			state.selectDevice.speed = speed;
			let device = state.selectDevice;
			state.selectDevice = null;
			state.selectDevice = device;
		},
		setSelectDeviceAuto(state, flag){
			state.selectDevice.auto = flag;
			let device = state.selectDevice;
			state.selectDevice = null;
			state.selectDevice = device;
		},
		setSelectDeviceSleep(state, flag){
			state.selectDevice.sleep = flag;
			let device = state.selectDevice;
			state.selectDevice = null;
			state.selectDevice = device;
		},
		setSelectDevice(state, device){
			state.selectDevice = device;
		},
		setSelectProduct(state, product){
			state.selectProduct = product;
		},
		setSelectBrand(state, brand){
			state.selectBrand = brand;
		},
		createAddress(state, address){
			if(state.currentAddress == null){
				state.currentAddress = address;
			}
			
			if(state.address && state.address.length > 0){
				state.address.push(address);
			} else {
				state.address = [];
				state.address.push(address);
			}
			
		},
		removeAddress(state, id){
			let index = state.address.indexOf(x=>x.id == id);
			state.address.splice(index, 1);
		},
		changeAddress(state, address){
			let temp = state.address.find(x=>x.id == address.id);
			temp.familyName = address.familyName;
			temp.id = address.id;
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