<template>
   <div id="app">
      <!-- ========================= 导航栏 START ========================= -->
      <navbar></navbar>
      <!-- ========================= 导航栏 END ========================= -->
      <router-view />
      <footer-bottom></footer-bottom>
      <!-- 网络加载进度条 -->
      <vue-progress-bar></vue-progress-bar>
   </div>
</template>

<script>
import Navbar from 'components/common/Navbar'
import FooterBottom from 'components/common/FooterBottom'
export default {
   name: 'App',
   components: {
      Navbar,
      FooterBottom,
   },
}
</script>

<style lang="scss">
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   min-width: 320px;
}
a:hover {
   text-decoration: none;
}
</style>
