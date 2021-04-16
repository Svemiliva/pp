/*2.	Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
Input: 4 5
Output: 20 
*/

var surfaceArea = (function (a,b) {
    var result= a*b;
    return result
}) (5,4);

console.log(surfaceArea);
