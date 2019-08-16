<template>
	<view class="plr10 bgWhite">
		<view class="status_bar">
			<view class="top_view"></view>
			<!-- 这里是状态栏  哪一个第二   现在可以了， -->
		</view>
		<view class="flex alcenter ptb10">
			<image src="/static/img/logo1.jpg" style="width: 60upx;height: 40upx;" mode="widthFix"></image>
			<text class="ft16 bold ml10">PCD矿场</text>
		</view>
		<scroll-view :scroll-x="true">
			<view class="box flex alcenter white nowrap">
				<view class="radius4 card card01 plr10 ptb14 w35">
					<view class="mb10">资产</view>
					<view class="ft14">{{round(userAssetInfo.total_balance,2)}}</view>
				</view>
				<view class="radius4 card card02 plr10 ptb14 w35 ml20">
					<view class="mb10">冻结</view>
					<!-- <view class="ft14">{{msg.lock_balance}}</view> -->
					<view class="ft14">{{round(userAssetInfo.lock_balance,2)}}</view>
				</view>
				<view class="radius4 card card03 plr10 ptb14 w35 ml20">
					<view class="mb10">可用</view>
					<view class="ft14">{{round(userAssetInfo.available_balance,2)}}</view>
				</view>
			</view>
		</scroll-view>
		<!--加入矿池-->
		<view class="flex alcenter around ft14 ptb20">
			<!-- <view class="flex alcenter" @click="join">
				<image src="/static/img/join.png" style="width: 34upx;height: 32upx;"></image>
				<text class="ml10">加入矿池</text>
			</view> -->
			<view class="flex alcenter" @tap="jumpWalletPage">
				<image src="/static/img/wallet.png" style="width: 34upx;height: 32upx;"></image>
				<text class="ml10">钱包</text>
			</view>
			<view class="flex alcenter" @tap="jumpContactUsPage">
				<image src="/static/img/kefu.png" style="width: 34upx;height: 32upx;"></image>
				<text class="ml10">联系我们</text>
			</view>
		</view>
		<!--公告-->
		<view class="flex alcenter mb10">
			<image src="/static/img/notice.png" style="width:24upx;height: 28upx;"></image>
			<swiper class="ft14 news w100 ml10" vertical="true" autoplay="true" circular="true" interval="3000">
				<swiper-item class="gray6 ellipsis" v-for="(item,i) in announcementList" :key="i">{{item.title}}</swiper-item>
			</swiper>

		</view>

		<!--banner-->
		<view class="banner tc white flex alcenter jscenter ft18" style="background-image: url(../../static/img/banner.png);">PCD矿场正式上线</view>
		<!--咨讯-->
		<view class="ft16 mt20 bold">资讯</view>
		<view class="ptb10 bdbf5" v-for="(item,index) in newsList" :key="index" @click="goDetail(item.id)">
			<view class="ft14 mb10">{{item.title}}</view>
			<view class="flex alcenter">
				<image src="../../static/img/hot.png" style="width: 24upx;height: 24upx;"></image>
				<view class="ft12 gray9 ml10"><text class="ml10">{{item.update_time}}</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				announcementList:[], // 公告列表
				newsList: [], // 资讯列表
				userAssetInfo:{} // 用户资产信息
			}
		},
		onLoad() {
			this.getNoticeList();
			this.getNewsList();
		},
		onPullDownRefresh() {
			this.getNoticeList();
			this.getNewsList();

			//监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
			setTimeout(function() {
				uni.stopPullDownRefresh(); //停止下拉刷新动画
			}, 1000);
		},
		methods: {
			goDetail(id) {
				uni.navigateTo({
					url: '/pages/index/newsDetail?id=' + id
				})
			},
			//公告列表
			getNoticeList() {
				uni.showLoading()
				this.$api.getAnnouncementList({
					page: this.page,
					c_id: 10
				}, (res) => {
					uni.hideLoading();
					if (res.data.type == 'ok') {
						if (res.data.message.data.length > 0) {
							this.announcementList = res.data.message.data;
						}
					}
				})
			},
			//资讯列表
			getNewsList() {
				uni.showLoading()
				this.$api.getAnnouncementList({
					page: this.page,
					c_id: 9
				}, (res) => {
					uni.hideLoading();
					if (res.data.type == 'ok') {
						if (res.data.message.data.length > 0) {
							this.newsList = res.data.message.data;
						}
					}
				})
			},
			join() {
				uni.navigateTo({
					url: '/pages/index/join'
				})
			},
			jumpContactUsPage() {
				uni.navigateTo({
					url: '/pages/user/contactUs'
				})
			},
			jumpWalletPage() {
				uni.navigateTo({
					url: '/pages/user/wallet'
				})
			}
		}
	}
</script>

<style>
	.card {
		box-sizing: border-box;
	}

	.card01 {
		background: -webkit-linear-gradient(left, #7580FF, #8FA2F9);
	}

	.card02 {
		background: -webkit-linear-gradient(left, #569AFE, #4981F2);
	}

	.card03 {
		background: -webkit-linear-gradient(left, #717DFA, #5396FE);
	}

	.banner {
		background: top center no-repeat;
		width: 100%;
		height: 100upx;
		background-size: 100%;
	}

	.news {
		height: 40upx;
	}
</style>
