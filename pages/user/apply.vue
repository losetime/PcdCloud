<template>
	<view class="ptb10 plr10">
		<view class="flex between ptb10">
			<text>投币数量</text>
		</view>
		<view>
			<input type="number" v-model="pcdNumber" placeholder="请输入投币数量" class="ptb10 plr10 ft14 bgInp radius4" />
		</view>

		<view class="flex between ptb10">
			<text>矿场名称</text>
		</view>
		<view class=" ">
			<input type="text" v-model="mineName" placeholder="请输入矿场名称" class="ptb10 plr10 ft14 bgInp radius4" />
		</view>

		<view class="ft12 gray9 mt10">提示：</view>
		<view class="ft12 gray9">vip1矿主申请最少2000枚PCD</view>
		<view class="ft12 gray9">vip2矿主申请最少5000枚PCD</view>
		<view class="ft12 gray9">vip3矿主申请最少8000枚PCD</view>
		<view class="ft12 gray9">vip4矿主申请最少20000枚PCD</view>
		<view class="ft12 gray9 mb20">vip5矿主申请最少50000枚PCD</view>
		<view class="w100 bgBlues white radius4 ft14 tc ptb12" @click="confirm">确认申请</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pcdNumber: '', // 投币数量
				mineName: '' // 矿场名称
			}
		},
		onLoad() {

		},
		methods: {
			confirm() {
				if (this.pcdNumber == '') {
					uni.showToast({
						title: '请输入投币数量',
						icon: 'none'
					});
					return;
				};
				if (this.mineName == '') {
					uni.showToast({
						title: '请输入矿主名称',
						icon: 'none'
					});
					return;
				};
				uni.showLoading();
				this.$api.toBeMiner({
					number: this.pcdNumber,
					name: this.mineName
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
