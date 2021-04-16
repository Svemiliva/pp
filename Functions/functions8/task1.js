/*
1.	Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
    Input array: [4, 5, 11, 9]
    Output array: [ 9, 5, 11, 4]

    */

    var replace = (function (array) {
        var newarray = [];
        for (var i = 0; i < array.length; i++) {
            if (i === 0) {
                newarray[newarray.length] = array[array.length - 1];
            } else if (i === array.length - 1) {
                newarray[newarray.length] = array[0];
            } else {
                newarray[newarray.length] = array[i];
            }
        } return newarray;
    })([4, 5, 11, 9]);
    
    console.log(replace);






