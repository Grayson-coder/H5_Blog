const { sqlQuery } = require('../modules/dataBase')
const { timeFommater } = require('../modules/tool')

module.exports = async (req, res, next) => {
    // 获取文章标题和内容
    let { title, content } = req.body 
    // 获取当前时间
    let time = timeFommater(Date.now())
    let findSQL = `select * from article`
    let data = await sqlQuery(findSQL)
    // 截取最后一个文章的id + 1 作为当前新增的文章id
    let id = data.length === 0 ? 1 : data[data.length - 1].id + 1
    console.log(id);
    // 新增文章的SQL语句
    let addSQL = `insert into article (id, user_id, title, content, create_time) value (${id}, 1, "${title}", "${content}", "${time}")`
    sqlQuery(addSQL).then(data => {
        res.send(
            {
                data: {
                    id,
                    user_id: 1,
                    title,
                    content,
                    time
                },
                meta: { msg: '新增文章成功!', status: 200 }
            }
        )
    }).catch(err => {
        console.log(err);
        next('新增文章失败!')
    })
}