/*
3.	Write a program to filter out falsy values from the array.

[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]
*/

function isfalse(array) {
    var output= "";
    for (i = 0; i < array.length; i++) {
        var x= a[i]
        if (x) {
            output+=x
            
        }
        
    }
    return output
}
var a= [NaN, 0, 15, false, -22, '', undefined, 47, null]
console.log(isfalse (a));