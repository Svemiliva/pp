/* 
7.	Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade. 
	
David	80
Marko	77
Dany	88
John	95
Thomas	68

The grades are computed as follows :

< 60%	F
< 70%	D
< 80%	C...
*/


var marks = [['David', 80], ['Marko', 77], ['Dany', 88], ['John', 95], ['Thomas', 68]];

var avgmarks = 0;
var avg=0;

for (var i=0; i < marks.length; i++) {
        avgmarks += marks[i][1];
        var avg = (avgmarks/marks.length);
}

console.log("Average grade: " + (avgmarks)/marks.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}



