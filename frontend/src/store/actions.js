import { USER_ID, IS_AUTH, TOKEN, SETWAVESURFER, ADDPLAYLIST, SETNOWPLAY , CLEARPLAYLIST } from './mutation_type'
import api from '@/utils/api'

let clearPlaylist = ({commit})=>{
  commit(CLEARPLAYLIST)
}
let setUserId = ({ commit }, data) => {
  commit(USER_ID, data)
}

let setIsAuth = ({ commit }, data) => {
  commit(IS_AUTH, data)
}
let setToken = ({ commit }, data) => {
  commit(TOKEN, data)
}
let setWaveSurfer = ({ commit }, data) => {
  commit(SETWAVESURFER, data)
}
let addPlaylist = ({ commit }, data) => {
  commit(ADDPLAYLIST, data)
}
let setNowPlay = ({ commit }, data) => {
  commit(SETNOWPLAY, data)
}
let initPlaylist = store => {

  api.get("/api/playlist/getPlayList")
    .then((result) =>
      result.data.forEach((data, index) => {
        addPlaylist(store, data);
        if (result.data.length > 0) {
          setNowPlay(store, 0)
        }
      }))
    .catch((err)=>{
      console.log(err)
    })
}
export default {
  loginProcess(store, { user_id, token }) {
    setUserId(store, user_id)
    setToken(store, token)
    setIsAuth(store, true)
    api.defaults.headers.common['Authorization'] = token
    initPlaylist(store);
    return store.getters.getIsAuth  // 로그인 결과를 리턴한다
  },
  logoutProcess(store) {
    setUserId(store, "")
    setToken(store, "")
    setIsAuth(store, false)
    setNowPlay(store,-1)
    clearPlaylist(store)
    api.defaults.headers.common['Authorization'] = ""
    return store.getters.getIsAuth
  },
  getAuthor(store) {
    if (store.getters.IS_AUTH === true) {
      return store.getters.TOKEN
    }
    else {
      return false
    }
  },
  setWaveSurferProcess(store, waveSurferReferer) {
    setWaveSurfer(store, waveSurferReferer);
  },
  addPlaylistProcess(store, beat) {
    api.post("/api/playlist/addPlaylist", { music_idx: beat.music_idx })
    .then(res =>{
      console.log(res)
      if (res.data.result === 0) {
        addPlaylist(store, beat);
        setNowPlay(store, 0);
      }      
    })
  },
  setNowPlayProcess(store, index) {
    setNowPlay(store, index);
  }
}