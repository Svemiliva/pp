/*3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3*/

var a = [4 , 2, 2, -1, 6]
var vr = 0;
var m = 0;
for(i =0; i< a.length; i ++){
    
    if(a[i] < vr){
      vr = a[i]; 
      m = i;
    }
    
}
console.log(vr + ',' + m )
