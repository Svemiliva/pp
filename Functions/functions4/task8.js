/*
8.	Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];

function concatenateArrays (array1, array2) {
    
    for (var i = 0; i < array2.length; i++) {
        array1[array1.length] = array2[i];
    }
    return array1;
}
console.log(concatenateArrays(a, b))