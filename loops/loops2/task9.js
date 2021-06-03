/*9.	Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]

*/

var e=2;
var a= [4, 6, 2, 8, 2, 2];

for (i = 0; i < a.length; i++) {
    if (a[i]===e) {
        delete a[i]
    };
    
}console.log (a)