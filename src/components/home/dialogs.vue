<template>
	<div class="dialog">
			<div class="content clearfix">
				<p class="tit"><span @click="$emit('isShow',false)">X</span></p>
				<div class="book clearfix">
					<img :src="book.url" class="fl" alt="">
					<div class="book-intr">
						<p><span>书名：</span>{{book.name}}</p>
						<p><span>作者：</span>{{book.author}}</p>
						<p><span>书号：</span>{{book.id}}</p>
					</div>
					<a href="javascript:;" class="btn">更多 》</a>
				</div>
				<div class="book-content">
					<p class="book-name">{{book.name}}</p>
					<p>{{book.msg}}</p>
				</div>
				<div class="buy">
					<p class="clearfix">
						<span class="price fl">￥{{book.price}}</span>
						<span class="num fr">
							<a href="javascript:;" @click="addNum"> + </a>
							{{book.num ? book.num: 0}}
							<a href="javascript:;" @click="delNum"> - </a>
						</span>
					</p>
				</div>
				<button class="buy-now">立即购买</button>
				<button class="add-cart" @click="addCart">加入购物车</button>
			</div>
		</transition>
	</div>
</template>
<script>
	export default {
		name: 'dialog',
		props: ['book'],
		methods: {
			// 添加书籍
			addNum() {
				let num = this.book.num;
				if (num === undefined) {
					this.$set(this.book, 'num', 1);
				} else {
					num ++;
					this.$set(this.book, 'num', num);
				}
			},
			// 删除书籍
			delNum() {
				let num = this.book.num;
				if (!num) {
					this.$set(this.book, 'num', 0);
				} else {
					num --;
					this.$set(this.book, 'num', num);
				}
			},
			// 添加购物车
			addCart() {
				if(this.book.num === undefined) return false;
				this.$store.commit({
					type: 'addWantBook',
					data: this.book
				});
			}
		}
	}
</script>
<style scope>
	* {
		margin: 0;
		padding: 0;
	}
	.dialog {
		position: fixed;
		z-index: 999;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: white;
	}
	.dialog .content {
		width: 90%;
		height: 90%;
		margin: 5% auto;
		font-size: .2rem;
		background-color: #ddd;
	}
	.dialog .content .tit{
		text-align: right; 
		height: .3rem;
		border-bottom: 1px solid white;
		background-color: red;
	}
	.dialog .content .tit span {
		display: inline-block;
		width: .4rem;
		height: 100%;
		text-align: center;
	}
	.dialog .content .book  {
		position: relative;
		padding: 0.05rem .07rem;
	}
	.dialog .content .book .btn {
		position: absolute;
		bottom: 0rem;
		right: .1rem;
		font-size: .15rem;
		text-decoration: none;
	}
	.dialog .content .book img{
		width: 35%;
		height: 2rem;
		margin-right: 10px;
	}
	.dialog .content .book .book-intr {
		overflow: hidden;
		text-align: left;
		font-size: .15rem;
		color: black;
		line-height: .3rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.dialog .content .book .book-intr span {
		display: inline-block;
		vertical-align: top;
		color: #999;
		width: 5em;
	}
	.dialog .content .book-content p{
		font-size: .15rem;
	}
	.dialog .content .book-content .book-name {
		margin-bottom: .2rem;
	}
	.dialog .content .book-content p:nth-child(2) {
		padding: 0 .1rem .2rem;
		text-align: left;
		line-height: .2rem;
		border-bottom: 1px solid white;
	}
	.dialog .content .buy {
		margin-bottom: .2rem;
	}
	.dialog .content .buy p {
		height: .4rem;
		line-height: .4rem;
		border-top: 1px solid white;
		border-bottom: 1px solid white;
	}
	.dialog .content .buy p .price {
		margin-left: .1rem;
	}
	.dialog .content .buy p .num {
		margin-right: .1rem;
	}
	.dialog .content .buy p .num a {
		display: inline-block;
		width: .2rem;
		text-align: center;
		text-decoration: none;
		line-height: .4rem;
	}
	.dialog button {
		outline: none;
		margin: .1rem auto;
		width: 80%;
		font-size: .2rem;
		line-height: .4rem;
		border: 1px solid red;
	}
	.dialog .buy-now {
		color: yellow;

		background-color: red;
	}
	.dialog .add-cart {
		background-color: yellow;
		color: red;
	}
</style>