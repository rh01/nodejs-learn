var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('input.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
// when data readable
readerStream.on('data', function(chunk) {
   data += chunk;
});

// when no data readable
readerStream.on('end',function(){
   console.log(data);console.log("程序执行完毕");
});

// when occures errors
readerStream.on('error', function(err){
   console.log(err.stack);
});

