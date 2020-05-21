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
    state.playlist.unshift(beat);
  },
  [types.SETNOWPLAY](state,idx){
    state.nowPlay=idx;
    if(idx!==-1){
      state.waveSurferReferer.load(state.playlist[state.nowPlay].music_path);
    }
  },
  [types.CLEARPLAYLIST](state){
    state.playlist=[]
  },
  [types.SETPLAYLIST](state,beats){
    state.playlist=beats
  }
}