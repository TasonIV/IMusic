import * as types from '../mutation-types'

export default {
    state: {
        topList: null,  // 排行页 排行列表
    },
    mutations: {

        // 排行页 排行列表
        [types.SET_TOP_LIST](state, topList) {
            state.topList = topList
        }
    }

}