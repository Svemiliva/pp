/*1.	Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] 
*/

var isOdd = ( function (array) {
  
    for (i= 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
          console.log(array[i]);
        }
        
    }


}) ([2, 8, 11, 4, 9, 3, 15, 88, 99])