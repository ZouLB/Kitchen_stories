<template>
	<main>
		<div class="header">
			<i class="iconfont icon-detail-left" @click='back'></i>
			<h1>{{selSort.title}}</h1>
			<i class="iconfont icon-shaixuan" @click='screening'></i>
		</div>
		
		<!--右边筛选框-->
		<div class="wrap clearfix" @touchmove.prevent>
			<div @click='hide'>
			</div>
			<div class="screen">
				<h1>过滤<span @click='resetting'>重置</span></h1>
		
				<h2>分类</h2>
				<ul class="clearfix">
					<li @click="classSort('头盘');changeColor(0)">
						<i class='iconfont icon-baotang'></i> 头盘
					</li>
					<li @click="classSort('主菜');changeColor(1)">
						<i class='iconfont icon-icon_breakfast'></i> 主菜
					</li>
					<li class="small" @click="classSort('甜点');changeColor(2)">
						<i class='iconfont icon-Group'></i> 甜点
					</li>
					<li @click="classSort('小吃');changeColor(3)">
						<i class='iconfont icon-xiaochi'></i> 小吃
					</li>
					<li @click="classSort('早餐');changeColor(4)">
						<i class='iconfont icon-zaocan'></i> 早餐
					</li>
					<li @click="classSort('饮料');changeColor(5)">
						<i class='iconfont icon-yinliao'></i> 饮料
					</li>
				</ul>
		
				<h2>主要食材</h2>
				<ul class="clearfix">
					<li @click="foodSort('牛肉');changeColor(6)">
						<i class='iconfont icon-niu'></i> 牛肉
					</li>
					<li @click="foodSort('蔬菜');changeColor(7)">
						<i class='iconfont icon-tomato'></i> 蔬菜
					</li>
					<li @click="foodSort('意面');changeColor(8)">
						<i class='iconfont icon-mianshi'></i> 意面
					</li>
					<li @click="foodSort('禽肉');changeColor(9)">
						<i class='iconfont icon-Chicken'></i> 禽肉
					</li>
					<li @click="foodSort('猪肉');changeColor(10)">
						<i class='iconfont icon-zhu'></i> 猪肉
					</li>
					<li @click="foodSort('海味');changeColor(11)">
						<i class='iconfont icon-fish'></i> 海味
					</li>
				</ul>
		
				<h2>备制时间</h2>
				<ul class="clearfix">
					<li @click="timeSort(20);changeColor(12)">20分钟内</li>
					<li @click="timeSort(30);changeColor(13)">30分钟内</li>
					<li @click="timeSort(60);changeColor(14)">60分钟内</li>
				</ul>
			</div>
		</div>
		
		
		<!--筛选-->
		<div class='autumn' v-show="msg">
			<div v-for='n in selSort.cuisine'>
				<img :src="n.src"/>
				<h3>{{n.title}}</h3>
				<span><i class="iconfont icon-xinchangtai"></i>{{n.like}}</span><span>{{n.time}}分钟</span>
			</div>
		</div>
		
			<!--按时间筛选-->
		<div class='autumn' v-show="tshow">
			<div v-for='(n,i) in selSort.cuisine' v-if="selSort.cuisine[i].time<=time">
				<img :src="n.src"/>
				<h3>{{n.title}}</h3>
				<span><i class="iconfont icon-xinchangtai"></i>{{n.like}}</span><span>{{n.time}}分钟</span>
			</div>
		</div>
		
			<!--按分类筛选-->
		<div class='autumn' v-show="cshow">
			<div v-for='(n,i) in selSort.cuisine' v-if="selSort.cuisine[i].class==cla">
				<img :src="n.src"/>
				<h3>{{n.title}}</h3>
				<span><i class="iconfont icon-xinchangtai"></i>{{n.like}}</span><span>{{n.time}}分钟</span>
			</div>
		</div>
		
			<!--按食材筛选-->
		<div class='autumn' v-show="fshow">
			<div v-for='(n,i) in selSort.cuisine' v-if="selSort.cuisine[i].food==food">
				<img :src="n.src"/>
				<h3>{{n.title}}</h3>
				<span><i class="iconfont icon-xinchangtai"></i>{{n.like}}</span><span>{{n.time}}分钟</span>
			</div>
		</div>
		
	</main>
</template>

<style type="text/css" scoped="scoped">
	main{
		width: 100%;
		/*height: 100vh;*/
		position: absolute;
		left: 0;
		top: 0;
		overflow: hidden;
	}
	.clearfix:before,
	.clearfix:after{
		content: '';
		display: table;
		clear: both;
	}
	.clearfix{
		*zoom: 1;
	}
	.header{
		width: 100%;
		height: 8%;
		background: #ffcd02;
		line-height: 52px;
		color: white;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 1;
	}
	.header i{
		font-size: 26px;
		
	}
	.header i:nth-of-type(1){
		margin: 1% 7% 0 5%;;
	}
	.header i:nth-of-type(2){
		float: right;
		margin-right: 5%;
	}
	.header h1{
		display: inline;
		font-size: 20px;
	}
	.wrap{
		width: 100%;
		height: 92%;
		position: fixed;
		top: 8%;
		right: -100%;
		z-index: 1;
		transition: 0.5s
	}
	.wrap div:nth-of-type(1){
		width: 15%;
		background: rgba(0, 0, 0, 0.5);
		height: 100%;
		float: left;
	}
	.wrap .screen{
		background: white;
		width: 85%;
		height: 100vh;
		float: right;
	}
	.screen h1{
		width: 100%;
		font-size: 17px;
		height: 7%;
		padding-left: 45%;
		line-height: 43px;
		border-bottom: 1px solid #d8d8d8;
	}
	.screen h1 span{
		font-size: 13px;
		margin-left: 23%;
		color: #F4EA2A;
	}
	.screen h2{
		width: 100%;
		font-size: 17px;
		height: 7.5%;
		text-indent: 20px;
		line-height: 47px;
		background: #f2f2f2;
		color: #464646;
	}
	.screen ul{
		width: 100%;
	}
	.screen ul:nth-of-type(3) li{
		line-height: 35px;
	}
	.screen ul li{
		float: left;
		width: 33%;
		text-align: center;
		padding: 3% 0;
		font-size: 15px;
		color: #8e8e8e;
	}
	.screen ul li i{
		font-size: 43px;
		display: block;
	}
	.small{
		margin: 2% 0 0 0;
	}
	.small i{
		font-size: 40px !important;
	}
	.autumn{
		display: block;
		width: 100%;
		height: 52%;
		margin:19% 4% 4% 4%;
		text-decoration: none;
	}
	.autumn div{
		width: 92%;
		height: 91%;
		border: 1px solid #cacaca;
		box-shadow: 0px 0px 1px #cacaca;
		border-radius: 12px;
		overflow: hidden;
		margin-bottom: 4%;
	}
	
	.autumn img{
		width: 100%;
	}
	
	.autumn h3{
		margin:5px;
		text-indent: 0.5em;
		color: #454545;
	}
	.autumn span{
		position: relative;
		top: -75px;
		left: 15px;
		color: white;
	}
	.autumn span i{
		font-size: 25px;
		margin-right: 5px;
	}
	
	.autumn span:nth-of-type(2){
		margin-left: 55%;
	}
	
	.active{
		color:#F4EA2A !important;
	}
</style>

<script type="text/javascript">
	export default {
		data(){
			return{
				sort:[],
				msg:true,
				tshow:false,
				cshow:false,
				fshow:false,
				index:'',
				time:'',
				cla:'',
				food:'',
				selSort:{}
			}
		},
		methods:{
			back() {
				this.$router.go(-1)
			},
			screening(){
				$('.wrap').css({right:0})
			},
			hide(){
				$('.wrap').css({right:'-100%'})   
			},
			
			timeSort(n){
				this.msg=false,
				this.tshow=true,
				this.cshow=false,
				this.fshow=false,
				this.time=n
			},
			
			classSort(n){
				this.msg=false,
				this.tshow=false,
				this.cshow=true,
				this.fshow=false,
				this.cla=n
			},
			
			foodSort(n){
				this.msg=false,
				this.tshow=false,
				this.cshow=false,
				this.fshow=true,
				this.food=n
			},
			
			changeColor(n){
				$('li').removeClass('active')
				$('li').eq(n).addClass("active")
			},
			
			resetting(){
				this.msg=true,
				this.tshow=false,
				this.cshow=false,
				this.fshow=false,
				$('li').removeClass('active')
			}
			
		},
		mounted() {
			var self = this;
			this.$axios.get('static/sort.json').then(function(res) {
				self.sort=res.data.data.sort;
				self.index=self.$route.params.id;
				self.selSort = self.sort[self.index];
			})
		}
	}
</script>
