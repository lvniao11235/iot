import {baseUrl, request} from './request';

export const getOpenId = code => {
	return request({
		url:`user/getOpenId?code=${code}`,
		method:'GET'
	});
}

export const getUser = openid => {
	return request({
		url:`user/getUserInfo?unionId=${openid}`,
		method:"GET",
	});
}

export const registerUser = user => {
	return request({
		url:`endusers`,
		method:"POST",
		data:user
	});
}