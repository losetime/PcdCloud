<template>
	<view>
		<view>
			<view class="flex flex_around">
				<image class="icon_tbg" src="/static/img/link_tbg.png" mode=""></image>
				<view class="avatar">
					<image  src="/static/img/logoo.png" mode="widthFix"></image>
				</view>
				
				<image class="icon_tbg" src="/static/img/link_tbg.png"></image>
			
			</view>
			<view class="flex_around flex mt20">
				QQ号：{{contactWay.wechat}}
			</view>
			<view>
				<image class="ewm flex_around flex" :src="contactWay.img" mode=""></image>
				<view class="flex_around flex mt20">
					扫码添加我们的客服
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				contactWay: ''
			}
		},
		onLoad() {
	          this.getContactWay();
		},
		methods: {
			// 获取联系方式
			getContactWay(){
				this.$api.getContactWay({},res => {
					if (res.data.type == 'ok') {
						this.contactWay = res.data.message;
					}
				})
			}
	
		}
	}
</script>

<style>
	@import url('../../static/css/main.css');
	page{
		background: #fff;
	}
	.icon_tbg{
		width: 132upx;
		height: 28upx;
	}
	.avatar{
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
	}
	.avatar image{
		width: 100%;
	}
	.ewm{
		width: 320upx;
		height: 320upx;
		display: block;
		margin: 60upx auto;
	}
</style>
