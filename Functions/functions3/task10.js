/*
10.	Write a program to find the most frequent item of an array.

[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

*/
function mostFreequent(array) {
    var result;
    var max = 0;
    var mostfreq = 0;

    for (i = 0; i < array.length; i++) {
        for (j = i; j < array.length; j++) {
            if (array[i] == array[j]) {
                max++;
            }
            if (mostfreq < max) {
                mostfreq = max;
                result = array[i];
            }
        } max = 0;
    } return result + " repeats " + mostfreq + " times."
}
console.log(mostFreequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));