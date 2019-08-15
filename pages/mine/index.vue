<template>
	<view class="plr10">
		<view class="flex alcenter around ban01 white" style="background-image: url(../../static/img/ban01.png);">
			<view class="tc">
				<view class="ft12 mb10">矿工 {{round(msg.change_balance,2)}} PCD</view>
				<view class="ft18 bold">≈ {{round(msg.change_balance*msg.cnyRate*msg.pcdUsd,2)}} CNY</view>
			</view>
			<view class="tc">
				<view class="ft12 mb10">持币{{round(msg.lock_change_balance,2)}} PCD</view>
				<view class="ft18 bold">≈ {{round(msg.lock_change_balance*msg.cnyRate*msg.pcdUsd,2)}} CNY</view>
			</view>
		</view>
		<image src="/static/img/ban02.png" class="w100 mt10 mb10" style="height: 200upx;"></image>
		<view class="ban03 flex alcenter mb20" @click="join(item.id)" :style="{backgroundImage:'url('+item.pic_url+')'}"
		 v-for="(item,index) in list" :key="index">
			<text class="txt01 ml45 ft16 bold">{{item.name}}</text>
		</view>
		<!-- <view class="ban04 flex alcenter">
			<text class="txt02 ml45 ft16 bold">你好矿场</text>
		</view> -->
	</view>
</template>

<script>
	import PAKO from '../../static/js/pako.js'
	export default {
		data() {
			return {
				list: [],
				msg: ''
			}
		},
		onShow() {
			this.getList();
		},
		onLoad() {
			//this.getPrice();
			this.getNum();
			uni.startPullDownRefresh();

		},
		onPullDownRefresh() {
			this.getNum();
			//监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
			setTimeout(function() {
				uni.stopPullDownRefresh(); //停止下拉刷新动画
			}, 1000);
		},
		
		methods: {
			getList() {
				uni.showLoading();
				this.$api.getUserPoolList({},(res) => {
					uni.hideLoading();
					if (res.data.type == 'ok') {
						this.list = res.data.message
					}
				})
			},
			join(id) {
				uni.navigateTo({
					url: '/pages/index/join?id=' + id
				})
			},
			getNum() {
				uni.showLoading();
				this.$api.getWalletInfo({},(res) => {
					uni.hideLoading();
					console.log(res)
					if (res.data.type == 'ok') {
						console.log(res.data.message)
						this.msg = res.data.message
						//that.list = res.data.message
					}
				})
			},
			getPrice() {
				/* uni.connectSocket({
					url: 'wss://real.okex.com:8443/ws/v3?brokerId=166',
					data() {
						return {

						};

					},
					header: {
						'content-type': 'application/json'
					},
					// protocols: ['protocol1'],
					protocols: [{
						"op": "subscribe",
						"args": ["index/ticker:PCD-USD"]
					}],
					//'Sec-WebSocket-Protocol: ' . $protocols[0],
					method: 'GET'
				});
				uni.onSocketMessage(function(res) {
					console.log('收到服务器内容：' + res.data);
				}); */

				/* uni.connectSocket({
					url: 'wss://real.okex.com:8443/ws/v3?brokerId=166'
				});

				uni.onSocketMessage(function(res) {
					console.log('收到服务器内容：' + res.data);
				}); */
				var ws = new WebSocket("wss://real.okex.com:8443/ws/v3?brokerId=166");
				//连接成功时，触发事件
				ws.onopen = function() {
					//请求参数

					var param = {
						"op": "subscribe",
						"args": ["index/ticker:PCD-USD"]
					};
					// 使用 send() 方法发送数据
					ws.send(JSON.stringify(param));
					// alert("数据发送中...");

				}
				//接收到服务端响应的数据时，触发事件
				ws.onmessage = function(evt) {

					//var data = evt.data;
					// alert("收到数据..." + data);
					//console.log(data)
					if (evt.data instanceof Blob) {
						console.log(evt.data, "我是Blob对象")
						//let result = '';
						let reader = new FileReader();
						//FileReader：从Blob对象中读取数据
						console.log(reader, "从Blob对象中读取数据")
						console.log(reader.result, "数据")
						console.log(reader.readyState, "333")

						reader.onload = function() {

							result = JSON.parse(PAKO.pako.inflate(reader.result, {
								to: 'string'
							}));
							//pako.inflate()对数据进行解压，得到正常的json对象
							if (result.ping) {
								ws.send(JSON.stringify({
									pong: result.ping
								}));
								//响应服务器，避免断开连接
							}
						}
						reader.readAsBinaryString(evt.data);
						//将返回的数据解析为字符串格式
					}


				}
				// 断开 web socket 连接成功触发事件
				ws.onclose = function() {
					//alert("连接已关闭...");
				};

			}
		},
	}
</script>

<style>
	.ban01 {
		background: url(../../static/img/ban01.png) top center no-repeat;
		height: 260upx;
		width: 100%;
		background-size: 100%;
	}

	.ban03 {
		/* background: url(../../static/img/ban03.png) top center no-repeat; */
		background-position: center;
		background-repeat: no-repeat;
		height: 160upx;
		width: 100%;
		background-size: 100% 160upx;
	}

	.ban04 {
		background: url(../../static/img/ban04.png) top center no-repeat;
		height: 160upx;
		width: 100%;
		background-size: 100% 160upx;
	}

	.txt01 {
		color: #C2A07C;
	}

	.txt02 {
		color: #FFFFFF;
	}
</style>
