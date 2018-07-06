// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VideoPlayer from 'vue-video-player'
import axios from 'axios';

import './assets/css/cssreset.css'
import './assets/css/iconfont.css'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
//修改mint.ui的样式
import './assets/css/weui.css';


//定义Vue可以使用
Vue.use(Mint)
Vue.use(VideoPlayer)
Vue.prototype.$axios = axios;

import store from './store/store.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
