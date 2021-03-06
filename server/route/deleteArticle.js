const { sqlQuery } = require('../modules/dataBase')

module.exports = (req, res, next) => {
    let id = req.params.id
    // 根据文章id删除数据库数据
    let sql = `delete from article where id = ${id}`
    sqlQuery(sql).then(data => {
        res.send(
            {
                data: null,
                meta: { msg: '删除成功', status: 200 }
            }
        )
    }).catch(err => next('删除文章失败！'))
}