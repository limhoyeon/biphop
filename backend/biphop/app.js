const path = require('path');
const morgan=require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const redisInit = require('./utils/redis-init')
const userRoutes = require('./routes/user');
const beatRoutes = require('./routes/beat');
const playlistRoutes = require('./routes/playlist')
const app = express();
const dotenv=require('dotenv')
if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: path.join(__dirname, '.env.aws') })
} else if (process.env.NODE_ENV === 'develop') {
  dotenv.config({ path: path.join(__dirname, '.env.local') })
} else {
  throw new Error('process.env.NODE_ENV를 설정하지 않았습니다!')
}

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
app.use('/api/playlist',playlistRoutes)
app.use((error, req, res, next) => {
  console.log(error)
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});
app.listen(8081);