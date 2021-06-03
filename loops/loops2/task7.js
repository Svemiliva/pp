/*7.	Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/


var a1= [4, 5, 6, 2]
var a2= [3, 8, 11, 9]
var array= []

for (i = 0, j=0; i < a1.length, j < a2.length; i++, j++) {
    
    console.log (a1[i], a2[j])
}


