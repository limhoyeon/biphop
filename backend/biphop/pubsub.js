require('dotenv').config()
const redis = require('redis');
const pub = redis.createClient(
    process.env.REDIS_PORT, process.env.REDIS_HOST
    , { password: process.env.REDIS_PASSWORD },(err,msg)=>{
        console.log(err,msg)
    });
const sub = redis.createClient(
    process.env.REDIS_PORT, process.env.REDIS_HOST
    , { password: process.env.REDIS_PASSWORD },(err,msg)=>{
        console.log(err,msg)
    });

sub.on("subscribe", function(channel, count) {
	console.log("Subscribed to " + channel + ". Now subscribed to " + count + " channel(s).");
});

sub.on("message", function(channel, message) {
	console.log("Message from channel " + channel + ": " + message);
});

sub.subscribe("analytics");
pub.publish("analytics", "page_viewed");