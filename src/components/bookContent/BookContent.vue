<template>
	<div>
		111111111<br>
		{{id}}<br>
		<router-link :to="{name:'BookContent', params: {id: 2}}">1111</router-link>
	</div>		
</template>
<script>
	export default {
		name: 'BookContent',
		data() {
			// console.log(this.$route.params);
			return {
				id:this.$route.params.id
			};
		},
		created() {
			// console.log(1111);
		},
		watch: {
			'$route.params' (to, from) {
				if( to != from) {
					this.id = to.id;
				}
			}
		}
	}
</script>