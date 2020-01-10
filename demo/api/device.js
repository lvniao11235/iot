import request from './request';

export const product = (id) => {
	console.log(id)
	return uni.request({
		url:'http://39.98.107.68:8000/Api/M_DeviceModel/' + id,
		method:'GET'
	});
}