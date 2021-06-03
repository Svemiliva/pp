/*
1.	Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

, "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"
*/

function insertString(string, addString, position) {
    position= position || 1;
    var newString= " ";

    for (var i = 0; i < string.length; i++) {
        if (i === position) {
        newString+= addString;
    }
    newString+= string[i];
}
   return newString;
}

console.log(insertString("My random string", "JS ", 5));
