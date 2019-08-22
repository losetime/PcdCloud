<template>
	<view class="news_wrapper">
		<!--banner-->
		<view class="banner_wrap"></view>
		<!--咨讯-->
		<view class="news_tip">资讯</view>
		<view class="news_item" v-for="(item,index) in newsList" :key="index" @click="goDetail(item.id)">
			<view class="news_title">{{item.title}}</view>
			<view class="news_info-wrap">
				<image src="../../static/img/news/hot.png"></image>
				<text class="news_update">{{item.update_time}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsList: [] // 资讯列表
			}
		},
		onLoad() {
			this.getNewsList();
		},
		onPullDownRefresh() {
			this.getNewsList();
		},
		methods: {
			goDetail(id) {
				uni.navigateTo({
					url: '/pages/news/newsDetail?id=' + id
				})
			},
			//资讯列表
			getNewsList() {
				this.$api.getAnnouncementList({
					page: this.page,
					c_id: 9
				}, (res) => {
					if (res.data.type == 'ok') {
						if (res.data.message.data.length > 0) {
							this.newsList = res.data.message.data;
							uni.stopPullDownRefresh(); //停止下拉刷新动画
						}
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.news_wrapper{
		padding:10px;
	}
	.banner_wrap{
		width: 100%;
		height:200upx;
		background-image: url(../../static/img/ban01.png);
		background-size: 100% 100%;
	}
	.news_tip{
		padding:20px 0 10px 0;
		font-size: 18px;
		border-bottom:1px solid #DDDDDD;
	}
	.news_item{
		padding:10px 0;
		.news_title{
			
		}
		.news_info-wrap{
			display:flex;
			align-items:center;
			margin-top:8px;
			image{
				width:30upx;
				height:30upx;
				margin-right:10px;
			}
			text{
				color:#BCBCBC;
			}
		}
	}
</style>
