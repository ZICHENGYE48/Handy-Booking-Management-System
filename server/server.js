const express = require('express');
const userRouter = require('./user')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
// 新建app
const app = express();

app.use(cookieParser())
app.use(bodyParser.json()) //解析post 传来的json数据
app.use('/user',userRouter)
app.listen(8001, () => {
    `server is running at port 8000 success~~~`
})