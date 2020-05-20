const appRoot = require("app-root-path")
const query = require(appRoot + "/utils/rds")
const sql = require(appRoot + "/models/beatSQL")
const redisClient=require(appRoot+"/utils/redis")
const user = require(appRoot+"/models/user")
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
    const sqlPushResult = await query(sql.beatWrite({user_id,music_title,music_path,music_description,music_tag_1,music_tag_2,music_tag_3}))
    const sqlUserInfoResult = await user.userFindById({user_id})
    var nickname
    if(sqlUserInfoResult===undefined){
        nickname="unsigned user"
    }
    else{
        nickname=sqlUserInfoResult['nickname']
    }
    const created_dt=new Date().toISOString().replace("T"," ").replace("Z","").substring(0,19);
    await redisClientLpushPromise("latestbeatlist",JSON.stringify({
        created_dt ,nickname,music_idx: sqlPushResult[0]['insertId'],music_title,music_path,music_tag_1,music_tag_2,music_tag_3
    }))
    await redisClientLtrimPromise("latestbeatlist",0,11)
    return true
}

exports.beatLatestListForRedis = async ( )=>{
    const result = await query(sql.beatLatestListForRedis())
    return result
}

exports.beatLatestList = async ( )=>{
    const retList=[]
    const result = await redisClientLrangePromise('latestbeatlist',0,-1)
    result.forEach( ( item,index) =>{
        retList.push(JSON.parse(item))
    })

    return retList
}

exports.getBeatDetail = async ({music_idx})=>{
    const result = await query(sql.getBeatDetail({music_idx}))
    return result
}

const redisClientLrangePromise = (targetList, start, end) => {
    return new Promise((resolve, reject) => {
        redisClient.lrange(targetList,start,end,(err,msg)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(msg)
            }
        })
    })
}

const redisClientLpushPromise = (targetList,value) => {
    return new Promise((resolve, reject) => {
        redisClient.lpush(targetList,value,(err,msg)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(msg)
            }
        })
    })
}
const redisClientLtrimPromise = (targetList,start,end) =>{
    return new Promise((resolve, reject) => {
        redisClient.ltrim(targetList,start,end,(err,msg)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(msg)
            }
        })
    })    
}
