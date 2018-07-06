<template>
  <main>
 		<router-view></router-view>
 		<v-menu></v-menu>
 	</main>
</template>

<script>
import vmenu from '@/components/nav/menu.vue'

export default {
  name: 'App',
  components:{
		'v-menu':vmenu
	},
	created () {
	    this.$router.push('/welcome'); // 页面加载时跳转
	}
}
</script>

