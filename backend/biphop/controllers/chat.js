const appRoot = require("app-root-path");
const chatUserModel = require(appRoot+"/models/chatUser");
const chatModel = require(appRoot+"/models/chat");
const mongoose = require('mongoose');
const user = require(appRoot+'/models/user');

exports.chatList = async (req,res,next)=>{
    try{
        console.log(req.user_id)
        const user_id=req.user_id
        const user_find=await chatUserModel.find({user_id})
        const temp_1=[]
        user_find[0].chatroom.forEach((item)=>{
            temp_1.push(item.chatroomid);
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


exports.check = async (req,res,next)=>{
    try{
        const userResult=await user.userFindById( {user_id : req.query.user_id })
        if(userResult===""){
            res.send({resultCode : 0});
        }
        else{
            res.send({resultCode : 1});
            const chatUserResult=await chatUserModel.find({user_id : req.query.user_id});
            if(chatUserResult.length===0){
                const newUser=new chatUserModel({ user_id : req.query.user_id, chat_room : [] });
                newUser.save();
            }
        }
    }
    catch(err){
        next(err)
    }
}

exports.room =  async (req,res,next)=>{
    try{
        const newChat=await new chatModel({user : req.body.users , chat : []})
        const chatSaveResultId=(await newChat.save())._id;
        const updateResult=await chatUserModel.updateMany({user_id: {$in:req.body.users} } ,{$push : {
            chatroom : {
            chatroomid : mongoose.Types.ObjectId(chatSaveResultId)}
        }});
        res.send({"resultCode":0});
    }
    catch(err){
        next(err)
    }
}