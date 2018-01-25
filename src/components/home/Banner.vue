<template>
	<div class="banner">
		<div class="swiper-container" ref="slide">
	    <div class="swiper-wrapper">
	      <div class="swiper-slide" v-for="img in imgList">
	      	<img :src="img" alt="">
	      </div>
	    </div>
	    <!-- 如果需要分页器 -->
	    <div class="swiper-pagination" ref="pagination"></div>
	    
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import Swiper from 'swiper'
	
	export default {
		name: 'Banner', 
		data() {
			return {
				imgList: []
			}
		},
		mounted() {
			// 获取后台的图片
			Vue.http.get('/static/banner.json').then((res)=> {
				// console.log(res.data);
				this.imgList = res.data;
				// DOM会根据数据进行刷新更改，利用nextTick让Dom更新完在进行swiper的初始化
				this.$nextTick(()=>{
					// 这里是初始化swiper
					new Swiper(this.$refs.slide, {
				    autoplay: true,
					});
				})
			});			
		}
	}
</script>
<style scope>
	@import 'swiper/dist/css/swiper.css';
	.banner {
		border: 5px solid transparent;
	}
	.swiper-wrapper .swiper-slide img {
		height: 230px;
	}
</style>