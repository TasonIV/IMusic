<template>
  <div class="recommend-banner">
    <ul>
      <!-- 没得到imageUrl数据，不渲染DOM -->
      <li ref="slider"  v-if="isShow">  
        <img v-for="(item,index) in banner" :key="index" :src="item.imageUrl" />
        <img :src="`${this.banner[0].imageUrl}`" />
      </li>
    </ul>
    <div class="dot-box">
      <span v-for="b in banner.length" :key="b" class="dot" :class="{active:b === ind+1}"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data: () => ({
    index: 0,
    timer: null,
    picWidth:0,
    isShow:false  
  }),
  props: {
    banner: {
      type: Array
    },
    ind: {
      type: Number
    }
  },
  updated(){
    // 判断，得到imageUrl数据后，才进行DOM渲染(不然会报错：imageUrl undefined)
    if(this.banner.length > 0){
      this.isShow = true;
    }
  },
  methods: {
    // 轮播图滑动方法
    nextPic() {
      this.index++;
      this.picWidth = Math.floor(window.document.body.clientWidth) -20; // 计算轮播图需滑动的距离
      let offsetX = -this.index * this.picWidth;
      this.$refs.slider.style.transition = "all 0.5s linear";
      this.$refs.slider.style.transform = `translateX(${offsetX}px)`;
      this.$refs.slider.addEventListener("transitionend", this.resetPic); //轮播结束后，才进行轮播图重置
    },
    // 重置轮播图
    resetPic() {
      if (this.index >= this.banner.length) {
        this.index = 0;
        let offsetX = -this.index * this.picWidth;
        this.$refs.slider.style.transition = "none";
        this.$refs.slider.style.transform = `translateX(${offsetX}px)`;
        // console.log(this.banner.length,this.index,"aaaaaaaaaa")
      }
    }
  },
  watch: {
    // 监听本组件 index 的变化 ，若有变化，反向传给推荐视图，修改index
    index(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.$emit("changeIndex", newValue);
      }
    }
  },
  mounted() {
    this.timer = setInterval(this.nextPic, 2000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.recommend-banner {
  margin: 0 10px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  ul {
    width: 1000%;
    overflow: hidden;
    li {
      width: 100%;
      overflow: hidden;
      img {
        float: left;
        width: 10%;
      }
    }
  }

  .dot-box {
    position: absolute;
    left: 50%;
    bottom: 14px;
    transform: translateX(-50%);
    // background-color: #e49;
    z-index: 4;

    .dot {
      float: left;
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #fff;
    }
    .dot.active {
      background-color: $m-main;
    }
  }
}
</style>