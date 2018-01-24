<!-- 主页 -->
<template>
	<div class="container">
		<div class="mask" v-if="maskIsShow"></div>
		<h1>{{tit}}</h1>
		<div class="banner">
			<img src="./assets/images/banner.jpg" width="100%" alt="">
		</div>
		<ul class="book-list clearfix">
			<router-link v-for="(book,index) in bookList" :to="{name:'BookContent', params: {id: index+1}}" tag="li" :key="index">
				<img src="./assets/images/book.jpg" alt="">
				<p>{{book.name}}</p>
			</router-link>
		</ul>
	</div>
</template>
<script>
	import Vue from 'vue'
	export default {
		name: 'Home',
		data() {
			return {
				tit: 'Home',
				maskIsShow: true,
				bookList: []
			}
		},
		mounted() {
			Vue.http.get('/static/book.json').then((res) => {
				this.maskIsShow = false;
				this.bookList = res.data;
			})
		}

	}
</script>
<style scope>
	.banner {
		margin-bottom: 20px;
	}
	img {
		display: block;
		width: 100%;
	}
	.container {
		width: 100%;
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
	.book-list {
		list-style: none;
	}
	.book-list li {
		float: left;
		width: 50%;
		text-align: center;
	}
	.book-list li img {
		display: inline-block;
		width: 80%;
	}
	.book-list li p {
		color: red;
	}
</style>