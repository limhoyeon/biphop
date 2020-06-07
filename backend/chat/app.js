require('dotenv').config();
var app = require('express')();
var server = require('http').createServer(app);
// http server를 socket.io server로 upgrade한다
var io = require('socket.io')(server);
var redis = require('socket.io-redis');
var chatModel=require("./model/chat");
var userModel=require("./model/user");
io.adapter(redis({ host: process.env.REDIS_HOST, port : process.env.REDIS_PORT , password:process.env.REDIS_PASSWORD }));

var mongoose = require('mongoose');
mongoose.connect(process.env.NOSQL_URL, {useNewUrlParser: true, useUnifiedTopology: true , poolSize : 10});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("is connected");
  server.listen(3000, function() {
    console.log('Socket IO server listening on port 3000');
  });
});

io.on('connection', function(socket) {
  // 접속한 클라이언트의 정보가 수신되면
  // id를 저장함.
  socket.on('login', function(data) {
    socket.user_id = data.user_id;
    console.log(data)
    io.of('/').adapter.clients((err, clients) => {
      console.log(clients); // an array containing all connected socket ids
    });
  });
  
  //list를 받으면 현재 socket의 user_id에 맞게 list 반환
  socket.on('list',function(){
    console.log(this.user_id);
    userModel.find({user_id : socket.user_id})
    .then(res=>{
        const temp=[]
        res[0].chatroom.forEach((item)=>{
            temp.push(mongoose.Types.ObjectId(item._id));
        })
        console.log(temp)
        return chatModel.find({_id: {
            $in : temp
            }
        })
    })
    .then(res=>{
        const temp=[]
        res.forEach((item)=>{
            temp.push({users:item.user,chatroom_id:item._id})
        })
        socket.emit('list',temp);
    })
    .catch(err=>{
        console.log(err);
    })
  })
  //join event를 받으면 data를 반환
  socket.on('join', function(data) {
    socket.chatroom=data
    socket.join(socket.chatroom);
    chatModel.findById(mongoose.Types.ObjectId(socket.chatroom))
    .then((res)=>{
        socket.emit('join',res)
    })
    .catch((err)=>{
        console.log(err)
    })
  });
  socket.on('leave',function(){
    socket.leave(socket.chatroom);
    socket.chatroom=undefined;
  });
  // 클라이언트로부터의 메시지가 수신되면
  socket.on('chat', function(data) {
    console.log('Message : ', data);
    socket.to(socket.chatroom).emit('chat',data)
    chatModel.update({_id:mongoose.Types.ObjectId(socket.chatroom)} , {
        $push: {
                    chat: data
        }
    })
    .catch((err)=>{
        console.log(err)
    })
    // 메시지를 전송한 클라이언트를 제외한 룸 안의 클라이언트에게 메세지 전송
    // 메시지를 전송한 클라이언트에게만 메시지를 전송한다
    // socket.emit('s2c chat', msg);

    // 접속된 모든 클라이언트에게 메시지를 전송한다
    // io.emit('s2c chat', msg);

    // 특정 클라이언트에게만 메시지를 전송한다
    // io.to(id).emit('s2c chat', data);
  });

  // force client disconnect from server
  socket.on('forceDisconnect', function() {
    socket.disconnect();
  })

  socket.on('disconnect', function() {
    console.log('user disconnected: ' + socket.name);
  });
});


