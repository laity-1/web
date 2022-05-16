const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();
server.on('request', (req, res) => {
    //获取客户端请求的URL地址
    const url = req.url;
    //把请求的URL地址映射为具体文件的存放路径
    // const fpa = path.join(__dirname, url);
    let fpa = '';
    if (url === '/') {
        fpa = path.join(__dirname, './clock/index.html')
    } else {
        fpa = path.join(__dirname, './clock', url)
    }
    fs.readFile(fpa, 'utf8', (err, dataStr) => {
        if (err) {
            return res.end('404 not found')
        }
        res.end(dataStr)
    })
})
server.listen(8080, () => {
    console.log('server running at http://127.0.0.1:8080');
})