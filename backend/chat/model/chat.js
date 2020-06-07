var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var chatSchema = new Schema({
    user : [String],
    chat : [{sender:String,send_dt:{type:Date,default:Date.now},message:String}]
  });
var chatModel=mongoose.model('chat',chatSchema);
module.exports=chatModel;