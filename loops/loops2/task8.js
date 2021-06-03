/*8.	Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

var arrayx= [4, 5, 6, 2];
var arrayy= [3, 8, 11, 9];
var newarray= [];

for (i = 0; i < arrayx.length; i++) {
    newarray= arrayx + ","+ arrayy;
    
}
console.log (newarray)

