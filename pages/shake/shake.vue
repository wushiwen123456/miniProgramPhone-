<template>
	<view class="box" :style="{height:height}">
		<view  class="box1">		
				<image src="../../static/23374ce61ee3503f51a364abe9f3ad16.gif" mode="aspectFit" class="img1"></image>
			<!-- <view class="title">
				<span>请</span>
				<span>摇</span>
				<span>一</span>
				<span>摇</span>
				<span>手</span>
				<span>机</span>
				<span>抽</span>
				<span>签</span>
			</view> -->
		</view>
		
	</view>
</template>

<script>


	
	export default {
		data() {
			return {
				// 一些全局变量
				global: {
					lastTime: 0, //此变量用来记录上次摇动的时间
					intervalTime: 500, // 两次摇一摇的间隔事件
					lastX: 0,
					lastY: 0,
					lastZ: 0, //此组变量分别记录对应x、y、z三轴的数值和上次的数值
					shakeSpeed: 100 //设置阈值
				},
				yaoSrc:'https://xcxys.17yunyin.com//public/uploads/shark.mp3',
				timer:'',
				// imgUrlData:{},
				num:''
			};
		},
		
		// 用户分享
		onShareAppMessage(res) {
			return {
				title:'茶海棠',
				path:`/pages/index/index`
			}
		},
		
		onLoad() {			
				// 监听摇一摇事件
				uni.onAccelerometerChange(this.starshake);
		},
		onShow() {
			
			if(!this.$store.state.audioCtx.paused){
				this.$store.state.audioCtx.pause()
			}
			// if(!this.isShakeImg){
			// 	this.$store.state.audioCtx.pause()
			// }
			// if(this.$store.state.isPlayYao && this.isShakeImg){
			// 	this.$store.state.audioCtx.pause()
			// 	uni.navigateTo({
			// 		url:'../index/index'
			// 	})
			// }
			if(this.$store.state.isYaoApp){
				this.$store.state.bgAudio.pause()
				// 监听摇一摇事件
				uni.onAccelerometerChange(this.starshake);
			}

		},
		computed:{
			height(){
				return uni.getSystemInfoSync().windowHeight + 'px';
			}
		},
		
		methods:{
			
			
			// 监听摇一摇事件
			imgload(){
				this.isShakeImg = true
			},
			
			/**
			 * 监听摇一摇具体业务
			 * acceleration [object] 返回加速度相关信息
			 */
			starshake(acceleration) {
				let nowTime = new Date().getTime(); //记录当前时间
				let self = this;
				//如果这次摇的时间距离上次摇的时间有一定间隔 才执行
				if (nowTime - this.global.lastTime > 100) {
					let diffTime = nowTime - this.global.lastTime; //记录时间段
					this.global.lastTime = nowTime; // 记录本次摇动时间，为下次计算摇动时间做准备
					let x = acceleration.x; // 获取x轴数值，x轴为垂直于北轴，向东为正
					let y = acceleration.y; // 获取y轴数值，y轴向正北为正
					let z = acceleration.z; // 获取z轴数值，z轴垂直于地面，向上为正
			
					// 速度计算
					let speed =
						(Math.abs(
							x + y + z - self.global.lastX - self.global.lastY - self.global.lastZ
						) /
							diffTime) *
						10000;
					//如果计算出来的速度超过了阈值，那么就算作用户成功摇一摇
					if (speed > this.global.shakeSpeed) {
						// this.isShakeImg = true
						uni.stopAccelerometer()
						this.$store.commit('play',{
							url:this.yaoSrc,
							loop:false
						})
						uni.navigateTo({
							url:"showQian"
						})
						return 
						// this.getDetailData(this.num)
					}
					//赋值，为下一次计算做准备
					this.global.lastX = x;
					this.global.lastY = y;
					this.global.lastZ = z;
				}
			}
		}
	}
</script>

<style lang="less" scoped>

	.box{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom:0;
		display: flex;
		justify-content: center;
		align-content: center;
		overflow: hidden;
	}
	.box1{
		width: 100%;
		height: 100%;
		padding: 0upx;
		box-sizing: border-box;
		display: flex;
		justify-content:center;
		align-items: center;
		overflow: hidden;
		flex-direction: column;
	}
	.img1{
		width: 100%;
		height: 100%;
		background-color: rgba(238,238,238,1);
	}
	
	// @keyframes move{
	// 	0%{ transform:translateX(0) }
	// 	50%{ transform: translateX(100%)}
	// 	100%{
	// 		transform: translateX(0%)
	// 	}
	// }
	// .title{
		
	// 	text-align: center;
	// 	font-size: 64upx;
	// 	letter-spacing: .2em;
	// 	text-align: center;
	// 	margin-top:130rpx;
	// 	text-shadow: 0 0 5px #fff,
	//                      0 0 10px #fff,
	//                      0 0 15px #fff,
	//                      0 0 20px #00a67c,
	//                      0 0 35px #00a67c,
	//                      0 0 40px #00a67c,
	//                      0 0 50px #00a67c,
	//                      0 0 75px #00a67c;
	// }
	// @keyframes Glow {
	//     from {
	//         text-shadow: 0 0 10px #fff,
	//                      0 0 20px #fff,
	//                      0 0 30px #fff,
	//                      0 0 40px #00a67c,
	//                      0 0 70px #00a67c,
	//                      0 0 80px #00a67c,
	//                      0 0 100px #00a67c,
	//                      0 0 150px #00a67c;
	// 		opacity: 0.2;
	//     }
	//     to {
	//         text-shadow: 0 0 5px #fff,
	//                      0 0 10px #fff,
	//                      0 0 15px #fff,
	//                      0 0 20px #00a67c,
	//                      0 0 35px #00a67c,
	//                      0 0 40px #00a67c,
	//                      0 0 50px #00a67c,
	//                      0 0 75px #00a67c;
	// 		opacity: 1;
	//     }
	// }
	
	// .qian_text{
	// 	font-size: 32upx;
	// 	color: #404040;
	// 	margin-top: 100upx;
	// }

	// .bottom-bar{
	// 	position: fixed;
	// 	bottom: 0;
	// 	left: 0;
	// 	right: 0;
	// 	height:30vh;
	// 	z-index: 999;
	// 	display: flex;
	// 	justify-content: center;
	// 	align-items: flex-end;
	// 	padding-bottom: 60upx;
	// 	box-sizing: border-box;
	// }
	// .jie_title{
	// 	height: 60upx;
	// 	line-height: 60upx;
	// 	color: #2b2b2b;
	// 	font-weight: 600;
	// 	text-align: center;
	// 	font-size: 50upx;
	// 	margin: 20upx 0;
	// }
	// .text_main{
	// 	font-size: 32upx;
	// }
	
</style>
