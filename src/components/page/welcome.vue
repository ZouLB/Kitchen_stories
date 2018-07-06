<template>
	<main :style="{backgroundImage: 'url(' +bg + ')'}">
		<div class="wrap">
			<transition name='show' >
				<div class="logo" v-show='msg'>
					<img src="../../assets/image/icon/logo.png"/>
					<p>anyone can cook</p>
				</div>
			</transition>
		</div>
	</main>
</template>

<style type="text/css" scoped="scoped">
	main{
		width: 100vw;
		height: 100vh;
		/*background:url(../../assets/image/img/14.jpg) no-repeat;*/
		background-repeat: no-repeat;
		background-size: cover;
	}
	main .logo{
		position: relative;
		left: 0;
		top:40%;
		animation: swing 2s;
		transition: 2s;
	}
	main img{
		width: 80%;
	}
	main p{
		font-size: 20px;
	}
	.wrap{
		width: 100vw;
		height: 100vh;
		text-align: center;
		position: absolute;
		left: 0px;
		top: 0px;
		background: rgba(255,255,255,.3);
		z-index: 1;
	}
	@keyframes swing {
		20% {
			transform: rotate3d(0, 0, 1, 15deg)
		}
		40% {
			transform: rotate3d(0, 0, 1, -10deg)
		}
		60% {
			transform: rotate3d(0, 0, 1, 5deg)
		}
		80% {
			transform: rotate3d(0, 0, 1, -5deg)
		}
		to {
			transform: rotate3d(0, 0, 1, 0deg)
		}
	}
</style>

<script type="text/javascript">
	export default{
		data(){
			return{
				msg:true,
				bg:require('../../assets/image/img/14.jpg')
			}
		},
		mounted(){
			var _this=this;
			window.setTimeout(function(){
		        _this.$router.push("/home")
		    },2200)
		}
	}
</script>