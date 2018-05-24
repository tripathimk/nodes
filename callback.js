function request()
{
	console.log("First Request to get Data from DB");
}
request();
setTimeout(request,2000);
console.log("Print Data");
module.exports.request=request;
