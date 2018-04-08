<!-- 购物车页面 -->
<template>
	<div>
		<book :books="books"></book>
	</div>
</template>
<script>
import book from './components/cart/wantbook';
export default {
  name: "Cart",
  computed: {
		books() {
			return this.$store.getters.getWantBook;
		}
	},
	components: {
		book
	}
};
</script>