const model = require('./model')
const cookieParser = require('cookie-parser')
const bodyParser  = require('body-parser')
const express = require('express')
const userRouter = require('./user')

//新建app
const app = express()
const server = require('http').Server(app)

app.use(cookieParser())
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.use('/user',userRouter)

server.listen(9093,function(){
    console.log('start 9093');
    
})