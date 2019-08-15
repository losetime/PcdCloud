// var API = "http://www.wxlcoin.com/api/";
let API2 = 'http://192.168.1.3/api';

export default function http(url,type,param,callback){
	uni.request({
		url:API2 + url,
		method:type || 'GET',
		data:param,
		header:{'AUTHORIZATION': uni.getStorageSync('token')},//自定义请求头信息
		success:function (res) {
			console.log(res)
			if(res.data.type=='ok'){ 
			    callback&&callback(res)
			}else{
			    uni.showToast({
			    	title: res.data.message,
			    	mask: false,
					icon:'none',
			    	duration: 1500
			    });
				if(res.data.type == '999'){
					setTimeout(()=>{
						uni.redirectTo({
							url:'/pages/login/index'
						})
					},1000)
				}
			}
		}
	})
}