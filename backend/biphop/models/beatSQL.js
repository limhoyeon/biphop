exports.beatIsExist=({user_id, music_title})=>{
    if(user_id===undefined || music_title === undefined){
        throw "user_id is undefined or music_title is undefined"
    }
    return `select count(*) from beat where user_id='${user_id}' and music_title='${music_title}'`
}
exports.beatWrite=({user_id,music_title,music_path,music_description,music_tag_1,music_tag_2,music_tag_3}) =>{
    if(user_id===undefined || music_title===undefined || music_path === undefined || music_description ===undefined || music_tag_1 === undefined ||music_tag_2===undefined || music_tag_3 === undefined){
        throw "one of values is undefined"    
    }
    return `INSERT INTO beat(user_id,music_title,music_path,music_description,music_tag_1,music_tag_2,music_tag_3,updated_dt,created_dt)\
    VALUES('${user_id}','${music_title}','${music_path}','${music_description}','${music_tag_1}','${music_tag_2}','${music_tag_3}',current_timestamp,current_timestamp)`
}
exports.beatLatestListForRedis=()=>{
    return `select beat.music_idx,beat.music_title,beat.music_path,beat.music_tag_1,beat.music_tag_2,beat.music_tag_3,ifnull(user.nickname,'unsigneduser') as nickname,beat.created_dt as created_dt\
    FROM beat\
    LEFT JOIN user\
    on beat.user_id=user.user_id\
    ORDER BY beat.created_dt DESC
    LIMIT 0,12`
}

exports.getBeatDetail=({music_idx})=>{
    if(music_idx===undefined){
        throw "one of values is undefined"
    }
    return `SELECT * FROM beat WHERE music_idx='${music_idx}'`
}