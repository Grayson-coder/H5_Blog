const { sqlQuery } = require('../modules/dataBase')

module.exports = (req, res, next) => {
    let { key } = req.body
    // 查找contnet字段中包含关键字的所有数据
    let sql = `select * from article where content like "%${key}%";`
    // console.log(key, sql);
    sqlQuery(sql).then(data => {
        res.send({
            data,
            meta: { msg: '查询成功', status: 200 }
        })
    }).catch(err => {
        console.log(err)
        next('查询失败！')
    })
}