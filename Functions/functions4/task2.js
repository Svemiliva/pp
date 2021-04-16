/*
2.	Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/

function multiplies(array) {

    var result = [];

    for (index = 0; index < array.length; index++) {

        if (array[index] > 0) {
            result[index] = + array[index] * 2;

        } else {
            result[index] = + array[index];
        }

    }
    return result;
}

var array= [-3, 11, 5, 3.4, -8]

console.log( multiplies(array));