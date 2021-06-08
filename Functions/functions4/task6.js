/*
6.	Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
    Output: The array isn’t symmetric.
*/
var array;
function isSimetric(array) {

    result = "";
    for (i = 0, j = (array.length - 1); i < j; i++, j--) {
        if (array[i] === array[j]) {
            result = "The array is symmetric"
        } else
            result = "The array isn’ t symmetric"
    }
    return result
}

console.log(isSimetric([2, 4, -2, 7, -2, 4, 2]))
console.log(isSimetric([3, 4, 12, 8, 8]))

