<template>
	<view class="update-pass_wrapper">
		<view class="pass__form--list">
			<view class="pass__form--item">
				<text>旧密码</text>
				<input class="item__input" type="password" v-model="oldPass" placeholder="请输入旧密码" />
			</view>
			<view class="pass__form--item">
				<text>新密码</text>
				<input class="item__input" type="password" v-model="newPass" placeholder="请设置新密码" />
			</view>
			<view class="pass__form--item">
				<text>确认新密码</text>
				<input class="item__input" type="password" v-model="newPassConfirm" placeholder="请再次确认新密码" />
			</view>
		</view>
		<button type="primary" class="submit__btn" @click="onUpdatePass">提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldPass: '',
				newPass: '',
				newPassConfirm: ''
			}
		},
		methods: {
			// 更新密码
			onUpdatePass() {
				if (this.oldPass == '') {
					uni.showToast({
						title: '请输入旧密码',
						icon: 'none'
					});
					return;
				};
				if (this.newPass == '') {
					uni.showToast({
						title: '请输入新密码',
						icon: 'none'
					});
					return;
				};
				if (this.newPass.length < 6 || this.newPass.length > 16) {
					uni.showToast({
						title: '新密码长度在6~16位之间',
						icon: 'none'
					});
					return;
				};
				if (this.newPassConfirm == '') {
					uni.showToast({
						title: '请再次输入新密码',
						icon: 'none'
					});
					return;
				};
				if (this.newPassConfirm != this.newPass) {
					uni.showToast({
						title: '两次输入的密码不一样',
						icon: 'none'
					});
					return;
				};
				uni.showLoading();
				this.$api.updatePass({
					password: this.oldPass,
					new_password: this.newPassConfirm
				}, res => {
					uni.hideLoading();
					if (res.data.type == 'ok') {
						uni.showToast({
							title: '修改成功'
						});
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.update-pass_wrapper {
		padding: 20upx;
	}

	.pass__form--list {
		.pass__form--item:nth-child(2) {
			border-top: 1px solid #EFEFEF;
			border-bottom: 1px solid #EFEFEF;
		}

		.pass__form--item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 20upx;
			background-color: #FFFFFF;

			text {
				width: 40%;
			}

			.item__input {
				display: block;
				width: 100%;
				height: 80upx;
				padding: 0 10upx;
				background-color: none;
			}
		}
	}

	.submit__btn {
		margin-top: 20upx;
	}
</style>
