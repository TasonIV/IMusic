<template>
  <div class="singer" ref="music">
    <div class="singer-box">
      <div
        class="singer-content"
        v-for="(item,index) in artistsList"
        :key="index"
        @click="selectList(item)"
      >
        <span class="singer-img">
          <img v-lazy="item.img1v1Url" />
        </span>
        <span class="singer-name">{{item.name}}</span>
      </div>
    </div>
    <LoadingMax v-if="!this.artistsList.length"/>
  </div>
</template>

<script>
import axios from "axios";
import BScroll from "better-scroll";
import LoadingMax from "../components/Loading/LoadingMax"

export default {
  name: "SingerView",
  components:{
    LoadingMax
  },
  data: () => ({
    artistsList: []
  }),
  created() {
    this.getSingers();
  },
  updated() {
    this.initMusicScroll();
  },
  methods: {
    // 滚动功能
    initMusicScroll() {
      if (!this.MusicScroll) {
        // 初始化
        this.MusicScroll = new BScroll(this.$refs.music, {
          click: true,
          swipeBounceTime: 200 // 回弹动画总时长，默认500
        });
      } else {
        this.MusicScroll.refresh();
      }
    },

    //排行歌手 => 歌手歌单详情页列表
    selectList(item) {
      this.$router.push({ name: "singerList", params: { id: item.id } });
    },

    // 以下为获取api数据的方法
    // 获取热门歌手top100
    getSingers() {
      let url = "http://localhost:3000/top/artists?limit=100";
      axios.get(url).then(res => {
        if (res.status === 200) {
          this.artistsList = res.data.artists;
          // console.log(this.artistsList)
        }
        // } else {
        //   console.error("getSingers数据 获取失败");
        // }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.singer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // padding-top: 88px;
  .singer-box {
    padding-top: 88px;
    .singer-content {
      display: flex;
      margin: 0 15px;
      padding: 8px 0;
      border-bottom: 1px solid rgb(227, 232, 224);
      .singer-img {
        flex: 0 0 50px;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .singer-name {
        flex: 1;
        padding: 0 20px;
        font-size: 16px;
        line-height: 50px;
        text-align: left;
      }
    }
  }
}
</style>