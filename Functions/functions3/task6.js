/*
6.	Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null] 
*/
function specifiedNumber(n, element) {
    var n;
    var element= element|| null;
    var result= [];
    for (i = 0; i < n; i++) {
    result[i] = element;
    }
    return result
}

console.log(specifiedNumber (6));


