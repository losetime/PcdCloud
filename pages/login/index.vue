<template>
	<view class="posRelt bgWhite wrap">
		<!-- <image src="../../static/img/bg.png" class="w100" style="height: 100vh;"></image> -->
	<view class=" bgImg abstrot w100">
		<!-- <view class="tc ptb40 mt50">
		<image src="../../static/img/logo.png" style="width: 225upx;height: 150upx;"></image>
		</view> -->
		<view class="ft24 bold ptb10 plr20 mb50">欢迎登陆PCD</view>
		<view class="plr20">
			<view class="ft14 bold mb10">手机号码</view>
			<view class=" ptb7 flex alcenter bgInp radius4 mb20">
				<!-- <view class="flex alcenter plr10 ptb3">
				<picker :range="list" :value="val" range-key="name_cn" mode="selector" @change="changeCountry">
					<view class="flex alcenter"> 
					<view class="plr10">{{list[val].area_code}}</view>
					<image src="../../static/img/arrow_bottom.png" style="width: 18upx; height: 10upx;"></image>
					</view>
				</picker> 
				</view> -->
				<input class="ft14 plr10 ptb3" v-model="account" type="number" placeholder="请输入手机号码" />
			</view>
			<!-- <view class="ft16 mt20">{{$lang._l('密码')}}</view> --> 
			<view class="ft14 bold mb10">密码</view>
			<view class="mt10 ptb7 flex alcenter between  bgInp radius4">
				<view class="flex alcenter" style="width: 100%;">
				<!-- <input class="ft14 ptb3 plr20" v-model="psw" type="password" :placeholder="$lang._l('请输入密码')" /> -->
				<input v-if="!isShow" type="password"  v-model="psw"  class="ft14 ptb3 plr10" placeholder="请输入密码" />
				<input  v-if="isShow" type="'text'"  v-model="psw" class="ft14 ptb3 plr10" placeholder="请输入密码" />
				</view>
				<!-- <image class="icon_ice mr10" @click="showPsw" :src="isShow?'/static/img/icon_ice02.png':'/static/img/icon_ice01.png'"></image> -->
			</view> 
			<view class="w100 tc ptb12 ft16 mt30 mauto radius4 white" style="background: #0A89EB;" @click="login">登录</view>
			<!-- <view class="w100 tc ptb12 ft16 mt10 bgGrayBtn bgInp radius4  mauto" @click="register">注册</view> -->
			<view class="flex alcenter between cor_blue" style="margin-top: 30upx;">
				<view class=" ft14" @click="forgetPass">忘记密码</view>
				<view class=" ft14" @click="register">注册账号</view>
			</view>
			
		</view>
	</view> 
	</view> 
</template>

<script>
	import country from '../../static/js/country.js'
	export default{
		data(){
			return{
				account:'',
				psw:'',
				isShow:false,
				val:0,
				list:country,
				userinfo:''
			}
		},
		onLoad(){
			this.getUserInfo();
		},
		methods:{
			showPsw(){
				this.isShow = !this.isShow;
			},
			//选择区号
			changeCountry(e){
				this.val = e.target.value;
			},
			register(){
				uni.redirectTo({
					url:'/pages/login/register'
				})
			},
			// 登录
			login(){
				var that = this;
				if(this.account == ''){
					uni.showToast({
						title:'请输入手机号',
						icon:'none'
					});
					return;
				};
				if(this.psw == ''){
					uni.showToast({
						title:'请输入密码',
						icon:'none'
					});
					return;
				};
				
				uni.showLoading();
				this.$api.setLogin({
					mobile:this.account,
					password:this.psw,
				},(res) => {	  
					    uni.hideLoading();
						console.log(res)
						if(res.data.type == 'ok'){
							uni.setStorageSync('token',res.data.message);
							uni.setStorageSync("isLogin",true)
							uni.setStorageSync('mobile',res.data.message.mobile);
							//that.account = uni.getStorageSync('mobile')							
							uni.showToast({
								title:'登录成功'
							});
							setTimeout(()=>{
								uni.switchTab({
									url:'/pages/index/index'
								})
							},1500)
						}
				})
			},
			
			// 跳转忘记密码页面
			forgetPass(){
				uni.navigateTo({
					url:'/pages/login/forgetPass'
				})
			},
			
			// 获取用户信息
			getUserInfo(){
				this.userinfo =  uni.getStorageSync('userinfo');
				this.account = this.userinfo.mobile
			}
		}
	}
</script>

<style>
	/* body{
		background: none;
	} */
	page{
		background: #fff;
	}
	.wrap{
		width: 100%;
		height: 100%;
		background: #fff;
	}
	.bgImg{
		top: 0;
		left: 0;
	}
	.bgInp{
		background: #f5f5f5;
	}
	.icon_ice{
		width: 36upx;
		height: 16upx;
	}
	uni-page-wrapper{
		height: 100%important;
	}
	input{
		width: 100%;
	}
</style>
