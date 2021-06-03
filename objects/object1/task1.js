/*
1.	Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]


var a= [2, 4, 7, 11, -2, 1];
var b=[];

for(var i = 0; i< a.length;++i){
  b.push(a[i]);
  b.push(a[i]);
}

a=b;
console.log(a);
*/

function duplicate (a) {
    var b=[];
for(var i = 0; i< a.length;++i){
  b.push(a[i],a[i]);
 

}

return b
}

var a= [2, 4, 7, 11, -2, 1];
console.log(duplicate(a));

