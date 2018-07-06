<template>
	<main>
		<!--头部-->
		<div class="header">
			<i class="iconfont icon-detail-left" @click='back'></i>
			<i class="iconfont icon-share-copy" @click='popupshare'></i>
			<i class="iconfont icon-clock" @click='popupclock' v-show='!disabled'></i>
			<i class="iconfont icon-clock" v-show='disabled' style="color: papayawhip;"></i>
			<i class="iconfont icon-more2" @click='more'></i>
		</div>
		
		<!--分享-->
		<mt-popup class='share' v-model="share" popup-transition="popup-fade" position='bottom'>
			<div>
				<img src="../../assets/image/icon/share.png" />
				<span @click='hide'>取消</span>
			</div>
		</mt-popup>
		
		<!--计时器-->
		<mt-popup class='clock' v-model="clock" popup-transition="popup-fade">
			<div>
				<h1>计时器</h1>
				<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
				<span @click='hide();add()'>开始计时</span>
			</div>
		</mt-popup>
		
		<!--倒计时-->
		<span class="countdown" v-show='disabled' @click='stop'>
			<i class="iconfont icon-clock"></i>
			{{minute}}:{{second}}
		</span> 
		<mt-popup class='stopclock' v-model="stopclock" popup-transition="popup-fade">
			<div>
				<p>取消计时？</p>
				<span @click='hidestop'>不</span>
				<span @click='stoping'>是的</span>
			</div>
		</mt-popup>
		
		<!--更多-->
		<mt-popup class='more' v-model="morevalue" popup-transition="popup-fade">
			<div>
				<ul>
					<li @click="addcar">添加</li>
					<li v-show="!moreshow" @click="open">启用烹饪模式</li>
					<li v-show="moreshow" @click="ban">禁用用烹饪模式</li>
				</ul>
			</div>
		</mt-popup>
		
		<!--背景图-->
		<img class="background" :src="selData.src"/>
		<!--主内容-->
		<div class="transparent">
			<h1>{{selData.title}}</h1>
		</div>
		<div class="wrap">
			<ul>
				<li>
					<span><i class="iconfont icon-xinchangtai"></i> {{selData.like}}</span>
					&nbsp;&nbsp;
					<span @click='keep'><i class="iconfont icon-keep"></i> 保存</span>
				</li>
				<li>
					<h2>用户评论</h2>
					<p>0 上传图片</p>
					<span>阅读</span>
					<div @click='photo'>
						<i class="iconfont icon-camera"></i> 分享你的照片吧
					</div>
					<h3>查看所有评论</h3>
				</li>
				<li>
					<div class="time-graph">  
			        	<canvas id="cooking-graph-canvas" width="160" height="160"></canvas>
			        	<canvas id="baking-graph-canvas" width="160" height="160"></canvas> 
			        	<canvas id="stewing-graph-canvas" width="160" height="160"></canvas> 
			        </div> 
			        <span>烹饪时间</span>
			        <span>烘焙时间</span>
			        <span>静置时间</span>
				</li>
				<li>
					<h1><span>1</span> 份数</h1>
					<h2>食材</h2>
					<ol>
						<li><span>200克</span>米饭(熟)</li>
						<li><span>2</span>青葱</li>
						<li><span>½</span>胡萝卜</li>
						<li><span>2</span>鸡蛋</li>
						<li><span>30毫升</span>料酒</li>
						<li><span></span>盐</li>
						<li><span></span>胡椒</li>
						<li><span></span>煎炒用植物油</li>
					</ol>
					<span @click="showconverter"><i class="iconfont icon-food_scales"></i></span>
					<span @click="addcar">添加</span>
				</li>
				<li>
					<h1>用具</h1>
					<p>刀砧，板炒，锅或大煎锅，搅拌器，小碗</p>
				</li>
				<li>
					<h1>完美搭配</h1>
					<p>琼瑶浆白葡萄酒</p>
					<p>这款美味白葡萄酒很适合搭配炒鸡蛋。</p>
				</li>
				<li>
					<h1>每份所含营养</h1>
					<ol class="clearfix">
						<li><p>卡路里</p>219</li>
						<li><p>蛋白质</p>16克</li>
						<li><p>脂肪</p>12克</li>
						<li><p>碳水化合物</p>6克</li>
					</ol>
				</li>
				<li>
					<h1>标签</h1>
					<span>#无乳糖</span>
					<span>#配菜</span>
					<span>#街头小吃</span>
					<span>#无谷胶</span>
					<span>#人见人爱</span>
					<span>#中国菜</span>
					<span>#素食</span>
					<span>#爽心美食</span>
					<span>#一人食</span>
					<span>#素食</span>
					<span>#小吃</span>
					<span>#主食</span>
				</li>
			</ul>
			<ol>
				<li>
					<h1>烹饪步骤<span>1/4</span></h1>
					<img src="../../assets/image/img/cook1-1.jpg"/>
					<p><i class="iconfont icon-noun__cc"></i> 2 青葱-½胡萝卜-2 鸡蛋</p>
					<p><i class="iconfont icon-cook"></i> 刀-砧板-搅拌器-小碗</p>
					<p>青葱切段，胡萝卜切丁。搅打鸡蛋，然后放入大部分葱段，搅拌均匀。剩余的青葱用于装饰。</p>
				</li>
				<li>
					<h1>烹饪步骤<span>2/4</span></h1>
					<img src="../../assets/image/img/cook1-2.jpg"/>
					<p><i class="iconfont icon-noun__cc"></i> 煎炒用植物油</p>
					<p><i class="iconfont icon-cook"></i> 炒锅或大煎锅</p>
					<p>往炒锅中倒入些许油，中火加热，然后炒鸡蛋。</p>
				</li>
				<li>
					<h1>烹饪步骤<span>3/4</span></h1>
					<img src="../../assets/image/img/cook1-3.jpg"/>
					<p><i class="iconfont icon-noun__cc"></i> 200 克 米饭（熟）30 毫升 料酒盐胡椒</p>
					<p><i class="iconfont icon-cook"></i></p>
					<p>倒入熟米饭和胡萝卜丁，放盐、胡椒和料酒调味，调大火翻炒。</p>
				</li>
				<li>
					<h1>烹饪步骤<span>4/4</span></h1>
					<img src="../../assets/image/img/cook1-4.jpg"/>
					<p><i class="iconfont icon-noun__cc"></i></p>
					<p><i class="iconfont icon-cook"></i></p>
					<p>饰以些许青葱。尽情享用吧！</p>
				</li>
			</ol>
		</div>
		
		<!--分享照片弹框-->
		<mt-actionsheet  
	        :actions= "data"  
	        v-model="sheetVisible">  
	    </mt-actionsheet>
	    
	   	<!--转换器弹框-->
	   	<mt-popup class='converter' v-model="converter" popup-transition="popup-fade">
			<div>
				<h1>转换器</h1>
				<mt-picker :slots="converterslots" @change="onMyChange"></mt-picker>
				<span @click='hide'>完成</span>
			</div>
		</mt-popup>
	</main>
</template>

<style type="text/css" scoped="scoped">
	main{
		width: 100%;
		height: 100vh;
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
		position: fixed;
		width: 100%;
		height: 8%;
		background: #ffcd02;
		line-height: 53px;
		color: white;
		z-index: 2;
	}
	.header i{
		font-size: 26px;
	}
	.header i:nth-of-type(1){
		padding: 1% 0 0 5%;;
	}
	.header i:nth-of-type(2){
		margin-left: 56%;
		margin-right: 2%;
	}
	.mint-popup{
		width: 90%;
		height: 27%;
		border-radius: 6px;
		margin-bottom: 2%;
		background: white;
		border: 1px solid #D8D8D8;
	}
	.mint-popup div{
		width: 100%;
		text-align: center;
	}
	.share span{
		display: block;
		border: 1px solid #F4EA2A;
		width: 80%;
		line-height: 30px;
		margin: 0 auto;
	}
	.mint-popup div img {
		height: 100px;
		margin: 5% 0;
	}
	.clock{
		width: 80%;
		height: 37%;
	}
	.mint-popup div h1{
		width: 100%;
		line-height: 40px;
		border-bottom: 1px solid #F4EA2A;
		font-size: 18px;
	}
	.clock span{
		display: block;
		color: #F4EA2A;
		margin-top: -2%;
		margin-left: 60%;
	}
	.countdown{
		display: block;
		position: fixed;
		top: 32%;
		background: white;
		font-size: 18px;
		line-height: 40px;
		width: 25%;
		border-bottom-right-radius: 10px;
		border-top-right-radius: 10px;
		z-index: 3;
	}
	.countdown i{
		font-size: 26px;
		color: #F4EA2A;
	}
	.stopclock{
		width: 70%;
		height: 15%;
		font-size: 17px;
	}
	.stopclock p{
		margin: 7% 7%;
		text-align: left;
	}
	.stopclock span{
		color: #FFCD02;
	}
	.stopclock span:nth-of-type(1){
		margin-left: 55%;
		margin-right: 7%;
	}
	.more{
		width: 50%;
		height: 15%;
	}
	.more li{
		font-size: 17px;
		text-align:left;
		margin: 9.5% 9%;
	}
	.background{
		position: fixed;
		z-index: -1;
	}
	.transparent{
		width: 100%;
		height: 68.8%;
		position: absolute;
		top: 8%;
		background: linear-gradient(to bottom, rgba(0,0,0,0) 65%, rgba(0,0,0,0.7));
	}
	.transparent h1{
		margin-top: 100%;
		color: white;
		font-size: 23px;
		text-align: center;
	}
	.wrap{
		width: 100%;
		position: absolute;
		top: 76.8%;
		background: white;
	}
	.wrap ul{
		width: 94%;
		margin-left: 3%;
	}
	.wrap ul>li{
		padding: 7% 0;
		color: #8E8E8E;
		font-size: 17px;
		border-bottom: 4px dotted #8E8E8E;
	}
	.wrap ul>li i{
		font-size: 20px;
	}
	.wrap ul>li:nth-of-type(1){
		text-align: center;
	}
	.wrap ul>li:nth-of-type(2) h2{
		color: #464646;
		font-size: 20px;
	}
	.wrap ul>li:nth-of-type(2) p{
		display: inline;
		font-size: 16px;
	}
	.wrap ul>li:nth-of-type(2) span{
		background: #FFCD02;
		border-radius: 3px;
		padding: 3% 4%;
		color: white;
		float: right;
		margin-top: -6%;
	}
	.wrap ul>li:nth-of-type(2) div{
		text-align: center;
		margin: 7% 3%;
		width: 84%;
		border: 2px dashed #8E8E8E;
		border-radius: 9px;
		padding: 5%;
		font-size: 16px;
	}
	.wrap ul>li:nth-of-type(2) h3{
		color: #464646;
		font-size: 16px;
		text-align: center;
	} 
	.time-graph {   
	    display:-webkit-flex;  
	    justify-content: center;  
	    align-items: center;  
	} 
	#cooking-graph-canvas,#baking-graph-canvas,#stewing-graph-canvas {  
	    width: 90px;  
	    height: 90px;  
	} 
	#baking-graph-canvas{
		margin: 0 9%;
	} 
	.wrap ul>li:nth-of-type(3) span{
		display: inline-block;
		color: #464646;
		margin-top: 3%;
		margin-left: 6%;
	}
	.wrap ul>li:nth-of-type(3)>span:nth-of-type(2){
		margin-left: 14%;
		margin-right: 7.5%;
	}
	.wrap ul>li:nth-of-type(4) h1,.wrap ul>li:nth-of-type(4) h2{
		color: #464646;
		font-size: 20px;
		margin-bottom: 3%;
	}
	.wrap ul>li:nth-of-type(4) h1 span{
		border: 1px solid #D8D8D8;
		border-radius: 4px;
		color: #F4EA2A;
		padding: 0 4%;
	}
	.wrap ul>li:nth-of-type(4) ol li{
		margin: 1% 0;
		color: #464646;
	}
	.wrap ul>li:nth-of-type(4) ol>li span{
		display: inline-block;
		width: 35%;
	}
	.wrap ul>li:nth-of-type(4)>span{
		display: inline-block;
		color: white;
		background: #FFCD02;
		border-radius: 3px;
		margin-top: 4%;
	}
	.wrap ul>li:nth-of-type(4)>span:nth-of-type(1){
		padding: 2% 6%;
	}
	.wrap ul>li:nth-of-type(4)>span:nth-of-type(2){
		padding: 2% 35.5%;
	}
	.wrap ul>li:nth-of-type(5),.wrap ul>li:nth-of-type(6),.wrap ul>li:nth-of-type(7){
		color: #464646;
	}
	.wrap ul>li:nth-of-type(5) h1,.wrap ul>li:nth-of-type(6) h1,.wrap ul>li:nth-of-type(7) h1,.wrap ul>li:nth-of-type(8) h1{
		font-size: 20px;
		margin-bottom: 3%;
	}
	.wrap ul>li:nth-of-type(7)>ol li{
		float: left;
		border-right: 1px solid #8E8E8E;
	}
	.wrap ul>li:nth-of-type(7)>ol li:nth-of-type(1){
		padding-right: 5.5%;
	}
	.wrap ul>li:nth-of-type(7)>ol li:nth-of-type(2),.wrap ul>li:nth-of-type(7)>ol li:nth-of-type(3){
		padding:0 5.5%;
	}
	.wrap ul>li:nth-of-type(7)>ol li:nth-last-of-type(1){
		border-right: 0;
		padding-left: 5.5%;
	}
	.wrap ul>li:nth-of-type(8){
		color: #464646;
		border: 0;
	}
	.wrap ul>li:nth-of-type(8) span{
		display: inline-block;
		background: #D8D8D8;
		border-radius: 2px;
		padding: 1%;
		margin: 1% 0;
	}
	.wrap>ol li{
		border-top: 1px solid #CACACA ;
	}
	.wrap>ol li h1{
		font-size: 20px;
		margin: 2% 3%;
	}
	.wrap>ol li img{
		width: 100%;
	}
	.wrap>ol li i{
		font-size: 26px;
	}
	.wrap>ol li p{
		width: 94%;
		font-size:17px;
		margin-left: 3%;
		margin-top: 1%;
	}
	.wrap>ol li p:nth-of-type(2){
		border-bottom: 1px solid #D8D8D8;
		padding-bottom: 3%;
	}
	.wrap>ol li p:nth-of-type(3){
		margin: 3% 3%;
	}
	.converter{
		height: 39%;
	}
	.converter span{
		display: block;
		color: #F4EA2A;
		margin-left: 79%;
	}
</style>

<script type="text/javascript">
	import my from '../../../static/converter.json'
	export default {
		data(){
			return{
				disabled:false,
				share:false,
				clock:false,
				value:'',
				minutes:0,
				seconds:0,
				slots:[
					{
						flex:0.2,
						values:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
						className:'slot1',
						textAlign:'center'
					},
					{
						divider:true,
						content:'分钟'
					}
				],
				stopclock:false,
				morevalue:false,
				moreshow:false,
				data: [{  
			        name: '拍照',  
			        method : this.getCamera
			    }, {  
			        name: '从相册中选择',   
			        method : this.getLibrary
			    }],  
			    // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏  
			    sheetVisible: false,
			    converter:false,
			    converterslots:[

			    	{
						flex:1,
//						values:["5ml","15ml","30ml","50ml","100ml","10ml","10g","20g","15g","15g"],
						values:Object.keys(my),
						className:'slot1',
						textAlign:'center'
					},
					{
						flex:1,
//						values:["1茶匙","3茶匙","6茶匙","10茶匙","20茶匙","3茶匙 油","3茶匙 黄油","3茶匙 蜂蜜","3茶匙 面粉","3茶匙 糖"],
						values:[],
						className:'slot2',
						textAlign:'center'
					},
					{
						flex:1,
//						values:["1/3汤匙","1汤匙","2汤匙","3 1/3汤匙","6 2/3汤匙","1汤匙 油","1汤匙 黄油","1汤匙 蜂蜜","1汤匙 面粉","1汤匙 糖",],
						values:[],
						className:'slot3',
						textAlign:'center'
					}
			    ],
				info:[],
				title:'',
				selData:{}
			}
		},
		methods:{
			back() {
				this.$router.go(-1)
			},
			
			//分享弹框
			popupshare(){
				this.share=true
			},
			
			//计时器弹框
			popupclock(){
				this.clock=true
			},
			
			//弹框隐藏
			hide(){
				this.share=false
				this.clock=false
				this.converter=false
			},
			
			//获取计时器弹框选中的数值
			onValuesChange(picker,values) {  
			     this.value = values[0];  
			},
			
			//倒计时
			num:function (n) {
                return n<10 ? "0" + n : "" + n
            },
            add:function () {
                var _this=this;
                _this.disabled=true;
                _this.minutes=_this.value;
                window.clearInterval(this.time);
                this.time=window.setInterval(function () {
                    if (_this.seconds=='00'&&_this.minutes!='00') {
                        _this.seconds=59;
                        _this.minutes-=1; 
                    }else if(_this.minutes=='00'&&_this.seconds=='00'){
                        _this.seconds=0;
                        _this.disabled=false;
                        window.clearInterval(this.time);
                        _this.minutes='';
                        _this.seconds=='';
                        _this.$toast({
								message: '时间到啦~',
								iconClass: 'iconfont icon-clock'
							});
                    }else{
                    	_this.seconds-=1 
                    }

                },1000);
            },
            
            //显示停止倒计时弹框
            stop(){
            	this.stopclock=true
            },
            
            //隐藏停止倒计时弹框
            hidestop(){
            	this.stopclock=false
            },
            
            //停止倒计时
            stoping(){
            	this.stopclock=false
            	this.disabled=false
            },
            
            //更多弹框
            more(){
            	this.morevalue=true
            },
            
            //更多-添加
            addcar(){
            	this.morevalue=false,
//				this.$store.state.vsrc=this.info[this.index].src
//          	this.$store.state.vtitle=this.info[this.index].title
				
				
//				this.$store.commit('addtitle',this.info[this.index].title)

				this.$store.state.vlist.unshift({vsrc:this.info[this.index].src,vtitle:this.info[this.index].title})
            	
            	
            	this.$toast({
					message: '本食谱已加入您的购物单。',
					position: 'bottom'
				});
            },
            
            //更多-启用
            open(){
            	this.moreshow=true,
            	this.morevalue=false,
            	this.$toast({
					message: '已启动烹饪模式！在烹饪模式期间，您的屏幕将不会自动关闭。',
					position: 'bottom'
				});
            },
            
            //更多-禁用
            ban(){
            	this.moreshow=false,
            	this.morevalue=false,
            	this.$toast({
					message: '已禁用烹饪模式！',
					position: 'bottom'
				});
            },
            
            //保存
            keep(){
            	this.$toast({
					message: '已保存！',
					position: 'bottom'
				});
            },
            
            //分享照片弹框
            photo(){
            	this.sheetVisible = true;
            },
            
            //拍照
            getCamera(){
            	this.$toast({
					message: '打开照相机！',
					position: 'bottom'
				});
            },
            
            //打开相册
            getLibrary(){
            	this.$toast({
					message: '打开相册！',
					position: 'bottom'
				});
            },
            
            //环形进度条
            drawMain(drawing_elem, percent, forecolor, bgcolor) {  
			    /* 
			        @drawing_elem: 绘制对象 
			        @percent：绘制圆环百分比, 范围[0, 100] 
			        @forecolor: 绘制圆环的前景色，颜色代码 
			        @bgcolor: 绘制圆环的背景色，颜色代码 
			    */  
			    var context = drawing_elem.getContext("2d");  
			    var center_x = drawing_elem.width / 2;  
			    var center_y = drawing_elem.height / 2;  
			    var rad = Math.PI*2/60;   
			    var speed = 0;  
			      
			    // 绘制背景圆圈  
			    function backgroundCircle(){  
			        context.save();  
			        context.beginPath();  
			        context.lineWidth = 5; //设置线宽  
			        var radius = center_x - context.lineWidth;  
			        context.lineCap = "round";  
			        context.strokeStyle = bgcolor;  
			        context.arc(center_x, center_y, radius, 0, Math.PI*2, false);  
			        context.stroke();  
			        context.closePath();  
			        context.restore();  
			    }  
			  
			    //绘制运动圆环  
			    function foregroundCircle(n){  
			        context.save();  
			        context.strokeStyle = forecolor;  
			        context.lineWidth = 5;  
			        context.lineCap = "round";  
			        var radius = center_x - context.lineWidth;  
			        context.beginPath();  
			        context.arc(center_x, center_y, radius , -Math.PI/2, -Math.PI/2 +n*rad, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)  
			        context.stroke();  
			        context.closePath();  
			        context.restore();  
			    }  
			  
			    //绘制文字  
			    function text(n){  
			        context.save(); //save和restore可以保证样式属性只运用于该段canvas元素  
			        context.fillStyle = bgcolor;  
			        var font_size = 30;  
			        context.font = font_size + "px Helvetica";  
			        var text_width = context.measureText(n.toFixed(0)+"分钟").width;  
			        context.fillText(n.toFixed(0)+"分钟", center_x-text_width/2, center_y + font_size/2);  
			        context.restore();  
			    } 
			  
			    //执行动画  
			    (function drawFrame(){  
			        window.requestAnimationFrame(drawFrame);  
			        context.clearRect(0, 0, drawing_elem.width, drawing_elem.height);  
			        backgroundCircle();  
			        text(speed);  
			        foregroundCircle(speed);  
			        if(speed >= percent) return;  
			        speed += 1;  
			    }());  
			},
			
			showconverter(){
				this.converter=true
			},
			
			//环形进度条
			handleScroll(){
				var scrollTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
//				console.log(scrollTop)
				if(scrollTop>220&&scrollTop<240){
					//创建环形进度条
					var cooking_canvas = document.getElementById("cooking-graph-canvas");  
					this.drawMain(cooking_canvas, this.info[this.index].time[0], "#ffcd02", "#8e8e8e");  
					  
					var baking_canvas = document.getElementById("baking-graph-canvas");  
					this.drawMain(baking_canvas, this.info[this.index].time[1], "#ffcd02", "#8e8e8e"); 
					
					var stewing_canvas = document.getElementById("stewing-graph-canvas");  
					this.drawMain(stewing_canvas, this.info[this.index].time[2], "#ffcd02", "#8e8e8e"); 
				}
			},
			
			onMyChange(picker, values) {
		       if(my[values[0]]){  //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
		        	picker.setSlotValues(1,Object.keys(my[values[0]])); // Object.keys()会返回一个数组，当前省的数组
		        	picker.setSlotValues(2,my[values[0]][values[1]]); // 区/县数据就是一个数组
		        }
		    }
			


		},
		//监听倒计时
		watch:{
            second:{
                handler(newVal){
                    this.num(newVal)
                }
            },
            minute:{
                handler(newVal){
                    this.num(newVal)
                }
            }
        },
        //计算倒计时
        computed:{
            second:function () {
                return this.num(this.seconds)
            },
            minute:function () {
                return this.num(this.minutes)
            }
        },
        
        
        //创建环形进度条
        mounted(){
        	var self = this;
			this.$axios.get('static/details.json').then(function(res) {
				self.info=res.data.data
				self.index=self.$route.params.id
				self.selData = self.info[self.index];
			}),
			//挂载监听事件
			window.addEventListener('scroll', this.handleScroll)
       },
       
       //移除监听事件
		destroyed () {
			window.removeEventListener('scroll', this.handleScroll)
		}

         
	}
</script>
