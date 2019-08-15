<template>
	<view>
		<view class="top posRelt" style="background-image:  url(../../static/img/shouyi_banner.png);">
			<view class="top_box w90 bgWhite abstrot ptb20 radius6 plr10">
				<view class="flex alcenter top_msg mb20">
					<image :src="msg.avatar" class="radius50p" style="width: 80upx; height: 80upx;"></image>
					<view class="ml10">
						<view class="bold mb10 ft14">{{msg.nickname}}</view>
						<view class="ft14">{{msg.mobile}}</view>
					</view>
				</view>
				<!--安全中心、提币-->
				<view class="flex alcenter around">
					<view class="flex column alcenter jscenter" v-if="kzshow">
						<!-- <image class="mb10" style="width: 44upx; height: 54upx;" src="../../static/img/anquan.png"></image> -->
						<view class="ft12 gray9">矿工人数</view>
						<view class="ft16 bold">{{msg.user_pool_num}}</view>
					</view>
					<view class="flex column alcenter jscenter">
						<view class="ft12 gray9">个人投资数</view>
						<view class="ft16 bold">{{round(msg.person_num,2)}}</view>
					</view>
					<view class="flex column alcenter jscenter">
						<view class="ft12 gray9">总收益</view>
						<view class="ft16 bold">{{round(msg.total_income,2) }}</view>
					</view>
				</view>
			</view>
		</view>
		<!--列表-->

		<view class="plr10 ptb20 mt88 w90 mauto list bgWhite radius4">
			<view class="flex bold around">
				<view @click="shift(1)">
					<view class="ptb3 ft14" :class="{'cor_blue':active == 1}">静态收益</view>
					<view class="lines mauto" v-if="active==1"></view>
				</view>
				<view @click="shift(2)">
					<view class="ptb3 ft14" :class="{'cor_blue':active == 2}">动态收益</view>
					<view class="lines mauto" v-if="active==2"></view>
				</view>
			</view>
			<!--静态收益-->
			<view v-if="active == 1">
				<view class="mt10" v-for="(item,index) in list " :key="index">
					<view class="flex alcenter between ptb10 bdb bd_cor">
						<view>
							<view class="ft14 mb5">{{item.info}}</view>
							<view class="gray9 ft12">{{item.time}}</view>
						</view>
						<view class="bold red2">{{item.value}}</view>
					</view>
				</view>
				<!-- <view v-show="show">
					<view class="gray9 flex around mt20">
						暂无数据！
					</view>
				</view> -->
				<!-- <view class="mt10">
				<view class="flex alcenter between ptb10 bdb bd_cor">
					<view>
						<view class="ft14 mb5">余额提现</view>
						<view class="gray9 ft12">2019.01.02</view>
					</view>
					<view class="bold red2">+12.54</view>
				</view>
			</view>
			<view class="mt10">
				<view class="flex alcenter between ptb10 bdb bd_cor">
					<view>
						<view class="ft14 mb5">余额提现</view>
						<view class="gray9 ft12">2019.01.02</view>
					</view>
					<view class="bold">-12.54</view>
				</view>
			</view>
			<view class="mt10">
				<view class="flex alcenter between ptb10 bdb bd_cor">
					<view>
						<view class="ft14 mb5">余额提现</view>
						<view class="gray9 ft12">2019.01.02</view>
					</view>
					<view class="bold">-12.54</view>
				</view>
			</view> -->
				<uni-load-more :status="loadingType"></uni-load-more>
			</view>

			<!--动态收益-->
			<view v-if="active == 2">

				<view class="mt10" v-for="(item,index) in list " :key="index">
					<!-- <view v-if="list.length == 0">
						<view class="gray9 flex text-center">
							暂无数据！
						</view>
					</view> -->
					<view class="flex alcenter between ptb10 bdb bd_cor">
						<view>
							<view class="ft14 mb5">{{item.info}}</view>
							<view class="gray9 ft12">{{item.time}}</view>
						</view>
						<view class="bold red2">{{item.value}}</view>
					</view>

				</view>
				<!-- <view v-show="show">
					<view class="gray9 flex around mt20">
						暂无数据！
					</view>
				</view> -->
				<uni-load-more :status="loadingType"></uni-load-more>


				<!-- <view class="mt10">
				<view class="flex alcenter between ptb10 bdb bd_cor">
					<view>
						<view class="ft14 mb5">个人充值</view>
						<view class="gray9 ft12">2019.01.02</view>
					</view>
					<view class="bold red2">+12.54</view>
				</view>
			</view>
			<view class="mt10">
				<view class="flex alcenter between ptb10 bdb bd_cor">
					<view>
						<view class="ft14 mb5">个人充值</view>
						<view class="gray9 ft12">2019.01.02</view>
					</view>
					<view class="bold red2">+12.54</view>
				</view>
			</view>
			<view class="mt10">
				<view class="flex alcenter between ptb10 bdb bd_cor">
					<view>
						<view class="ft14 mb5">个人充值</view>
						<view class="gray9 ft12">2019.01.02</view>
					</view>
					<view class="bold red2">+12.54</view>
				</view>
			</view> -->
			</view>
		</view>
		<!-- <uni-load-more :status="loadingType"></uni-load-more> -->

	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	export default {
		components: {
			uniLoadMore
		},
		data() {
			return {
				avatar: '../../static/img/shouyi_banner.png',
				active: 1,
				list: [],
				show: false,
				msg: '',
				kzshow: false,
				page: 1,
				loadingType: 'more',
			}
		},
		onLoad() {
			this.earnings();
			this.getUserInfo();
		},
		onPullDownRefresh() {
			this.page = 1;
			this.loadingType = 'more';
			this.list = [];
			this.earnings();
			this.getUserInfo();

			//监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
			setTimeout(function() {
				uni.stopPullDownRefresh(); //停止下拉刷新动画
			}, 1000);
		},
		onReachBottom() {
			if (this.loadingType == 'nomore') return;
			this.page++;
			this.earnings();
		},

		methods: {
			shift(i) {
				this.active = i;
				console.log(this.active)
				this.earnings()
			},
			earnings() {
				this.$api.getIncome({
						type: this.active
					},
					res => {
						if (res.data.type == 'ok') {
							console.log(res.data.message.data)
							console.log(res.data.message.data.length)
							this.loadingType = res.data.message.page == this.page ? 'nomore' : 'more';
							this.list = res.data.message.data
						}
					})
			},
			getUserInfo() {
				this.msg = uni.getStorageSync('userinfo');
				console.log(this.msg)
				console.log(this.msg.person_num)
				console.log(this.msg.user_pool_num)
				if (this.msg.is_miners == 1) {
					this.kzshow = true
				}
			}
		},
		computed: {

		}
	}
</script>

<style>
	page {
		/* background: #fff; */
	}

	.top {
		background: url(../../static/img/shouyi_banner.png) top center no-repeat;
		width: 100%;
		height: 288upx;
		background-size: 100% 288upx;
	}

	.top_box {
		top: 120upx;
		left: 5%;
		box-sizing: border-box;
		box-shadow: 0 0 8px #ccc;
		;
	}

	.list {
		box-sizing: border-box;
	}

	.list>view {
		/* border-bottom: 1px solid #eee; */
	}

	.logout {
		background: #FC5D55;
	}

	.bdb_blue {
		/* border-bottom: 2px solid #386EEC; */
	}

	.lines {
		width: 50upx;
		height: 10upx;
		border-radius: 10upx;
		background: #386EEC;
	}

	.mb5 {
		margin-bottom: 10upx;
	}
</style>
