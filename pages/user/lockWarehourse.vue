<template>
	<view class="ptb10 plr10">
		<view class="flex between ptb10">
			<text>数量</text>
			<text class="cor_blue">可用：{{round(canLockNumber,2)}} PCD</text>
		</view>
		<view class="mb20">
			<input type="number" v-model="needLockNumber" placeholder="请输入要锁仓的数量" class="ptb10 plr10 ft14 bgInp radius4" />
		</view>
		<view class="ft12 gray9 mt10 mb20">提示：最小锁仓{{round(minLockNumber,2)}}枚</view>
		<view class="w100 bgBlues white radius4 ft14 tc ptb12" @click="lockWarehourseConfirm">确认</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				canLockNumber:0.00, // 可用PCD
				needLockNumber:'', //需要锁仓的数量
				minLockNumber:'' //最小锁仓的数量
			}
		},
		onLoad() {
			this.getUserInfo()
		},
		methods: {
			lockWarehourseConfirm() {
				if (this.needLockNumber == '') {
					uni.showToast({
						title:'请输入数量',
						icon:'none'
					});
					return;
				};
				uni.showLoading();
				this.$api.lockWarehourse({
					number: this.needLockNumber
				}, res=> {
					uni.hideLoading();
					if (res.data.type == 'ok') {
						uni.showToast({
							title:res.data.message,
							icon:'none'
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
						let data = res.data.message
						console.log('data',data)
						this.canLockNumber = data.total_balance;
						this.minLockNumber = data.mini_lock_num
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
