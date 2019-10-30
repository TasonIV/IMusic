<template>
  <div class="big-box">
    <div class="nav">
      <span class="nav-left icon-undo2" @click="back"></span>
      <span class="nav-right">歌手</span>
    </div>
    <div class="musiclist" ref="music">
      <main>
        <div class="content-box">
          <div class="cont-img">
            <div class="cover"></div>
            <img v-lazy="singerList.artist.img1v1Url" />
            <p>
              {{singerList.artist.name}}&nbsp;&nbsp;
              <span
                v-show="singerList.artist.alias[0]"
              >({{singerList.artist.alias[0]}})</span>
            </p>
          </div>
          <div class="content">
            <div class="play-all">
              <span class="play-all-left icon-play2"></span>
              <span class="play-all-middle">播放全部</span>
              <span class="play-all-right">(共{{singerList.hotSongs.length}}首)</span>
            </div>
            <div class="play-list">
              <ul>
                <li v-for="(item,index) in singerList.hotSongs" :key="index">
                  <span class="song-num">{{index + 1}}</span>
                  <div class="song-box">
                    <span class="song-title">{{item.name}}</span>
                    <span class="song-singer">{{item.ar[0].name}}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BScroll from "better-scroll";

export default {
  name: "MusicList",
  data: () => ({
    singerList: null
  }),
  created() {
    this.getSingerListApi(this.$route.params.id);
  },
  updated() {
    this.initMusicScroll();
  },
  methods: {
    back() {
      // 返回上一个路由
      this.$router.back();
    },
    initMusicScroll() {
      if (!this.MusicScroll) {
        // 不存在，初始化
        this.MusicScroll = new BScroll(this.$refs.music, {
          click: true,
          swiperBounceTime: 200
        });
      } else {
        this.MusicScroll.refresh();
      }
    },

    // 以下为获取api的方法
    getSingerListApi(id) {
      if (!id) {
        this.$router.push("/singer");
        return;
      }
      // 获取歌手歌曲列表数据
      let url = `http://localhost:3000/artists?id=${id}`;
      axios.get(url).then(res => {
        if (res.status === 200) {
          this.singerList = res.data;
          // console.log(this.singerList);
        } else {
          console.error("getSingerListApi数据 获取失败");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 44px;
  color: #fff;
  z-index: 99;
  background-color: rgba(243, 243, 243, 0);
  backdrop-filter: blur(1px);

  .nav-left {
    flex: 0 0 44px;
    width: 44px;
    height: 44px;
    font-size: 18px;
    line-height: 46px;
    text-align: center;
  }
  .nav-right {
    flex: 1;
    flex: 0 0 44px;
    font-size: 16px;
    line-height: 47px;
    text-align: left;
  }
}
.musiclist {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 20;

  .content-box {
    .cont-img {
      width: 100%;
      position: relative;
      overflow: hidden;
      color: #fff;
      font-weight: bold;
      .cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 74%;
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 20;
      }
      img {
        width: 100%;
      }
      p {
        position: absolute;
        bottom: 120px;
        left: 20px;
        text-align: left;
        font-size: 18px;
        z-index: 22;
      }
    }
    .content {
      transform: translateY(-100px);
      background-color: #fff;
      border-radius: 8px 8px 0 0;
      z-index: 100;
      .play-all {
        width: 100%;
        height: 38px;
        padding: 0 14px;
        font-size: 14px;
        text-align: left;
        line-height: 38px;
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
    }
    .play-list {
      ul {
        li {
          display: flex;
          border-bottom: 1px solid $m-gray;
          .song-num {
            flex: 0 0 38px;
            display: inline-block;
            width: 38px;
            height: 54px;
            text-align: center;
            line-height: 54px;
            color: #aaa;
          }
          .song-box {
            flex: 1;
            text-align: left;

            .song-title {
              display: inline-block;
              width: 100%;
              font-size: 16px;
              padding-top: 12px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
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