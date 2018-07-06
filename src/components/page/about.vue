<template>
	<main>
		<div class="header">
			<i class="iconfont icon-nav" @click='getMenu'></i>
			<h1>关于我们</h1>
		</div>
		
		<div class="content">
			<div class="icons">
				<img src="../../assets/image/icon/logo.png"/>
				<p>anyone can cook</p>
				<ul>
					<li><img src="../../assets/image/icon/pinterest.png"/></li>
					<li><img src="../../assets/image/icon/youtu.png"/></li>
					<li><img src="../../assets/image/icon/insta.png"/></li>
					<li><img src="../../assets/image/icon/twtiter.png"/></li>
					<li><img src="../../assets/image/icon/fb.png"/></li>
				</ul>
				<p>kitchenstories.io</p>
			</div>
			
			<div class="word">
				<p>厨房故事斩获苹果 App Store 2015 年度精选软件和 Google Play 2016 最佳设计奖，并成功在多个软件平台登陆，创造这一切故事的总部也搬到了柏林最热闹的地段。如今，除了图文并茂的食谱，用户还可以观看家厨基本功视频，阅读关于食物的科普文章。在日常生活中，每个人都可以使用厨房故事，它连接着全世界的美食爱好者。凭借考究的视频和精美的步骤图，厨房故事软件迅速在用户中引起了反响。</p>
				<p>“anyone can cook”的口号名副其实。随后，因设计精美、内容丰富且功能实用，厨房故事获得了来自苹果App Store的肯定，在软件商店的食物类软件里排名第一。</p>
				<p>Copyright 2017 AJNS New Media GmbH.版权所有</p>
			</div>
		</div>
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
	
	.content{
		margin-top: 14%;
	}
	.icons{
		text-align: center;
	}
	.icons>img{
		width: 70%;
		margin: 10% 15% 2% 15%;
	}
	
	.icons p{
		font-size: 18px;
	}
	.icons ul{
		margin-left:25%;
		margin-top: 7%;
	}
	.icons li{
		float: left;
		margin-right: 7%;
	}
	.icons p:nth-last-of-type(1){
		font-size: 15px;
		color: #F4EA2A;
		padding: 10% 0% 8% 0;
	}
	
	.word p{
		display: block;
		width: 80%;
		margin-bottom: 5%;
		margin-left: 10%;
		color: #454545;
		text-align: left;
		line-height: 25px;
	}
</style>

<script type="text/javascript">
	export default {
		methods: {
			getMenu() {
				document.getElementById('menu').style.left=0;
			}
		}
	}
</script>