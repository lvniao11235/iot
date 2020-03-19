export const baseUrl = 'https://xcu.shuimuqingyun.com/api/';

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