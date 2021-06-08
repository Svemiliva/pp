/*
4.	Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
Input: pera peric
	Output: pera.peric@gmail.com
*/

var suggestsEmail = (function (name, surname) {
    result= name + "." + surname + "@gmail.com"
    return result
}) ("pera", "peric")

console.log(suggestsEmail);