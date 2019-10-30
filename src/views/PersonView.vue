<template>
  <transition name="slide">
    <div class="person">
      <div class="header">
        <span class="header-icon icon-undo2" @click="back"></span>
        <div class="header-box">
          <span>个人中心</span>
        </div>
      </div>
      <div class="content">
        <div class="logo icon-vine">IMusic</div>
        <div class="explain">@by TasonIV</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "PersonView",
  data: () => ({
    currentIndex: 1
  }),
  methods: {
    back() {
      this.$router.back();
    },
    // 切换导航的方法
    changeIndex(index) {
      this.currentIndex = index;
      // console.log(this.currentIndex)
    }
  }
};
</script>

<style lang="scss" scoped>
.person {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 100;
  &.slide-enter,
  &.slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }
  &.slide-enter-active,
  &.slide-leave-active {
    transition: all 0.3s linear;
  }
  &.slide-enter-to,
  &.slide-leave {
    transform: translateX(0);
    opacity: 1;
  }
  .header {
    background-color: $m-main;
    line-height: 44px;
    color: #fff;
    .header-icon {
      position: absolute;
      top: 0;
      left: 0;
      width: 44px;
      height: 44px;
      font-size: 20px;
      text-align: center;
      line-height: 44px;
    }
    .header-box {
      margin: 0 auto;
    }
    .header-bar {
      padding: 4px 6px;
      padding-bottom: 4px;
      font-size: 14px;
      margin: 20px;
    }
  }
  .content {
    width: 100%;
    height: 100%;
    position: relative;
    .logo {
      position: absolute;
      top: 30%;
      left: 32%;
      width: 140px;
      font-size: 24px;
      color: $m-main;
      float: left;
    }
    .explain {
      position: absolute;
      top: 36%;
      left: 41%;
      font-size: 12px;
    }
  }
}
</style>