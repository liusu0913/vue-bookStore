const state = {
  wantBook: []
};
const getters = {
  getWantBook() {
    return state.wantBook;
  }
};
const mutations = {
  addWantBook(state, obj) {
    let data = obj.data,
      wantBook = state.wantBook,
      bookId = obj.data.id,
      bookIndex;
    data.priceAll = (data.price * data.num).toFixed(2);
    // 添加过购物车的书籍再次添加的数据处理
    for (let i = 0, len = wantBook.length; i < len; i++) {
      // 判断重复的书籍覆盖数据
      if (bookId === wantBook[i].id) {
        // 判断书籍添加的本数，为0本时证明此书籍已经删除了
        if (wantBook[i].num === 0) {
          wantBook.splice(i, 1);
          alert("此书已经从购物车删除");
        } else {
          wantBook.splice(i, 1, data);
          alert("添加成功！！！！");
        }
        return false;
      }
    }
    // 添加新的树到购物车的操作
    // 判断是不是0本的新书
    if (data.num === 0) {
      alert("不能添加0本书");
    } else {
      wantBook.push(data);
      alert("添加成功！！！！");
    }
  },
  changeWant(state, obj) {
    let data = obj.data,
      wantBook = state.wantBook,
      bookId = obj.data.id,
      bookIndex;
    data.priceAll = (data.price * data.num).toFixed(2);
    // 添加过购物车的书籍再次添加的数据处理
    for (let i = 0, len = wantBook.length; i < len; i++) {
      // 判断重复的书籍覆盖数据
      if (bookId === wantBook[i].id) {
          wantBook.splice(i, 1, data);
          return false;
      }
    }
  }
};
export default {
  state,
  getters,
  mutations
};
