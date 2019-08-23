<template>
	<view class="user-info_wrapper">
		<view class="form_list">
			<view class="avatar__form--item" @click="uploadAvatar">
				<image :src="userAvatar" class="item_avatar"></image>
				<text class="item_text">修改头像</text>
				<image src="/static/img/common/arrowRight.pngrrowRight.png" class="item_icon"></image>
			</view>
			<view class="nickname__form--item" @click="showChangeNameDialog = true">
				<text>修改名字</text>
				<text class="item_text">{{userNickname}}</text>
				<image src="/static/img/common/arrowRight.pngrrowRight.png" class="item_icon"></image>
			</view>
		</view>
		
		<uni-dialog 
			:show="showChangeNameDialog" 
			@cancel="onChangeNameDialog('cancel')" 
			@confirm="onChangeNameDialog('confirm')" 
			title="修改昵称" 
			confirm-text="确定" 
			cancel-text="取消">
		    <view style="min-height: 90upx;padding: 32upx 24upx;">
		        <input type="text" v-model="newUserName" placeholder="请输入2~8位昵称" class="w100 bd3f radius4 ft14 ptb10 plr10 inp bd_cor" />
		    </view>
		</uni-dialog>
	</view>
</template>

<script>
	import uniDialog from '@/components/uni-dialog/uni-dialog.vue'
	export default{
		data(){
			return{
				showChangeNameDialog:false, 	//修改名字对话框状态
				newUserName:'', 				// 新的用户昵称
				userAvatar:'',					// 用户头像
				userNickname:''					// 用户昵称
			}
		},
		onReady() {
			this.getUserInfo();
		},
		methods:{
			// 上传头像
			uploadAvatar(){
				var that = this;
				uni.chooseImage({
					count:1,
					success(res) {
						console.log(res);
						// that.headImg = res.tempFilePaths[0];
						uni.uploadFile({
							url:that.$api.getApiUrl(), //上传接口
							filePath: res.tempFilePaths[0],
							name: 'file', 
							formData: {
								'img': res.tempFilePaths[0]
							},
							header: {
								'content-type': 'multipart/form-data'
							},
							success: (uploadFileRes) => {
								console.log(uploadFileRes);
								console.log(JSON.parse(uploadFileRes.data) );s
								const picUrl = JSON.parse(uploadFileRes.data).message;
								that.userAvatar = picUrl;
								console.log(that.userAvatar,picUrl,uploadFileRes.data.message);
								this.$api.changeUserInfo({avatar:picUrl},res => {
									if(res.data.type == 'ok'){
										uni.showToast({
											title:res.data.message
										});
									}
								})
							}
						});
						
						
					}
				})
			},
			
			// 修改昵称事件
			onChangeNameDialog(param){
				if(param === 'confirm'){
					debugger
					if(this.newUserName === ''){
						uni.showToast({
							title:'请输入昵称'
						})
						return
					}
					if(this.newUserName.length < 2 || this.newUserName.length > 8){
						uni.showToast({
							title:'请输入2~8位昵称'
						});
						return
					}
					this.$api.changeUserInfo({nickname:this.newUserName},res => {
						if(res.data.type == 'ok'){
							uni.showToast({
								title:res.data.message
							})
							this.getUserInfo();
						}
					})
					this.showChangeNameDialog = false
					this.newUserName = ''
				}else{
					this.showChangeNameDialog = false
					this.newUserName = ''
				}
			},
			
			// 获取用户信息
			getUserInfo(){
				this.$api.getUserInfo({}, res => {
					if (res.data.type == 'ok') {
						let result = res.data.message;
						this.userAvatar = result.baseInfo.avatar;
						this.userNickname = result.baseInfo.nickname;
					}
				})
			}
		},
		components:{
			uniDialog
		}
	}
</script>

<style lang="less" scoped>
	.flex-layout{
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #FFFFFF;
	}
	
	.user-info_wrapper{
		padding: 20upx;
	}
	.form_list {
		.avatar__form--item,
		.nickname__form--item{
			.flex-layout;
			padding:20upx;
			.item_text{
				margin-right:40%;
			}
			.item_icon{
				width: 17upx; 
				height: 28upx;
			}
		}
		.avatar__form--item{
			border-bottom: 1px solid #EFEFEF;
			.item_avatar{
				width: 100upx; 
				height: 100upx;
				border-radius: 50%;
			}
		}
	}
</style>
