<template>
	<view class="extract_wrapper">
		<view class="form_item">
			<text class="form_item--title">提币地址</text>
			<input type="text" v-model="extractAddress" placeholder="输入或粘贴地址" />
			<image src="../../static/img/wallet/scan.png" class="scan_right " @click="onScanCode"></image>
		</view>
		<view class="form_item">
			<text class="form_item--title">提币数量(可用:{{round(msg.withdrawable_balance,2)}}PCD)</text>
			<input type="text" v-model="extractNumber" placeholder="请输入数量" />
			<view class="unit_right">
				<text>PCD</text>
				<text @click="onExtractAll">全部</text>
			</view>
		</view>
		<view class="form_item">
			<text class="form_item--title">到账数量</text>
			<input type="text" v-model="newPassword" placeholder="0" />
			<view class="unit_right">PCD</view>
		</view>
		<view>手续费：{{extractRates*100}}%</view>
		<button type="primary" class="form_btn" disabled='' @click="onExtract">提币</button>
	</view>

	<!-- 		<view class="mt20">
			<view class="mb10">提币地址</view>
			<view class="flex ptb10 plr10 radius4 bgWhite alcenter between">
				<view class="w80">
					<input type="text" v-model="extractAddress" placeholder="输入或粘贴地址" class="w100" />
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
		<view class="ptb14 tc radius4 ft14 bgBlues white mt30" @click="onExtract">提币</view> -->
</template>

<script>
	export default {
		data() {
			return {
				extractAddress: '',
				extractNumber: '',  // 提取数量
				extractRates: 0,
				userInfo:{}
			}
		},
		
		onLoad() {
			this.getUserInfo();
			this.getRates();
		},
		
		computed: {
			// 到账数量
			realNum() {
				return this.extractNumber - this.extractNumber * this.rates;
			}
		},
		
		methods: {
			getUserInfo() {
				this.userInfo = uni.getStorageSync('user_info');
				console.log('storage',this.userInfo)
			},
			
			// 扫描二维码
			onScanCode() {
				uni.scanCode({
					onlyFromCamera: true,
					success: res => {
						this.extractAddress = res.result;
					}
				});
			},
			
			// 监听提取全部按钮
			onExtractAll() {
				this.extractNumber = this.userInfo.withdrawable_balance;
			},
			
			// 手续费
			getRates() {
				this.$api.getRates({}, res => {
					if (res.data.type == 'ok') {
						// 得到的值为0.01
						this.extractRates = res.data.message;
					}else{
						uni.showToast({
							title:'请输入提币数量，且必须大于30枚',
							icon:'none'
						})
					}
				})
			},

			// 提币操作
			onExtract() {
				if (!this.extractAddress) {
					uni.showToast({
						title:'请输入提币地址',
						icon:'none'
					})
					return
				};
				if (!this.extractNumber || this.extractNumber < 30) {
					uni.showToast({
						title:'请输入提币数量，且必须大于30枚',
						icon:'none'
					})
					return
				};
				uni.showLoading();
				this.$api.onExtract({
					number: this.extractNumber,
					address: this.extractAddress
				}, res => {
					uni.hideLoading();
					uni.showToast({
						title:res.data.message,
						icon:'none'
					})
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.extract_wrapper {}

	.form_item {
		position: relative;
		width: 90%;
		margin: 0 auto;
		overflow: hidden;

		.form_item--title {
			display: block;
			margin: 40upx 0 20upx 0;
			font-weight: 700;
		}

		input {
			display: block;
			width: 100%;
			height: 80upx;
			padding: 0 10upx;
			box-sizing: border-box;
			background-color: #FFFFFF;
		}
		
		.scan_right{
			position: absolute;
			top: 115upx;
			right: 20upx;
			z-index: 999;
			width: 40upx;
			height: 40upx;
		}

		.unit_right {
			position: absolute;
			top: 115upx;
			right: 20upx;
			z-index: 999;
			height: 40upx;
			line-height: 40upx;
			text:nth-child(1){
				border-right:1px solid #808080;
				padding-right:8px;
			}
			text:nth-child(2){
				padding-left:8px;
			}
		}
	}

	.form_btn {
		width: 90%;
		margin-top: 60upx;
	}
	
</style>
