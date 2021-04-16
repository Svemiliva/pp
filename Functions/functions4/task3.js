/*
3.	Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/
var array = [4, 2, 2, -1, 6];

function minimumAndItsIndex(array) {
    var minIndex = 0;
    var result = "";
    for (i = 0; i < array.length; i++) {
        if (array[i] <= array[minIndex]) {
            minIndex = i;
            result = "Minimum is " + array[minIndex] + " and its index is " + minIndex + " .";
        }
    } return result;
}

console.log(minimumAndItsIndex([4, 2, 2, -1, 6]));
