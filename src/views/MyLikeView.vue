<template>
  <transition name="slide">
    <div class="mylike">
      <div class="header">
        <span class="header-icon icon-undo2" @click="back"></span>
        <div class="header-box">
          <span :class="this.currentIndex == 1? 'header-bar active' : 'header-bar'" @click="changeIndex(1)">我的喜欢</span>
          <span :class="this.currentIndex == 2? 'header-bar active' : 'header-bar'" @click="changeIndex(2)">最近聆听</span>
        </div>
      </div>
      <div class="content" v-show="this.currentIndex == 1">
        <div class="play-all">
          <span class="play-all-left icon-play2"></span>
          <span class="play-all-middle">播放全部</span>
          <span class="play-all-right">(共3首)</span>
        </div>
        <div class="play-list">
          <ul>
            <li>
              <span class="song-num">1</span>
              <div class="song-box">
                <span class="song-title">超喜欢你</span>
                <span class="song-singer">沈以诚</span>
              </div>
            </li>
            <li>
              <span class="song-num">2</span>
              <div class="song-box">
                <span class="song-title">不得不爱</span>
                <span class="song-singer">lambert</span>
              </div>
            </li>
            <li>
              <span class="song-num">3</span>
              <div class="song-box">
                <span class="song-title">对的时间点</span>
                <span class="song-singer">JJ</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="content" v-show="this.currentIndex == 2">
        <div class="play-all">
          <span class="play-all-left icon-play2"></span>
          <span class="play-all-middle">播放全部</span>
          <span class="play-all-right">(共1首)</span>
        </div>
        <div class="play-list">
          <ul>
            <li>
              <span class="song-num">1</span>
              <div class="song-box">
                <span class="song-title">超喜欢你</span>
                <span class="song-singer">沈以诚</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "MyLikeView",
  data:()=>({
    currentIndex:1
  }),
  methods: {
    back() {
      this.$router.back();
    },
    // 切换导航的方法
    changeIndex(index){
      this.currentIndex = index
      // console.log(this.currentIndex)
    }
  }
};
</script>

<style lang="scss" scoped>
.mylike {
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
  &.slide-leave{
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
      &.active{
        border-bottom: 2px solid #fff;
      }
    }
    
  }
  .content {
    .play-all {
      width: 94%;
      height: 44px;
      margin: 0 12px;
      padding: 0 14px;
      font-size: 14px;
      text-align: left;
      line-height: 44px;
      color: $m-font-color;
      border-bottom: 1px solid $m-gray;
      box-sizing: border-box;
      .play-all-left {
      }

      .play-all-middle {
        padding: 0 3px 0 8px;
      }

      .play-all-right {
        font-size: 12px;
        color: #aaa;
      }
    }

    .play-list {
      ul {
        li {
          display: flex;
          margin: 0 12px;
          border-bottom: 1px solid $m-gray;
          .song-num {
            flex: 0 0 50px;
            display: inline-block;
            width: 50px;
            height: 56px;
            text-align: center;
            line-height: 56px;
            color: #aaa;
          }
          .song-box {
            flex: 1;
            text-align: left;

            .song-title {
              display: inline-block;
              width: 100%;
              font-size: 16px;
              padding-top: 14px;
            }

            .song-singer {
              color: #aaa;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>