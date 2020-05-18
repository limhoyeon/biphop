import {USER_ID, IS_AUTH, ERROR_STATE} from './mutation_types'
import api from '@/utils/api'

let setUserId= ({commit}, data) => {
  commit(USER_ID, data)
}

let setIsAuth = ({commit}, data) => {
  commit(IS_AUTH, data)
}

// 백엔드에서 반환한 결과값을 가지고 로그인 성공 실패 여부를 vuex에 넣어준다.
let processResponse = (store, loginResponse) => {
  switch (loginResponse) {
    case 'noAuth':
      setErrorState(store, 'Wrong ID or Password')
      setIsAuth(store, false)
      break
    case 'done':
      setErrorState(store, 'No period')
      setIsAuth(store, false)
      break
    default:
      setUID(store, loginResponse.UID)
      setErrorState(store, '')
      setIsAuth(store, true)
  }
}

export default {
  async setToken (store, {user_id, token}) {
    setUserId(store,user_id)
    setToken(store,token)
    setIsAuth(store, true)
    let loginResponse = await api.login(uid, password)
    processResponse(store, loginResponse)
    return store.getters.getIsAuth  // 로그인 결과를 리턴한다
  }
}