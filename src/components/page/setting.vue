<template>
	<main>
		<div class="header">
			<i class="iconfont icon-nav" @click='getMenu'></i>
			<h1>设置</h1>
		</div>
		
		<div class="slot"></div>
		
		<h2 class="fix">通知</h2>
		<ul>
			<li>回复收到的评论<mt-switch v-model='a'></mt-switch></li>
			<li>回答收到的提问<mt-switch v-model='b'></mt-switch></li>
			<li>每周下厨新灵感<mt-switch v-model='c'></mt-switch></li>
		</ul>
		
		<h2>度量系统</h2>
		<mt-radio align="right" swipeable='a' :options="['美制度量系统', '公制度量系统']"></mt-radio>
		
		<h2>自动播放视频</h2>
		<mt-radio align="right"  :options="['仅WiFi', 'WiFi和手机网络','不自动播放']"></mt-radio>
	
		<h2>语言</h2>
		<mt-radio align="right" title="默认设置" :options="['设备语言']"></mt-radio>
		<mt-radio align="right" title="经常更新" :options="['English', '中文','Deutsch']"></mt-radio>
		<mt-radio align="right" title="额外" :options="['한국어','français','español','日本語','русский','português','ภาษาไทย']"></mt-radio>
	
	</main>
</template>

<style scoped="scoped">
	main{
		width: 100%;
		/*height: 100vh;*/
		position: absolute;
		left: 0;
		top: 0;
		overflow: hidden;
	}
	.header{
		width: 100%;
		height: 8%;
		background: #ffcd02;
		line-height: 47px;
		color: white;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 2;
		box-sizing: border-box;
	}
	.header i{
		font-size: 26px;
		
	}
	.header i:nth-of-type(1){
		padding: 1% 7% 0 5%;;
	}
	.header h1{
		display: inline;
		font-size: 20px;
	}
	.slot{
		width: 100%;
		height: 17%;
		display: none;
	}
	h2{
		display: block;
		width: 100%;
		height: 60px;
		font-size: 18px;
		line-height:60px ;
		border-bottom: 1px solid #CACACA;
		text-indent: 1em;
	}
	ul{
		margin-top: 30%;
	}
	li{
		display: block;
		width: 100%;
		height: 48px;
		line-height:50px ;
		font-size: 16px;
		border-bottom: 1px solid #CACACA;
		text-indent: 1em;
		margin-left: 20px;
	}
	.mint-switch{
		display: inline-block;
		margin-left: 150px;
	}
	.fix{
		position: fixed;
		top: 8%;
		left: 0px;
		background-color: white;
		z-index: 1;
	}
	
</style>

<script type="text/javascript">
	export default {
		data(){
			return{
				a:true,
				b:true,
				c:true
			}
		},
		methods: {
			getMenu() {
				document.getElementById('menu').style.left=0;
			},
		   
		   //监听滚动事件
			handleScroll() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
//				console.log(scrollTop)
//				var offsetTop = document.querySelector('h2').offsetTop
//				if (scrollTop > offsetTop) {
//					this.searchBarFixed = true
//				} else {
//					this.searchBarFixed = false
//				}
				
				if(scrollTop>0&&scrollTop<209) {
					//document.querySelectorAll('h2')[0].className='fix'
					$('h2').eq(0).addClass('fix').siblings().removeClass('fix')
					$('.slot').css({display:'block'})
				}
				else if(scrollTop>209&&scrollTop<365){
					$('h2').eq(1).addClass('fix').siblings().removeClass('fix')
				}
				else if(scrollTop>365&&scrollTop<570){
					$('h2').eq(2).addClass('fix').siblings().removeClass('fix')
				}
				else if(scrollTop>570){
					$('h2').eq(3).addClass('fix').siblings().removeClass('fix')
				}
			
			}
		},
		
		//挂载监听事件
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
		},
		//移除监听事件
		destroyed () {
			window.removeEventListener('scroll', this.handleScroll)
		}
	}
</script>