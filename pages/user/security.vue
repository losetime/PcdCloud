<template>
	<view class="plr10 ptb20">
		<!--列表-->
		<view class="ft14">
			<view class="radius6 plr10 shadow_e bgWhite">
				<view class="flex alcenter between ptb20  brb_e" @click="changePass">
					<view class="flex alcenter">
						<text class="">修改密码</text>
					</view>
					<image style="width: 12upx;height: 24upx;" src="../../static/img/back.png"></image>
				</view>
				<!-- <view class="flex alcenter between ptb20" @click="changePayPsw">
					<view class="flex alcenter">
						<text class="">修改支付密码</text>
					</view>
					<image style="width: 12upx;height: 24upx;" src="../../static/img/back.png"></image>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {
			// 修改登录密码
            changePass(){
				uni.navigateTo({
					url:'./updatePass'
				})
			},
			// 修改支付密码
			// changePayPsw(){
			// 	uni.navigateTo({
			// 		url:'./changePayPsw'
			// 	})
			// }
		}
	}
</script>

<style>
	.pages-mine-security{
		background: #F5F5F5;
	}
	.bgCard{
		background: #1C1F26;
	} 
	.bdb_c{
		border-bottom: 1px solid #474A52;
	}
	.bd_cor{
		border-color: rgba(71, 74, 82, .3);
	}
</style>
