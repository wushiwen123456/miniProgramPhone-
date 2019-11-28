<script>
	
	
	export default {
		onHide(){
			const mp3 = this.$store.state.audioCtx,
			bgMp3 = this.$store.state.bgAudio
			if(!mp3.paused){
				mp3.pause()
			}
			if(!bgMp3.paused){
				bgMp3.pause()
			}

		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
