import Vue from "vue";
import Vuex from "vuex";
import books from './modules/book.js';
import cart from './modules/cart.js';
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    books,
    cart
  }
});
