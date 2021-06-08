/*
1.	Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
*/

function isInArray(array, element) {
    var array;
    var element;
    result= "";
    for ( index = 0; index < array.length; index++) {
        if (element=== array[index]) {
            result= "yes"
            break;
        } else
        result= "no"
        
    }
    return result
}

console.log(isInArray([5, -4.2, 3, 7], 8));