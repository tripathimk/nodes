var fs =require('fs');
var readableStream =fs.createReadStream('input.txt');
var writeStream =fs.createWriteStream('output.txt');
readableStream.pipe(writeStream);