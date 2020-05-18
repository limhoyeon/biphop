import * as types from './mutation_type'

export default {
  [types.USER_ID] (state, userId) {
    state.userId = userId
  },
  [types.IS_AUTH] (state, isAuth) {
    state.isAuth = isAuth
  },
  [types.TOKEN](state,token){
      state.token= token
  }
}