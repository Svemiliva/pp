/*
3. Write a program to filter out falsy values from the array.
Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]

*/

function FilterFalsy(array) {
   
    var newarray= []
    for (var i = 0, j=0; i < array.length; i++) {
        var x = parseInt(array[i])
        if (!isNaN(x) && (x != 0)) {
            newarray[j++]=array[i]
        }
    }
    return newarray;
}

console.log(FilterFalsy ([NaN, 0, 15, false, -22, '', undefined, 47, null]));
  
