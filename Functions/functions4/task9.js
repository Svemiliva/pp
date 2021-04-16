/*
9.	Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/

function delGivenElement(array, element) {
    result= [];

    for (let index = 0; index < array.length; index++) {
        if (element !== array[index]) {
            result[result.length]= array[index]
        }
        
    }
    return result
}
console.log(delGivenElement([4, 6, 2, 8, 2, 2], 2));