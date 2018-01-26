<template>
	<div class="books">
		<p class="tit clearfix">
			<span class="fl lot">{{head}}</span>
			<span class="fr more">更多&emsp;></span>	
		</p>
		<ul class="book-list clearfix">
			<li v-for="(book, index) in books" @click="$emit('onshow',book)">
				<img :src="book.url"  alt="">
				<p class="book-name">{{book.name}}</p>
				<p class="book-author">{{book.author}}</p>
			</li>
		</ul>
	</div>
</template>
<script>
	import Vue from 'vue';
	export default {
		name: 'Booklist',
		props: ['head','type'],
		data() {
			return {
				books: {}
			}
		},
		mounted() {
			Vue.http.get('/static/book.json').then((res)=>{
				if (this.type === 0) {
					this.books = res.data.new;
				}else if(this.type === 1){
					this.books = res.data.edit;
				}
			})
		}
	}
</script>
<style scope>
	.books {
		font-size: .2rem;
	}
	.tit {
		padding: .1rem .3rem;
		line-height: .3rem;
	}
	.tit .lot{
		font-size: .2rem;
		font-weight: 700;
	}
	.tit .more {
		font-size: .15rem;
		color: #bbb;
	}
	.book-list {
		list-style: none;
		margin-bottom: .2rem;
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
		overflow: hidden;
		padding-left: 7%;
		padding-right: 12%;
		text-align: left;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.book-list li .book-name {
		font-size: .2rem;
		font-weight: 700;
	}
	.book-list li .book-author {
		font-size: .15rem;
		color: #bbb;
		margin-bottom: .1rem;
	}
	</style>



