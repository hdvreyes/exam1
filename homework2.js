#!/usr/bin/env node
var fs = require('fs');

var chkForPrime = function(n){
	if(n < 2){ return false; }
	for(var p = 2; p < n; p++){
		if(n%p == 0){
			return false;
		}			
	}
	return n;
};

var loopNum = function(){
	var arr = [];
	for(var i = 1; i < 8; i++){
		if(chkForPrime(i))
		{
			arr.push(chkForPrime(i));
		}
	}
	return arr;
};

var fmt = function(arr){
	return arr.join(", ");
}

var outfile = "homework2.txt";
fs.writeFileSync(outfile, fmt(loopNum()));
console.log(fmt(loopNum()));

