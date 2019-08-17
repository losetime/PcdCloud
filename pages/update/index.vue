<template>
	<view>
		<view>更新日志</view>
		<view>
			<view>1.更新1</view>
			<view>2.更新2</view>
			<view>3.更新3</view>
			<view>4.更新4</view>
			<view>5.更新5</view>
			<view>6.更新6</view>
		</view>
		<view>
			<checkbox-group @change="radioChange">
				<checkbox value="true"/> 不再提示
			</checkbox-group>
		</view>
		<view>
			<button>取消</button>
			<button @click="onUpdateBtn">更新</button>
		</view>
	</view>
</template>

<script>
	// TODO 提示的标志位应该从后端取，前端设置的话会没办法取消
	export default {
		data() {
			return {
			}
		},
		methods: {
			radioChange(val) {
				// 有值说明被选中
				if(val.detail.value.length){
					this.setUpdateStorage(false);
				}else{
					this.setUpdateStorage(true);
				}
			},
			// 更新提示
			setUpdateStorage(val) {
				try {
				    uni.setStorageSync('is_update_prompt', val);
				} catch (e) {
				    // error
				}
			},
			// 监听更新按钮
			onUpdateBtn(){
				uni.getStorage({
				    key: 'is_update_prompt',
				    success: function (res) {
				        console.log(res.data);
				    }
				});
				this.$api.getDownloadUrl({},res => {
					if(res.data.type == 'ok'){ 
						// 获得地址
						let server = res.data.message
						// 打开地址
						plus.runtime.openURL(server);
					}
				})
			}
		}
	}
</script>

<style>
</style>
