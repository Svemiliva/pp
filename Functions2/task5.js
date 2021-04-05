/*
5.	Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1.
*/

function firstOccurrence(string, character) {
    var position =0;
    for (i= 0; i < string.length; i++) {
        if (character=== string[i]) {
            position= i;
            
       
        } 
        
        
    }
    return position
}
var string= "milena"
var character= "l"
console.log(firstOccurrence(string, character));