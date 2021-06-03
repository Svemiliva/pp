/*
4.	Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2
*/

function numOfOccurrences(string, letter) {
    
    var count=0;

    for (i = 0; i < string.length; i++) {
        if (letter=== string[i]) 
            count++;
      }       
    return count   
   
} 
var string= "My random stringggggg";
var letter= "g";
console.log(numOfOccurrences(string, letter));