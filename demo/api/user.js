import {baseUrl, request} from './request';

export const login = ()=>{
	let currentUser = null;
	let phone = {};
	return new Promise((resolve, reject)=>{
		getUserInfoWechat().then(res=>{
			currentUser = res.userInfo;
			phone = {};
			phone.encryptedData = res.encryptedData;
			phone.iv = res.iv;
			currentUser.phoneData = phone;
			return loginWechat();
		}).then(res=>{
			return getOpenId(res)
		}).then(res=>{
			if(res.data.data.unionid){
				currentUser.OpenId = res.data.data.unionid;
				return getUser(currentUser.OpenId);
			} 
		}).then(res=>{
			if(res.data.data){
				currentUser.firstLogin = res.data.data.avatarUrl == null 
					&& res.data.data.nickName == null;
				currentUser = {
					...res.data.data,
					...currentUser
				}
				resolve(currentUser);
			}
		}).catch(res=>{
			reject(res);
		});
	})
	
}

export const getUserInfoWechat = ()=>{
	return new Promise((resolve, reject)=>{
		uni.getUserInfo({
			provider:"weixin",
			withCredentials:true,
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

export const setCurFamilyId = (familyId, unionId) => {
	return request({
		url: `user/setCurFamilyId?familyId=${familyId}&unionId=${unionId}`,
		method:'GET'
	});
}

export const getCurFamilyId = (unionId) => {
	return request({
		url: `user/getCurFamilyId?&unionId=${unionId}`,
		method:'GET'
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

export const getFamilyAvgData = (code, familyId) => {
	return request({
		url:`family/getFamilyAvgData?code=${code}&familyId=${familyId}`,
		method:"GET"
	});
}
