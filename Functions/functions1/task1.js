/*
1. Write a function that converts an array of strings into an array of numbers. Filter
out all non-numeric values.
Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]

*/

function Convert(a) {
   var output = []
   for (i = 0, j=0; i < a.length; i++) {
     var x = parseFloat(a[i], 10)
     if (isFinite(x)) {
      output[j++]=x}
     }
   
   return output
}
var a= ["1", "21", undefined, "42", "1e+3", Infinity]


console.log(Convert(a))








