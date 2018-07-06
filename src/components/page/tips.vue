<template>
	<main>
		<div class="wrapper clearfix" v-if="searchShow">
			<div class="header">
				<i class="iconfont icon-detail-left" @click='back'></i>
				<input id='search' type="text" placeholder="技巧 / 原料 / 酱汁" autofocus="autofocus" v-model='msg' @keyup="get"/>
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
				<input type="text" placeholder="技巧 / 原料 / 酱汁" @focus='pull' />
				<i class="iconfont icon-seach" @click='pull'></i>
			</div>
			
			<h1>用刀技巧<span>查看全部</span></h1>
			<div class="common clearfix">
		        <ul class="common-ul" >
		          <li v-for="(v,i) in data" v-if="i<4">
		          	<router-link to='/details'><img :src="v.src"/></router-link>
		          	<h3>{{v.title}}</h3>
					<span>{{v.time}}分钟</span><span>{{v.like}}次观看</span>
					<img src="../../assets/image/icon/play.png" class="icon"/>
		          </li>
		        </ul>
		    </div>
		    
		    <h1>烘焙方法<span>查看全部</span></h1>
			<div class="common clearfix">
		        <ul class="common-ul" >
		          <li v-for="(v,i) in data" v-if="i>3&&i<8">
		          	<router-link to='/details'><img :src="v.src"/></router-link>
		          	<h3>{{v.title}}</h3>
					<span>{{v.time}}分钟</span><span>{{v.like}}次观看</span>
					<img src="../../assets/image/icon/play.png" class="icon"/>
		          </li>
		        </ul>
		    </div>
		    
		    <h1>日常基础烹调法<span>查看全部</span></h1>
			<div class="common clearfix">
		        <ul class="common-ul" >
		          <li v-for="(v,i) in data" v-if="i>7&&i<12">
		          	<router-link to='/details'><img :src="v.src"/></router-link>
		          	<h3>{{v.title}}</h3>
					<span>{{v.time}}分钟</span><span>{{v.like}}次观看</span>
					<img src="../../assets/image/icon/play.png" class="icon"/>
		          </li>
		        </ul>
		    </div>
		    
		    <h1>自制<span>查看全部</span></h1>
			<div class="common clearfix">
		        <ul class="common-ul" >
		          <li v-for="(v,i) in data" v-if="i>11&&i<16">
		          	<router-link to='/details'><img :src="v.src"/></router-link>
		          	<h3>{{v.title}}</h3>
					<span>{{v.time}}分钟</span><span>{{v.like}}次观看</span>
					<img src="../../assets/image/icon/play.png" class="icon"/>
		          </li>
		        </ul>
		    </div>
		</div>
	</main>
</template>

<style scoped>
	/*搜索框*/
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
	/*轮播*/
	h1{
		font-size: 20px;
		margin: 8% 0 4% 5%;
		color: black;
	}
	h1 span{
		float: right;
		color: #F4EA2A;
		font-size: 14px;
		margin-right: 4%;
		margin-top: 5px;
	}
	
	.common {
		width: 92%;
		height: 37%;
		margin: 0 4%;
		background-color: #fff;
		overflow-x: scroll;
		-webkit-overflow-x: scroll;
	}
	
	.common::-webkit-scrollbar {
		width: 0;
		height: 0;
		background-color: #fff;
	}
	
	.common-ul {
		min-width: 930px;
		height: 100%;
		/*周围留白：*/
		display: flex;
		justify-content: flex-start;
	}
	
	.common li {
		width: 230px;
		height: 99%;
		display: inline-block;
		margin-right: 1em;
		border: 1px solid #cacaca;
		box-shadow: 0px 0px 1px #cacaca;
		border-radius: 12px;
		overflow: hidden;
	}
	.common li:nth-last-of-type(1){
		margin-right: 0;
	}
	.common li a img{
		width: 100%;
	}
	.common h3{
		margin:5px;
		text-indent: 0.5em;
		color: #454545;
	}
	.common span{
		display: inline-block;
		font-size: 14px;
		margin:2% 0px 0px 5%;
		color: #898989;
	}
	.common span:nth-of-type(2){
		margin-left:5%;
	}
	.common span i{
		font-size: 25px;
		margin-right: 5px;
	}
	.common .icon{
		width: 40px;
		height: 40px;
		position: relative;
		top: -137px;
		left: -69px;
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
				list:[],
				msg:'',
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
			var self = this;
			this.$axios.get('static/tips.json').then(function(res){
				self.data=res.data.data
			}),
			this.$axios.get('static/search.json').then(function(res){
				self.search=res.data.data
			})
		}
	}
</script>