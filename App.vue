<script>
	export default {
		onLaunch: function() {
			// #ifdef APP-PLUS
			
			// 获取当前版本号
			let req = {
				appid: plus.runtime.appid,
				version: plus.runtime.version
			};
			// 更新推送
			this.$api.getUpdate({},res => {
				uni.hideLoading(); 
				if(res.data.type == 'ok'){
					var versionNew = res.data.message.app_version; //后台返回回来的版本	
					if(versionNew!=req.version){
						this.$api.getDownloadUrl({},res => {
							uni.hideLoading();
							if(res.data.type == 'ok'){ 
								let server = res.data.message 	// 获取更新地址
								uni.showModal({
									title: '更新提示',
									content: '新版本发布！',
									success: function(res) {
										if (res.confirm) {
											plus.runtime.openURL(server);
										} else if (res.cancel) {
											console.log('用户点击取消');
										}
									}
								});
							}
						})
								
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
