const { sqlQuery } = require('../modules/dataBase')
const bcrypt = require('bcryptjs')


module.exports = (req, res, next) => {
    console.log('来到了登录中间件');
    console.log(req.body);
    // 1. 获取post请求携带的参数
    let { userName, password } = req.body
    // 2. 根据用户名查找数据库记录的SQL语句
    let sql = `select * from user where account="${userName}"`

    // 3. 执行SQL语句
    sqlQuery(sql).then(async data => {
        // 如果没有找到数据
        if (data.length === 0) return next('用户名或密码输入错误，请重新输入')
        // 1. 检验输入的密码是否和数据库中的暗文密码一致
        let isEqual = await bcrypt.compare(password, data[0].password);
        if (!isEqual) return next('用户名或密码输入错误，请重新输入')
        // 2. 响应数据以及状态码
        res.status(200).send(
            {
                data: data[0],
                meta: { msg: '登录成功', status: 200 }
            }
        )
    }).catch(err => {
        next('没有权限，无法登录')
    })
}
