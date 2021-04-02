/*3. Write a program that checks if a given number is a three digit long number.*/

function ThreeDigit(number) {
    if (number < 1000 && number > 99)
    {
        return " Yes"
    }
    else{
        return "No"
    }
}

console.log(ThreeDigit (1000));