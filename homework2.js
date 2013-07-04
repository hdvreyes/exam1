#!/usr/bin/env node

var chkForPrime = function(n){

	if(n < 2){ return 0 };

	for(var p=2; p <= n; p++){
		if(n%p == 0)
		{
		   return 0;
		}
	}
	return 1;

}

var loopNum = function(){
	var i = 1;
	var arr = [];
	for(i=1; i < 10; i++){
		if(chkForPrime(i) == 1)
		{
			arr.push(chkForPrime(i));
		}
	}
	
}


var k = 6;
console.log(loopNum());

