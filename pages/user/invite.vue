<template>
	<view class="invite" style="background-image:url(../../static/img/code_bg.png);">
		<view class="code_box" style="background-image: url(../../static/img/code_box.png);">
			<view class="codeBox tc flex alcenter jscenter pt50">
				<image style="width: 200upx; height: 200upx;" :src="codeImg" mode=""></image>
			</view>
			<view class="ft18 bold tc mt10">{{inviteCode}}</view>
			<view class="tc mt10">
				<image class="" @click="copy" src="../../static/img/copy.png" style="width: 283upx; height: 74upx;"></image>
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
		onLoad() {
			this.getInviteCode();
		},
		methods: {
			// 获取邀请码
			getInviteCode() {
				uni.showLoading()
				this.$api.getInviteCode({}, res => {
					uni.hideLoading();
					if (res.data.type == 'ok') {
						this.inviteCode = res.data.message.code;
						console.log(res);
						let img = QR.createQrCodeImg(res.data.message.pic_url);
						this.codeImg = img;
					}
				})
			},
			copy() {
				var that = this;
				uni.setClipboardData({
					data: that.inviteCode,
					success() {
						uni.showToast({
							title: '复制成功'
						})
					},
					fail() {
						uni.showToast({
							title: '复制失败',
							icon: 'loading'
						})
					}
				})
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
	}

	.invite {
		width: 100%;
		height: 100%;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		background-position: center;
		position: relative;
	}

	.code_box {
		width: 76%;
		height: 500upx;
		background-repeat: no-repeat;
		background-size: 100%;
		margin: 0 auto;
		/* margin-top: 650upx; */
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
		top: 82%;
	}
</style>
