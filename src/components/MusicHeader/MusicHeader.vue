
<template>
    <div class="music-header">
        <!-- <div class="person icon-user"></div> -->
        <router-link to="/person" tag="div" class="person icon-user"></router-link>
        <div class="logo icon-vine"> IMusic</div>
        <router-link to="/mylike" tag="div" class="search icon-headphones">
        </router-link>
    </div>
</template>

<script>
export default {
    name:"MusicHeader",
    components:{
        
    }
}
</script>

<style lang="scss" scoped>
    .music-header{
        display:flex;
        width: 100%;
        height: 44px;
        background-color: $m-main;
        .person{
            flex:0 0 44px;
            width: 44px;
            height: 44px;
            font-size: 22px;
            line-height: 44px;
            text-align: center;
            color: #fff;
        }
        .logo{
            flex: 1;
            font-size: 18px;
            line-height: 44px;
            text-align: center;
            color: #fff;
        }
        .search{
            flex:0 0 44px;
            width: 44px;
            height: 44px;
            font-size: 18px;
            line-height: 44px;
            text-align: center;
            color: #fff;
        }
    }
</style>