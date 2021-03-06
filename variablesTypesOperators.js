
//Create several variables using different letter cases and beginning characters. Check if they still exist if you refer to them in different case - does case matter here? Try to declare a variable starting with number as the first character.//

var mama = 1

var $mama = 3

console.log($mama);

var x = 3
var y = 5
var z = x + y
console.log(z);
//tip broj, vrednost cifra//

var cena1 = 200
var cena2 = 400
var racun = cena1 + cena2
console.log(racun);

var cena1 = "200 din"
var cena2 = "400 din"
var racun = cena1 + cena2
console.log(racun);

// ovo nije number tip, string se "lepi"//



var name = "Milena"
console.log(name);
//string može sa obe vrste navodnika//


var person = 'sTRING'
console.log(person);

var automobil;    // ovo nije definisano! dobije se undefined, jer nema vrednost, dodeli mu js//
console.log(automobil);

var automobil = "spark"
console.log(automobil); // ovako sam mu dodelila vrednost//

var imeiprezime = "Milena" + "Štatkić"
console.log(imeiprezime)

var ime_i_prezime = "Milena" + " " + "Štatkić"
console.log(imeiprezime)

//Arithmetic operators
var x = "5" + 2 + 3 //prvo je string, pa ga zalepi kao ceo string//
console.log(x)

var x = 5 + 2 + 3
console.log(x)

var x = 2 + 3 + "5"  //ovde je prvo broj, pa sabere i doda zalepljeni string//
console.log(x)


//Arithmetic operators
var x = 1 // Play around in the console: add, subtract, multiply and divide some numbers. Use numbers stored in variables you created as well. Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3. Why do we get these results? //
var x = 1
var y = 2
var z = 3
var n = 3.14
console.log(x + y / x * z - n)
console.log(x - y)

//How many grams weight 1.2kg of bananas?//

var kg = 1000
var Bananas = 1.2 * 1000
console.log(Bananas + "grama")

//How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What about Tom who is being late half an hour? It is hard to be on time these days…//

var min = 60
var AnaLate = 5 * min
console.log(AnaLate)

var TomLate = 30 * min
console.log(TomLate)

//How many MB of additional memory we have if we buy a 4GB USB stick? How many news articles each in size 98KB can fit in it?//







//malo vezbam operators jer ne kontam dobro//

var a = 100
var b = 200
var c = a + b
console.log(c)

var a = 100
var b = 200
var c = a - b
console.log(c)

var a = 500
var b = 200

console.log(a % b)

var x = 100
x++
console.log(x)

var a = 5
++a;          // a becomes 6
a++;          // a becomes 7
--a;          // a becomes 6
a--;          // a becomes 5

x--
console.log(x)

var x = 5
var y = x ** 2   //duplo* dize na kvadrat!//
console.log(y)

var a = 98
var b = 658
var c = a + b * 3
console.log(c)

var a = 98
var b = 658
var c = (a + b) * 3
console.log(c)


//How many MB of additional memory we have if we buy a 4GB USB stick? How many news articles each in size 98KB can fit in it?//

var x = 1000
var usb = 4 * x
console.log(usb) // 4000MG



var usb = (4 * x) * 1000    //console.log( usb) ?? //kilobajti


var a = usb / 98
console.log(Math.floor(a)) // floor za zaokruzivanje

//Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?

var a = a
var b = 2
var result = a * b
console.log(a * b)





//Create the following variables: a variable containing your name,a variable containing your age,a variable describing if you have a cat or not.Each variable has to start with a different type of character. Print them all out in the console and check their types.//

var name =
  typeof name


console.log(name)

var $age = 34
typeof $age

console.log($age)


var cat = true
console.log(name, $age, cat)

console.log(typeof name, typeof $age, typeof cat)

/*Check which type are these values:
- “number”
- true
- null
- “false”
- 56*/


console.log(typeof 'number')
console.log(typeof true)
console.log(typeof null)
console.log(typeof 'false')
console.log(typeof 56)



/*Check how good you are at guessing the Boolean equivalent of different values using the
console. Do you remember how to check for a Boolean equivalent of a value?*/

typeof -Infinity
console.log(typeof -Infinity)
typeof Infinity
console.log(typeof Infinity)
typeof undefined


//Use the console to check the results you think should go in the following table:
var p = true
var q = true

console.log(p && q)
console.log(p && !q)
console.log(!p && q)
console.log(!p && !q)

console.log(p || q)
console.log(p || !q)
console.log(!p || q)
console.log(!p || !q)

/*14. If the variable age stores the information about user’s age, how we can check whether it
contains a correct value? Write expressions for checking:
● Is age negative value
● Is age greater than 120*/



  var age= 34

  var result 

if (age <0 ) {

result = ' is negative value';

} else if (age > 120) {

result = ' is greater than 120';


} else {

result = 'I give up';

}

console.log(result);
  
    
  
/*15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If
we store the current speed value in the variable speed. Write an expression which will check if
we are driving drive safely or not? (true if we are driving safe and false if not)*/

var speed = 70
var massage

if (speed >60 || speed <120) {

massage = 'safe ';

} 

console.log(massage);




