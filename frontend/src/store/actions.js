import { USER_ID, IS_AUTH, TOKEN,SETWAVESURFER ,ADDPLAYLIST , SETNOWPLAY } from './mutation_type'
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
let setWaveSurfer = ({commit},data)=>{
  commit(SETWAVESURFER,data)
}
let addPlaylist= ({commit},data)=>{
  commit(ADDPLAYLIST,data)
}
let setNowPlay=({commit},data)=>{
  commit(SETNOWPLAY,data)
}
let initPlaylist = async (store) =>{
  const result=await api.get("/api/playlist/getPlayList")
  result.data.forEach((data,index)=>{
    addPlaylist(store,data);
  })
  if(result.data.length>0){
    setNowPlay(store,0)
  }
}
export default {
  loginProcess(store, { user_id, token }) {
    setUserId(store, user_id)
    setToken(store, token)
    setIsAuth(store, true)
    api.defaults.headers.common['Authorization']=token
    initPlaylist(store);
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
  },
  setWaveSurferProcess(store,waveSurferReferer){
    setWaveSurfer(store,waveSurferReferer);
  },
  async addPlaylistProcess(store,beat){
    const res = await api.post("/api/playlist/getPlayList")
    if(res.data.result===0){
      addPlaylist(store,beat);
      setNowPlay(store,0);
    }
  }
}