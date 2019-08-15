<template>
	<view class="ptb10 plr10">
		<!-- 未绑定的 -->
		<view v-if="nshows">
			<view class="flex between ptb10">
				<text class="bold">OK账号</text>
			</view>
			<view>
				<input type="text" v-model="account" placeholder="请输入OK账号" class="ptb10 plr10 ft14 bgInp radius4" />
			</view>
			<view class="flex between ptb10">
				<text class="bold">apiKey</text>
			</view>
			<view>
				<input type="text" v-model="key" placeholder="请输入apiKey" class="ptb10 plr10 ft14 bgInp radius4" />
			</view>

			<view class="flex between ptb10">
				<text class="bold">secretKey</text>
			</view>
			<view>
				<input type="text" v-model="secret" placeholder="请输入secretKey" class="ptb10 plr10 ft14 bgInp radius4" />
			</view>
			<view class="flex between ptb10">
				<text class="bold">Passphrase</text>
			</view>
			<view>
				<input type="text" v-model="passphrase" placeholder="请输入Passphrase" class="ptb10 plr10 ft14 bgInp radius4" />
			</view>
		</view>
		<!-- 绑定之后显示的 -->
		<view v-if="ashow">
			<view class="flex between ptb10">
				<text class="bold">OK账号</text>
			</view>
			<view>
				<view class="ptb10 plr10 ft14 bgInp radius4">
					{{userOkcodeInfo.okaccount}}
				</view>
				<!-- <input type="text" v-model="account" placeholder="请输入OK账号" class="ptb10 plr10 ft14 bgInp radius4" /> -->
			</view>
			<view class="flex between ptb10">
				<text class="bold">apiKey</text>
			</view>
			<view>
				<view class="ptb10 plr10 ft14 bgInp radius4">
					{{userOkcodeInfo.okkey}}
				</view>
			</view>

			<view class="flex between ptb10">
				<text class="bold">secretKey</text>
			</view>
			<view>
				<view class="ptb10 plr10 ft14 bgInp radius4">
					{{userOkcodeInfo.secret}}
				</view>
			</view>
			<view class="flex between ptb10">
				<text class="bold">Passphrase</text>
			</view>
			<view>
				<view class="ptb10 plr10 ft14 bgInp radius4">
					{{userOkcodeInfo.passphrase}}
				</view>
			</view>
		</view>

		<view v-if="show" class="w100 bgBlues white radius4 ft14 tc ptb12 mt30" @click="bindOkAccount">确认</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				account: '',
				key: '',
				passphrase: '',
				secret: '',
				show: true,
				nshows: true,
				ashow: false,
				userOkcodeInfo: {}
			}
		},
		onLoad() {
			this.getUserInfo();
		},
		methods: {
			// 绑定ok账户
			bindOkAccount() {
				if (this.account == '') {
					uni.showToast('请输入OK账号');
					return;
				};
				if (this.key == '') {
					uni.showToast('请输入key');
					return;
				}
				if (this.passphrase == '') {
					uni.showToast('请输入passphrase');
					return;
				};
				if (this.secret == '') {
					uni.showToast('请输入secret');
					return;
				}
				uni.showLoading();
				console.log(that.account);
				console.log(that.key)

				this.$api.bindOkAccount({
					account: this.account,
					key: this.key,
					secret: this.secret,
					passphrase: this.passphrase
				}, res => {
					uni.hideLoading();
					if (res.data.type == 'ok') {
						uni.showToast("绑定成功");
						setTimeout(() => {
							uni.switchTab({
								url: '/pages/mine/mine'
							})
						}, 1500)
					}
				})
			},
			
			getUserInfo() {
				this.$api.getUserInfo({}, (res) => {
					if (res.data.type == 'ok') {
						this.userOkcodeInfo = res.data.message;
						var data = res.data.message
						var status = data.okaccount
						if (status != "") {
							this.show = false,
								this.nshows = false,
								this.ashow = true
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

	.bgInp {
		background: #f5f5f5;
	}
</style>
