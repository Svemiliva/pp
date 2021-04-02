/*8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3*/


function appearances(array, element) {
    result= 0;
    for (i = 0; i < array.length; i++) {
        if ( element === array [i] )
      result++ ;
     
    }
       return result
}

console.log(appearances ([2, 4, 7, 8, 7, 7, 1] , 7 ) )