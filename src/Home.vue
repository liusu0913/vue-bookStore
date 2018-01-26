<!-- 主页 -->
<template>
	<div class="container">
		<div class="mask" v-show="maskIsShow"></div>
		<transition name="show">
			<dialogs v-if="diaIsShow" @isShow="isShow" :book="book"></dialogs>		
		</transition>
		<div class="banner-news">
			<banner></banner>
			<news></news>
		</div>

		<!-- <ul class="book-list clearfix">
			<router-link v-for="(book,index) in bookList" :to="{name:'BookContent', params: {id: index+1}}" tag="li" :key="index">
				<img src="./assets/images/book.jpg" alt="">
				<p>{{book.name}}</p>
			</router-link>
		</ul> -->
		<div class="book">
			<!-- 监听事件onshow的触发；会调用show函数 -->
			<booklist :head="newBook" :type="newType" @onshow="show($event)"></booklist>
			<booklist :head="editBook" :type="editType" @onshow="show($event)"></booklist>
		</div>
		
	</div>
</template>
<script>
	import Vue from 'vue'
	import Banner from './components/home/Banner.vue'
	import News from './components/home/News.vue'
	import Booklist from './components/home/Booklist.vue'
	import Dialogs from './components/home/dialogs.vue'
	export default {
		name: 'Home',
		data() {
			return {
				maskIsShow: true,
				bookList: [],
				diaIsShow: false,
				newBook: '新书上架',
				newType: 0,
				editBook: '推荐书籍',
				editType: 1,
				book:{}
			}
		},
		mounted() {
			Vue.http.get('/static/book.json').then((res) => {
				this.maskIsShow = false;
				this.bookList = res.data;
			})
		},
		methods: {
			show(book) {
				this.diaIsShow = true;
				this.book = book;
			},
			isShow() {
				this.diaIsShow = false
			}

		},
		components: { Banner,News,Booklist,Dialogs }

	}
</script>
<style scope>
	img {
		display: block;
		width: 100%;
	}
	.container {
		width: 100%;
	}
	.banner-news {
		padding-bottom: 5px;
		background-color: #ccc;
	}
	.mask {
		position: fixed;
		z-index: 999;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: black;
	}
	.show-enter,.show-leave-to {
	  transform: translateX(100%);
	  opacity: 0;
	}
	.show-enter-active, .show-leave-active {
  	transition: all .4s ease-in;
	}
</style>