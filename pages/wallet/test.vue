<template>
	<view class="forget-pass_wrapper">
		<view class="menu_tab">
			<text :class="{'menu_tab--item':menuActive === index}" 
				v-for="(item,index) in menuList" 
				:key="index"
				@click="changeMenuTab(index)">
				{{item}}
			</text>
		</view>
		<view class="list_wrap">
			<view class="list_header">
				<text>金额(PCD)</text>
				<text>时间</text>
				<text>操作</text>
			</view>
			<view class="list_content">
				<view class="list_content--item">
					<text>xxx</text>
					<text>xxx</text>
					<text>挖矿</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				menuList:['可投矿','挖矿中','解仓中','解仓记录'],  // 菜单列表
				menuActive: 0,	// 当前选中菜单
			}
		},
		methods: {
			// 修改菜单
			changeMenuTab(index){
				this.menuActive = index
			}
		}
	}
</script>

<style lang="less" scoped>
.flex-layout{
	display:flex;
	justify-content:space-around;
	align-items:center;
}
.forget-pass_wrapper{
	
}
.menu_tab{
	height:100upx;
	.flex-layout;
	background:red;
	.menu_tab--item{
		color:#007B20;
	}
}
.list_wrap{
	.list_header{
		.flex-layout;
		text {
			width:33.33%;
			text-align: center;
		}
	}
	.list_content{
		.list_content--item{
			.flex-layout;
			text{
				width:33.33%;
				text-align: center;
			}
		}
	}
}
</style>
