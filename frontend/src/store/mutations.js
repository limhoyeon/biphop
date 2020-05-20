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
  },
  [types.SETWAVESURFER](state,waveSurferReferer){
    state.waveSurferReferer=waveSurferReferer
  },
  [types.ADDPLAYLIST](state,beat){
    state.playlist.push(beat);
  },
  [types.SETNOWPLAY](state,idx){
    state.nowPlay=idx;
    state.waveSurferReferer.load(state.playlist[state.nowPlay].music_path);
  }
}