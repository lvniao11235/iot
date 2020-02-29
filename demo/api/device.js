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
		url:`device/getDeviceDetail?deviceName=${id}`,
		method:'GET',
	});
}

export const removeDevice = (deviceId, unionId)=>{
	return request({
		url:`device/deleteUserBindDevice?deviceId=${deviceId}&unionId=${unionId}`,
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
		url:`service/createOrder`,
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

export const services = (productKey)=>{
	return request({
		url:`service/listServiceConfigs?productKey=${productKey}`,
		method:'GET'
	})
}

export const getDeviceName = (productKey) => {
	return request({
		url:`device/getDeviceName?productKey=${productKey}`,
		method:'GET'
	})
}

export const registerDevice = (productKey) => {
	return request({
		url:`device/registerDevice?productKey=${productKey}`,
		method:'GET'
	})
}

export const getOrderDetail = (orderId) => {
	return request({
		url:`service/getOrderDetail?orderId=${orderId}`,
		method:'GET'
	})
}

export const getOrders = (unionId) => {
	return request({
		url:`service/listOrders?unionId=${unionId}`,
		method:'GET'
	})
}

export const updateDeviceComment = (deviceComment, deviceId) => {
	return request({
		url:`device/updateDeviceComment`,
		data:{deviceComment, deviceId},
		method:'post'
	})
}