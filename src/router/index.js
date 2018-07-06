import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/page/home.vue'
import tips from '@/components/page/tips.vue'
import sort from '@/components/page/sort.vue'
import myhome from '@/components/page/myhome.vue'
import shop from '@/components/page/shop.vue'
import about from '@/components/page/about.vue'
import setting from '@/components/page/setting.vue'

import sortlink from '@/components/page/sort-link.vue'
import details from '@/components/page/details.vue'
import welcome from '@/components/page/welcome.vue'
import video from '@/components/page/video.vue'
import login from '@/components/page/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/home',component:home},
		{path:'/tips',component:tips},
		{path:'/sort',component:sort},
		{path:'/myhome',component:myhome},
		{path:'/shop',component:shop},
		{path:'/about',component:about},
		{path:'/setting',component:setting},
		{path:'/',redirect:'/home'},
		
		{path:'/sort-link/:id',component:sortlink},
		{path:'/details/:id',component:details},
		{path:'/welcome',component:welcome},
		{path:'/video',component:video},
		{path:'/login',component:login}
  ]
})
