<template>
	<view class="ok-code_wrap">
		<view class="form_item">
			<text>OK账号</text>
			<view>
				{{userInfo.account}}			
			</view>
		</view>
		<view class="form_item">
			<text>apiKey</text>
			<view>
				{{userInfo.apiKey}}			
			</view>
		</view>
		<view class="form_item">
			<text>secretKey</text>
			<view>
				{{userInfo.secretKey}}				
			</view>
		</view>
		<view class="form_item">
			<text>Passphrase</text>
			<view>
				{{userInfo.passphrase}}				
			</view>
		</view>
		<button type="primary" class="form_btn" @click="showDialog = true">解绑</button>

		<uni-dialog 
		    :show="showDialog" 
		    title="确认解绑" 
		    content="所有信息都会删除,是否确认解绑？"
		    @cancel="onDialogEvent('cancel')" 
		    @confirm="onDialogEvent('confirm')">
		</uni-dialog>
	</view>
</template>

<script>
	import uniDialog from "@/components/uni-dialog/uni-dialog.vue"
	export default {
		data() {
			return {
				userInfo: {},
				showDialog: false
			}
		},
		onReady() {
			this.userInfo= uni.getStorageSync('user_Info').okAccount;
		},
		methods: {
			// 对话框事件
			onDialogEvent(param){
				if(param === "cancel"){
					this.showDialog = false
				}else if(param === "confirm"){
					this.removeOkAccount();
				}
			},
			// 解绑
			removeOkAccount(){
				this.$api.removeOkAccount({},res=>{
					if(res.data.type === 'ok'){
						uni.reLaunch({
							url: '/pages/login/index'
						})
					}
				})
			}
		},
		components: {uniDialog}
	}
</script>

<style lang="less" scoped>
.ok-code_wrap{
	height:100vh;
	padding: 0 40upx;
	background-color:#FFFFFF;
	overflow:hidden;
	.form_item{
		text{
		  display: block;
		  margin:40upx 0 10upx 0;
		  font-weight: 700;
		}
		view{
			display: block;
			width:100%;
			height:80upx;
			line-height: 80upx;
			padding:0 10upx;
			background-color: #F3F3F3;
		}
	}
	.form_btn{
		width:90%;
		margin-top:60upx;
	}
}
</style>
