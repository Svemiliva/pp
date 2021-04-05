/*
3.	Write a function that concatenates a given string n times (default is 1).
	"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"

*/
function concstring(string, count) {
    var string;
    var count;
    var array;

if (count==1) {
    return string
} 
else {
    for (i = 1; i <= count; i *= 2) {
        if ((count & i) === i) {
            array += string;
        }
        string+= string;
    }
        return array
    
   
    } }
    console.log(concstring("Ha", 5));

    //ne radi!