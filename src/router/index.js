import Vue from 'vue'
import Router from 'vue-router'
import Home from '../Home.vue'
import Cart from '../Cart.vue'
import Me from '../Me.vue'
import Explorer from '../Explorer.vue'
import BookContent from '@/components/bookContent/BookContent'

Vue.use(Router)
// meta的利用控制主页topbar的显示与隐藏
const router = [{
  // 主页
	path: '/',
  name: 'Home',
  meta: {auto:true},
  component: Home
},{
  // 我的个人页
	path: '/me',
  name: 'Me',
  meta: {auto:true},
  component: Me
},{
  // 购物车页面
	path: '/cart',
  name: 'Cart',
  meta: {auto:true},
  component: Cart
},{
  // 其他的页面
	path: '/exp',
  name: 'Explorer',
  meta: {auto:true},
  component: Explorer
},{
  // 书籍详情页面
  path: '/book/:id',
  name: 'BookContent',
  meta: {auto:false},
  component: BookContent
}]

let route = new Router({
	mode: 'history',
  // 这是webpack的变量表示当前文件夹。
  base: __dirname,
	routes: router,
  linkActiveClass: 'active'
})



export default route
