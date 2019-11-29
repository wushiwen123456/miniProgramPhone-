<template>
	<view>
		<view :style="{height:height}" class="else-contain">
					<image :src="imgUrlData.pic" mode="aspectFit" @load="imgload" class="de-qian"></image>
					<!-- <text>{{isShakeImg}}</text> -->
					<!-- 2.2字不要了 -->
		<!-- 			<view class="qian_text" v-if="!!Object.keys(imgUrlData).length">
						<text class="text_main">{{imgUrlData.content}}</text>
					</view> -->
					<!-- #ifdef MP-WEIXIN -->
						<view class="concern">
							<official-account></official-account> 
						</view>
					<!-- #endif -->
		</view>
	</view>
</template>

<script>
	import {getDetailData} from '@/network/detail';
	
	
	export default {
		data() {
			return {
				imgUrlData:{},
			}
		},
		onLoad() {
			const num = this.$store.state.num
			this.getDetailData(num)
		},
		onShow() {
			if(this.$store.state.isPlayApp && this.$store.state.bgAudio.paused){
				this.$store.state.bgAudio.play()
			}
		},
		methods: {
			// 发送请求
			getDetailData(num){
				getDetailData(num).then(res => {
					
					this.imgUrlData = res.data.data
					this.$store.commit('playApp',{
						url:this.imgUrlData.yyurl
					})
					this.$store.state.isPlayApp = true
					this.$store.state.bgAudio.onEnded(() => {
						uni.navigateTo({
							url:"../index/index"
						})
					})
				})
			},
		},
		computed:{
			height(){
				return uni.getSystemInfoSync().windowHeight + 'px';
			}
		}
	}
</script>

<style lang="scss">
	.concern{
		position: fixed;
		bottom:88upx;
		left: 0;
		right: 0;
		height: 100upx;
		background-color:transition;
	}
	.else-contain{
		width: 100%;
		padding: 80upx;
		box-sizing: border-box;
		display: flex;
		justify-content:center;
		align-items: center;
		overflow: hidden;
		position: relative;
	}
	.de-qian{
		height: 90%;
		width: 100%;
	}
</style>
