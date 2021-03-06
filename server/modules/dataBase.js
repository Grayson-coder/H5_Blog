const mysql = require('mysql')
const bcrypt = require('bcryptjs')

const { timeFommater } = require('./tool')

// MySQL 连接配置项
const options = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'zhen_Blog',
    prot: 3306
}

// 创建连接对象
const db = mysql.createConnection(options)

// 连接数据库
db.connect(err => {
    if (err) {
        return console.log('连接数据库失败')
    }
    console.log('连接数据库成功 Success Connet MySQL')
})


// 初始化数据库数据
async function init() {
    let salt = await bcrypt.genSalt(10)
    // 进行加密后的密码，用于存放到数据库中
    let pass = await bcrypt.hash('123456', salt)

    // 添加用户数据
    // let sql = `insert into user(id, account, password) value(1, "admin", "${pass}")`
    // 添加文章数据
    let time = timeFommater(Date.now())
    // let sql = `insert into article(id, user_id, title, content, create_time) value(7, 1, "邂逅Node", "Node是一个运行JS的环境", "${time}")`


    // 根据用户名和密码查找指定行数据
    // let sql = 'select * from user where account="admin" and password=123456'
    // 查找数据文章数据
    // let sql = 'select * from article'

    // 根据文章id删除数据
    // let sql = `delete from article where id = 4`

    // 修改行数据
    // let sql = `update article set title="吴彦祖", content="大家好我叫吴彦祖" where id=1`

    // 查询字段包含某个字符的所有记录
    // select * from users where tags like '%ios%';    
    // let sql = `select * from article where content like '%测试%';`

    // 运行SQL语句操作MySQL
    sqlQuery(sql).then(res => console.log(res)).catch(err => console.log(err))
}
// init()  



/**
 * 封装运行SQL语句的函数，操作数据库
 * @param {str} sql 
 */
function sqlQuery(sql) {
    return new Promise((resolve, reject) => {
        db.query(sql, (err, res) => {
            if (!err) {
                resolve(res)
            } else {
                console.log('操作数据库失败')
                reject(err.message)
            }
        })
    })
}

module.exports = {
    sqlQuery
}