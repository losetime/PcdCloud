<template>
	<view class="ptb10 plr10">
		<view class="radius4 bgWhite radius4">
			<view class="flex ptb14 plr10 ft14 between">PCD</view>
			<!-- <picker :range="coinList" mode="selector" range-key="name" :value="val" @change="changeCoin">
				<view class="flex ptb14 plr10 ft14 between">
					<text>{{coinList[val].name}}</text>
					<text>选择币种</text>
				</view>
			</picker> -->
		</view>
		<view class="mt20">
			<view class="mb10">提币地址</view>
			<view class="flex ptb10 plr10 radius4 bgWhite alcenter between">
				<view class="w80">
					<input type="text" v-model="address" placeholder="输入或粘贴地址" class="w100" />
				</view>
				<image src="../../static/img/scan.png" style="width: 40upx;height: 40upx;" @click="scan"></image>
			</view>
		</view>
		<view class="mt20">
			<view class="mb10">提币数量 <text class="cor_blue ml10 ft12">(可用:{{round(msg.withdrawable_balance,2)}}PCD)</text></view>
			<view class="flex ptb10 plr10 radius4 bgWhite alcenter between">
				<view class="w60">
					<input type="number" v-model="num" class="w100" />
				</view>
				<view class="gray9">PCD
					| <text class=" ml10" @click="all"> 全部</text>
				</view>
			</view>
		</view>
		<view class="mt20">
			<view class="mb10 cor_blue">手续费（{{rates*100}}% PCD）</view>
			<view class="flex ptb10 plr10 radius4 bgWhite alcenter between">
				<view class="w50">
					<input type="number" disabled="" placeholder="到账数量" class="w100 gray9" />
				</view>
				<view>{{realNum || 0.0}} PCD</view>
			</view>
		</view>
		<!-- <view class="mt20">
			<view class="mb10">资金密码</view>
			<view class="flex ptb10 plr10 radius4 bgWhite alcenter between">
				<view class="w100">
					<input type="password" v-model="psw" placeholder="请输入资金密码" class="w100 gray9" />
				</view>
			</view>
		</view> -->
		<view class="ptb14 tc radius4 ft14 bgBlues white mt30" @click="onExtract">提币</view>
	</view>
</template>

<script>
	import QR from '../../static/js/qrcode.js'
	export default {
		data() {
			return {
				coinList: [{
						name: 'BTC'
					},
					{
						name: 'USDT'
					}
				],
				val: 0,
				// realNum:0.000,  //到账数量
				address: '',
				num: '',
				psw: '',
				currency_id: '',
				balance: '',
				rates: 0.1
			}
		},
		onLoad() {
			// this.getList();
			this.getUserInfo();
			this.getRates();
		},
		//到账数量
		computed: {
			realNum() {
				return this.num - this.num * (this.rates);
			}
		},
		methods: {
			getUserInfo() {
				this.msg = uni.getStorageSync('userinfo');
				console.log(this.msg)

			},
			scan() {
				uni.scanCode({
					onlyFromCamera: true,
					success: res => {
						console.log(res)
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						this.address = res.result;
					}
				});
			},
			// 获取币种列表
			getList() {
				uni.showLoading();
				this.$api.getCurrencyList({}, res => {
					uni.hideLoading();
					if (res.data.type == 'ok') {
						this.coinList = res.data.message;
						this.currency_id = res.data.message[0].id;
						let img = QR.createQrCodeImg(res.data.message[0].total_account);
						this.img = img;
						uni.stopPullDownRefresh();
						this.$api.getCurrencyNumber({
							currency_id: this.currency_id
						}, val => {
							uni.hideLoading();
							if (res.data.type == 'ok') {
								this.balance = val.data.message;
							}
						})
					}
				})
			},
			//选择币种
			changeCoin(e) {
				this.num = '';
				this.address = '';
				this.psw = '';
				this.val = e.target.value;
				for (var i = 0; i < this.coinList.length; i++) {
					if (e.target.value == i) {
						// this.address = this.coinList[i].total_account;
						this.currency_id = this.coinList[i].id;
						let img = QR.createQrCodeImg(this.coinList[i].total_account);
						this.img = img;
					}
				};
				uni.showLoading();
				this.$api.getCurrencyNumber({
					currency_id: this.currency_id
				}, val => {
					uni.hideLoading();
					if (res.data.type == 'ok') {
						this.balance = val.data.message;
					}
				})
			},
			// 全部
			all() {
				this.num = this.msg.withdrawable_balance;
			},
			// 手续费
			getRates() {
				uni.showLoading();
				this.$api.getRates({}, res => {
					uni.hideLoading();
					if (res.data.type == 'ok') {
						console.log(res.data.message, "手续费")
						this.rates = res.data.message;
					}
				})
			},

			// 提币操作
			onExtract() {
				if (!this.address) {
					this.$util.showToast('请输入提币地址');
					return;
				};
				if (!this.num || this.num < 30) {
					this.$util.showToast('请输入提币数量，且必须大于30枚');
					return;
				};
				/* if(!this.psw){
					this.$util.showToast('请输入资金密码');
					return;
				}; */
				uni.showLoading();

				this.$api.onExtract({
					number: that.num,
					address: that.address
				}, res => {
					uni.hideLoading();
					if (res.data.type == 'ok') {
						uni.showToast(res.data.message);
						setTimeout(() => {
							uni.switchTab({
								url: '/pages/mine/mine'
							})
						}, 1500)
					}
				})
				
			}
		}
	}
</script>

<style>
	.copys {
		word-break: break-all;
	}
</style>
