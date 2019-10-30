<template>
    <div class="loading-max">
        <div class="load-img">
            <img src="../../../public/image/10.gif" alt="">
            <main>拼命加载中...</main>
        </div>
    </div>
</template>

<script>
export default {
    name:"LoadingMax"
}
</script>

<style lang="scss" scoped>
    .loading-max{
        position: absolute;
        top:88px;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        z-index: 30;
        .load-img{  
            position: absolute;
            top:40%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            color: $m-main;
            // transform: translateX(-50%);
            // transform: translateY(-50%);
            // background-color: #fff;
        }

        img{
            width: 30px;
            height: 30px;
            // background-color: #fff;
        }

        main{
            width: 100px;
            padding:10px 0 0 14px;
        }
    }
</style>