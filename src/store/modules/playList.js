import * as types from '../mutation-types'

export default {
    state: {
        playList: [],  // 播放页&播放插件的  歌曲列表
        lyricList: [],  // 播放页&播放插件的  歌词列表
    },
    mutations: {

        // 歌曲列表
        [types.SET_PLAY_LIST](state, list) {
            state.playList = list
        },

        [types.SET_PLAY_LYRICLIST](state, list) {
            state.lyricList = list
        }
    }

}