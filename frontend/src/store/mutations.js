import * as types from './mutation_types'

export default {
  [types.USER_ID] (state, userId) {
    state.userId = userId
  },
  [types.IS_AUTH] (state, isAuth) {
    state.isAuth = isAuth
  },
  [types.token](state,token){
      state.token=token
  }
}