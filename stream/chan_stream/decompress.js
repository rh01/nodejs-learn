var fs = require('fs')
var zlib = require('zlib')

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip()) // create gzip stream/buffer
  .pipe(fs.createWriteStream('input.txt')); // write to file
  
console.log("文件decomppose完成。");