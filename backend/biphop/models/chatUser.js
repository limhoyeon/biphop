var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var chatUserSchema=new Schema({
    user_id : String,
    chatroom : [{ chatroomid:mongoose.ObjectId } ]
})
var chatUserModel=mongoose.model('user',chatUserSchema);
module.exports=chatUserModel;