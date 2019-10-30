import * as types from '../mutation-types'

export default {
    state: {
        musicList: null,  // 推荐页 推荐歌单列表
    },
    mutations: {

        // 推荐页 添加推荐歌单列表
        [types.SET_MUSIC_LIST](state, list) {
            state.musicList = list
        }
    }

}