// Do the maths

/*for(
	var sum = 0, i = 1;
    i < 1000;
    !(i % 3 && i % 5) && (sum += i), i++
);
// Log the result
console.log(sum);
*/
//var i;
var sum =0;

for (var i = 0; i< 1000 ;i++)
{
	 if((i % 3 == 0) ||(i % 5 == 0))
	 {
		 sum += i;
	 }
	
}

console.log(sum);