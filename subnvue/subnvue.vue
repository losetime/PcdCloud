<template>
	<view class="content">
		<page-head :title="title"></page-head>
		<view class="example">
			<view class="example-title">从上侧竖向滑出</view>
			<button @click="showPopup">显示 弹出层</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		onLoad() {
			// 接收 popup 的消息
			uni.$on('popup-page', (data) => {
				switch(data.type){
					case 'interactive':
						uni.showModal({
							title: '来自Popup的消息',
							content: data.info
						})
						break;	
					default:
						uni.showToast({
							title: data.title,
						})
						break;
				}
			})
		},
		onUnload() {
			uni.$off('popup-page')
		},
		methods: {
		    showPopup() {
				// 向 popup 传递消息
				uni.$emit('page-popup', {
					title: '请阅读软件内容',
					content: 'uni-app 是一个使用 Vue.js 开发跨平台应用的前端框架，开发者编写一套代码，可编译到iOS、Android、H5、小程序等多个平台。'
				});
				const subNVue = uni.getSubNVueById('popup')
		        subNVue.show('slide-in-top', 250)
		    }
		}
	}
</script>

<style>
	.content {
		align-content: center;
	    height: 100%;
		background-color: #F4F5F6;
	}
	.example {
		padding: 0 10px 10px
	}
	.example-title {
		font-size: 14px;
		line-height: 14px;
		color: #777;
		margin: 40px 2upx;
		position: relative
	}
	video {
		position: absolute;
		bottom: 30px;
		left: 0;
		width: 100%;
		height: 200px;
	}
	.example .example-title {
		margin: 40upx 0
	}
	button {
		background-color: #f8f8f8;
	}
	.title {
	    font-size: 20px;
		text-align: center;
	    color: #8f8f94;
	}
</style>
