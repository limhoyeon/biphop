const express = require('express');
const dotenv=require('dotenv');
const app = express();
const uuid=require('uuid')
const AWS = require('aws-sdk');
dotenv.config()

AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);
    console.log("Secret access key:", AWS.config.credentials.secretAccessKey);
  }
});

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
app.use('/',(req,res,next)=>{
    const key= `test/${uuid.v1()}.mpeg`
    s3.getSignedUrl('putObject',{
        Bucket:'biphop-audio',
        ContentType : 'audio/mpeg',
        Key:key
    }, (err,url)=>{
        res.send({key,url})
    })
    
})
app.listen(8080);
