//导入模块
const http = require('http')
//创建web服务器实例
const server = http.createServer();
//为服务器实例绑定request事件，监听客户端的请求
server.on('request', function (req, res) {
    // req是请求对象，包含了客户端相关的数据与属性
    //res 是响应对象，res.end()方法，向客户端响应一些内容
    const url = req.url //客户端请求的url地址
    const method = req.method //客户端其你去的method类型
    const str = `someone visit our web server url${url},method  ${method} 测试中文乱码问题`
    res.setHeader('Content-type', 'text/html; charset=utf-8') //解决中文乱码 设置内容的编码格式
    console.log(str);
    res.end(str);//res.end()方法，向客户端响应一些内容


})
//启动服务器
server.listen(8080, function () {
    console.log('server running at http://127.0.0.1:8080')
})
