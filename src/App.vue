<template>
  <div id="app">
    <div class="show">
      <transition name="in">
        <router-view/>
      </transition>
    </div>
    <div class="topbar topbar1" v-if="show">
      <router-link :to="{name: 'Home'}" tag="span" exact>Home</router-link>
      <router-link :to="{name: 'Me'}" tag="span">Me</router-link>
      <router-link :to="{name: 'Cart'}" tag="span">Cart</router-link>
      <router-link :to="{name: 'Explorer'}" tag="span">Explorer</router-link>
    </div>
    <div class="topbar topabr2" v-if="!show">
      <router-link :to="{name: 'Home'}" tag="span">Home</router-link>
      <router-link :to="{name: 'Me'}" tag="span">Me</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    console.log(1111);
    return {
      show: this.$route.meta.auto
    };
  },
  watch: {
    '$route.meta.auto' (to, from) {
      this.show = to;
    }
  }
}
</script>

<style>
html {
  font-size: 100px;
}
html, body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
* {
  margin: 0;
  padding: 0;
}
.clearfix:before, .clearfix:after {
  content: " ";
  display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  zoom: 1;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: auto;
}
.show {
  width: 100%;
  padding-bottom: .8rem;
}
.topbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 0;
  background-color: #ccc;
}

.topbar span {
  box-sizing: border-box;
  display: inline-block;
  width: 25%;
  border: 2px solid red;
  font-size: .20rem;
  font-weight: 700;
  line-height: .50rem;
  text-align: center;
  color: white;
}
div.topbar2 span{
  width: 50%;
}
.active {
  background-color: red;
}
/*Vue的动画属性添加上transtion标签*/
.in-enter-active {
  transition: all .4s ease-in;
}
.in-enter {
  transform: translateX(100%);
  opacity: 0;
}

</style>
