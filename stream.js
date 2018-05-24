
var fs =require('fs');
function readData()
{
	
	var readableStream =fs.createReadStream('input.txt');
	var data ='';
	readableStream.setEncoding('UTF-8');
	readableStream.on('data',function(chunk){
		data +=chunk;
	});
	readableStream.on('end',function()
			{
		console.log(data);
			});
	}


var writeData = "Hello World";
var writeStream =fs.createWriteStream('output.txt');
writeStream.write(writeData,'UTF-8');
writeStream.end();
writeStream.on('finish',readData);