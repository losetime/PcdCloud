<template>
	<view class="security_wrapper">
		<!--列表-->
		<view class="menu_list">
			<view class="menu_item" @click="changePass">
				<text>修改密码</text>
				<image src="../../static/img/back.png"></image>
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
		methods: {
			// 修改登录密码
            changePass(){
				uni.navigateTo({
					url:'./updatePass'
				})
			},
		}
	}
</script>

<style lang="less" scoped>
	.menu_list{
		.menu_item{
			height:100upx;
			display:flex;
			justify-content:space-between;
			align-items:center;
			margin:20upx;
			padding: 0 20upx;
			background:#FFFFFF;
			image{
				width:24upx;
				height: 24upx;
			}
		}
	}
</style>
