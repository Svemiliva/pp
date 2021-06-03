/*
a. Write a function that generates a random integer value between 5 and 20.
b. Write a function that generates a random integer value between 50 and 100.
c. Write a function which expects a number and a callback generator function and
returns an array of numbers produced by the generator function.
*/

function getRandom(min, max) {
     var result= Math.random() * (max - min) + min;
     
     return Math.round (result)
}

console.log(getRandom (5,20));
console.log(getRandom (50,100));

function generator(num, call) {
var array= [];
array[array.length]= num;



return array
    
}


