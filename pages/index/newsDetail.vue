<template>
	<view>
		<view>
			<image class="img w100" :src="newsContent.thumbnail"></image>
		</view>
		<view class="ptb10 plr20">
			<view class="title ft16">{{newsContent.title}}</view>
			<view class="ft12 mt10 gray">{{newsContent.update_time}}</view>
			<!-- <view class="ft12 mb10 mt10">摘要：{{newsContent.abstract}}</view> -->
			<view class="content ft14" v-html="newsContent.content"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsContent:{}
			}
		},
		onLoad(option) {
			this.getNewsDetail(option.c_id, option.id)
		},
		methods: {
			getNewsDetail(c_id, id) {
				this.$api.getNewsDetail({
					id: id
				}, res => {
					if (res.data.type == 'ok') {
						this.newsContent = res.data.message;
					}
				})
			}
		}
	}
</script>

<style>
	.img {
		height: 400upx;
	}

	.content {
		line-height: 56upx;
	}
</style>
