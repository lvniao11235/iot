import {request} from './request';

export const getOpenId = code => {
	return request({
		url:`http://qingyun.kiwihealthcare123.com/getopenid.py?code=${code}`,
		method:'GET'
	});
}

export const getUser = openid => {
	return request({
		url:`endusers/${openid}`,
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