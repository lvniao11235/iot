export const baseUrl = 'http://39.98.107.68:8000/Api/';

export const request = options => {
	let _options = {...options};
	if(!(_options.url.startsWith('http') || _options.url.startsWith('https'))){
		_options.url = `${baseUrl}${_options.url}`;
	}
	return new Promise((resolve, reject)=>{
		uni.request({
			..._options,
			success:res=>{
				resolve(res);
			},
			fail:res=>{
				reject(res);
			}
		})
	})
}