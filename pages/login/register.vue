<template>
	<view class="posRelt w100">
		<!-- <image src="../../static/img/bg.png" class="w100" style="height: 100vh;"></image> -->
		<view class="abstrot bgImg w100 plr20">
			<!-- <view class="tc ptb20 mt50 w100">
		<image src="../../static/img/logo.png" style="width: 225upx;height: 150upx;"></image>
		</view> -->
			<!-- <view class="ft24 m-content mb30 bold w100">手机注册</view> -->
			<view class="w100">
				<!-- <view class="brb_balck ptb10 flex alcenter">
				<image class="icon" src="/static/img/icon_mobile.png"></image>
				<input class="ft14 ml30" type="number" v-model="mobile" :placeholder="$lang._l('请输入手机号')" />
			</view> -->
				<view class="ft14 bold mb10 mt20">手机号码</view>
				<view class=" ptb7 flex alcenter bgInp radius4">
					<!-- <view class="flex alcenter plr10 ptb3">
				<picker :range="list" :value="val" range-key="name_cn" mode="selector" @change="changeCountry">
					<view class="flex alcenter"> 
					<view class="plr10">{{list[val].area_code}}</view>
					<image src="../../static/img/arrow_bottom.png" style="width: 18upx; height: 10upx;"></image>
					</view>
				</picker> 
				</view> -->
					<input style="width: 100%;" class="ft14 ptb3 ml30" v-model="mobile" placeholder="请输入手机号" />
				</view>
				<view class="ft14 bold mb10 mt20">短信验证</view>
				<view class=" ptb7 flex alcenter mt10 between bgInp radius4">
					<view class="flex alcenter ptb3">
						<!-- <image class="icon" src="/static/img/icon_psw.png"></image> -->
						<input style="width: 100%;" class="ft14 ml30" v-model="code" placeholder="请输入手机验证码" />
					</view>
					<!-- <button class="ft14" :disabled="isDisable" @click="getCode" style="background:none; border:none">{{codeText}}</button> -->
					<view class="ft14 code" @click="getCode" style="">
						<!-- {{codeText}} -->
						<text v-show="!hasSend" style="white-space: nowrap;">{{txt_code}}</text>
						<text v-show="hasSend">{{time}}s</text>
					</view>
				</view>
				<view class="ft14 bold mb10 mt20">密码</view>
				<view class=" ptb7 flex alcenter mt10 between  bgInp radius4">
					<view class="flex alcenter  ptb3" style="width: 100%;">
						<!-- <image class="icon" src="/static/img/icon_psw.png"></image> -->
						<!-- <input :type="isShow ? 'text' :'password'"  v-model="psw" class="ft14 ml30" :placeholder="$lang._l('请输入密码')" /> -->
						<input style="width: 100%;" v-if="!isShow" type="password" v-model="psw" class="ft14 ml30" placeholder="请输入登录密码" />
						<input style="width: 100%;" v-if="isShow" type="'text'" v-model="psw" class="ft14 ml30" placeholder="请输入登录密码" />
					</view>
					<!-- <image class="icon_ice mr10" @click="showPsw" :src="isShow?'/static/img/icon_ice02.png':'/static/img/icon_ice01.png'"></image> -->
				</view>
				<view class="ft14 bold mb10 mt20">邀请码</view>
				<view class=" ptb7 flex alcenter mt10 between  bgInp radius4" style="width: 100%;">
					<view class="flex alcenter ptb3" style="width: 100%;">

						<input style="width: 100%;" type="text" class="ft14 ml30" v-model="invite" placeholder="请输入邀请码" />
					</view>
				</view>
				<view v-if="canSave" class="w100 blue tc ptb12 ft16 mt30 white radius4 mauto" @click="register">注册</view>
				<button v-else disabled class="w100 blue tc ft16 mt30 white radius4 mauto" @click="register">注册</button>


				<view class="w100 tc ft16 mt10 mauto radius4" @click="login">已有账号，<text class="cor_blue">去登录</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	import country from '../../static/js/country.js'
	export default {
		data() {
			return {
				isShow: false,
				isShow02: false,
				mobile: '',
				psw: '',
				psw02: '',
				code: '',
				invite: '',
				codeText: '',
				timer: 60,
				isDisable: false,
				user_id: '',
				val: 0,
				list: country,
				txt_code: '获取验证码',
				time: 60,
				hasSend: false,
				canSave: true, //防止重复点击
			}
		},
		onLoad() {
			this.codeText = '获取验证码';
			this.user_id = uni.getStorageSync('user_id');
		},
		methods: {
			//选择区号
			changeCountry(e) {
				this.val = e.target.value;
			},
			showPsw() {
				this.isShow = !this.isShow;
			},
			showPsw02() {
				this.isShow02 = !this.isShow02;
			},
			login() {
				uni.reLaunch({
					url: '/pages/login/index'
				})
			},
			//获取验证码
			getCode() {
				this.timer = 60;
				let inter_id = null;

				if (this.mobile == '') {
					uni.showToast('请输入手机号');
					return;
				};
				if (!this.$util.checkMobile(this.mobile)) {
					uni.showToast('请输入正确的手机号')
					return;
				}

				if (this.time != 60) return;

				this.$api.getVerifyCode({
					mobile: that.mobile,
					type: 'register'
				}, (res) => {
					this.hasSend = true;
					inter_id = setInterval(() => {
						this.time--;
						if (this.time <= 0) {
							clearInterval(inter_id);
							this.time = 60;
							this.hasSend = false;
						}
					}, 1000)
					that.$util.showToast(res.data.message);
				})
			},
			
			// 注册
			register() {
				if (this.mobile == '') {
					uni.showToast('请输入手机号');
					return;
				};
				if (this.code == '') {
					uni.showToast('请输入手机验证码');
					return;
				};
				if (this.psw == '') {
					uni.showToast('请输入登录密码');
					return;
				};
				if (this.psw.length < 6 || this.psw.length > 16) {
					uni.showToast('密码必须在6到16位之间');
					return;
				};

				if (this.invite == '') {
					uni.showToast('请输入邀请码');
					return;
				};
				this.canSave = false
				setTimeout(() => {
					this.canSave = true
				}, 1500)
				this.$api.register({
					mobile: this.mobile,
					password: this.psw,
					invitation_code: this.invite,
					msg_code: this.code
				}, (res) => {
					console.log(res)
					if (res.data.type == 'ok') {
						uni.showToast(res.data.message);
						setTimeout(() => {
							uni.redirectTo({
								url: '/pages/login/index'
							})
						}, 1500)
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

	.icon {
		width: 24upx;
		height: 32upx;
	}

	.icon_ice {
		width: 36upx;
		height: 16upx;
	}

	.bgImg {
		top: 0;
		left: 0;
		box-sizing: border-box;
	}

	.bgInp {
		background: #f5f5f5;
	}

	.blue {
		background: #0A89EB;
	}

	.code {
		background: none;
		border: 1upx solid rgba(0, 0, 0, .2);
		font-size: 28upx;
		color: #386EEC;
		padding: 10upx;
		margin-right: 40upx;
		border-radius: 10upx;
	}
</style>
