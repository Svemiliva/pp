/* 5.	Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]
*/

function lastElement(array, n) {
    var result= [];
    n= n || 1;
    for (i=array.length-n; i< array.length; i++) {
        result[result.length] = array[i];
        
    } return result
    
}
console.log(lastElement([7, 9, 0, -2]));
console.log(lastElement([7, 9, 0, -2], 2));



