/*
6.	Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.
*/
function lastOccurrence(string, character) {
    var position=0;
 
    for (i = string.length; i>0; i--) {
        if (character=== string[i]) {
            position= i+1;

            break;
        } else {
          position = -1;
        } 
       
    }
    return position
} 
     
var string= "milenla"
var character= "l"
console.log(lastOccurrence(string, character));