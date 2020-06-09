export default {
    getUserId: state => state.userId,
    getIsAuth: state => {return state.isAuth},
    getToken : state => state.token,
    getWaveSurferReferer : state => state.waveSurferReferer,
    getPlaylist:state => {return state.playlist},
    getNowPlay : state => {return state.nowPlay},
    getNowPlayInfo : state => {
        if(state.isAuth==false){
            return {
                music_title : "음악을 듣기 위해서",
                nickname : "로그인해주세요!"
            }
        }
        else{
            if(state.nowPlay!=-1){
                return state.playlist[state.nowPlay]
            }
            else{
                return {
                    music_title : "플레이 리스트에서",
                    nickname : "음악을 선택해주세요"
                }                
            }
        }
    }
}