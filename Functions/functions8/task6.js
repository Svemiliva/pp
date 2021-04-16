/*

6.	Write a function that checks if a given string is valid password. The password is valid if it is at least 6 characters long and contains at least one digit. The function should receive two callbacks named successCallback and errorCallback that should be called in case password is correct or invalid. 
Input: JSGuru 
Output: Your password is invalid!

	Input: JSGuru123
	Output: Your password is cool! 
*/
var isValidPass = (function (password) {
    var result= "Your password is cool";
    for (i = 0; i < password.length; i++) {
        if (password.length<=6 && isNaN(password[i]) ) {
            result= "Your password is invalid!"
        }
        return result
    }
}) ("JSGuru")
console.log(isValidPass)