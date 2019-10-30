<template>
  <div class="container">
    <!-- 罩层 -->
    <div class="recommend-cover"></div>
    <div class="box" ref="recommend">
      <main>
        <!-- 轮播图 -->
        <Banner :banner="banner" @changeIndex="changeIndex" :ind="index" />

        <!-- 推荐歌单 -->
        <div class="recommend-list">
          <h1>推荐歌单</h1>
          <div class="list-box" v-for="item in playList" :key="item.id">
            <div class="list-img">
              <!-- <router-link :to="`/recommend/${item.id}`" tag="img" :src="item.picUrl"></router-link>
              <router-view ></router-view>-->
              <img v-lazy="item.picUrl" @click="selectList(item)" />
            </div>
            <div class="list-icon icon-headphones">&nbsp;{{Math.floor(item.playCount / 10000)}}万</div>
            <span class="list-introduce">{{item.name}}</span>
          </div>
        </div>
        <!-- 推荐歌曲 -->
        <div class="recommend-song">
          <h1>推荐歌曲</h1>
          <div
            class="song-box"
            v-for="item in recommendMusic"
            :key="item.id"
            @click="setRecommendSongList(item)"
          >
            <div class="song-img">
              <img v-lazy="item.image" />
            </div>
            <span class="song-name">{{item.name}}</span>
            <span class="song-introduce">{{item.singer}}</span>
          </div>
        </div>
      </main>
    </div>
    <Plug v-show="false" />
    <LoadingMax v-if="!this.playList.length"/>
  </div>
</template>

<script>
import axios from "axios";
import Banner from "../components/Banner/Banner";
import Plug from "../components/Plug/Plug";
import LoadingMax from "../components/Loading/LoadingMax"

import BScroll from "better-scroll";
import { createRecommendSong } from "../common/js/song";

export default {
  name: "RecommendView",
  components: {
    Banner,
    Plug,
    LoadingMax
  },
  data: () => ({
    index: 0,
    banner: [], // 轮播图api
    playList: [], // 推荐歌单api
    recommendMusic: [], // 推荐音乐api  9首音乐
    show: false
  }),
  created() {
    this.getBanner();
    this.getRecommendList();
    this.getRecommendMusic();
  },
  updated() {
    this.initMusicScroll();
  },
  methods: {

    // 滑动功能
    initMusicScroll() {
      if (!this.MusicScroll) {
        // 不存在，初始化
        this.MusicScroll = new BScroll(this.$refs.recommend, {
          click: true,
          swipeBounceTime: 200 // 回弹动画总时长，默认500
        });
      } else {
        // 存在，刷新
        this.MusicScroll.refresh();
      }
    },

    //推荐歌单 => 歌单详情页列表
    selectList(item) {
      this.$router.push({ name: "musicList", params: { id: item.id } });
      this.$store.commit("SET_MUSIC_LIST", item); //将item的值提交到vuex的state中
    },
    // Banner反向传值，改变index的方法
    changeIndex(index) {
      if (index >= this.banner.length) {
        index = 0;
      }
      this.index = index;
    },
    // 推荐歌曲 传到vuex => 播放页面
    setRecommendSongList(list) {
      this.$router.push({ name: "recommendSongPlay" });
      this.$store.commit("SET_RECOMMEND_MUSIC_LIST", list);
      // this.$nextTick(()=>{
      // console.log(this.recommendMusic)
      //   console.log(this.$store.state)
      //   console.log(this.$store.state.recommendMusic.recommendMusicList.name)
      // })
    },

    // 以下为获取api数据的方法
    getBanner() {
      // 获取轮播图数据
      let url = "http://localhost:3000/banner";
      this.$http.get(url).then(res => {
        if (res.status === 200) {
          let list = res.data.banners;
          this.banner = list.splice(4);
          // console.log(this.banner);
        } else {
          console.error("Banner数据 获取失败");
        }
      });
    },
    getRecommendList() {
      // 获取推荐歌单
      let url = "http://localhost:3000/personalized";
      axios.get(url).then(res => {
        if (res.status === 200) {
          this.playList = res.data.result;
          // console.log(this.playList);
        } else {
          console.error("getRecommendList数据 获取失败");
        }
      });
    },
    getRecommendMusic() {
      // 获取推荐歌曲
      let url = "http://localhost:3000/personalized/newsong";
      axios.get(url).then(res => {
        if (res.status === 200) {
          let list = res.data.result.map(item => {
            return createRecommendSong(item); //调用song.js中的方法
          });
          list.splice(9);
          this.recommendMusic = list;
          // this.recommendMusic = list.splice(9) //此种写法会使数组只有一个元素
          // console.log(this.recommendMusic);
        } else {
          console.error("getRecommendMusic数据 获取失败");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 88px;
  .recommend-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 210px;
    z-index: -1;
    background-color: $m-main;
  }
  .box{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    
    main{
      padding-top: 88px
    }
  }
  .recommend-list {
    background-color:#fff;
    h1 {
      width: 100%;
      height: 65px;
      font-size: 18px;
      font-weight: bold;
      text-align: left;
      line-height: 65px;
      padding-left: 1%;
    }
    .list-box {
      position: relative;
      display: inline-block;
      width: 33%;
      padding: 0 1%;
      margin-bottom: 10px;
      .list-img {
        width: 100%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 6px;
        }
      }

      .list-icon {
        position: absolute;
        top: 6px;
        right: 10px;
        font-size: 10px;
        color: #e5e5e0;
      }

      .list-introduce {
        width: 100%;
        height: 36px;
        font-size: 12px;
        display: -webkit-box;
        text-align: left;
        line-height: 18px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }

  .recommend-song {
    background-color:#fff;
    h1 {
      width: 100%;
      height: 65px;
      font-size: 18px;
      font-weight: bold;
      text-align: left;
      line-height: 65px;
      padding-left: 1%;
    }
    .song-box {
      position: relative;
      display: inline-block;
      width: 33%;
      padding: 0 1%;
      margin-bottom: 10px;

      .song-img {
        width: 100%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 6px;
        }
      }
      .song-name {
        width: 100%;
        height: 18px;
        display: block;
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        line-height: 18px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .song-introduce {
        width: 100%;
        height: 18px;
        display: block;
        font-size: 12px;
        text-align: center;
        line-height: 18px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>