const state = {
  // 加入购物车的书籍数据
  wantBook: [],
  // 加入购物车收选中的数据
  choseArr: [],
  // 结账的总钱数
  allBookMoney: 0
};
const getters = {
  getWantBook() {
    return state.wantBook;
  },
  getChoseArr() {
    return state.choseArr;
  },
  getAllWantBookMoney() {
    return state.allBookMoney;
  }
};
// 
const mutations = {
  // 蒙层添加删除书籍操作
  addWantBook(state, obj) {
    let data = obj.data,
      // vuex数据=想要的数据数组
      wantBook = state.wantBook,
      // 保留书籍的ID，来表示书籍的唯一标示；
      bookId = data.id;
    // 默认数据是选中的状态
    data.isChose = true;
    // 获取到每本书购买数量和价钱
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
  // 在购物车中增加减少书籍的操作
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
  },
  // 获得对应的书籍等额选中状态
  getChoseArr(state) {
    let wantBook = state.wantBook,
      choseArr = [];
    wantBook.forEach((ele, index) => {
      choseArr.push(ele.isChose);
    });
    state.choseArr = choseArr;
  },
  // 点击选中的事件再次点击不选事件
  changeChoseArr(state, obj) {
    let index = obj.data;
    state.wantBook[index].isChose = !state.wantBook[index].isChose;
    this.commit('getChoseArr');
  },
  getChoseAllMoney(state) {
    let choseArr = state.choseArr,
    wantBook = state.wantBook,
    allBookMoney = 0;
    choseArr.forEach((flag, index)=> {
      if (flag) {
        console.log('chose');
        allBookMoney += parseFloat(wantBook[index].priceAll);
      }
    });
    state.allBookMoney = allBookMoney;
  }
};
export default {
  state,
  getters,
  mutations
};
