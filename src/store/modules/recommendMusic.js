import * as types from '../mutation-types'

export default {
    state: {
        recommendMusicList: null,  // 推荐页 推荐歌曲列表
    },
    mutations: {

        // 推荐页 添加推荐歌曲列表
        [types.SET_RECOMMEND_MUSIC_LIST](state, list) {
            state.recommendMusicList = list
        }
    }

}