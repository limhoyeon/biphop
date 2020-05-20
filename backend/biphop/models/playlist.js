const appRoot=require("app-root-path")
const sql=require(appRoot+"/models/playlistSQL")
const query=require(appRoot+"/utils/rds")

exports.getPlayListWithInfo =  async ({user_id})=>{
    const result=await query(sql.getPlayListWithInfo({user_id}))
    return result
}

exports.addPlayList = async ({user_id,music_idx}) =>{
    const result=await query(sql.addPlayList({user_id,music_idx}));
    return result;
}