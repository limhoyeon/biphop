const appRoot=require("app-root-path")
const client = require(appRoot+"/utils/redis")
const beat = require(appRoot+"/models/beat")
module.exports = ()=>{
    client.flushdb(async (err, msg) => {
        if (err) {
            console.log(err)
            throw err
        }
        console.log("redis-flush-db-callback said", msg)
        const beatlist=await beat.beatLatestListForRedis()
        beatlist[0].forEach((item,index)=>{
            client.rpush("latestbeatlist",JSON.stringify(item),(err,msg)=>{
                if(err){
                    console.log(err)
                    throw err
                }
            })
        })
        console.log("12 cache maked", msg)
    })
}