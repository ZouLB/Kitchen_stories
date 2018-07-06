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
				<input type="text" placeholder="食谱 / 原料 / 博主" @focus='pull' />
				<i class="iconfont icon-seach" @click='pull'></i>
			</div>
			
			<ul>
				<li v-for='v in sort'>
					<router-link :to="'/sort-link/'+v.id"><img :src="v.src"/>{{v.title}}</router-link>
				</li>
			</ul>
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
	
	ul{
		margin-left: 3.3%;
		margin-top: 6%;
	}
	ul li{
		margin-bottom: 2%;
	}
	ul li a{
		display: block;
		text-decoration: none;
		color: #464646;
		font-size: 19px;
		
	}
	ul li img{
		width: 25%;
		border-radius: 6px;
		vertical-align: middle;
		margin-right: 3%;
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
				sort:[],
				result:'别人在搜',
				search:[],
				searchShow:false
			}
		},
		methods: {
			getMenu() {
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
		mounted() {
			var self = this;
			this.$axios.get('static/sort.json').then(function(res) {
				self.sort=res.data.data.sort
			}),
			this.$axios.get('static/search.json').then(function(res){
				self.search=res.data.data
			})
		}
	}
</script>