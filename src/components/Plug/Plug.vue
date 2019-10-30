<template>
    <div class="plug">
        <div class="plug-img">
            <img src="../../../public/image/4.jpg" alt="">
        </div>
        <div class="plug-content">
            <div class="title">好喜欢你</div>
            <div class="name">素中人</div>
        </div>
        <div class="plug-play icon-play2"></div>
        <div class="plug-list icon-paragraph-left"></div>
    </div>
</template>

<script>
export default {
    name:"Plug",
}
</script>

<style lang="scss" scoped>
    .plug{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 60px;
        display: flex;
        background-color: #fff;
        box-shadow: 0 -1px 0 rgba(112,112,112,0.2);
        .plug-img{
            flex: 0 0 42px;
            width: 42px;
            height: 42px;
            border-radius: 50%;
            margin: 8px 0 0 20px;
            img{
                width: 42px;
                height: 42px;
                border-radius: 50%;
            }
        }

        .plug-content{
            flex: 1;
            text-align: left;
            margin: auto 16px;
            color: $m-font-color;
            .title{
                font-size: 16px;
                margin-bottom:4px; 
            }
            .name{
                font-size: 12px;
            }
        }

        .plug-play{
            flex: 0 0 50px;
            margin: auto 0;
            width: 50px;
            height: 50px;
            font-size: 32px;
            line-height: 50px;
            color: rgb(112,112,112);
        }   

        .plug-list{
            flex: 0 0 50px;
            margin: auto 0;
            margin-right: 6px;
            width: 50px;
            height: 50px;
            font-size: 26px;
            line-height: 50px;
            color: rgb(112,112,112);
        }
    }
</style>