/*11. Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc.
*/


function ConcatenatesStringNumber(string, number) {
    var result= ""
    for (i = 0; i < number; i++) {
        result += string ;
        
    }
    return result;
    
}


console.log(ConcatenatesStringNumber("mim", 3));