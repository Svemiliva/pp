/*2.	Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] 


function delDupl(a) {
    var b=[];
    for (var i = 0; i < a.length; i++) {
        var index = a[i];
        if (a.indexOf(index)) {
        b[b.length]= index;
        }
      
    }
      return b
}
var a= [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
console.log(delDupl(a));*/

function removeDuplicates(array) {
    var emptyArray = [];
    for(var i = 0; i < array.length; i++) {
        var index = array[i];
        if(array.indexOf(index)) {
            emptyArray[emptyArray.length] = index;
        }
    }

    return emptyArray;
   

    // function compareNumbers(array, b) {
    //     return a - b;
    // }
}
var a= [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]

console.log(removeDuplicates(a.sort(function(a, b){return a-b})));
