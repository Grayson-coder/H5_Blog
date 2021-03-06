const { sqlQuery } = require('../modules/dataBase')

module.exports = async (req, res) => {
    let id = req.params.id 
    // 根据id查询行数据的SQL语句
    let findSQL = `select * from article where id=${id}`
    let data = await sqlQuery(findSQL)
    res.send({
        data,
        meta: { msg: '查询成功', status: 200 }
    })
}