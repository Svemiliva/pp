/* 4.	Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2

*/

var array = [4, 2, 2, -1, 6];

function secondSmallest(array) {
    var min = 0;
    var second =0;
    
    for (i = 0; i < array.length; i++) {
        if (array[i] < array[min]) {
            min = i;
            
        }for (j = 0; j < array.length; j++) {
            if (array[j] < array[second] && array[j] > array[min])
                second = j;
            
        }
    } return array[second];
}

console.log(secondSmallest([4, 2, 2, -1, 6]));
