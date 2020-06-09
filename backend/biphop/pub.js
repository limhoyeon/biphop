require('dotenv').config()
const redis = require('redis');
const pub = redis.createClient(
    process.env.REDIS_PORT, process.env.REDIS_HOST
    , { password: process.env.REDIS_PASSWORD },(err,msg)=>{
        console.log(err,msg)
    });
pub.publish("analytics", "page_viewed");