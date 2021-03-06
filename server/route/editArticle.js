const { sqlQuery } = require('../modules/dataBase')

module.exports = async (req, res, next) => {
    let id = req.params.id
    let { title, content } = req.body
    // 根据文章id修改数据的SQL语句
    let sql = `update article set title="${title}", content="${content}" where id=${id}`
    // console.log(sql);
    sqlQuery(sql).then(data => {
        res.send(
            {
                data: {
                    id,
                    title,
                    content
                },
                meta: { msg: '编辑文章成功！', status: 200 }
            }
        )
    }).catch(err => {
        console.log(err);
        next('编辑文章失败！')
    })
}