/*
5. Write a program that calculates a number of float values in the array.
Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2

*/

function NumOfFloat(array) {
    var count=0;
    for (var i = 0; i < array.length; i++) {
      var y = parseFloat (array[i], 10) //23.1
      var x = parseInt (array[i], 10) //23
      if (!isNaN(x) && x != y) {
        count++
      }
    }
    return count
}

console.log(NumOfFloat([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]))