/*
3.	Write a function that concatenates a given string n times (default is 1).
	"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"

*/
function concstring(string, num) {
   
    var array= "";



    for (i = 0; i < num; i ++) {
        
            array += string;
        }
       
    
        return array
    
   
    } 
    console.log(concstring("Ha",5));

  