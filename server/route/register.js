const { sqlQuery } = require('../modules/dataBase')
// 引入加密的第三方包
const bcrypt = require('bcryptjs')

module.exports = async (req, res, next) => {
    console.log('来到了注册中间件');
    let { userName, password } = req.body
    // 1. 从数据库查询用户数据
    let findSQL = `select * from user`
    let findResult = await sqlQuery(findSQL)
    // console.log(findResult);
    // 2. 判断注册的用户名是否已经存在
    let isExist = findResult.some(item => item.account === userName)
    if (isExist) return next('用户名已存在，请尝试其他的用户名')
    // 3. 如果不存在用户名，则将用户名和加密后的密码写入到数据库中
    let id = findResult.legth === 0 ? 1 : findResult[findResult.length - 1].id + 1
    // console.log(id);
    // 密码加密
    let salt = await bcrypt.genSalt(10)
    let pass = await bcrypt.hash(password, salt)
    // 4. 新增用户的SQL语句
    let insertSQL = `insert into user(id, account, password) value(${id}, "${userName}", "${pass}")`
    // 执行SQL语句
    sqlQuery(insertSQL).then(insertResult => {
        res.send(
            {
                data: {
                    id,
                    userName,
                    pass
                },
                meta: { msg: '注册成功!', status: 200 }
            }
        )
    }).catch(err => {
        console.log(err)
        next('用户注册失败！')
    })
}

