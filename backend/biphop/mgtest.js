require('dotenv').config()
var mongoose = require('mongoose');
mongoose.connect(process.env.NOSQL_URL, {useNewUrlParser: true, useUnifiedTopology: true , poolSize : 10});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("is connected");
});

var Schema = mongoose.Schema;
var chatSchema = new Schema({
    user : [String],
    chat : [{sender:String,send_dt:{type:Date,default:Date.now},message:String}]
  });
var chatModel=mongoose.model('chat',chatSchema);
var chat_one=new chatModel({user:["guestid","hoyeon94"],chat:[]})
// chatModel.updateOne({ _id: "5eda05a2cf98314694eab11e" }, {
//     $push: {
//         chat: {
//             sender: "guestid",
//             message: "fuck!!message2다시바"
//         }
//     }
// })
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err)
//     })
var userSchema=new Schema({
    user_id : String,
    chatroom : [{ chatroomid:mongoose.ObjectId } ]
})
var userModel=mongoose.model('user',userSchema)
var oneUser=new userModel({user_id:"guestid",chatroom:[mongoose.Types.ObjectId("5eda05a2cf98314694eab11e")]})
oneUser.save()