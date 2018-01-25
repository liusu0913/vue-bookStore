<template>
	<div class="news">
		<p class="icon"><img :src="icon" alt=""></p>
		<p class="txt">{{news}}</p>
	</div>
</template>
<script>
	export default {
		name: 'News',
		data() {
			return {
				news: '图书一律不要钱sadasdasdasdasssssssssssssssss！！！！！',
				icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516879729294&di=0f454cb86dc7252063733656e9bebd64&imgtype=0&src=http%3A%2F%2F58pic.ooopic.com%2F58pic%2F15%2F28%2F06%2F60c58PICgum.jpg'
			}
		}
	}
</script>
<style scope>
	.news {
		display: flex;
		height: .3rem;
		margin: 5px;
		font-size: 0;
		text-align: left;
		background-color: white;
	}
	.news p {
		display: inline-block;
		vertical-align: top;
	}
	.news .icon  {
		height: .2rem;
		padding: .05rem;
	}
	.news .icon img{
		vertical-align: middle;
		width: .2rem;
		height: .2rem;
		margin-right: .15rem;
	}
	.news .txt {
		flex: 1;
		overflow: hidden;
		padding-right: .3rem;
		font-size: .2rem;
		line-height: .3rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>