<template>
	<view class="ptb10 plr10">
		<view class="flex between ptb10">
			<text class="bold">可解仓数量</text>
		</view>
		<view>
			<view class="ptb10 plr10 ft14 bgInp radius4">{{round(canUnlockNumer,2)}}PCD</view>
		</view>
		<view class="flex between ptb10">
			<text class="bold">退出数量</text>
		</view>
		<view>
			<input type="text" v-model="needUnlockNumer" placeholder="请输入要解仓的数量" class="ptb10 plr10 ft14 bgInp radius4" />
		</view>
		<view class="w100 bgBlues white radius4 ft14 tc ptb12 mt30" @click="unlockWarehourseConfirm">确认</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				canUnlockNumer: '', // 可解仓数量
				needUnlockNumer: '' // 需要解仓数量
			}
		},
		onLoad() {
			this.getUserInfo();
		},
		methods: {
			unlockWarehourseConfirm() {
				if (this.needUnlockNumer == '') {
					uni.showToast({
						title: '请输入要解仓的数量',
						icon: 'none'
					});
					return;
				};
				uni.showLoading();
				this.$api.unlockWarehourse({
					number: this.needUnlockNumer
				}, res => {
					uni.hideLoading();
					if (res.data.type == 'ok') {
						uni.showToast({
							title: res.data.message,
							icon: 'none'
						});
						setTimeout(() => {
							uni.switchTab({
								url: '/pages/user/index'
							})
						}, 1500)
					}
				})
			},
			getUserInfo() {
				this.$api.getUserInfo({}, res => {
					if (res.data.type == 'ok') {
						this.canUnlockNumer = res.data.message.available_balance
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
