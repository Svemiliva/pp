/*
5.	Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/


function sumOfPositive(array) {
    var array;
    var sum=0;

    for (var index = 0; index < array.length; index++) {
        if (array[index]>0) {
            sum+= array[index];
            
        }
        
    }
    return sum
}

console.log(sumOfPositive( [3, 11, -5, -3, 2]));