const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express()

// 解决跨域
app.use(cors())

// 解决json格式的请求参数
app.use(bodyParser.json())

// 配置body-parser模块 解析urlencoded格式的请求参数
app.use(bodyParser.urlencoded());


// --------------- 登录、注册的接口 ---------------

// 登录的接口
app.post('/blog/login', require('./route/login'))

// 注册用户的接口
app.post('/blog/register', require('./route/register'))


// --------------- 文章增删该查的接口 ---------------

// 获取文章的接口
app.get('/blog/home', require('./route/home'))

// 删除文章的接口
app.delete('/blog/article/:id', require('./route/deleteArticle'))

// 新增文章的接口
app.post('/blog/article', require('./route/addArticle'))
 
// 根据文章id查询文章数据的接口
app.get('/blog/article/:id', require('./route/findArticle'))

// 编辑文章的接口
app.put('/blog/article/:id', require('./route/editArticle'))

// 根据关键字查找文章的接口
app.post('/blog/article/key', require('./route/keyFindArticle'))

// 测试的接口
app.get('/blog/test', (req, res) => {
    console.log('来到了测试中间件');
    console.log(req.query);
    res.send({
        meta: { errMsg: '测试错误', status: 401 }
    })
})

app.post('/blog/test', (req, res) => {
    console.log('来到了测试中间件', req.body);
    res.send({
        meta: { errMsg: '测试错误', status: 401 }
    })
})  

// 错误处理中间件
app.use((err, req, res, next) => {
    // console.log('来到了错误处理中间件');
    res.status(200).send({
        meta: { errMsg: err, status: 401 }
    })
})





app.listen(5050, () => console.log('服务器开启成功，端口为5050'))