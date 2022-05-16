const fs = require('fs')
const path = require('path')
// \s空白 \S非空白字符
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/
fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, dataStr) => {
    if (err) {
        return console.log('读取失败' + err.message);
    }
    console.log('读取成功');
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHtml(dataStr)
})

function resolveCSS(htmlStr) {
    const r1 = regStyle.exec(htmlStr); //exec检索出正则的内容，为数组，数组为0就是检索的内容
    const css = r1[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, './clock/index.css'), css, err => {
        if (err) {
            return console.log('写入失败' + err.message);
        }
        console.log('写入成功');
    })
}
function resolveJS(htmlStr) {
    const r2 = regScript.exec(htmlStr); //exec检索出正则的内容，为数组，数组为0就是检索的内容
    const js = r2[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, './clock/index.js'), js, err => {
        if (err) {
            return console.log('写入失败' + err.message);
        }
        console.log('写入成功');
    })
}
function resolveHtml(htmlStr) {
    const js = htmlStr.replace(regStyle, '<link rel="stylesheet" href="index.css">').replace(regScript, '<script src="index.js"></script>')
    fs.writeFile(path.join(__dirname, './clock/index.html'), js, err => {
        if (err) {
            return console.log('写入失败' + err.message);
        }
        console.log('写入成功');
    })
}