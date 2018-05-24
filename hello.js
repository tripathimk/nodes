var printStuff = function(stuff)
{
	console.log(stuff);
}

function printName(name)
{
	console.log(name);
}
printName("Manoj Tripathi");

function mainFunction(subfunction,value)
{
	subfunction(value);
	
}

mainFunction(printName,"Atharva");
mainFunction(printStuff,"Toys");

mainFunction(function(place)
{
	console.log(place);
},"Edinburgh");

console.log(__filename);
console.log(__dirname);
function printMyName()
{
	console.log("Manoj Kumar Tripathi");
}

setTimeout(printName,1000,"pass Param");

setTimeout(function(){printName("Another way to pass Param")},2000,);

setTimeout(printMyName,3000);

//setInterval(printMyName,2000);