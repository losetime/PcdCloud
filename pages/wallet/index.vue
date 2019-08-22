<template>
	<view class="content">
		<view class="banner alcenter around ban01 white" style="background-image: url(../../static/img/zhzzc_bg.png);">

			<view class="" style="padding: 40upx;">
				<view>
					<view class="bold ft20">账户总资产</view>
					<view>ToKen Coin</view>
				</view>
				<view class="ft12 mb10"></view>
				<view class="ft18 bold" style="margin-top: 50upx;">{{round(userInfo.user_total_balance,2)}} PCD</view>

			</view>

		</view>
		<view class="banner alcenter around ban01 white" style="background-image: url(../../static/img/dj_bg.png);height: 260upx;">

			<view class="" style="padding: 40upx;">
				<view>
					<view class="bold ft20">冻结资产</view>
					<view>ToKen Coin</view>
				</view>
				<view class="ft18 bold" style="margin-top: 20upx;">{{round(userInfo.lock_change_balance,2)}} PCD</view>

			</view>

		</view>

		<view class="item_box">
			<view class="item_list flex alcenter between">
				<view class="flex alcenter">
					<image class="icon_left" src="/static/img/kcktr.png" mode=""></image>
					<view class="ft16 bold">
						矿场可投入
					</view>
				</view>
				<view class="tr">
					<view class="ft14 ftc_zs bold">
						{{round(userInfo.userpool_available_balance,2)}}
					</view>
					<view class="ft14 ftc_zs">
						PCD
					</view>
				</view>
			</view>


			<view class="item_list flex alcenter between">
				<view class="flex alcenter">
					<image class="icon_left" src="/static/img/kcwkz.png" mode=""></image>
					<view class="ft16 bold">
						矿场挖矿中
					</view>
				</view>
				<view class="tr">
					<view class="ft14 ftc_hs bold">
						{{round(userInfo.pool_num,2)}}
					</view>
					<view class="ft14 ftc_hs">
						PCD
					</view>
				</view>
			</view>

			<view class="item_list flex alcenter between">
				<view class="flex alcenter">
					<image class="icon_left" src="/static/img/kcktx.png" mode=""></image>
					<view class="ft16 bold">
						矿场可提现
					</view>
				</view>
				<view class="tr">
					<view class="ft14 ftc_qs bold">

						{{round(userInfo.withdrawable_balance,2)}}
					</view>
					<view class="ft14 ftc_qs">
						PCD
					</view>
				</view>
			</view>
		</view>
	</view>

</template>
<script>
	export default {
		data() {
			return {
				userInfo: {}
			}
		},
		onLoad() {
			this.getUserInfo();
		},
		methods: {
			getUserInfo() {
				this.$api.getUserInfo({}, res => {
					if (res.data.type == 'ok') {
						this.userInfo = res.data.message;
					}
				})
			}


		}
	}
</script>


<style>
	.content {
		padding: 0 30upx;
	}

	.banner {
		/* background: url(../../static/img/ban01.png) top center no-repeat; */
		height: 330upx;
		width: 100%;
		background-size: 100% 100%;
		margin-top: 20upx;
	}

	.logo {
		width: 50%;
		display: block;
		margin: 20upx auto;
	}

	.ftc_zs {
		color: #d742e2;
	}

	.ftc_hs {
		color: #ffb44c;
	}

	.ftc_qs {
		color: #8cf5be;
	}

	.icon_left {
		width: 100upx;
		height: 100upx;
		margin-right: 40upx;
	}

	.item_box {
		margin-top: 20upx;
	}

	.item_list {
		background: #fff;
		padding: 20upx;
		border-radius: 10upx;
		margin-bottom: 20upx;
	}
</style>
