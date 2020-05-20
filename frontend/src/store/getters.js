export default {
    getUserId: state => state.uid,
    getIsAuth: state => state.isAuth,
    getToken : state => state.token,
    getWaveSurferReferer : state => state.waveSurferReferer,
    getPlaylist:state => {return state.playlist},
    getNowPlay : state => {return state.nowPlay},
    getNowPlayInfo : state => {
        if(state.nowPlay===-1){
            return {
                music_title : "로그인 필요합니다.",
                nickname : "음악을 듣기 위해서"
            }
        }
        else{
            return state.playlist[state.nowPlay]
        }
    }
}