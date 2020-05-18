import { USER_ID, IS_AUTH, TOKEN } from './mutation_type'
import api from '@/utils/api'

let setUserId = ({ commit }, data) => {
  commit(USER_ID, data)
}

let setIsAuth = ({ commit }, data) => {
  commit(IS_AUTH, data)
}
let setToken = ({ commit }, data) => {
  commit(TOKEN, data)
}

export default {
  loginProcess(store, { user_id, token }) {
    setUserId(store, user_id)
    setToken(store, token)
    setIsAuth(store, true)
    api.defaults.headers.common['Authorization']=token
    return store.getters.getIsAuth  // 로그인 결과를 리턴한다
  },
  logoutProcess(store) {
    setUserId(store, "")
    setToken(store, "")
    setIsAuth(store, false)
    api.defaults.headers.common['Authorization']=""
    return store.getters.getIsAuth
  },
  getAuthor(store) {
    if (store.getters.IS_AUTH === true){
      return store.getters.TOKEN
    }
    else{
      return false
    }
  }
}