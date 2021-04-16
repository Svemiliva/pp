/*10.	Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/
var a = [2, -2, 33, 12, 5, 8];
var e = 78;
var p = 3;
function insert(array, element, position) {
    var newArr= [];
    if (position > array.length) {
        console.log("error")
    } 
    
    for (i = 0; i < array.length; i++) {
        if (position===i) {
            newArr[newArr.length] = element;
            newArr[newArr.length] = array[i];
            
        }
        else {
            newArr[newArr.length] = array[i];
        }}
        return newArr
    
        }
    
    

        console.log(insert(a, e, p));