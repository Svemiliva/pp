/*
2. Write a program to join all elements of the array into a string skipping elements
that are undefined, null, NaN or Infinity.
Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
	Output: “015false-2247”

*/
function Convert(a) {
	var output = ""
	for (i = 0; i < a.length; i++) {
		var x = a[i]
	  if (!(isNaN(x) || !isFinite(x) || (x == null))) {
	   output+=x
	}
	  }
	
	return output
 }
 var a=   [NaN, 0, 15, false, -22, '', undefined, 47, null]
 var b= [false]
 console.log(Convert(a))