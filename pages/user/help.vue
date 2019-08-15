<template>
	<view>
		<view class="item_box">
			<view class="item">
				<!-- <view class="flex">
					<view>
						账单侠能够帮我干什么？
					</view>
					<view>
						<image class="icon_right" src="/static/img/back.png" mode="widthFix"></image>
					</view>
					<view v-if="">
						充值对出借人是免费的，手续费由平台承担。充值对出借人是免费的，手续费由平台承担。
					</view>
				</view> -->
				<uni-collapse :accordion="true">
					<uni-collapse-item title="1.唯信链云矿池存取PCD代币是否需要手续费？">
						<view style="padding: 30upx;color: #999;">
							不需要
                    	</view>
					</uni-collapse-item>
					<uni-collapse-item title="2.唯信链云矿池如何关联Token Coin账户？">
						<view style="padding: 30upx;color: #999;">
							 ①登录Token Coin账户  ②申请API  ③申请Passpharse  ④获取apiKey和secretKey
   ⑤记录流程中的Passpharse，apiKey，secretKey ⑥点击绑定Token Coin账户，填入相应数据完成绑定。

						</view>
					</uni-collapse-item>
					<uni-collapse-item title="3.唯信链云矿池如何盈利？">
						<view style="padding: 30upx;color: #999;">
						官方将对矿池参与用户进行锁仓，每日按照一定比列生成利润。
						</view>
					</uni-collapse-item>
					<uni-collapse-item title="4.矿主的代币是否计入矿池之中？">
						<view style="padding: 30upx;color: #999;">
						不计入，矿主的代币只用来获取资格，不用来计入矿池总数。
						</view>
					</uni-collapse-item>
					<uni-collapse-item title="5.锁仓代币何时释放？">
						<view style="padding: 30upx;color: #999;">
						 用户如果需要将代币解仓，则需在前一天提出申请，官方将于第二个工作日进行解仓。
						</view>
					</uni-collapse-item>
					
				</uni-collapse>
			</view>
		</view>
	</view>
</template>

<script>
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'

	export default {
		components: {
			uniCollapse,
			uniCollapseItem,
			uniList,
			uniListItem
		},
		data() {
			return {
				extraIcon: {
					color: '#4cd964',
					size: '22',
					type: 'spinner'
				}
			}
		},
		onLoad() {

		},
		methods: {
			change(e) {
				console.log(e)
			}
		}
	}
</script>


<style>
	.icon_right {
		width: 20upx;
		display: block;
	}
	
</style>
