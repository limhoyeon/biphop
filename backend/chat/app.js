require('dotenv').config();
var app = require('express')();
var server = require('http').createServer(app);
// http server를 socket.io server로 upgrade한다요
var io = require('socket.io')(server);
var redis = require('socket.io-redis');
var chatModel=require("./model/chat");
var userModel=require("./model/user");
var clientMap={}
io.adapter(redis({ host: process.env.REDIS_HOST, port : process.env.REDIS_PORT , password:process.env.REDIS_PASSWORD }));

var mongoose = require('mongoose');
mongoose.connect(process.env.NOSQL_URL, {useNewUrlParser: true, useUnifiedTopology: true , poolSize : 10});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("is connected");
  server.listen(3000, function(data,err) {
    console.log(data)
    console.log(err)
    console.log('Socket IO server listening on port 3000');
  });
});

io.on('connection', function(socket) {  
  // 접속한 클라이언트의 정보가 수신되면
  // id를 저장함.
  socket.on('login', function(data) {
    socket.user_id = data.user_id;
    clientMap[socket.user_id]=socket.id;
    io.of('/').adapter.clients((err, clients) => {
      console.log(clients); // an array containing all connected socket ids
    });
  });
  //join event를 받으면 data를 반환
  socket.on('join', function(data) {
    socket.chatroom=data;
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

  //만약 새로운 방이 생기면, 클라이언트들에게 메시지 전송하기
  socket.on('roomMake',function(data){
    data=data.filter( (item)=> item !== socket.user_id )
    data.forEach((item,index)=>{
      socket.to(clientMap[item]).emit('roomMake',"hello im new room!!");
    })
  })
  // force client disconnect from server
  socket.on('forceDisconnect', function() {
    delete clientMap[socket.user_id];
    socket.disconnect();
  })

  socket.on('disconnect', function() {
    delete clientMap[socket.user_id];
    console.log('user disconnected: ' + socket.name);

  });
});


