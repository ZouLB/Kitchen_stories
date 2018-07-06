import Vue from 'vue'
import Vuex from 'vuex'

//vuex管理数据，组件与组件之间的数据传递,类似定义一个全局变量
Vue.use(Vuex);

var store=new Vuex.Store({
	//state相当于之前的data，定义了数据
	state:{
		vlist:[{vsrc:'',vtitle:''}]
	},
	
	//mutstions:相当于之前的methods，只能修改state里面的值
	mutations:{
//		a相当于state，b为用户传入的参数
		addtitle(a,b){
			a.vtitle.unshift(b)
		}
	}

//	运用：this.$store.commit('mutations里面的方法名','参数')
//		  this.$store.commit('setfoo','实参')
})

//导出数据
export default store