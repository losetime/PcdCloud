<template>
	<view class="posRelt w100" style="height: 100vh;">
		<view class="abstrot bgImg w100 plr20">
			<view class="w100">
				<!-- <view class="brb_balck ptb10 flex alcenter">
				<image class="icon" src="/static/img/icon_mobile.png"></image>
				<input class="ft14 ml30" type="number" v-model="mobile" placeholder="请输入您的手机号" />
			</view> -->
				<view class="ft14 bold mb10 mt20">手机号码</view>
				<view class=" ptb7 flex alcenter bgInp radius4" style="width: 100%;">
					<!-- <view class="flex alcenter plr10 ptb3">
				<picker :range="list" :value="val" range-key="name_cn" mode="selector" @change="changeCountry">
					<view class="flex alcenter"> 
					<view class="plr10">{{list[val].area_code}}</view>
					<image src="../../static/img/arrow_bottom.png" style="width: 18upx; height: 10upx;"></image>
					</view>
				</picker> 
				</view> -->
					<input style="width: 100%;" class="ft14 plr10 ptb3" v-model="mobile" placeholder="请输入手机号" />
				</view>
				<view class="ft14 bold mb10 mt20">验证码</view>
				<view class=" ptb7 flex alcenter mt10 between bgInp radius4">
					<view class="flex alcenter ptb3">
						<image class="icon" src="/static/img/icon_psw.png"></image>
						<input class="ft14" v-model="code" placeholder="请输入手机验证码" />
					</view>
					<view class="ft14 code" @click="getCode" style="">
						<!-- {{codeText}} -->
						<text v-show="!hasSend">{{txt_code}}</text>
						<text v-show="hasSend">{{time}}s</text>
					</view>
				</view>
				<view class="ft14 bold mb10 mt20">新密码</view>
				<view class="plr10 ptb7 flex alcenter mt10 between  bgInp radius4">
					<view class="flex alcenter  ptb3" style="width: 100%;">
						<!-- <image class="icon" src="/static/img/icon_psw.png"></image> -->
						<!-- <input :type="isShow ? 'text' :'password'"  v-model="psw" class="ft14 ml30" placeholder="请设置您的密码" /> -->
						<input style="width: 100%;" v-if="!isShow" type="password" v-model="psw" class="ft14" placeholder="请设置您的新密码" />
						<input style="width: 100%;" v-if="isShow" type="'text'" v-model="psw" class="ft14" placeholder="请设置您的新密码" />
					</view>
					<!-- <image class="icon_ice mr10" @click="showPsw" :src="isShow?'/static/img/icon_ice02.png':'/static/img/icon_ice01.png'"></image> -->
				</view>
				<!-- <view class="brb_balck ptb7 flex alcenter mt10 between  bgInp radius4">
				<view class="flex alcenter ptb3 bdl">
				<input v-if="!isShow02" type="password"  v-model="psw02" class="ft14 ml30" placeholder="请确认您的新密码" />
				<input v-if="isShow02" type="text"  v-model="psw02" class="ft14 ml30" placeholder="请确认您的新密码" />
				</view>
				<image class="icon_ice mr10" @click="showPsw02" :src="isShow02?'/static/img/icon_ice02.png':'/static/img/icon_ice01.png'"></image>
			</view> -->
				<view class="w100 blue tc ptb12 ft16 mt30 white radius4 mauto" @click="confirm">确认重置</view>
				<!-- <view class="tc ft14" style="margin-top: 30upx;" @click="login">去登录</view> -->
				<!-- <view class="w100 tc ptb12 ft16 bgInp mt10 mauto bgGrayBtn radius4" @click="login">登录</view> -->
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
				codeText: '获取验证码',
				timer: 30,
				isDisable: false,
				user_id: '',
				txt_code: '获取验证码',
				time: 60,
				hasSend: false,
				val: 0,
				list: country,
				phone: ''
			}
		},
		onLoad(option) {
			console.log(option)
			this.phone = option.phone;
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
				uni.redirectTo({
					url: '/pages/login/index'
				})
			},
			//获取验证码
			getCode() {
				let inter_id = null;
				this.timer = 5;
				
				if (this.mobile == '') {
					uni.showToast('请输入手机号');
					return;
				};
				if (!this.checkMobile(this.mobile)) {
					uni.showToast('请输入正确的手机号')
					return;
				}

				if (this.time != 60) return;
				
				this.$api.getVerifyCode({
					mobile: this.mobile,
					type: 'forget'
				}, (res) => {
					console.log(res.data.type)
					this.hasSend = true;
					inter_id = setInterval(() => {
						this.time--;
						if (this.time <= 0) {
							clearInterval(inter_id);
							this.time = 60;
							this.hasSend = false;
						}
					}, 1000)
					uni.showToast(res.data.message);
				})
			},
			
			// 确认密码
			confirm() {
				if (this.mobile == '') {
					uni.showToast('请输入手机号');
					return;
				};
				if (this.code == '') {
					uni.showToast('请输入验证码');
					return;
				};
				if (this.psw == '') {
					uni.showToast('请设置您的新密码');
					return;
				};
				if (this.psw.length < 6 || this.psw.length > 16) {
					uni.showToast('密码必须在6到16位之间');
					return;
				};
				
				this.$api.forgetPass({
					mobile: this.mobile,
					password: this.psw,
					msg_code: this.code
				}, (res) => {
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
