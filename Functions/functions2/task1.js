/*
1.	Write a function to check whether the `input` is a string or not.

"My random string" -> true
12 -> false
*/


var a= "12";
var result;

function isString(a) {
    

    if (typeof (a) == 'string') {
        result= true;
    } 
    else {
        result = false;
    }

return result
}

console.log(isString(a))





