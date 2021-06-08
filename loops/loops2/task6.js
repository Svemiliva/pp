/*6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.*/


var arr = [1, 3, 4, 7, 4, 3, 1];

var result = true;

for (var start = 0, end = arr.length - 1; start < end; start++, end--) {
    if (arr[start] !== arr[end]) {
        result = false;
    }
}

result ? console.log('Array is symetric') : console.log('Array is not symetric');
