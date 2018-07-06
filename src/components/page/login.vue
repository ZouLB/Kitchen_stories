<template>
	<main>
		<div class="header">
			<i class="iconfont icon-detail-left" @click='back'></i>
			<h1>登录</h1>
		</div>
		<div class="bg" :style="{backgroundImage: 'url(' +bg + ')'}"></div>
		<div class="content">
			<input type="text" placeholder=" 电子邮件地址或手机号"/>
			<input type="password" placeholder=" 密码"/>
			<button>登录</button>
			<p>注册成为用户即表明，我同意接受<span>使用条款</span>以及<span>数据隐私政策</span></p>
			<h2>忘记了密码？</h2>
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
	.content input{
		width: 80%;
		height: 8%;
		border: 0;
		border-radius: 3px;
		margin-top: 2%;
	}
	.content input:nth-of-type(1){
		margin-top: 40%;
	}
	.content button{
		width: 70%;
		height: 8%;
		text-align: left;
		border: 0;
		border-radius: 3px;
		color: white;
		font-size: 17px;
		line-height: 34px;
		background: rgba(0,0,0,0.5);
		text-align: center;
		margin: 6% 0 2% 0;
	}
	.content p{
		width: 80%;
		margin: 5% auto 8%;
		font-size: 15px;
	}
	.content p span{
		text-decoration: underline;
	}
	.content h2{
		font-size: 17px;
		color: #FFCD02;
	}
	
</style>

<script type="text/javascript">
	export default {
		data(){
			return {
				bg:require('../../assets/image/img/04.jpg'),
			}
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
		}
	}
</script>