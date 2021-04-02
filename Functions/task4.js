/*4. Write a program that calculates an arithmetic mean of four numbers.

function AritmeticMean(number1, number2, number3, number4) {
    result= (number1+number2+number3+number4)/4
     
        return  result
    
}

console.log(AritmeticMean(1,2,5,6));*/


function Mean(params) {
    var mean=0;
    for (i = 0; i < params.length; i++) {
        mean+= params[i];
        
    }
    return mean/params.length
}

var p= [2,5,9,4]

console.log(Mean(p));

