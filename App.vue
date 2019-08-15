<script>
	export default {
		onLaunch: function() {
			let that = this;
			let server = null;
			
			// #ifdef APP-PLUS
			this.$api.getDownloadUrl({},(res) => {
				uni.hideLoading();
				if(res.data.type == 'ok'){ 
					 server = res.data.message 	//检查更新地址	 
					 console.log("我是下载地址",server)
				}
			})
			//var server = 'http://web.etedex.com/download/'; //检查更新地址
			// 打包时候的版本号
			let req = {
				//升级检测数据
				appid: plus.runtime.appid,
				version: plus.runtime.version
			};
			console.log("打包时候的版本号",req)
			// 更新推送
			this.$api.getUpdate({},(res) => {
				uni.hideLoading(); 
				if(res.data.type == 'ok'){
					var versionNew = res.data.message.app_version; //后台返回回来的版本	
					console.log(versionNew,"我是后台返回来的版本号")
					console.log(req.version,"我是打包时候的版本号1")
					if(versionNew!=req.version){
						uni.showModal({
							title: '更新提示',
							content: '新版本发布！',
							//showCancel:false,
							success: function(res) {
								if (res.confirm) {
									plus.runtime.openURL(server);
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						});		
					}			   
				}
			})
			//#endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import url("/static/css/common.css");
	.status_bar {  
		height: var(--status-bar-height);  
		width: 100%;  
		background-color: #fff;  
	} 
	.top_view {  
		height: var(--status-bar-height);  
		width: 100%;  
		position: fixed;  
		background-color: #fff;  
		top: 0;  
		z-index: 999;  
	}  
</style>
