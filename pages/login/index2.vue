<template>
	<view class="login-wrapper">
		<!-- <canvas canvas-id="canvas-wrap" style="width: 300px; height: 200px;"></canvas> -->
		<view class="logo-wrap">
			<view class="logo_icon">
				<image src="../../static/img/login/logo.png" style="width: 100%;height: 100%;"></image>
			</view>
			<view class="logo_title">PCD Cloud</view>
		</view>
		<view class="form-wrap">
			<view class="form_acount">
				<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/customerHL.png" style="width: 20px;height: 20px;"></image>
				<input type="text" v-model="acount" placeholder="账号/手机号" />
			</view>
			<view class="form_password">
				<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/homeHL.png" style="width: 20px;height: 20px;"></image>
				<input type="password" v-model="password" placeholder="用户密码" />
			</view>
		</view>
		<view class="remember-pass_wrap">
			<checkbox-group @change="radioChange">
				<checkbox value="true" color="#1783FF"/>
				<text>记住密码</text>
			</checkbox-group>
		</view>
		<button type="primary" class="login__btn" @click="onLoginBtn">登录</button>
		<view class="account_handle">
			<view class="register_account" @click="register">注册账户</view>
			<view class="forget_pass" @click="forgetPass">忘记密码</view>
		</view>
	</view>
</template>

<script>
	import country from '../../static/js/country.js'
	export default {
		data() {
			return {
				acount: "", //账户
				password: "", //密码
				isShow: false,
				val: 0,
				list: country,
				userinfo: ''
			}
		},
		onLoad() {
			this.getUserInfo()
		},
		onReady(){
			this.paintCanvas();
		},
		methods: {
			// 记住密码
			radioChange(val) {
				console.log(val)
				// 有值说明被选中
				if(val.detail.value.length){
					// this.setUpdateStorage(false);
				}else{
					// this.setUpdateStorage(true);
				}
			},
			
			// 登录
			onLoginBtn() {
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
				uni.showLoading({
					title: '登录中...'
				});
				this.$api.setLogin({
					mobile: this.account,
					password: this.password,
				}, (res) => {
					if (res.data.type == 'ok') {
						uni.hideLoading();
						uni.setStorageSync('token', res.data.message);
						uni.setStorageSync("isLogin", true)
						uni.setStorageSync('mobile', res.data.message.mobile);
						//that.account = uni.getStorageSync('mobile')							
						uni.switchTab({
							url: '/pages/index/index'
						})
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
			},

			// 获取用户信息
			getUserInfo() {
				this.userinfo = uni.getStorageSync('userinfo');
				this.account = this.userinfo.mobile
			},

			//使用canvas绘制登录背景
			paintCanvas() {
				let view = uni.createSelectorQuery().in(this).select(".login-wrapper");
				view.fields({
				  size: true,
				  scrollOffset: true
				}, data => {
				  console.log("得到节点信息" + JSON.stringify(data));
				  console.log("节点的宽为" + data.width);
				}).exec();
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
				&:focus {
					border-color: #409eff;
				}
			}
		}
	}
	
	.remember-pass_wrap{
		width: 78%;
		margin:0 auto;
		checkbox{
			transform:scale(0.6);
		}
		text{
			color:#FFFFFF;
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
