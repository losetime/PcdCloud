<template>
	<view class="pb20">
		<view class="top posRelt" style="background-image:  url(../../static/img/mine_bg.png);">
			<view class="top_box w90 bgWhite abstrot ptb20 radius6 plr10">
				<view class="flex alcenter top_msg mb20" @click="goInfo">
					<image :src="msg.avatar" style="width: 80upx; height: 80upx;"></image>
					<view class="ml10">
						<view class="bold mb10 ft14">{{msg.nickname}}</view>
						<view class="ft14" v-show="showkc">
							矿场等级 : V{{msg.level}}
						</view>
						<view v-show="showkg">
							矿工等级：矿工
						</view>
					</view>
				</view>
				<!--安全中心、提币-->
				<view class="flex alcenter around">
					<view class="flex column alcenter jscenter" @click="jumpSecurityPage">
						<image class="mb10" style="width: 44upx; height: 54upx;" src="../../static/img/anquan.png"></image>
						<view class="ft14">安全中心</view>
					</view>
					<view class="flex column alcenter jscenter" @click="jumpExtractPage">
						<image class="mb10" style="width: 44upx; height: 54upx;" src="../../static/img/tibi.png"></image>
						<view class="ft14">提币</view>
					</view>
					<view class="flex column alcenter jscenter" @click="jumpInvitePage">
						<image class="mb10" style="width: 55upx; height: 52upx;" src="../../static/img/invite.png"></image>
						<view class="ft14">邀请好友</view>
					</view>
				</view>
			</view>
		</view>
		<!--列表-->
		<view class=" ptb10 mt55 list">
			<view class="plr10 bgWhite list01">
				<view class="flex between alcenter ptb20 " @click="jumpApplyPage">
					<view class="flex alcenter">
						<image src="/static/img/apply_icon.png" style="width: 36upx;height: 32upx;"></image>
						<text class="ml10">矿主申请</text>
					</view>
					<image src="/static/img/back.png" style="width: 17upx; height: 28upx;"></image>
				</view>
				<view class="flex between alcenter ptb20 " @click="jumpUnlockWarehoursePage">
					<view class="flex alcenter">
						<image src="/static/img/apply_icon.png" style="width: 36upx;height: 32upx;"></image>
						<text class="ml10">解仓申请</text>
					</view>
					<image src="/static/img/back.png" style="width: 17upx; height: 28upx;"></image>
				</view>
				<view class="flex between alcenter ptb20" @click="jumpLockWarehoursePage">
					<view class="flex alcenter">
						<image src="/static/img/lock_icon.png" style="width: 36upx;height: 32upx;"></image>
						<text class="ml10">锁仓提交</text>
					</view>
					<image src="/static/img/back.png" style="width: 17upx; height: 28upx;"></image>
				</view>
				<view class="flex between alcenter ptb20" @click="jumpOkcodePage">
					<view class="flex alcenter">
						<image src="/static/img/bind_icon.png" style="width: 36upx;height: 32upx;"></image>
						<text class="ml10">OK账号绑定</text>
					</view>
					<image src="/static/img/back.png" style="width: 17upx; height: 28upx;"></image>
				</view>
				<view class="flex between alcenter ptb20" @click="jumpIncomePage">
					<view class="flex alcenter">
						<image src="/static/img/detail.png" style="width: 36upx;height: 32upx;"></image>
						<text class="ml10">收益明细</text>
					</view>
					<image src="/static/img/back.png" style="width: 17upx; height: 28upx;"></image>
				</view>
			</view>
			<view class="" style="height: 15upx;background: #eee;"></view>
			<view class="plr10 bgWhite">
				<view class="flex between alcenter ptb20" @tap="jumpHelpPage">
					<view class="flex alcenter">
						<image src="/static/img/help.png" style="width: 32upx;height: 32upx;"></image>
						<text class="ml10">帮助中心</text>
					</view>
					<image src="/static/img/back.png" style="width: 17upx; height: 28upx;"></image>
				</view>
				<view class="flex between alcenter ptb20">
					<view class="flex alcenter" @tap="getVersion">
						<image src="/static/img/banben.png" style="width: 32upx;height: 32upx;"></image>
						<text class="ml10">版本号</text>
					</view>
					<view class="flex alcenter">
						<text class="gray9 mr10">{{version}}</text>
						<image src="/static/img/back.png" style="width: 17upx; height: 28upx;"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="ft16 tc ptb14 radius4 logout mt45 white w90 mauto" @click="logout">退出登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg: '',
				version: '',
				showUserInfo:false,
				showkc: false,
				showkg: false
			}
		},
		onShow() {
			this.getUserInfo();
			this.getVersion();
		},
		onLoad() {
			uni.startPullDownRefresh();
		},
		onPullDownRefresh() {
			this.getUserInfo();
			this.getVersion();
			//监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
			setTimeout(function() {
				uni.stopPullDownRefresh(); //停止下拉刷新动画
			}, 1000);
		},
		methods: {
			// 跳转安全中心
			jumpSecurityPage() {
				uni.navigateTo({
					url: '/pages/user/security'
				})
			},
			// 跳转提币页面
			jumpExtractPage() {
				uni.navigateTo({
					url: '/pages/user/extract'
				})
			},
			// 跳转邀请好友页面
			jumpInvitePage() {
				uni.navigateTo({
					url: '/pages/user/invite'
				})
			},
			// 跳转矿主申请页面
			jumpApplyPage() {
				uni.navigateTo({
					url: '/pages/user/apply'
				})
			},
			// 跳转解仓页面
			jumpUnlockWarehoursePage() {
				uni.navigateTo({
					url: '/pages/user/unlockWarehourse'
				})
			},
			// 跳转锁仓页面
			jumpLockWarehoursePage() {
				uni.navigateTo({
					url: '/pages/user/lockWarehourse'
				})
			},
			// 跳转ok账号页面
			jumpOkcodePage() {
				uni.navigateTo({
					url: '/pages/user/okCode'
				})
			},
			// 跳转收益明细页面
			jumpIncomePage() {
				uni.navigateTo({
					url: '/pages/user/income'
				})
			},
			// 跳转帮助中心页面
			jumpHelpPage() {
				uni.navigateTo({
					url: '/pages/user/help'
				})
			},
			// 版本号
			getVersion() {
				uni.showLoading();
				this.$api.getUpdate({},res => {
					uni.hideLoading();
					if (res.data.type == 'ok') {
						this.version = res.data.message.app_version;
					}
				})
			},
			goInfo() {
				uni.navigateTo({
					url: '/pages/mine/info'
				})
			},
			
			// 获取用户信息
			getUserInfo() {
				this.$api.getUserInfo({}, (res) => {
					if (res.data.type == 'ok') {
						this.msg = res.data.message;
						uni.setStorageSync('userinfo', res.data.message); //存储用户信息
						if (this.msg.is_miners == 1) {
							this.showkc = true
						}
						if (this.msg.is_miners == 0) {
							this.showkg = true
						}
					}
				})
			},

			// 退出登录
			logout() {
				uni.showModal({
					content: '确定要退出吗?',
					confirmColor: '#007AFF',
					success: (val) => {
						if (val.confirm) {
							this.$api.setLoginOut({}, (res) => {
								if (res.data.type == 'ok') {
									uni.removeStorageSync("token");
									uni.removeStorageSync("isLogin");
									uni.showToast({
										title:'退出成功'
									});
									setTimeout(() => {
										uni.reLaunch({
											url: '/pages/login/index'
										})
									}, 1000)
								}
							})
						}
					}
				})
			}
		}
	}
</script>

<style>
	page {
		background: #fff;
	}

	.top {
		background: url(../../static/img/mine_bg.png) top center no-repeat;
		width: 100%;
		height: 288upx;
		background-size: 100% 288upx;
	}

	.top_box {
		top: 40upx;
		left: 5%;
		box-sizing: border-box;
		box-shadow: 0 0 8px #ccc;
		;
	}

	.list>view>view {
		border-bottom: 1px solid #eee;
	}

	.list01>view:last-child {
		border: none;
	}

	.logout {
		background: #FC5D55;
	}
</style>
