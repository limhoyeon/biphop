const appRoot = require("app-root-path")
const query = require(appRoot + "/utils/rds")
const sql = require(appRoot + "/models/beatSQL")

exports.beatIsExist = async ({ user_id,music_title}) => {
    const result = await query(sql.beatIsExist({user_id , music_title}))
    if(result[0][0]['count(*)'] === 0 ){
        return true
    }
    else{
        return false
    }
}
exports.beatWrite= async ({user_id,music_title,music_path,music_description,music_tag_1,music_tag_2,music_tag_3}) =>{
    const result = await query(sql.beatWrite({user_id,music_title,music_path,music_description,music_tag_1,music_tag_2,music_tag_3}))
    return result
}