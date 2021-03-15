/*Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
    ”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!*/

var a = 2
var b = 3
var operation = "+"
switch (operation) {
    case "+":
        console.log(a + b)


    case "-":
        console.log(a - b)

    case "*":
        console.log(a * b)

    case "/":
        console.log(a / b)
        break;
    default:
        console.log("nothing")
        break; //Watch out for division by zero! ne znam
}