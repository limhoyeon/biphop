var appRoot = require('app-root-path');
require('dotenv').config()
var query=require(appRoot+'/utils/rds')

var user=require(appRoot+'/models/user')
var userSql=require(appRoot+'/models/userSQL')
var tel="01022223232"
var user_id="syeon94"
var email="syeon90@korea.com"
var password="passss"
var nickname="syNick"
user.userIsNotExist({user_id})
.then(msg=>{
    console.log(msg)
})