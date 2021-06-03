/*
8.	Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"

*/

function findWordInString(string, word) {
    var count = 0;
    var count2 = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] == word[0]) {
            for (j = i; j < i + word.length; j++) {
                if (string[j] == word[j - i]) {
                    count2++;
                } if (count2 == word.length) {
                    count++;
                }
            } count2 = 0;
        }
    } return word + " was found " + count + " times.";
}
console.log(findWordInString('The quick brown fox', 'fox'));
console.log(findWordInString('aa bb cc dd aa', 'aa'));