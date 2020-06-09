const morgan=require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const redisInit = require('./utils/redis-init')
const userRoutes = require('./routes/user');
const beatRoutes = require('./routes/beat');
const playlistRoutes = require('./routes/playlist')
const chatRoutes = require('./routes/chat')
const app = express();
const mongoose = require('mongoose');
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
try{
  redisInit()
}
catch(err){
  throw(err,"redis-init-setting-error")
}
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use('/api/user', userRoutes);
app.use('/api/beat', beatRoutes);
app.use('/api/playlist',playlistRoutes);
app.use('/api/chat',chatRoutes);

app.use((error, req, res, next) => {
  console.log(error)
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});


mongoose.connect(process.env.NOSQL_URL, {useNewUrlParser: true, useUnifiedTopology: true , poolSize : 10});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongoose - is connected");
  app.listen(8081, function() {
    console.log('node.js server listening on port 8081');
  });
});