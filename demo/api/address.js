import {baseUrl, request} from './request';

export const createFamily = (city, cityId, familyName, unionId) => {
	return request({
		url: `family/createFamily`,
		data:{city, cityId, familyName, unionId},
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

export const get = (id) => {
	return request({
		url: `weather/get?id=${id}`,
		method:'GET'
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

export const updateFamily = (city, cityId, familyId, familyName) => {
	return request({
		url: `family/updateFamily`,
		data:{city, cityId, familyId, familyName},
		method:'PUT'
	});
}