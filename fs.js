var fs =require('fs');

fs.writeFile('mynotes.txt', 'Hello Node.js', 'utf8', (err) => {
	  if (err) throw err;
	  console.log('The file has been saved!');
	});

fs.readFile('input.txt',function(err,data){
	if(err)
		{
		console.log("Error Occured");
		}
	else
		{
		console.log("Async Data: "+data.toString());
		}
});
var data = fs.readFileSync('input.txt');
console.log("Sync Data: "+data.toString());