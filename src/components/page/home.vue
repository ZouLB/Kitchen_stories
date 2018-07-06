<template>
	<main>
		<div class="wrapper clearfix" v-if="searchShow">
			<div class="header">
				<i class="iconfont icon-detail-left" @click='back'></i>
				<input id='search' type="text" placeholder="食谱 / 原料 / 博主" autofocus="autofocus" v-model='msg' @keyup="get"/>
				<img src="../../assets/image/icon/del.png" @click='del'/>
			</div>
			<ul id="ul">
				<p>{{result}}</p>
				<li v-for='(v,i) in search' v-if="search[i].title.indexOf(msg)!=-1">
					<div class="row"><img :src="v.src"/>{{v.title}}</div>
				</li>
			</ul>
		</div>
		
		<div id="content" :class="{noslid:searchShow}">
			<div class="header">
				<i class="iconfont icon-nav" @click='getMenu'></i>
				<input type="text" placeholder="食谱 / 原料 / 博主" @focus='pull'/>
				<i class="iconfont icon-seach" @click='pull'></i>
			</div>
			
			<h1>今日故事</h1>
			<div class="common">
				<img src="../../assets/image/img/01.jpg"/>
				<h3>10道10分钟可完成的晚餐</h3>
				<p>没时间但想吃得满足？你来到地方了！</p>
				<span><i class="iconfont icon-xinchangtai"></i>1312</span>
			</div>
			
			<h1>新食谱&nbsp;&nbsp;&nbsp;<span>查看全部</span></h1>
			<div class="recipe clearfix">
		        <ul class="recipe-ul" >
		          <li v-for="(v,i) in data" v-if="i<6">
		          	<router-link :to="'/details/'+v.id"><img :src="v.src"/></router-link>
		          	<h3>{{v.title}}</h3>
					<span><i class="iconfont icon-xinchangtai"></i>{{v.like}}</span><span>{{v.time}}分钟</span>
					<img src="../../assets/image/icon/Play Button.png" class="icon"/>
		          </li>
		        </ul>
		    </div>
			
			
			<h1>今日晚餐<span>完整菜谱</span></h1>
			<div class="common dinner">
				<router-link to='/video'><img src="../../assets/image/img/18.jpg"/></router-link>
				<h3>经典肉丸意面</h3>
				<p>2:36 分钟 &nbsp;25.9K 次观看</p>
				<span><img src="../../assets/image/icon/play.png"/></span>
			</div>
			
			<h1>秋季最爱</h1>
			<mt-swipe :auto="0" :continuous='false' class='carousel'>
				<mt-swipe-item v-for='(v,i) in data' v-if='i>5&&i<12'>
					<img :src="v.src"/>
					<h3>{{v.title}}</h3>
					<span><i class="iconfont icon-xinchangtai"></i>{{v.like}}</span><span>{{v.time}}分钟</span>
				</mt-swipe-item>
			</mt-swipe>
			
			<h1>自带午餐</h1>
			<div class="common">
				<img src="../../assets/image/img/59.jpg"/>
				<h3>让你的同事羡慕嫉妒恨</h3>
				<p>简易地中海意面沙拉</p>
				<span><i class="iconfont icon-xinchangtai"></i>38.8K</span><span>30分钟</span>
				<img src="../../assets/image/icon/Play Button.png" class="icon"/>
			</div>
			
			<h1>健康思慕雪</h1>
			<mt-swipe :auto="0" :continuous='false' class='carousel'>
				<mt-swipe-item v-for='(v,i) in data' v-if='i>12&&i<19'>
					<img :src="v.src"/>
					<h3>{{v.title}}</h3>
					<span><i class="iconfont icon-xinchangtai"></i>{{v.like}}</span><span>{{v.time}}分钟</span>
				</mt-swipe-item>
			</mt-swipe>
			
			<h1>食谱速览<span>查看全部</span></h1>
			<div class="recipe look clearfix">
		        <ul class="recipe-ul" >
		          <li v-for="(v,i) in data" v-if="i>18&&i<27">
		          	<router-link :to="'/sort-link/'+v.id"><img :src="v.src"/><h4>{{v.title}}</h4></router-link>
		          </li>
		        </ul>
		    </div>
		</div>
	</main>
</template>

<style scoped>
	.clearfix:before,
	.clearfix:after{
		content: '';
		display: table;
		clear: both;
	}
	.clearfix{
		*zoom: 1;
	}
	
	#content{
		width: 100%;
		height: 100vh;
		position: absolute;
		left: 0;
		top: 0;
	}
	.header{
		width: 94%;
		border: 1px solid #cacaca;
		margin:3% ;
		height: 7%;
		border-radius: 4px;
		line-height: 45px;
		box-shadow: 0px 0px 1px #cacaca;
	}
	.header i:nth-of-type(1){
		font-size: 26px;
		padding: 0 7% 0 5%;
		color: #515151;
	}
	.header i:nth-of-type(2){
		font-size: 24px;
		color: #515151;
	}
	.header input{
		border: none;
		outline: none;
		width: 67%;
		height: 90%;
		caret-color: #F4EA2A;
	}
	
	.header input::-webkit-input-placeholder {
         font-size: 18px;
    }
    
	/*wrapper*/
	.wrapper{
		width: 100%;
		height: 100vh;
		background: rgba(0,0,0,0.3);
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1;
		overflow-y:scroll;
	}
	.wrapper .header{
		background: white;
		margin-bottom: 0px;
	}
	.wrapper img{
		width: 17px;
	}
	.wrapper ul{
		width: 94.2%;
		background: #fff;
		margin: 0px 3%;
		padding: 4% 3%;
		box-sizing: border-box;
		
	}
	.wrapper::-webkit-scrollbar {
		width: 0;
		height: 0;
		background-color: #fff;
	}
	.wrapper ul li{
		margin-bottom: 5%;
		
	}
	
	.wrapper li .row{
		display: block;
		text-decoration: none;
		color: #464646;
		font-size: 17px;
		
	}
	.wrapper li img{
		width: 35%;
		border-radius: 6px;
		vertical-align: middle;
		margin-right: 3%;
	}
	.wrapper p{
		color: #898989;
		margin-bottom: 10px;
	}
	
	/*相同的样式    今日故事/今日晚餐*/
	h1{
		font-size: 20px;
		margin: 8% 0 4% 5%;
	}
	h1 span{
		color: #F4EA2A;
		font-size: 14px;
		margin-left: 53%;
	}
	.common{
		width: 92%;
		height: 48%;
		border: 1px solid #cacaca;
		box-shadow: 0px 0px 1px #cacaca;
		margin: 3% 4%;
		border-radius: 12px;
		overflow: hidden;
	}
	.common img{
		width: 100%;
	}
	
	.common h3{
		margin:5px;
		text-indent: 0.5em;
		color: #454545;
	}
	.common p{
		margin:5px;
		text-indent: 0.5em;
		color: #898989
	}
	.common span{
		position: relative;
		top: -98px;
		left: 15px;
		color: white;
	}
	.common span:nth-of-type(2){
		margin-left: 55%;
	}
	.common span i{
		font-size: 25px;
		margin-right: 5px;
	}
	.common .icon{
		width: 30px;
		height: 30px;
		position: relative;
		top: -338px;
		left: 304px;
	}
	
	/*新食谱*/
	.recipe {
		width: 92%;
		height: 55%;
		margin: 0 4%;
		background-color: #fff;
		overflow-x: scroll;
		-webkit-overflow-x: scroll;
	}
	
	.recipe::-webkit-scrollbar {
		width: 0;
		height: 0;
		background-color: #fff;
	}
	
	.recipe-ul {
		min-width: 1450px;
		height: 100%;
		/*周围留白：*/
		display: flex;
		justify-content: flex-start;
	}
	
	.recipe li {
		width: 230px;
		height: 99.5%;
		display: inline-block;
		margin-right: 1em;
		border: 1px solid #cacaca;
		box-shadow: 0px 0px 1px #cacaca;
		border-radius: 12px;
		overflow: hidden;
	}
	.recipe li:nth-last-of-type(1){
		margin-right: 0;
	}
	.recipe li a img{
		width: 100%;
	}
	.recipe h3{
		margin:5px;
		text-indent: 0.5em;
		color: #454545;
	}
	.recipe p{
		margin:5px;
		text-indent: 0.5em;
		color: #898989
	}
	.recipe span{
		position: relative;
		top: -75px;
		left: 12px;
		color: white;
	}
	.recipe span:nth-of-type(2){
		margin-left:37%;
	}
	.recipe span i{
		font-size: 25px;
		margin-right: 5px;
	}
	.recipe .icon{
		width: 30px;
		height: 30px;
		position: relative;
		top: -355px;
		left: 185px;
	}
	
	
	/*dinner*/
	.dinner{
		height: 62%;
	}
	.dinner img{
		height: 85%;
	}
	.dinner span img{
		width: 80px;
		height: 80px;
	}
	.dinner span{
		position: relative;
		top: -274px;
		left: 136px;
		color: white;
	}
	
	/*秋季最爱*/
	.carousel {
		width: 92%;
		height: 52%;
		margin: 0 4%;
		box-sizing: border-box;
	}
	
	.carousel .mint-swipe-item {
		width: 99%;
		height: 91%;
		border: 1px solid #cacaca;
		box-shadow: 0px 0px 1px #cacaca;
		border-radius: 12px;
		overflow: hidden;
	}
	
	.carousel img {
		width: 100%;
	}
	
	.carousel h3 {
		margin: 5px;
		text-indent: 0.5em;
		color: #454545;
	}
	
	.carousel span {
		position: relative;
		top: -75px;
		left: 15px;
		color: white;
	}
	
	.carousel span i {
		font-size: 25px;
		margin-right: 5px;
	}
	
	.carousel span:nth-of-type(2) {
		margin-left: 55%;
	}
	
	/*食谱速览*/
	.look{
		height: 43%;
		margin-bottom: 1em;
	}
	.look li{
		position: relative;
	}
	.look h4 {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0px;
		top: 0px;
		background: rgba(0,0,0,0.4);
		font-size: 25px;
		color: #fff;
		line-height: 290px;
		text-align: center;
	}
	.noslid{
		overflow-y: hidden;
		height: 100%;
	}
</style>

<script type="text/javascript">

	export default {
		data(){
			return{
				msg:'',
				list:[],
				data:[],
				result:'别人在搜',
				search:[],
				searchShow:false,
			}
		},
		methods: {
			getMenu(){
				document.getElementById('menu').style.left=0;
			},
			pull(){
				this.searchShow = true;
			},
			back(){
				this.searchShow = false;
				this.del();
			},
			del(){
				this.msg='';
				this.result='别人在搜';
			},
			//搜索
			get(){
				if(this.msg!=''){
					this.result='搜索结果'
				}else{
					this.result='别人在搜'
				}
				var oUl=document.getElementById('ul')
				if(oUl.children.length==1){
					this.result='抱歉，没有食谱符合您的搜索要求。'
				}
			}
		},
		mounted(){
			var self = this
			this.$axios.get('static/home.json').then(function(res){
				self.data=res.data.data
			}),
			this.$axios.get('static/search.json').then(function(res){
				self.search=res.data.data
			})
		}
	}
</script>

//https://kitchenstories.io/zh/sou-xun?search=%E8%9B%8B&is_ajax=true&search=%E8%9B%8B&filter=&page=1