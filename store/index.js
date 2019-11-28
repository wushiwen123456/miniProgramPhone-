import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		audioCtx : uni.createInnerAudioContext(),
		num:'',
		bgAudio:uni.getBackgroundAudioManager(),
		platform:'',//手机型号
	},
	mutations:{
		// 安卓用户开关
		play(state,payload){
			state.audioCtx.stop()
			state.audioCtx.src = payload.url
			state.audioCtx.loop = payload.loop 
			state.audioCtx.play()
		},
		stop(state){
			state.audioCtx.stop()
		},
		
		// 苹果用户开关
		playApp(state,payload){
			state.bgAudio.title = '茶海棠'
			state.bgAudio.src = payload.url
			state.bgAudio.play()
			return new Promise((resolve,reject) => {
				state.bgAudio.onEnded(resolve())
			})
			
		},
		stopApp(state){
			state.bgAudio.src = ''
			state.bgAudio.stop()
		},
		
		// 设置变量
		setNum(state,num){
			console.log(num)
			state.num = num
		},
		//随机变量
		randomNum(state){

			state.num = parseInt(Math.random()*6+1)
			console.log(state.num)
		},
		// 设置型号
		platform(state,num){
			switch(uni.getSystemInfoSync().platform){
				   case 'android':
				
				       state.platform = 0
				       break;
				
				    case 'ios':
				
				       console.log('运行iOS上')
						state.platform = 1
				       break;
				
				    default:
				
				       console.log('运行在开发者工具上')
						state.platform = 2
				       break;
			}
		}
	}
})

export default store