/*
1. Write a function that converts an array of strings into an array of numbers. Filter
out all non-numeric values.
Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]



function Convert(array) {
    

var array= ["1", "21", undefined, "42", "1e+3", ]
var output = []
for (i = 0; i < array.length; i++) {
    if (parseInt (array[i])=== true) {  
       output += array[i];
    
    }
   
}
return output
}
var array= ["1", "21", , "42", "1e+3", Infinity]
var array= ["1", "21", undefined, "42", "1e+3", Infinity]
console.log(Convert(array));
   var output
   for (i = 0; i < array.length; i++){
     if(array[i] = parseInt(array[i], 10))
   output += array[i]
   array=output

   } return output
*/

function Convert(a) {
   var output = []
   for (i = 0, j=0; i < a.length; i++) {
     var x = parseInt(a[i], 10)
     if (!isNaN(x)) {
      output[j++]=x}
     }
   
   return output
}
var a= ["1", "21", "42", "1e3", Infinity, undefined]


console.log(Convert(a))








