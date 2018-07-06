<template>
	<div id="main">
		<i class="iconfont icon-detail-left" @click='back'></i>
		<video-player :options="playerOptions"></video-player>
	</div>
</template>

<style type="text/css">
	#main{
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background-color: #000000;
	}
	#main i{
		color: white;
		font-size: 24px;
		position: absolute;
		left: 3vw;
		top: 9vh;
	}
	.vjs-tech{
		width: 100vw;
		margin-top: 30vh;
	}
	#main button{
		color: white;
		border: none;
		outline: none;
		background-color: #000;
		margin-left: 3vw;
		margin-top: 2vh;
	}
	
	.vjs-play-control{
		position: relative;
		left: 42vw;
		top: -4.5vh;
	}
	.vjs-mute-control{
		position: relative;
		left: 80vw;
		top: -9vh;
	}
	
	/*手机横向*/
	@media screen and (orientation:landscape) {
		.vjs-tech{
			margin-top: 0;
		}
		#main i{
			top: 15px;
		}
	}
</style>


<script>
  export default {
    data() {
      return {
        playerOptions: {
          sources: [{
            type: "video/mp4",
            src: "http://gslb.miaopai.com/stream/C7UHRsRr7XYqIb-hJrP6XYm~Am-7IgNmPrCbEg__.mp4?yx=&refer=weibo_app&Expires=1510047420&ssig=j8TC3JiZmx&KID=unistore,video",
          	withCredentials: false
          }],
			language: 'zh-CN',
	        live: true,
	        autoplay: true,
	        height: 540
        }
      }
    },
    methods:{
    	back(){
    		this.$router.go(-1)
    	}
    }
    
}

</script>