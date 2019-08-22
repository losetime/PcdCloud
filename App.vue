<script>
	export default {
		onLaunch: function() {
			// #ifdef  APP-PLUS
			// 锁定屏幕方向
			plus.screen.lockOrientation('portrait-primary'); //锁定
			// 获取当前版本号
			let req = {
				appid: plus.runtime.appid,
				version: plus.runtime.version
			};
			// 判断是否更新
			this.$api.getUpdate({}, res => {
				if (res.data.type == 'ok') {
					let newVersion = res.data.message.app_version; // 后台返回回来的版本
					uni.setStorageSync('app_version', newVersion);
					if (newVersion != req.version) {
						uni.getStorage({
						    key: 'is_update_prompt',
						    success: function (res) {
								if (res.data === false) {
									return
								}else{
									uni.redirectTo({
										url: '/pages/update/index'
									})
								}
						    }
						})
					}
				}
			})
			// #endif
		},
		onShow: function() {
			console.log('App Show');
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
