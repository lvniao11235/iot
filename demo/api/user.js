import {baseUrl, request} from './request';

export const getUserInfoWechat = ()=>{
	return new Promise((resolve, reject)=>{
		uni.getUserInfo({
			provider:"weixin",
			success:res=>{
				resolve(res);
			},
			fail:res=>{
				reject(res);
			}
		});
	})
}

export const loginWechat = ()=>{
	return new Promise((resolve, reject)=>{
		uni.login({
			provider:"weixin",
			success:res=>{
				if(res.code && res.code.length > 0){
					resolve(res.code);
				} else {
					reject(res);
				}
			},
			fail:res=>{
				reject(res);
			}
		});
	})
}
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

export const updateUser = user => {
	return request({
		url:`user/updateUserInfo`,
		method:"POST",
		data:user
	});
}

// export const decodeUserInfo = (encryptedData, iv, sessionKey) => {
// 	return request({
// 		url:`user/decodeUserInfo1`,
// 		method:"POST",
// 		data:{encryptedData, iv, sessionKey}
// 	});
// }

export const decodeUserInfo = (encryptedData, iv, unionId) => {
	return request({
		url:`user/decodeUserInfo`,
		method:"POST",
		data:{encryptedData, iv, unionId}
	});
}

