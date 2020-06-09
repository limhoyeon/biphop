const appRoot = require("app-root-path");
const chatUserModel = require(appRoot+"/models/chatUser");
const chatModel = require(appRoot+"/models/chat");
const mongoose = require('mongoose');
const user = require(appRoot+'/models/user');

exports.chatList = async (req,res,next)=>{
    try{
        const user_id=req.user_id
        const user_find=await chatUserModel.find({user_id})
        const temp_1=[]
        user_find[0].chatroom.forEach((item)=>{
            temp_1.push(mongoose.Types.ObjectId(item._id));
        })
        const chat_find=await chatModel.find({_id: {
                $in : temp_1
                }
        })
        const temp_2=[]
        chat_find.forEach((item)=>{
            temp_2.push({users:item.user,chatroom_id:item._id})
        })
        res.json(temp_2);
    }
    catch(err){
        next(err)
    }
}
