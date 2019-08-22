<template>
	<view class="invite_wrapper">
		<view class="invite_mask">
			<view class="invite_content">
				<image :src="codeImg" class="code__image"></image>
				<view class="invite_code">
					{{inviteCode}}
				</view>
				<image src="../../static/img/user/copy.png" class="copy__btn" @click="copyCode"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import QR from '../../static/js/qrcode.js'
	export default {
		data() {
			return {
				codeImg: '',
				inviteCode: ''
			}
		},
		onReady() {
			this.getInviteCode();
		},
		onPullDownRefresh() {
			this.getInviteCode();
		},
		methods: {
			// 获取邀请码
			getInviteCode() {
				this.$api.getInviteCode({}, res => {
					if (res.data.type == 'ok') {
						this.inviteCode = res.data.message.code;
						let img = QR.createQrCodeImg(res.data.message.pic_url);
						this.codeImg = img;
						uni.stopPullDownRefresh(); //停止下拉刷新动画
					}
				})
			},
			copyCode() {
				uni.setClipboardData({
					data: this.inviteCode,
					success() {
						uni.showToast({
							title: '复制成功'
						})
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.invite_wrapper {
		width: 100%;
		height: 100vh;
		background-image: url(../../static/img/user/code_bg.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.invite_mask {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 450upx;
		height: 450upx;
		margin-top: 90%;
		background-image: url(../../static/img/user/code_box.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		background-position: center;

		.invite_content {
			display: flex;
			flex-direction: column;
			align-items: center;
			background-repeat: no-repeat;
			background-size: 100%;
			margin-top: 20upx;

			.code__image {
				width: 200upx;
				height: 200upx;
			}

			.invite_code {
				font-weight: 700;
				margin: 10upx 0;
			}

			.copy__btn {
				width: 283upx;
				height: 74upx;
			}
		}
	}
</style>
