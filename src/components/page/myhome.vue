<template>
	<main>
		<div class="header">
			<i class="iconfont icon-detail-left" @click='back'></i>
			<h1>注册</h1>
		</div>
		<div class="bg" :style="{backgroundImage: 'url(' +bg + ')'}"></div>
		<div class="content">
			<div class="contenthead">
				<i class="iconfont icon-my"></i>
				<h1>来收取最佳食谱和其他美食美文！<br/>请注册。</h1>
			</div>
			<div class="contentmiddle">
				<button @click='judge1();register()'><i class="iconfont icon-xiaomai"></i>用手机号码注册</button>
				<button @click='judge2();register()'><i class="iconfont icon-leaf"></i>用电子邮箱注册</button>
			</div>
			<div class="contentmiddle1">
				<input type="text" placeholder=" 手机号" v-show="!email"/>
				<input type="text" placeholder=" 电子邮箱" v-show="email"/>
				<input type="text" placeholder=" 用户名"/>
				<input type="password" placeholder=" 密码"/>
				<button>加入厨房故事</button>
				<br />
				<p @click='prev'><i class="iconfont icon-tangguo"></i>切换 {{msg}} 注册</p>
			</div>
			<div class="contentfoot">
				<p>注册成为用户即表明，我同意接受<span>使用条款</span>以及<span>数据隐私政策</span></p>
				<h2>已经是我们的成员？ <router-link to="/login">登录</router-link></h2>
			</div>
		</div>
	</main>
</template>

<style type="text/css" scoped="scoped">
	main{
		width: 100%;
		height: 100vh;
	}
	.header{
		width: 100%;
		height: 8%;
		background: #ffcd02;
		line-height: 52px;
		color: white;
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
	.bg{
		width: 100%;
		height: 92%;
		/*background: url(../../assets/image/img/04.jpg) no-repeat;*/
		background-repeat: no-repeat;
		background-size: cover;
	}
	.content{
		width: 100%;
		height: 92%;
		position: absolute;
		top:8%;
		background: rgba(0,0,0,0.5);
		text-align: center;
		color: white;
	}
	.contenthead{
		width: 100%;
		position: absolute;
		top: 20%;
		transition: 1s;
	}
	.contenthead>i:nth-of-type(1){
		display: block;
		font-size: 70px;
		font-weight: bold;
		margin-bottom: 6%;
	}
	.content h1{
		font-size: 19px;
	}
	.contentmiddle{
		position: absolute;
		width: 100%;
		top: 48%;
	}
	.content button{
		width: 80%;
		height: 8%;
		text-align: left;
		border: 0;
		border-radius: 3px;
		color: white;
		font-size: 16px;
		line-height: 34px;
		background: rgba(0,0,0,0.5);
		text-align: center;
	}
	.content button:nth-of-type(1){
		margin: 2% 0;
	}
	.content button>i{
		font-size: 26px;
		margin-right: 5%;
	}
	.content>button:nth-of-type(1) i{
		font-size: 30px;
		margin-right: 3.7%;
	}
	.contentmiddle1{
		display: none;
		width: 100%;
		height: 35%;
		position: absolute;
		top: 45%;
	}
	.contentmiddle1 input{
		width: 80%;
		height: 15%;
		border: 0;
		border-radius: 3px;
		margin-top: 2%;
	}
	.contentmiddle1 button{
		width: 60%;
		height: 20%;
	}
	.contentfoot{
		width: 100%;
		position: absolute;
		top: 69%;
		transition: 1s;
	}
	.content p{
		width: 80%;
		margin: 0% auto 8%;
		font-size: 15px;
	}
	.content p span{
		text-decoration: underline;
	}
	.content h2{
		font-size: 17px;
	}
	.content h2 a{
		color: #FFCD02;
		margin-left: 3%;
		text-decoration: none;
	}
	
</style>

<script type="text/javascript">
	export default {
		data(){
			return{
				email:false,
				msg:'',
				bg:require('../../assets/image/img/04.jpg')
			}
		},
		methods: {
			back() {
				this.$router.push('/home')
			},
			judge1(){
				this.email=false
				this.msg='电子邮箱'
			},
			judge2(){
				this.email=true
				this.msg='手机号码'
			},
			register(){
				$(".contenthead").css({top:"10%"})
				$(".contentmiddle").css({display:'none'})
				$(".contentmiddle1").css({display:'block'})
				$(".contentmiddle1").css({top:"38%"})
				$(".contentfoot").css({top:'75%'})
			},
			prev(){
				$(".contenthead").css({top:"20%"})
				$(".contentmiddle").css({display:'block'})
				$(".contentmiddle1").css({display:'none'})
				$(".contentmiddle").css({top:"48%"})
				$(".contentfoot").css({top:'69%'})
			}
		}
	}
</script>