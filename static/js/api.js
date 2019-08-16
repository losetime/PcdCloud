import http from './http';

export default {
	//下载地址
	getDownloadUrl(param,callback){
		http('/app_download_url','GET',param,callback)
	},
	
	//更新推送
	getUpdate(param,callback){
		http('/app_update_version','GET',param,callback)
	},
	
	/** --------------------------- 登录相关 ------------------------- */
	
	// 登录
	setLogin(param,callback){
		http('/login','POST',param,callback)
	},
	
	// 退出
	setLoginOut(param,callback){
		http('/user/signout','POST',param,callback)
	},
	
	// 注册
	register(param,callback){
		http('/register','POST',param,callback)
	},
	
	// 获取验证码
	getVerifyCode(param,callback){
		http('/sms_send','POST',param,callback)
	},
	
	// 忘记密码
	forgetPass(param,callback){
		http('/user/forget','POST',param,callback)
	},
	
	/** --------------------------- 用户信息相关 ------------------------- */
	
	// 获取用户信息
	getUserInfo(param,callback){
		http('/user/info','GET',param,callback)
	},
	
	// 绑定ok账户
	bindOkAccount(param,callback){
		http('/user/account_bind','POST',param,callback)
	},
	
	// 获取钱包信息
	getWalletInfo(param,callback){
		http('/currency/detail','GET',param,callback)
	},
	
	// 获取联系方式
	getContactWay(param,callback){
		http('/service_wechat_pic','GET',param,callback)
	},
	
	// 获取货币列表
	getCurrencyList(param,callback){
		http('/v2/currencyLists','POST',param,callback)
	},
	
	// 获取货币数量
	getCurrencyNumber(param,callback){
		http('/v2/getNumber','POST',param,callback)
	},
	
	// 获取手续费
	getRates(param,callback){
		http('/wallet/wallet_out_rate','GET',param,callback)
	},
	
	// 提币操作
	onExtract(param,callback){
		http('/wallet/out','POST',param,callback)
	},
	
	// 修改密码
	updatePass(param,callback){
		http('/updatePassword','POST',param,callback)
	},
	
	// 获取邀请码
	getInviteCode(param,callback){
		http('/user/getInviteCode','GET',param,callback)
	},
	
	// 矿主申请
	toBeMiner(param,callback){
		http('/user/toBeMiner','POST',param,callback)
	},
	
	// 解仓
	unlockWarehourse(param,callback){
		http('/user/turnOutLock','POST',param,callback)
	},
	
	// 锁仓
	lockWarehourse(param,callback){
		http('/user/lock_house','POST',param,callback)
	},
	
	// 获取收益
	getIncome(param,callback){
		http('/interest_log','GET',param,callback)
	},
	
	
	/** --------------------------- 矿场信息相关 ------------------------- */
	
	// 矿场列表
	getUserPoolList(param,callback){
		http('/user_pool_lists','GET',param,callback)
	},
	
	// 加入矿场
	joinOrePool(param,callback){
		http('/user/addUserPool','POST',param,callback)
	},
	
	// 加入矿池的最小数值
	getOrePoolMinNumber(param,callback){
		http('/mini_join_num','POST',param,callback)
	},
	
	// 退出矿池
	exitOrePool(param,callback){
		http('/user/turnOutInvestment','POST',param,callback)
	},
	
	// 获取矿池总量
	getOrePoolSum(param,callback){
		http('/field/detail','GET',param,callback)
	},
	
	/**
	 * 获取公告: c_id:10
	 * 获取资讯: c_id:9
	 */
	getAnnouncementList(param,callback){
		http('/news/list','POST',param,callback)
	},
	
	// 获取新闻详情
	getNewsDetail(param,callback){
		http('/news/detail','GET',param,callback)
	},
	
}