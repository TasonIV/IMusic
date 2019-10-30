<template>
  <div class="search">
    <div class="inp-box">
      <div class="inp-icon icon-search"></div>
      <div class="inp-input">
        <input type="text" placeholder="搜索歌曲、歌单、专辑" />
      </div>
    </div>

    <div class="hot-box">
        <p class="hot-title">热门搜索</p>
        <span class="hot-items" v-for="item in hots" :key="item.id">{{item.first}}</span>
    </div>
  </div>
</template>


<script>
export default {
  name: "SearchView",
  data:()=>({
      hots:[]
  }),
  created(){
      this.getHotSearch()
  },
  methods:{
      // 以下为获取api数据的方法
      getHotSearch(){
          // 获取热门搜索数据
          let url = "http://localhost:3000/search/hot";
          this.$http.get(url).then((res)=>{
              if(res.status === 200){
                  this.hots = res.data.result.hots
              }else{
                  console.error("getHotSearch数据 获取失败")
              }
          })
      }
  }
};
</script>


<style lang="scss" scoped>
.search{
  padding-top:88px;
}
.inp-box {
  width: 100%;
  padding: 10px;
  background-color: $m-gray;
  display: flex;
  .inp-icon {
    flex: 0 0 36px;
    width: 36px;
    height: 36px;
    text-align: center;
    line-height: 40px;
    color: $m-d-gray;
    background-color: #fff;
  }

  .inp-input {
    flex: 1;

    input {
      box-sizing: border-box;
      display: inline-block;
      width: 100%;
      height: 36px;
      padding-left: 4px;
      padding-top: 6px;
      border: 0;
      outline: none;
      font-size: 14px;
      text-align: left;
      line-height: 36px;
      color: $m-font-color;
    }
  }
}
.hot-box{
    width: 100%;
    padding: 0 10px;
    .hot-title{
        width: 100%;
        padding: 16px 0 12px 0;
        font-size: 16px;
        font-weight: bold;
        text-align: left;
        // line-height: 16px;
        background-color: #fff;
        color: $m-font-color;
    }
    .hot-items{
        float: left;
        padding: 6px;
        margin: 6px 6px 0 0;
        border: 1px solid $m-gray;
        border-radius: 6px;
        color: $m-font-color;
    }
    
}
</style>