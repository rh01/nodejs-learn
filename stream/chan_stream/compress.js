var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip()) // create gzip stream/buffer
  .pipe(fs.createWriteStream('input.txt.gz')); // write to file
  
console.log("文件压缩完成。");