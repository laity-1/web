const pkg = require('./packge-tool/index')

const dtStr = pkg.dateFormat(new Date())
console.log(dtStr);
console.log("-------");
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str = pkg.htmlEscape(htmlStr);

console.log(str);
console.log("-------");
const unstr = pkg.htmlUnEscape(str);
console.log(unstr);