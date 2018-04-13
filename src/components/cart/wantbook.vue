<template>
  <div>
    <!-- 无东西的主体内容 -->
    <p class="no-want" v-if="isShow">赶紧添加书籍到购物车吧</p>
    <!-- 购物车主体内容 -->
    <div class="cart-want">
      <p class="cart-btn">
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
      </p>
      <ul class="want-books">
        <li v-for="(book, index) in books" :data-id="book.id" @click="toggleClass(index)" v-bind:class="{'active':!isChose[index]}">
          <img :src="book.url" alt="" class="logo">
          <div class="intr">
            <p>书名：{{book.name}}{{isChose[index]}}</p>
            <p>作者：{{book.author}}</p>
            <p>简介：{{book.msg}}</p>
            <p class="money">
              <span class="book-price">$ {{book.price}}</span>
              <span class="want-num">
                <a href="javascript:;" @click="changeWant(book, 1)">+</a>
                {{book.num}}
                <a href="javascript:;" @click="changeWant(book, 0)">-</a>
              </span>
              <span class="book-priceall">$ {{book.priceAll}}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
		
	</div>
</template>
<script>
export default {
  name: "wantbook",
  props: ["books"],
  computed: {
    isShow() {
      let len = this.books.length;
      return len ? false : true;
    },
    isChose() {
      alert('change')
			this.$store.commit({
				type: 'getChoseArr'
      });
			return this.$store.getters.getChoseArr;
		}
  },
  methods: {
    /**
     * type：控制加减
     * book：为此书籍对象
     */
    changeWant(book, type) {
      if (type) {
        book.num++;
      } else {
        if (book.num === 1) {
          alert("兄弟不能再少了！！！！！");
          return false;
        }
        book.num--;
      }
      this.$store.commit({
        type: "changeWant",
        data: book
      });
      return false;
    },
    toggleClass(index) {
      this.$store.commit({
        type: 'changeChoseArr',
        data: index
      })
    }
  }
};
</script>
<style scope>
ul,
li {
  margin: 0;
  padding: 0;
}
.no-want {
  margin-top: 20%;
  font-size: 16px;
  text-align: center;
}
.want-books {
  list-style: none;
}
.want-books li {
  overflow: auto;
  padding: 1% 5%;
  margin: 10% 0;
  font-size: 0;
  text-align: left;
  background-color: yellowgreen;
}
.want-books li.active {
  background-color: #ccc;
}
.want-books li .logo {
  float: left;
  width: 30%;
  margin-right: 2%;
}
.want-books li .intr {
  overflow: hidden;
}
.want-books li .intr p {
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  color: black;
  line-height: 2em;
}
.want-books li .intr .money {
  display: flex;
}
.want-books li .intr .money span {
  flex: 1;
  text-align: center;
}
.want-books li .intr .money .want-num {
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 10%;
}
.want-books li .intr .money span a {
  display: inline-block;
  height: 100%;
  padding: 0 10px;
  text-decoration: none;
}
.want-books li .intr .money span a:nth-child(1) {
  border-right: 1px solid #ccc;
}
.want-books li .intr .money span a:nth-child(2) {
  border-left: 1px solid #ccc;
}
</style>

