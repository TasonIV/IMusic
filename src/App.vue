<template>
  <div id="app">
    <!-- 头部logo组件 -->
    <MusicHeader class="m-header"/> 
    <!-- 推荐、排行、歌手 分页器&视图匹配 -->
    <MainPaginator class="m-paginator"/>
    <router-view/>
  </div>
</template>

<script>
import MusicHeader from "./components/MusicHeader/MusicHeader";
import MainPaginator from "./components/Paginator/MainPaginator"

export default {
  name: "App",
  components: {
    MusicHeader,
    MainPaginator
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.m-header{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
.m-paginator{
  position: fixed;
  top: 44px;
  left: 0;
  z-index: 10;
}
</style>
