<template>
  <div class="ranking-list" ref="music">
    <main>
      <div class="list-box" v-for="rank in rankingList" :key="rank.id" @click="selectList(rank)">
        <div class="list-img">
          <img v-lazy="rank.coverImgUrl" />
        </div>
        <div class="list-right">
          <div class="list-right-content" v-for="(song,index) in rank.top" :key="index">
            <span>{{index + 1 + "."}}</span>
            <span>{{song.name}}-{{song.ar[0].name}}</span>
          </div>
        </div>
      </div>
    </main>
    <LoadingMax v-if="!this.rankingList.length"/>
  </div>
</template>

<script>
import axios from "axios";
import BScroll from "better-scroll";
import LoadingMax from "../components/Loading/LoadingMax"
// import BottomLine from "../components/BottomLine/BottomLine"

const YUNMUSIC_TOP = [0, 1, 2, 3, 4, 22, 23];

export default {
  name: "RankingListView",
  data: () => ({
    rankingList: [],
    showLoading: true
  }),
  components: {
    // BottomLine
    LoadingMax
  },
  created() {
    this.getTopList();
  },
  updated() {
    this.initMusicScroll();
  },
  methods: {
    // 滑动功能
    initMusicScroll() {
      if (!this.MusicScroll) {
        this.MusicScroll = new BScroll(this.$refs.music, {
          click: true,
          swipeBounceTime: 200, // 回弹动画总时长，默认500
        });
        
      } else {
        this.MusicScroll.refresh();
      }
    },

    //排行歌单 => 歌单详情页列表
    selectList(rank) {
      this.$router.push({ name: "rankList", params: { id: rank.id } });
      this.$store.commit("SET_TOP_LIST", rank); //将item的值提交到vuex的state中
    },

    // 以下为获取数据api的方法
    // 获取排行榜列表
    getTopList() {
      for (let i = 0; i < YUNMUSIC_TOP.length; i++) {
        let url = `http://localhost:3000/top/list?idx=${YUNMUSIC_TOP[i]}`;
        axios.get(url).then(res => {
          let list = res.data.playlist; // 排行列表
          list.top = res.data.playlist.tracks.slice(0, 3); // 排行前三名
          this.rankingList.push(list);
          // console.log(res.data.playlist,res.data.playlist.tracks.slice(0,3))
        });
        if (i === YUNMUSIC_TOP.length - 1) {
          this.showLoading = false;
        }
        // console.log(this.rankingList)
      }
      // this.$nextTick(() => {
      //   this.initMusicScroll();
      // });
    }
  }
};
</script>

<style lang="scss" scoped>
.ranking-list {
  // transform: translateY(178px);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  // overflow: hidden;
main{
  padding-top: 88px;
}
  .list-box {
    width: 94%;
    display: flex;
    padding: 5px 0;
    margin: 0 10px;
    border-bottom: 1px solid rgb(227, 232, 224);
    &:first-child {
      padding-top: 10px;
    }
    .list-img {
      flex: 0 0 100px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 6px;
      }
    }

    .list-right {
      flex: 1;

      .list-right-content {
        width: 220px;
        // width: 100%;   //此处有bug：歌名长度太长时会改变父元素宽度
        height: 33.3%;
        padding: 3px 20px 0 20px;
        font-size: 12px;
        text-align: left;
        line-height: 31px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>