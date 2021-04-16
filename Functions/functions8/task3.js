/*3.	Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
	Input: prograMming
	Output: progra**ing, 2
*/

var replaceM = (function (string) {
    var output = "";
    count = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] === "m" || string[i] === "M") {
            output += "*"; 
            count++;
        } else {
            output += string[i];
        }
    } return [output, count];

})("prograMming");





console.log(replaceM)