<template>
  <div class="play">
    <div class="play-box">
      <div class="bg-img">
        <div class="cover"></div>
        <img src="../../../public/image/5.jpg" width="100%" height="100%" alt />
      </div>
      <header>
        <div class="header-left icon-circle-down"></div>
        <div class="header-right">
          <div class="right-title">这一生关于你的风景</div>
          <div class="right-name">隔壁老樊</div>
        </div>
      </header>

      <main>
        <img src="../../../public/image/5.jpg" />
      </main>
      <footer>
        <div class="timer">
          <span class="timer-left">0:00</span>
          <span class="timer-middle">
            <i></i>
          </span>
          <span class="timer-right">4:30</span>
        </div>
        <div class="control">
          <span class="loop icon-loop"></span>
          <span class="last icon-previous2"></span>
          <span class="play icon-play2"></span>
          <span class="next icon-next2"></span>
          <span class="like icon-heart"></span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "play",
  props:["recommendMusic"],
  computed(){
    console.log(this.recommendMusic)
  }
};
</script>

<style lang="scss" scoped>
.play-box {
  display: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: yellow;
  .bg-img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 30;
    // opacity: 0.95;
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(30px);
    }
  }
  header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    z-index: 30;
    //   background-color: #e49;
    .header-left {
      position: absolute;
      top: 14px;
      left: 14px;
      font-size: 24px;
      color: #fff;
    }
    .header-right {
      margin: 0 auto;
      font-weight: bold;
      color: #fff;
      .right-title {
        font-size: 18px;
        padding: 10px 30px 8px 30px;
      }
      .right-name {
        font-size: 12px;
      }
    }
  }
  main {
    position: absolute;
    top: 20%;
    left: 0;
    z-index: 30;
    width: 100%;
    height: 44%;

    img {
      display: block;
      width: 80%;
      height: 100%;
      margin: 0 auto;
      box-sizing: border-box;
      border: 16px solid hsla(0, 0, 100%, 0.1);
      border-radius: 50%;
    }
  }
  footer {
    z-index: 30;
    position: absolute;
    left: 0;
    bottom: 60px;
    width: 100%;
    .timer {
      width: 100%;
      height: 30px;
      //   background-color: #e49;
      line-height: 30px;
      font-size: 12px;
      color: #fff;
      .timer-left {
        margin-right: 10px;
      }
      .timer-middle {
        display: inline-block;
        width: 60%;
        height: 3px;
        background-color: hsla(0, 0%, 70%, 0.3);
        vertical-align: middle;
        position: relative;
        i {
          display: inline-block;
          position: absolute;
          top: -3px;
          left: 0;
          transform: translateX(-50%);
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid #fff;
          background-color: red;
        }
      }
      .timer-right {
        margin-left: 10px;
      }
    }

    .control {
      width: 100%;
      height: 80px;
      //   background-color: #e94;
      font-size: 30px;
      color: #fff;
      span {
        margin: 0 16px;
        line-height: 80px;
        vertical-align: middle;
        font-weight: 100;
      }
      .loop {
        font-size: 26px;
      }
      .like {
        font-size: 24px;
      }
      .play{
          font-size: 36px;
      }
    }
  }
}
</style>