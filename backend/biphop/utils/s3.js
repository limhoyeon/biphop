const AWS = require('aws-sdk');
var s3
AWS.config.getCredentials(function(err) {
  if (err) throw err;
  else {
    s3 = new AWS.S3({apiVersion: '2006-03-01',region : 'ap-northeast-2'})
  }
});
module.exports=s3