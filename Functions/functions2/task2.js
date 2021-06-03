/*
2.	Write a function to check whether a string is blank or not.

"My random string" -> false
" " -> true
12 -> false
false -> false

*/


var a= "false" ;
var result;

function isBlank(a) {
    

    if ( a == " ") {
        result= true;
    } 
    else {
        result = false;
    }

return result
}

console.log(isBlank(a))