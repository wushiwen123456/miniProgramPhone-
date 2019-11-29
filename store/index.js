import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		audioCtx : uni.createInnerAudioContext(),
		num:'',
		bgAudio:uni.getBackgroundAudioManager(),
		platform:'',//手机型号
		isRandom:false,
		isPlayApp:false,
		isYaoApp:false
	},
	mutations:{

		play(state,payload){
			state.audioCtx.stop()
			state.audioCtx.src = payload.url
			state.audioCtx.loop = payload.loop 
			state.audioCtx.play()
		},
		stop(state){
			state.audioCtx.stop()
		},
		

		playApp(state,payload){
			state.bgAudio.title = '茶海棠'
			state.bgAudio.src = payload.url
			state.bgAudio.play()
			
			if(state.num != 6){
				state.isPlayApp = true
			}else{
				state.isYaoApp = true
			}
		},
		stopApp(state){
			state.bgAudio.stop()
		},
		paushApp(state,payload){
			state.bgAudio.pause()
			state.bgAudio.src = payload.url
			state.bgAudio.play()
		},
		// 设置变量
		setNum(state,num){
			console.log(num)
			state.num = num
		},
		//随机变量
		randomNum(state){
			state.num = parseInt(Math.random()*7+1)
			state.isRandom = true
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