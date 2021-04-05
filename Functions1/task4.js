/*
4. Write a program that calculates a number of integer values in the array.
Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3

*/

function NumOfInt(array) {
    var count=0;
    for (var i = 0; i < array.length; i++) {
      var y = parseFloat (array[i], 10) //23.1
      var x = parseInt (array[i], 10) //23
      if (!isNaN(x) && x == y) {
        count++
      }
    }
    return count
}

console.log(NumOfInt ([NaN, 23.1, 15, false, -22.5, '', 4, 7, null] ));
