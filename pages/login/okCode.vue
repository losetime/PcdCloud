<template>
	<view class="ok-code_wrap">
		<view class="form_item">
			<text>OK账号</text>
			<input type="text" v-model="account" placeholder="请输入OK账号" />
		</view>
		<view class="form_item">
			<text>apiKey</text>
			<input type="text" v-model="apiKey" placeholder="请输入apiKey" />
		</view>
		<view class="form_item">
			<text>secretKey</text>
			<input type="text" v-model="secretKey" placeholder="请输入secretKey" />
		</view>
		<view class="form_item">
			<text>Passphrase</text>
			<input type="text" v-model="passphrase" placeholder="请输入Passphrase" />
		</view>
		<button type="primary" class="form_btn" @click="bindOkAccount">确认</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				account: '',
				apiKey: '',
				secretKey:'',
				passphrase: ''
			}
		},
		methods: {
			// 绑定ok账户
			bindOkAccount() {
				if (this.account == '') {
					uni.showToast({
						title:'请输入OK账号'
					});
					return;
				};
				if (this.apiKey == '') {
					uni.showToast({
						title:'请输入apiKey'
					});
					return;
				}
				if (this.secretKey == '') {
					uni.showToast({
						title:'请输入secretKey'
					});
					return;
				}
				if (this.passphrase == '') {
					uni.showToast({
						title:'请输入passphrase'
					});
					return;
				}
				uni.showLoading();

				this.$api.bindOkAccount({
					account: this.account,
					key: this.apiKey,
					secret: this.secretKey,
					passphrase: this.passphrase
				}, res => {
					uni.hideLoading();
					if (res.data.type == 'ok') {
						uni.switchTab({
							url: '/pages/mine/index'
						})
					}else{
						uni.showToast({
							title:'输入有误，请重新确认'
						});
					}
				})
			}

		}

	}
</script>

<style lang="less" scoped>
.ok-code_wrap{
	height:100vh;
	padding: 0 40upx;
	background-color:#FFFFFF;
	overflow:hidden;
	.form_item{
		text{
		  display: block;
		  margin:40upx 0 10upx 0;
		  font-weight: 700;
		}
		input{
			display: block;
			width:100%;
			height:80upx;
			padding:0 10upx;
			background-color: #F3F3F3;
		}
	}
	.form_btn{
		width:90%;
		margin-top:60upx;
	}
}
</style>
