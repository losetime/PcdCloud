<template>
	<view class="help_wrapper">
		<view class="help_list">
			<view class="help_item" v-for="(item,index) in questionList" :key="index">
				<view class="item_question" @click="onMenuSwitch(index)">
					<text>{{item.question}}</text>
					<image src="../../static/img/user/up.png" v-show="item.showReply"></image>
					<image src="../../static/img/user/down.png" v-show="!item.showReply"></image>
				</view>
				<view class="item_reply" v-show="item.showReply">{{item.reply}}</view>
			</view>		
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return{
				questionList:[
					{
						question:'1.唯信链云矿池存取PCD代币是否需要手续费？',
						reply:'不需要',
						showReply:false
					},
					{
						question:'2.唯信链云矿池如何关联Token Coin账户？',
						reply:'①登录Token Coin账户  ②申请API  ③申请Passpharse  ④获取apiKey和secretKey ⑤记录流程中的Passpharse，apiKey，secretKey ⑥点击绑定Token Coin账户，填入相应数据完成绑定。',
						showReply:false
					},
					{
						question:'3.唯信链云矿池如何盈利？',
						reply:'官方将对矿池参与用户进行锁仓，每日按照一定比列生成利润。',
						showReply:false
					},
					{
						question:'4.矿主的代币是否计入矿池之中？',
						reply:'不计入，矿主的代币只用来获取资格，不用来计入矿池总数。',
						showReply:false
					},
					{
						question:'5.锁仓代币何时释放？',
						reply:'用户如果需要将代币解仓，则需在前一天提出申请，官方将于第二个工作日进行解仓。',
						showReply:false
					}
				]
			}
		},
		methods: {
			onMenuSwitch(index){
				this.questionList[index].showReply = !this.questionList[index].showReply
			}
		}
	}
</script>


<style lang="less" scoped>
.help_list{
	padding:20upx;
	.help_item{
		.item_question{
			height: 80upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom:1px solid #9F9F9F;
			image{
				width:30upx;
				height:30upx;
			}
		}
		.item_reply{
			padding:20upx 0;
			color: #9F9F9F;
		}
	}
}

</style>
