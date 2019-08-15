<template>
	<view class="ptb10 plr10">
		<view class="bgWhite radius4 plr10">
			<view class="flex alcenter between ptb10 bd_cor bdb">
				<text>旧密码</text>
				<input class="tr" type="password" v-model="oldPass" placeholder="请输入旧密码" />
			</view>
			<view class="flex alcenter between ptb14 brb_e">
				<text>新密码</text>
				<input class="tr" type="password" v-model="newPass" maxlength="16" placeholder="请设置新密码" />
			</view>
			<view class="flex alcenter between ptb14">
				<text>确认新密码</text>
				<input class="tr" type="password" v-model="newPassConfirm" maxlength="16" placeholder="请再次确认新密码" />
			</view>
		</view>
		<view class="w100 tc ft16 ptb10 radius4 bgBlues mt30 white" @click="onUpdatePass">提交</view>
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
		onLoad() {

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
							title:'修改成功'
						});
						setTimeout(() => {
							uni.switchTab({
								url: '/pages/user/index'
							})
						}, 1500)
					}
				})
			}
		}
	}
</script>

<style>
</style>
