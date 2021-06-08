/*
1.	Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
*/

function switchMaxAndMin(array) {
    var newarray = [];
    var min = array[0];
    var max = array[0];

    for (i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i]
            var mini = i

        }

        if (max < array[i]) {
            max = array[i];
            var maxi = i
        }



    
    
        else {
        newarray[newarray.length] = array[i];
    }

    return newarray

}

console.log(switchMaxAndMin([3, 500, 12, 149, 53, 414, 1, 19]));