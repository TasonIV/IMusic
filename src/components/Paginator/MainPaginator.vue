<template>
  <div class="music-items">
    <router-link to="/" exact tag="div" class="tab-item">
      <span>推荐</span>
    </router-link>
    <router-link to="/rank" tag="div" class="tab-item">
      <span>排行</span>
    </router-link>
    <router-link to="/singer" tag="div" class="tab-item">
      <span>歌手</span>
    </router-link>
    <router-link to="/search" tag="div" class="tab-item">
      <span>搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MainPaginator"
};
</script>

<style lang="scss" scoped>
.music-items {
  display: flex;
  width: 100%;
  height: 44px;

  .tab-item {
    flex: 1;
    font-size: 14px;
    line-height: 44px;
    text-align: center;
    color: $m-white;
    background-color: $m-main;

    &.link-active {
      font-weight: 700;
      span {
        padding-bottom: 3px;
        border-bottom: 2px solid #fff;
      }
    }
  }
}
</style>