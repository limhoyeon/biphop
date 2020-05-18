const express = require('express');
const dotenv=require('dotenv');
const app = express();
const AWS = require('aws-sdk');
const uuid = require('uuid');
dotenv.config()

const testFunction= async (message)=>{
  const result=await new Promise((resolve,reject)=>{
    var now_time=new Date();
    var cur_time=new Date();
    while(cur_time.getTime()-now_time.getTime()<2000){
      cur_time=new Date();
      reject("hello")
    }
    resolve("true")
  })
  return result
}
var s3 = new AWS.S3({apiVersion: '2006-03-01',region : 'ap-northeast-2'})

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use('/', async(req,res,next)=>{
  console.log("hello1111111111?")
  console.log("hello1111111111?")
  console.log("hello1111111111?")
  var error=new Error("this is error")
  error.message="hello?"
  next(error)
  console.log("whatttttttttttt?")
})
app.use('/',(req,res,next)=>{
  console.log("hello1222222222222222?")
})

app.use((error, req, res, next) => {
  console.log(error)
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});
app.listen(8080);
