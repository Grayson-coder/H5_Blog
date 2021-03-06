const { sqlQuery } = require('../modules/dataBase')


module.exports = async (req, res, next) => {
    console.log('来到了首页中间件');
    // console.log(req.body);
    // 1. 查找所有文章内容
    let sql = `select * from article`

    // 2. 执行SQL语句，查找到的文章内容返回给浏览器
    sqlQuery(sql).then(data => {
        res.send(
            {
                data: data,
                meta: { msg: '获取成功', status: 200 }
            }
        )
    }).catch(err => {
        next('没有权限，无法登录')
    })
}