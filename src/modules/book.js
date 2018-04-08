import vue from 'vue';
const state = {
  bookList: {}
};
const getters = {
  getResultData() {
    return state.bookList;
  }
};
const actions = {
  // actions中的方法只能进行异步操作获取到异步的数据，但是这里不能对store的数据有任何改变只能让mutations中的方法改变data；
  getData(context) {
    vue.http.get("/static/book.json").then(res => {
      context.commit("changeData", res.data);
    });
  }
};
const mutations = {
  // 这里才可以操作数据
  changeData(state, data) {
    state.bookList = data;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
