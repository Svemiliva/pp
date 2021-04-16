/*
7.	Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/


var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];

function intertwinesTwo (array, array2) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result[result.length] = array[i]; // result = [4] /// result[2] = [4, 3, 5]
        result[result.length] = array2[i]; // result[1] = [4, 3]
    }
    return result;
}
console.log(intertwinesTwo(a, b));