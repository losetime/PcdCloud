<template>
	<view class="register_wrapper">
		<view class="form_item">
			<text>手机号码</text>
			<input type="text" v-model="mobile" placeholder="请输入手机号码" />
		</view>
		<view class="form_item">
			<text>验证码</text>
			<input type="text" v-model="verifyCode" placeholder="请输入手机验证码" />
			<button size="mini" class="verify_btn" :disabled='disabledVerify' @click="getVerifyCode">{{codeText}}</button>
		</view>
		<view class="form_item">
			<text>密码</text>
			<input type="text" v-model="newPassword" placeholder="请输入密码" />
		</view>
		<view class="form_item">
			<text>邀请码</text>
			<input type="text" v-model="inviteCode" placeholder="请输入邀请码" />
		</view>
		<button type="primary" class="form_btn" :disabled='disabledSubmit' @click="onRegister">注册</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobile: '', 					// 手机号
				verifyCode: '', 				// 验证码
				newPassword:'', 				// 新的密码
				inviteCode:'',					// 邀请码
				codeText: '获取验证码', 			// 验证码按钮文本
				countdown: 60,	 				// 倒计时
				disabledVerify:false,   		// 禁用验证码按钮
				disabledSubmit:false,			// 禁用提交按钮
				countDownInterval:null          // 倒计时定时器
			}
		},
		methods: {
			// 倒计时
			countDownFn(){
				this.codeText = '60S';
				this.disabledVerify = true;
				this.countDownInterval = setInterval(() => {
					this.countdown--;
					if (this.countdown > 0){
						this.codeText = this.countdown + 'S';
					} else {
						clearInterval(this.countDownInterval);
						this.countdown = 60;
						this.disabledVerify = false;
						this.codeText = '获取验证码';
					}
				}, 1000)
			},
			
			// 获取验证码
			getVerifyCode() {

				if (this.mobile === '') {
					uni.showToast({
						title:'请输入手机号',
						icon:'none'
					});
					return
				}
				if (!this.$util.checkMobile(this.mobile)) {
					uni.showToast({
						title:'手机号格式有误',
						icon:'none'
					})
					return
				}
				if (this.countdown !== 60) return;
				
				this.countDownFn();
				
				this.$api.getVerifyCode({
					mobile: this.mobile,
					type: 'register'
				}, res => {
					if(res.data.type !== 'ok') {
						// 用户名已存在
						clearInterval(this.countDownInterval);
						this.disabledVerify = false;
						this.codeText = '获取验证码';
					}
					uni.showToast({
						title:res.data.message,
						icon:'none'
					});
				})
			},

			// 注册
			onRegister() {

				if (this.mobile === '') {
					uni.showToast({
						title:'请输入手机号',
						icon:'none'
					});
					return
				}
				if (!this.$util.checkMobile(this.mobile)) {
					uni.showToast({
						title:'手机号格式有误',
						icon:'none'
					})
					return
				}
				if (this.verifyCode === '') {
					uni.showToast({
						title:'验证码不能为空',
						icon:'none'
					});
					return;
				};
				if (this.newPassword === '') {
					uni.showToast({
						title:'请设置您的密码',
						icon:'none'
					});
					return;
				};
				if (this.newPassword.length < 6 || this.newPassword.length > 16) {
					uni.showToast({
						title:'密码必须在6到16位之间',
						icon:'none'
					});
					return;
				};
				if (this.inviteCode === '') {
					uni.showToast({
						title:'请输入邀请码',
						icon:'none'
					});
					return;
				}
				
				this.disabledSubmit = true  //禁用按钮，避免重复提交
				
				this.$api.register({
					mobile: this.mobile,
					password: this.newPassword,
					msg_code: this.verifyCode,
					invitation_code:this.inviteCode
				}, res => {
					if (res.data.type === 'ok') {
						uni.showToast({
							title:res.data.message
						});
						setTimeout(() => {
							uni.redirectTo({
								url: '/pages/login/index'
							})
						}, 1500)
					} else {
						this.disabledSubmit = false
						uni.showToast({
							title:res.data.message,
							icon:'none'
						});
					}
				})
			}
		}
	}
</script>

 <style lang="less" scoped>
 .register_wrapper{
 	height:100vh;
 	background-color:#FFFFFF;
 	.form_item{
 		position:relative;
 		width:90%;
 		margin:0 auto;
 		overflow:hidden;
 		text{
 		  display: block;
 		  margin:40upx 0 20upx 0;
 		  font-weight: 700;
 		}
 		input{
 			display: block;
 			width:100%;
 			height:80upx;
 			padding:0 10upx;
 			box-sizing: border-box;
 			background-color: #F3F3F3;
 		}
 		.verify_btn{
 			position:absolute;
 			top:110upx;
 			right:20upx;
			z-index:999;
 		}
 	}
 	.form_btn{
 		width:90%;
 		margin-top:60upx;
 	}
 }
 </style>
 