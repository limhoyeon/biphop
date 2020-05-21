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
      try{
        state.waveSurferReferer.load(state.playlist[state.nowPlay].music_path);
      }
      catch(err){
        console.log(err)
        alert("음악 재생 시도 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  },
  [types.CLEARPLAYLIST](state){
    state.playlist=[]
  },
  [types.SETPLAYLIST](state,beats){
    state.playlist=beats
  }
}