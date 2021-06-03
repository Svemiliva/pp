/*9. Write a program that calculates the sum of odd elements of a given array.*/

function CalSum(array) {
  var sum=0;
    for (i = 0; i < array.length; i++) {
    if (array[i] % 2===1){
        sum += array[i]
        }
    }
return sum
}

console.log(CalSum ([2,1,3,4,5,6]))