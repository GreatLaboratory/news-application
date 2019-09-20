import {
    fetchUserInfo,
    fetchItemInfo,
    fetchList,
} from '../api'

export default {
    // 액션함수는 항상 mutation에 접근할 수 있게 인자로 context가 제공된다.
    // 하지만 매번 context.commit을 하기 귀찮으니 { commit }으로 한번에 받아와서 바로 써버리쟛
    FETCH_USER({ commit }, userName) {
        fetchUserInfo(userName)
            .then(res=>{
                commit('SET_USER', res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },
    FETCH_ITEM({ commit }, itemId) {
        fetchItemInfo(itemId)
            .then(res=>{
                commit('SET_Item', res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },
    FETCH_LIST({ commit }, pageName) {
        fetchList(pageName)
            .then(res=>{
                commit('SET_LIST', res.data)
            })
            .catch(err=>{
                console.log(err)
            })

    },
}