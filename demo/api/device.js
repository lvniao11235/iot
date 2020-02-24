import {baseUrl, request} from './request';

export const product = (id) => {
	console.log(id)
	return request({
		url: `device/listDeviceTypes?brandId=${id}`,
		method:'GET'
	});
}

export const devices = (openid)=>{
	return request({
		url:`device/listUserBindDevices?unionId=${openid}`,
		method:'GET'
	});
}

export const getDevice = id=>{
	return request({
		url:`DeviceDetails/${id}`,
		method:'GET',
	});
}

export const removeDevice = (id)=>{
	return request({
		url:`Devices/${id}`,
		method:'DELETE',
	});
}

export const addDevice = data=>{
	return request({
		url:`device/bindDevice`,
		method:'POST',
		data
	});
}


export const buyService = data => {
	return request({
		url:`Orders`,
		method:'POST',
		data:data
	});
}

export const products = ()=>{
	return request({
		url:`device/listBrands`,
		method:'GET'
	});
}

export const services = ()=>{
	return request({
		url:`ServiceConfigs`,
		method:'GET'
	})
}