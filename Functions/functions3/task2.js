/*
2.	Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

[NaN, 0, 15, false, -22, '', undefined, 47, null]
*/
function Convert(a) {
	var output = ""
	for (i = 0; i < a.length; i++) {
		var x = a[i]
	  if ((isFinite(x) && (x !== null))) {
	   output+=x
	}
	  }
	
	return output
 }
 var a=   [NaN, 0, 15, false, -22, '', undefined, 47, null]
var output= Convert (a)
 console.log(output + "")
