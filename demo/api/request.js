const request = (options) => {
	console.log(JSON.stringify(options))
	options.url = 'http://39.98.107.68:8000/Api/' + options.url;
	return uni.request(...options);
}

export default request;