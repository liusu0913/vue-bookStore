import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../Home.vue'
import Cart from '../Cart.vue'
import Me from '../Me.vue'
import Explorer from '../Explorer.vue'

Vue.use(Router)

const router = [{
	path: '/',
  name: 'Home',
  component: Home
},{
	path: '/me',
  name: 'Me',
  component: Me
},{
		path: '/cart',
  name: 'Cart',
  component: Cart
},{
	path: '/exp',
  name: 'Explorer',
  component: Explorer
}]

let route = new Router({
	mode: 'history',
  // 这是webpack的变量表示当前文件夹。
  base: __dirname,
	routes: router
})



export default route
