var i;
var fib = [];
var sum =0;

fib[0] = 0;
fib[1] = 1;
var currentFib=0;
for(i=2; currentFib<4000000; i++)
{
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i-2] + fib[i-1];
    currentFib = fib[i];
    if(fib[i] % 2 == 0)
	 {
		 sum =  sum+fib[i];
	 }
    console.log(fib[i]);
    
}
console.log(sum);