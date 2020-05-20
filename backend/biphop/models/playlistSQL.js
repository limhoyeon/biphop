exports.getPlayListWithInfo = ({ user_id }) => {
    if (user_id === undefined) {
        throw "user_id is undefined.."
    }
    return `SELECT lpbp.music_idx as music_idx,lpbp.music_path as music_path,lpbp.music_title as music_title,user.nickname as nickname,lpbp.created_dt as created_dt
    FROM
    (
    SELECT
    beat.user_id,beat.music_idx as music_idx ,beat.music_title as music_title,beat.music_path as music_path, lp.created_dt as created_dt
    FROM 
    (SELECT * FROM latest_playlist WHERE user_id='${user_id}') as lp
    LEFT JOIN beat
    ON lp.music_idx=beat.music_idx
    ) as lpbp
    LEFT JOIN
    user
    ON user.user_id=lpbp.user_id
    ORDER BY created_dt DESC`
}
exports.addPlayList = ({music_idx,user_id})=>{
    if(user_id === undefined || music_idx === undefined ){
        throw "one of value is undefined.."
    }
    return `INSERT INTO latest_playlist(music_idx,user_id,created_dt)\
            VALUES('${music_idx}','${user_id}',current_timestamp)`
}