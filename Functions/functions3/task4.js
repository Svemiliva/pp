/*
4.	Write a function that reverses a number. The result must be a number.

12345 -> 54321 // Output must be a number

*/

function reverseNumber(number) {
    var result = 0;
    while (number != 0) {
        result *= 10;
        result += number % 10;
        number -= number % 10;
        number /= 10;
    }
    return result;
}
console.log(reverseNumber(12345));