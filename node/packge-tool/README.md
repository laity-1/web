## 安装
```
npm install packge-tool
```

## 导入
```js
const pkg=require("packge-tool")
```

## 格式化时间
```js
//调用dateFormat对时间进行格式化
const dtStr = pkg.dateFormat(new Date())
//结果 2022-05-22 12:25:48
console.log(dtStr)

```

## 转义html特殊字符
```js
//带转换的HTML字符
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
//调用对应的方法
const str = pkg.htmlEscape(htmlStr);
//转换的结果 &lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(str)

```

## 还原HTML中的特殊字符
```js
//带还原的字符串
const unstr = pkg.htmlUnEscape(str);
//输出的结果<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>
console.log(unstr);
```

## 开源协议
ISC