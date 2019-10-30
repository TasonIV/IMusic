import Vue from 'vue'
import Vuex from 'vuex'

import musicList from './modules/musicList'  
import topList from './modules/topList'  
import recommendMusic from './modules/recommendMusic'
import playList from './modules/playList'  


Vue.use(Vuex)


export default new Vuex.Store({
    modules:{
        musicList,
        topList,
        recommendMusic,
        playList
    }
})