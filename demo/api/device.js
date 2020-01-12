import {baseUrl, request} from './request';

export const product = (id) => {
	console.log(id)
	return uni.request({
		url: `${baseUrl}M_DeviceModel/${id}`,
		method:'GET'
	});
}

export const devices = (openid)=>{
	return request({
		url:`Devices?endUserId=${openid}`,
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
		url:`Devices`,
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