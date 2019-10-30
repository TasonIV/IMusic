<template>
  <div class="play">
    <div class="play-box">
      <div class="bg-img">
        <div class="cover"></div>
        <img
          :src="this.$store.state.recommendMusic.recommendMusicList.image"
          width="100%"
          height="100%"
        />
      </div>
      <header>
        <div class="header-left icon-circle-down" @click="back"></div>
        <div class="header-right">
          <div class="right-title">{{this.$store.state.recommendMusic.recommendMusicList.name}}</div>
          <div class="right-name">{{this.$store.state.recommendMusic.recommendMusicList.singer}}</div>
        </div>
      </header>

      <main>
        <div class="img-box">
          <img :src="this.$store.state.recommendMusic.recommendMusicList.image" ref="img" />
        </div>
      </main>
      <footer>
        <div class="timer">
          <span class="timer-left">{{format(currentTime)}}</span>
          <span class="timer-middle">
            <i ref="i"></i>
            <p ref="p"></p>
          </span>
          <span class="timer-right">{{format(duration)}}</span>
        </div>
        <div class="control">
          <span :class="['loop',this.way ?'icon-loop':'icon-shuffle']" @click="changeWay"></span>
          <span class="last icon-previous2"></span>
          <span :class="['play',this.show ?'icon-pause':'icon-play2']" @click="changePlay"></span>
          <span class="next icon-next2"></span>
          <span :class="['like','icon-heart',{active}]" @click="changeLike"></span>
        </div>
      </footer>

      <audio ref="audio" autoplay :src="MusicList"></audio>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "recommendSongPlay",
  data: () => ({
    MusicList: null, // 歌曲播放地址
    lyricList: null, // 歌词列表
    currentTime: 0, //当前播放时间
    duration: 0, //歌曲时长
    percentage: 0, //百分比
    timer: null, //自定义定时器
    currentRotate: 0, //当前旋转角度
    way: true, // 播放方式(循环、顺序)
    show: true, // 播放暂停切换
    active: false // 喜欢
  }),
  created() {
    // 获取api
    this.getRecommendMusicApi(
      this.$store.state.recommendMusic.recommendMusicList.id
    );
    this.getlyricApi(this.$store.state.recommendMusic.recommendMusicList.id);
    // console.log(this.$store.state.recommendMusic.recommendMusicList)

    // 歌名  歌手  图片   name  singer  image (插件使用)
    // this.$store.state.recommendMusic.recommendMusicList
  },
  mounted() {
    this.timer = setInterval(this.getTime, 50); //调用定时器
  },
  beforeDestroy() {
    clearInterval(this.timer); //清空定时器
  },
  methods: {
    back() {
      this.$router.back();
    },

    initAudio() {},

    getTime() {
      // 获取播放时间，歌曲时长，百分比
      this.currentTime = this.$refs.audio.currentTime;
      this.duration = this.$refs.audio.duration;
      this.percentage = this.currentTime / this.duration;

      // 播放进度条
      this.$refs.i.style.left = `${this.percentage * 100}%`;
      this.$refs.p.style.width = `${this.percentage * 100}%`;
      // 旋转图片
      this.currentRotate = this.percentage * 2500;
      this.$refs.img.style.transform = `rotate(${this.currentRotate}deg)`;
    },

    // 初始化时间
    format(interval) {
      interval = interval | 0;
      let minute = (interval / 60) | 0;
      let second = interval % 60;
      if (second < 10) {
        second = "0" + second;
      }
      return minute + ":" + second;
    },

    // 播放暂停
    changePlay() {
      if (this.show) {
        this.$refs.audio.pause(); //暂停
        this.show = false;
      } else {
        this.$refs.audio.play();
        this.show = true;
      }
    },
    // 收藏 & 取消收藏
    changeLike() {
      this.active = !this.active;
    },
    // 改变播放方式
    changeWay() {
      this.way = !this.way;
    },

    // 以下为获取api的方法
    getRecommendMusicApi(id) {
      // 获取歌曲播放地址
      let url = `http://localhost:3000/song/url?id=${id}`;
      axios.get(url).then(res => {
        if (res.status === 200) {
          this.MusicList = res.data.data[0].url;
          this.$store.commit("SET_PLAY_LIST", this.MusicList); //将歌曲播放地址放在vuex中
          // console.log(this.MusicList);
        } else {
          console.error("getRecommendMusicApi数据 获取失败");
        }
      });
    },

    getlyricApi(id) {
      // 获取歌词
      let url = `http://localhost:3000/lyric?id=${id}`;
      axios.get(url).then(res => {
        if (res.status === 200) {
          this.lyricList = res.data.lrc.lyric;
          this.$store.commit("SET_PLAY_LYRICLIST",this.lyricList); //将歌词放在vuex中
          // console.log(this.lyricList);
          console.log(typeof(this.$store.state.playList.lyricList))
        } else {
          console.error("getlyricApi数据 获取失败");
        }
      });
    }
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
    .img-box {
      margin: 0 auto;
      width: 70%;
      height: 90%;
      img {
        display: block;
        width: 100%;
        height: 100%;
        // margin: 0 auto;
        text-align: center;
        box-sizing: border-box;
        border: 16px solid hsla(0, 0, 100%, 0.1);
        border-radius: 50%;
        // transform: rotate(100deg);
      }
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
          z-index: 31;
        }
        p {
          display: inline-block;
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 3px;
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
        &.active {
          color: red;
        }
      }
      .play {
        font-size: 36px;
      }
    }
  }
}
</style>