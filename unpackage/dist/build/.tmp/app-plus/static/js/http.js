// var API = "http://www.wxlcoin.com/api/";
let API2 = 'http://192.168.1.7/api';

export default function http(url,type,param,callback){
	uni.request({
		url:API2 + url,
		method:type || 'GET',
		data:param,
		header:{'AUTHORIZATION': uni.getStorageSync('user_token')},//自定义请求头信息
		success:function (res) {
			if(res.statusCode === 500) {
				uni.showToast({
					title: "服务器错误，请稍后重试",
					mask: false,
					icon:'none',
					duration: 1000
				});
				return
			}
			// if(res.data.type === '999'){
			// 	setTimeout(()=>{
			// 		uni.redirectTo({
			// 			url:'/pages/login/index'
			// 		})
			// 	},1000)
			// }
			callback&&callback(res)
		}
	})
}