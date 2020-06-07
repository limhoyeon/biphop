var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema=new Schema({
    user_id : String,
    chatroom : [{ chatroomid:mongoose.ObjectId } ]
})
var userModel=mongoose.model('user',userSchema);
module.exports=userModel;