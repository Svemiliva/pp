/*Write a conditional statement to find the sign of product of three numbers. Display the
result in the console with the specified sign.
Sample numbers: 3, -7, 2
Output: The sign is - */

var x = 3;
var y = -7;
var z = 2;

if (x > 0 && y > 0 && z > 0) {
    alert("The sign is +");
}
else if (x < 0 && y < 0 && z > 0) {              //ok
    console.log("The sign is +");
}
else if (x > 0 && y < 0 && z < 0) {
    console.log("The sign is +");
}
else if (x < 0 && y > 0 && z < 0) {
    console.log("The sign is +");
}
else {
    console.log("The sign is -");
}
//ili
var a = 3;
var b = -7;
var c  = 2;

if (a*b*c>0) {
    console.log("The sign is +")
}else {
    console.log("The sign is -");
}



/*Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the
console.
Sample numbers: -5, -2, -6, 0, -1
Output: 0*/

var m=-5
var n=-2
var l=-6
var o=0
var p=-1

if (m>n && m>l && m>o && m>p) {                                         //ok
    console.log (m)
} else if (n>m && n>l && n> o && n> p) {
    console.log (n)
} else if (l>m && l> n && l> o && l>p) {
    console.log (l)
} else if (o>m && o> n && o> l && o>p) {
    console.log (o)
} else
    console.log (p)
/* var max=a
if (b> max) {
    max+b
}
if (c>max) {
    max=c...
*/

// ne moras kada propadne prvi uslov da opet proveravas za sve!


/*Task 3. Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4
Output : 4, 0, -1 */

var s=0
var c= -1
var x= 4
if (s>c && s>x ) { 
    if (c>s) {
        console.log (s, c, x)
    }  else  {
        console.log (s, x, c)                               //nije ok
    
}
else if (s>c && x>c) {
    console.log (s,x,c)
} 
else if (c>s && s>x) {
    console.log (c,s,x)
} 
else if (c>x && x>s) {
    console.log (c,x,s)
} 
else if (x>s && s>c) {
    console.log (x,s,c)
} 
else (x>s && c>s) 
    console.log (x,c,s)

    
 
//dodaj treci uslov!

   





/*Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is
divisible by 2. If it is, print the result, if not, show “X”.
Sample input: 10 Sample input: 7
Output: 10 / 2 = 5 Output: X */

var f= 10
var output
if (typeof (f) == 'number' ) {
    
} else if (f%2===0) {
    console.log (output)
} else {
    console.log (x)
}                                                          //nisam

var f= 10
var output
typeof (f)
console.log (typeof f)


if (typeof (f) == 'number' ) {
    
} else if (f%2===0) {
    console.log (output)
} else {
    console.log (x)
}                    

var result
if ( typeof f= true && f % 2= 0) {
    console.log (result)
}


/*Task 5. Write a program that compares two numbers and displays the larger. Display the result in
the console.*/

var a = 5
var b = 15
var massage
if (a > b) {
    massage = a + " Is larger"                                        //ok
} else if (b > a) {
    massage = b + " Is larger"
} else if (a === b) {
    massage = b + " Is equal " + a
}
console.log(massage)

/*Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Sample Input: 60°C
Output : 60°C is 140 °F*/

var C = 60
var CtoF = (9* C/5) + 32

var massage= C + '°C' + ' is ' + CtoF +'°F'          //ok

 
console.log(massage )
    


/*Task 7. Write a JavaScript program to get the difference between a given number and 13, if
the number is greater than 13 return double difference between that number and 13.
Sample Input: 11 Sample Input: 32
Output : 2 Output : 38

Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
values are same, then returns triple their sum.
Sample Input: 12,5 Sample Input: 8,8
Output : 17 Output : 48
Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50.
Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10

Output : - Output : true Output : true

Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
and print range in which number belongs.
Sample Input: 13 Sample Input: 34 Sample Input: 256
Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400*/