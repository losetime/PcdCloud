<template>
	<view class="user-wrapper">
		<view class="user-info_wrap">
			<view class="user-info" @click="jumpChangeUserInfo">
				<view class="user_avatar">
					<image :src="userInfo.avatar"></image>
				</view>
				<view class="user_name">
					{{userInfo.nickname}}
				</view>
				<!-- <view class="user_grade">矿工等级：V{{userInfo.level_name}}</view> -->
			</view>
		</view>
		<view class="important_handle_wrap">
			<view class="important_handle_item" @click="jumpSecurityPage">
				<image src="../../static/img/user/anquan.png"></image>
				<text>安全中心</text>
			</view>
			<view class="important_handle_item" @click="jumpInvitePage">
				<image src="../../static/img/user/invite.png"></image>
				<text>邀请好友</text>
			</view>
			<view class="important_handle_item">
				<image src="../../static/img/user/anquan.png"></image>
				<text>联系我们</text>
			</view>
		</view>
		<view class="handle_wrap">
			<view class="handle_item" v-for="(item,index) in handleMenu" :key="index" @click="onJumphandle(index)">
				<view class="handle_left">
					<image :src="item.leftPic"></image>
					<text>{{item.text}}</text>
				</view>
				<view class="handle_right">
					<view v-if="index===3">{{appVersion}}</view>
					<image :src="item.rightPic" v-if="index!==3"></image>
				</view>
			</view>
		</view>
		<button class="exit_login" type="warn">退出登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {},
				appVersion: '',
				// 操作菜单
				handleMenu: [
					{
						leftPic: require('../../static/img/user/bind_icon.png'),
						text: '收益明细',
						rightPic: require('../../static/img/common/arrowRight.png')
					},
					{
						leftPic: require('../../static/img/user/bind_icon.png'),
						text: 'OK账户解绑',
						rightPic: require('../../static/img/common/arrowRight.png')
					},
					{
						leftPic: require('../../static/img/user/help.png'),
						text: '帮助中心',
						rightPic: require('../../static/img/common/arrowRight.png')
					},
					{
						leftPic: require('../../static/img/user/banben.png'),
						text: '版本',
						rightPic: require('../../static/img/common/arrowRight.png')
					}
				]
			}
		},
		onReady() {
			this.getUserInfo();
			this.appVersion = uni.getStorageSync('app_version');
		},
		onPullDownRefresh() {
			this.getUserInfo();
		},
		methods: {
			// 修改账户页面
			jumpChangeUserInfo() {
				uni.navigateTo({
					url: '/pages/user/userInfo'
				})
			},
			// 跳转安全中心
			jumpSecurityPage() {
				uni.navigateTo({
					url: '/pages/user/security'
				})
			},
			// 跳转邀请好友页面
			jumpInvitePage() {
				uni.navigateTo({
					url: '/pages/user/invite'
				})
			},
			// 跳转操作
			onJumphandle(index) {
				switch (index) {
					// 跳转收益明细页面
					case 0:
						uni.navigateTo({
							url: '/pages/user/income'
						})
						break;
					// 跳转ok账号页面
					case 1:
						uni.navigateTo({
							url: '/pages/user/okCode'
						})
						break;
					// 跳转帮助中心页面
					case 2:
						uni.navigateTo({
							url: '/pages/user/help'
						})
						break;
				}
			},
			// 获取用户信息
			getUserInfo() {
				this.$api.getUserInfo({}, (res) => {
					if (res.data.type == 'ok') {
						this.userInfo = res.data.message.baseInfo;
						uni.setStorageSync('user_info', res.data.message); //存储用户信息
						uni.stopPullDownRefresh(); //停止下拉刷新动画
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
									uni.removeStorageSync("user_token");
									uni.showToast({
										title: '退出成功'
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

<style lang="less" scoped>
	.user-wrapper {
		height: 100vh;
		background-color: #FFFFFF;
	}
	.user-info_wrap {
		position:relative;
		height: 350upx;
		margin-bottom:120upx;
		background-image: url('../../static/img/user/header.png');
		background-size: cover;
		font-size: 15px;
		.user-info{
			position:absolute;
			top:200upx;
			left:60upx;
			.user_avatar {
				width: 120upx;
				height: 120upx;
				line-height:120upx;
				image {
					width: 120upx;
					height: 120upx;
				}
			}
			.user_name {}
			
			.user_grade {}
		}
	}

	.important_handle_wrap {
		height: 180upx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: 20upx;
		// box-shadow: 0px 5px 5px 0px #DFDFDF;
		box-shadow: #DDDCDC 0px 0px 5px;

		.important_handle_item {
			display: flex;
			flex-direction: column;
			align-items: center;

			image {
				width: 50upx;
				height: 50upx;
				margin-bottom:10upx;
			}

			text {
			}
		}
	}

	.handle_wrap {
		padding: 0 20upx;
		.handle_item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 100upx;
			border-bottom: 1upx solid #EAEAEA;

			.handle_left {
				display: flex;
				align-items: center;

				image {
					width: 30upx;
					height: 30upx;
					margin: 0 10upx;
				}

				text { }
			}

			.handle_right {
				margin: 0 10upx;				
				image{
					width: 20upx;
					height: 20upx;
				}
			}
		}
	}

	.exit_login {
		margin-top: 50upx;
		width: 70%;
	}
</style>
