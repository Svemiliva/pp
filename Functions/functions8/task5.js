/*
5.	Write a function that returns a function that calculates a decimal value of the given octal number. 
Input: 034
Output: 28
*/

var returnDecimalOfOctal= (function (number) {
    result =parseFloat (number, 8);
    return result
})(034)
console.log(returnDecimalOfOctal);