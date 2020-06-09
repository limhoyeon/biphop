require('dotenv').config();
var app = require('express')();
var server = require('http').createServer(app);
// http server를 socket.io server로 upgrade한다
var io = require('socket.io')(server);
var redis = require('socket.io-redis');

io.adapter(redis({ host: process.env.REDIS_HOST, port : process.env.REDIS_PORT , password:process.env.REDIS_PASSWORD }));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/p-socket-client.html');
  });
// connection event handler
// connection이 수립되면 event handler function의 인자로 socket인 들어온다
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
    socket.emit('list',"hello im list!")
  })
  socket.on('join', function(data) {
    socket.join(data.chatroom);
    socket.chatroom=data.chatroom;
  });
  socket.on('leave',function(){
    socket.leave(socket.chatroom);
    socket.chatroom="";
  });
  // 클라이언트로부터의 메시지가 수신되면
  socket.on('chat', function(data) {
    console.log('Message from %s: %s', socket.user_id, data.msg);
    var msg = {
      from: {
        user_id: socket.user_id
      },
      msg: data.msg
    };
    // 메시지를 전송한 클라이언트를 제외한 모든 클라이언트에게 메시지를 전송한다
    socket.to(chatroom).emit('chat', msg);

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

server.listen(3000, function() {
  console.log('Socket IO server listening on port 3000');
});