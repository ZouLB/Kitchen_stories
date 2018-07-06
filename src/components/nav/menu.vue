<template>
	<main id='menu' @touchmove.prevent>
		<div>
			<span>
				<img src="../../assets/image/icon/logo.png"/>
			</span>
			<ul>
				<li @click='hide'>
					<router-link to='home'><i class='iconfont icon-knife'></i>主页</router-link>
				</li>
				<li @click='hide' >
					<router-link to='tips'><i class='iconfont icon-tips'></i>小贴士</router-link>
				</li>
				<li @click='hide' >
					<router-link to='sort'><i class='iconfont icon-classifyn'></i>分类</router-link>
				</li>
				<li @click='hide'>
					<router-link to='myhome'><i class='iconfont icon-my'></i>我的主页</router-link>
				</li>
				<li @click='hide'>
					<router-link to='shop'><i class='iconfont icon-shopping'></i>购物单</router-link>
				</li>
				<hr/>
				<li @click='hide'>
					<router-link to='about'><i class='iconfont icon-aboutus'></i>关于我们</router-link>
				</li>
				<li @click='hide'>
					<router-link to='setting'><i class='iconfont icon-setting'></i>设置</router-link>
				</li>
			</ul>
		</div>
		<div id="wrap" @click='hide'></div>
	</main>
</template>

<style type="text/css" scoped="scoped">
	span>img {
		width: 65%;
	}
	
	span {
		display: block;
		padding: 12% 5%;
		border-bottom: 1px solid #f2f2f2;
	}
	
	div:nth-of-type(1) {
		width: 85%;
		height: 100vh;
		background: white;
		float: left;
	}
	
	ul li {
		
		margin: 8% 8%;
	}
	
	ul li a {
		text-decoration: none;
		color: #515151;
		font-size: 18px;
	}
	ul li i{
		font-size: 28px;
		padding-right: 8%;
	}
	ul li i:nth-last-of-type(2){
		font-size: 15px;
	}
	
	hr {
		border: none;
		border-top: 1px solid #f2f2f2;
	}
	
	#wrap {
		background: rgba(0, 0, 0, 0.5);
		width: 15%;
		height: 100vh;
		float: left;
	}
	
	main {
		width: 100%;
		position: fixed;
		left: -100%;
		top: 0;
		transition: 0.5s;
		z-index: 99;
	}
	
	.router-link-active{
		color: #f4ea2a;
	}
</style>

<script type="text/javascript">
	export default {
		methods: {
			hide() {
				document.getElementById('menu').style.left = '-100%'
				
				/***取消滑动限制***/
				var mo=function(e){e.preventDefault();};
				document.body.style.overflow='';//出现滚动条
        		document.removeEventListener("touchmove",mo,false);  
			}
		}
	}
</script>