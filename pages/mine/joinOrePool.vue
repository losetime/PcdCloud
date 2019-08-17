<template>
	<view class="plr10 ptb10">
		<view class="mb10">
			<image src="/static/img/kc_banner.png" class="w100" style=" height: 200upx;"></image>
		</view>
		<!-- <view class="plr10 ptb20 bgWhite radius4 bshadow5 card">
			<view class="ft14 bold mb20">PCD矿池</view>
			<view class="flex alcenter around tc">
				<view>
					<view class="ft12 mb10">昨日挖矿</view>
					<view class="bold ft16 cor_blue">471.02</view>
				</view>
				<view>
					<view class="ft12 mb10">累计挖矿(个)</view>
					<view class="bold ft16 cor_blue">125</view>
				</view>
				<view>
					<view class="ft12 mb10">昨日收益</view>
					<view class="bold ft16 cor_blue">4117.21</view>
				</view>
			</view>
		</view> -->
		<view class="plr10 ptb20 bgWhite radius4 bshadow5 card mt10">
			<view class="ft14 mb20 flex alcenter between"><text class="bold">PCD矿池</text><text class="ft12">矿池总量：<text class="cor_blue">{{round(userInfo.total,2)}}</text></text></view>
			<view class="flex alcenter around tc" style="flex-wrap: wrap;">
				<view class="item1">
					<view class="ft12 mb10">累计挖矿</view>
					<view class="bold ft16 cor_blue">{{round(userInfo.totalField,4)}}</view>
				</view>
				<view class="item1">
					<view class="ft12 mb10">算力</view>
					<view class="bold ft16 cor_blue">{{round(userInfo.comPower,4)}}</view>
				</view>
				<view class="item1 mt20">
					<view class="ft12 mb10">昨日挖矿</view>
					<view class="bold ft16 cor_blue">{{round(userInfo.yesField,4)}}</view>
				</view>
				<view class="item1 mt20">
					<view class="ft12 mb10">矿工人数</view>
					<view class="bold ft16 cor_blue">{{round(userInfo.peoNum)}}</view>
				</view>
			</view>
		</view>
		<view style="margin-top:10px;">算力开启条件：矿池总量达到343312.00</view>
		<view class="bgBlues white ft16 radius4 mt55 ptb14 tc" @click="joinOrePoolDialog">加入矿池</view>
		<view class="bgGrayBtn white ft16 radius4 mt55 ptb14 tc" @click="exitOrePoolDialog">退出矿池</view>
		
		<!--加入矿池弹框-->
		<view class="fixed flex alcenter jscenter box w100" v-if="showJoinDialog">
			<view class=" bgWhite radius4 w90 mauto">
				<view class="tc ft16 ptb10 plr10">数量</view>
				<view class="plr10 mb10 mtb10">
					<input type="number" v-model="actualJoinOrePoolNumber" placeholder="请输入要加入的数量" class="w100 bd3f radius4 ft14 ptb10 plr10 inp bd_cor" />
				</view>
				<view class="plr10 mtb10 gray6">最少加入矿池的数量{{round(minJoinOrePoolNumber,2)}}</view>
				<view class="flex alcenter" style="border-top: 1px solid #eee;">
					<view class="flex1 ptb14 tc" @click="cancelJoinDialog">取消</view>
					<view class="red2 flex1 ptb14 tc confirm" @click="joinOrePoolConfirm">确定</view>
				</view>
			</view>
		</view>

		<!-- 退出矿池弹框  -->
		<view class="fixed flex alcenter jscenter box w100" v-if="showExitDialog">
			<view class=" bgWhite radius4 w90 mauto">
				<view class="tc ft16 ptb10 plr10">数量</view>
				<view class="plr10 mb10 mtb10">
					<input type="number" v-model="actualExitOrePoolNumber" placeholder="请输入要退出的数量" class="w100 bd3f radius4 ft14 ptb10 plr10 inp bd_cor" />
				</view>
				<view class="plr10 mtb10 gray6">可退出矿池的数量{{round(canExitOrePoolNumber,2)}}</view>
				<view class="flex alcenter" style="border-top: 1px solid #eee;">
					<view class="flex1 ptb14 tc" @click="cancelExitDialog">取消</view>
					<view class="red2 flex1 ptb14 tc confirm" @click="exitOrePoolConfirm">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showJoinDialog: false, // 加入矿池对话框状态
				showExitDialog: false, // 退出矿池对话框状态
				canExitOrePoolNumber: 200,  // 可退出矿池数量
				actualExitOrePoolNumber: '', // 实际退出矿池数量
				minJoinOrePoolNumber: "0", // 最少加入矿池的数量
				actualJoinOrePoolNumber: "", // 实际加入矿池的数量
				userInfo:{}, // 用户信息
				orePoolId:'' // 矿池Id
			}
		},
		onLoad(e) {
			this.orePoolId = e.id;
			this.getOrePoolSum();
			this.getOrePoolMinNumber();
		},
		onPullDownRefresh() {
			this.getOrePoolSum();
			this.getOrePoolMinNumber();
			//监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
			setTimeout(function() {
				uni.stopPullDownRefresh(); //停止下拉刷新动画
			}, 1000);
		},
		methods: {
			// 打开加入矿池对话框
			joinOrePoolDialog() {
				if(this.getUserInfo()){
					this.showJoinDialog = true;
				}
			},
			// 关闭加入矿池对话框
			cancelJoinDialog() {
				this.showJoinDialog = false;
				this.actualJoinOrePoolNumber = '';
			},
			// 打开退出矿池对话框
			exitOrePoolDialog() {
				this.showExitDialog = true;
			},
			// 关闭退出矿池对话框
			cancelExitDialog() {
				this.showExitDialog = false;
				this.actualExitOrePoolNumber = '';
			},
			
			// 加入矿池确认
			joinOrePoolConfirm() {
				if (this.actualJoinOrePoolNumber == '' || this.actualJoinOrePoolNumber <= 0) {
					uni.showToast({
						'title':'请输入正确的加入数量',
						'icon':'none'
					});
					this.showJoinDialog = true;
					return false;
				}
				this.$api.joinOrePool({
					number: this.actualJoinOrePoolNumber,
					id: this.orePoolId
				}, res => {
					console.log(res.data.message)
					if (res.data.type == 'ok') {
						uni.showToast({
							'title':'加入矿场成功',
							'icon':'none'
						});
						this.showJoinDialog = false;
						this.actualJoinOrePoolNumber = '';
						setTimeout(() => {
							uni.startPullDownRefresh();
						}, 1500)

					}
				})
			},
			
			// 退出矿池确认
			exitOrePoolConfirm() {
				if (this.actualExitOrePoolNumber == '' || this.actualExitOrePoolNumber <= 0) {
					uni.showToast({
						'title':'请输入正确的退出数量',
						'icon':'none'
					});
					this.showExitDialog = true;
					return false;
				}
				
				this.$api.exitOrePool({
					number: this.actualExitOrePoolNumber
				}, res => {
					if (res.data.type == 'ok') {
						this.showToast({
							'title':'退出成功'
						});
						this.showExitDialog = false;
						this.actualExitOrePoolNumber = '';
						setTimeout(() => {
							uni.startPullDownRefresh();
						}, 1500)
					}
				})
			},
			
			// 获取加入矿池数量的最小值
			getOrePoolMinNumber() {
				this.$api.getOrePoolMinNumber({
					id: this.orePoolId
				}, res => {
					console.log(res.data, "147258")
					this.minJoinOrePoolNumber = res.data.message.mini_join_num
					this.canExitOrePoolNumber = res.data.message.back_num
				})
			},
	
			// 获取矿池总量
			getOrePoolSum() {
				uni.showLoading();
				this.$api.getOrePoolSum({
					id: this.orePoolId
				}, res => {
					uni.hideLoading();
					if (res.data.type == 'ok') {
						console.log(res.data.message)
						this.userInfo = res.data.message
					}
				})
			},
			
			// 如果OK账号不存在，跳转ok账号绑定页面
			getUserInfo() {
				this.$api.getUserInfo({}, (res) => {
					if (res.data.type == 'ok') {
						let data = res.data.message
						if (data.okaccount == "") {
							uni.navigateTo({
								url: "/pages/user/okCode"
							})
							return false
						}
						return true
					}
				})
			}
		}
	}
</script>

<style>
	.card {
		box-shadow: 0 0 10px #eee;
	}

	.box {
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
		height: 100%;
	}

	.inp {
		box-sizing: border-box;
		height: 80upx;
		line-height: 80upx;
	}

	.confirm {
		border-left: 1px solid #eee;
	}

	.item1 {
		flex: 1;
		width: 50%;
		max-width: 50%;
		min-width: 50%;
	}
</style>
