<template>
	<div class="dialog">
		<transition name="show">
			<div class="content clearfix">
				<h1>dialog</h1>
				<p class="tit"><span>X</span></p>
			</div>
		</transition>
	</div>
</template>
<script>
	export default {
		name: 'dialog',
		props: ['book']
		// data() {
		// 	return {
		// 		book: {}
		// 	}
		// }
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
		background-color: red;
	}
	.dialog .content .tit span {
		display: inline-block;
		width: .4rem;
		height: 100%;
		text-align: center;
	}
</style>