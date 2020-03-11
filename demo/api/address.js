import {baseUrl, request} from './request';

export const createFamily = (city, familyName, unionId) => {
	return request({
		url: `family/createFamily`,
		data:{city, familyName, unionId},
		method:'POST'
	});
}

export const familyBindDevice = (deviceName, familyId) => {
	return request({
		url: `family/familyBindDevice`,
		data:{deviceName, familyId},
		method:'POST'
	});
}

export const listFamilyBindDevices = (familyId) => {
	return request({
		url: `family/listFamilyBindDevices?familyId=${familyId}`,
		method:'GET'
	});
}

export const listFamilys = (unionId) => {
	return request({
		url: `family/listFamilys?unionId=${unionId}`,
		method:'GET'
	});
}

export const unBindDevice = (deviceId) => {
	return request({
		url: `family/unBindDevice?deviceId=${deviceId}`,
		method:'DELETE'
	});
}

export const deleteFamily = (familyId) => {
	return request({
		url: `family/deleteFamily?familyId=${familyId}`,
		method:'DELETE'
	});
}

export const updateFamily = (city, familyId, familyName) => {
	return request({
		url: `family/updateFamily`,
		data:{city, familyId, familyName},
		method:'PUT'
	});
}