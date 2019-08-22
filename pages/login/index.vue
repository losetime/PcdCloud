<template>
	<view class="login-wrapper">
		<view class="logo-wrap">
			<view class="logo_icon">
				<image src="../../static/img/login/logo.png" style="width: 100%;height: 100%;"></image>
			</view>
			<view class="logo_title">PCD Cloud</view>
		</view>
		<view class="form-wrap">
			<view class="form_acount">
				<image src="../../static/img/login/account.png" style="width: 20px;height: 20px;"></image>
				<input type="text" v-model="account" placeholder="账号/手机号" />
			</view>
			<view class="form_password">
				<image src="../../static/img/login/password.png" style="width: 20px;height: 20px;"></image>
				<input type="password" v-model="password" placeholder="用户密码" />
			</view>
		</view>
		<button type="primary" class="login__btn" @click="onLoginBtn">登录</button>
		<view class="account_handle">
			<view class="register_account" @click="register">注册账户</view>
			<view class="forget_pass" @click="forgetPass">忘记密码</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				account: "", // 账户
				password: ""  // 密码
			}
		},
		methods: {
			
			// 登录
			onLoginBtn() {
				uni.showLoading({
					title: '登录中...'
				});
				if (this.account == '') {
					uni.showToast({
						title: '请输入手机号',
						icon: 'none'
					});
					return;
				};
				if (this.password == '') {
					uni.showToast({
						title: '请输入密码',
						icon: 'none'
					});
					return;
				};
				this.$api.setLogin({
					mobile: this.account,
					password: this.password,
				}, (res) => {
					uni.hideLoading();
					if (res.data.type == 'ok') {
						let result = res.data.message
						uni.setStorageSync('user_token',result.token);
						// 验证ok账号是否绑定,0是没绑定，1是已绑定
						if(result.ok_bind === 0){
							uni.navigateTo({
								url: '/pages/login/okCode'
							})							
						}else{
							uni.switchTab({
								url: '/pages/mine/index'
							})
						}
					}else{
						uni.showToast({
							title: res.data.message,
							icon: 'none'
						});
					}
				})
			},
			
			// 跳转注册账号页面
			register() {
				uni.navigateTo({
					url: '/pages/login/register'
				})
			},

			// 跳转忘记密码页面
			forgetPass() {
				uni.navigateTo({
					url: '/pages/login/forgetPass'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.login-wrapper {
		height: 100vh;
		background-color: #3B3C4E;
	}

	.logo-wrap {
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		padding-top:117px;
		.logo_icon {
			width: 114px;
			height: 74px;
			// background-image: url("../assets/img/下载.png");
			background-size: cover;
			margin: 0 auto;
		}

		.logo_title {
			margin-top:12px;
			font-size: 18px;
			color: #ffffff;
		}
	}

	.form-wrap {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top:49px;
		.form_acount,
		.form_password {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 70%;
			height: 35px;
			padding: 0 10px;
			margin-bottom: 20px;
			border-bottom: 1px solid #ccc;
			font-size: 15px;
			input{
				width:88%;
				height:30px;
				outline-style: none;
				color:#ffffff;
				&:focus {
					border-color: #409eff;
				}
			}
		}
	}
	
	.login__btn{
		width: 78%;
		margin:15px auto;
	}
	
	.account_handle{
		width: 78%;
		display:flex;
		justify-content:space-between;
		margin: 0 auto;
		color:#FFFFFF;
	}
</style>
