//1导入mysql模块
const mysql = require('mysql')
//2建立与MYSQL数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1', //数据库ip地址
    user: 'root', //登录数据库的账号
    password: 'admin123',//登录数据库的密码
    database: 'my_db_1'//指定操作哪个数据库
})

// //测试mysql模块能否正常工作
// db.query('select 1', (err, results) => {
//     //报错
//     if (err) return console.log(err.message);
//     //成功执行SQL语句
//     console.log(results);
// })


// //查询
// const str = 'select * from users'
// db.query(str, (err, results) => {
//     //查询数据失败
//     if (err) return console.log(err.message);
//     //查询数据成功，结果是数组 ->results
//     console.log(results);
// })

// //插入数据
// const users = { name: 'liu', pwd: '999' }
// const str1 = 'insert into users (username,password) values (?,?)' //?占位符
// db.query(str1, [users.name, users.pwd], (err, results) => {
//     if (err) return console.log(err.message);
//     //插入语句 insert into , results是一个对象 
//     //可以通过affectRows属性，来判断插入数据成功，影响的条数
//     if (results.affectRow === 1) {
//         console.log('插入成功')
//     }
// })

// //插入数据，一一对应
// const users = { username: 'liu11', password: '99900' }
// const str1 = 'insert into users set ?' //?占位符
// db.query(str1, users, (err, results) => {
//     if (err) return console.log(err.message);
//     //插入语句 insert into , results是一个对象 
//     //可以通过affectRows属性，来判断插入数据成功，影响的条数
//     if (results.affectRow === 1) {
//         console.log('插入成功')
//     }
// })

// //更新数据
// const users = { id: 12, username: 'zon1g', password: '888' }
// const str2 = 'update users set username=?,password=? where id=?' //?占位符
// db.query(str2, [users.username, users.password, users.id], (err, results) => {
//     if (err) return console.log(err.message);
//     //可以通过affectRows属性，影响的条数
//     if (results.affectRow === 1) {
//         console.log('更新成功')
//     }
// })


//更新数据  简便方法，一一对应
const users = { id: 12, username: 'zon1g', password: '985632' }
const str2 = 'update users set ? where id=?' //?占位符
db.query(str2, [users.username, users.password, users.id], (err, results) => {
    if (err) return console.log(err.message);
    //可以通过affectRows属性，影响的条数
    if (results.affectRow === 1) {
        console.log('更新成功')
    }
})