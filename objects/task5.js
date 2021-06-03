function Recipe(name, typeCuisine, complexity, listOfIngredients, time, preparingInstruction) {
 
   
        this.name= name;
        this.cuisine= typeCuisine;
        this.preparingTime= time;
        this.listOfIngredients= listOfIngredients;
        this.preparingInstruction= preparingInstruction;
        this.complexity= function () {
            if (complexity>=1 && complexity<=5) {
                return complexity
            }
        }
        this.printIngredients= function () {
            console.log(this.listOfIngredients);
            
        }
        this.preparing= function () {
            if (this.time<15) {
                return true;
                
            }return false;
        }
        this.delIngredients= function (ingredient) {
            var filterIng = listOfIngredients.filter(function (value) {
                return value!== ingredient
            })

            
        }
    }

var tiramisu= new Recipe (
    "name", 
    "typeCuisine", 
    2, 
    ["bla","bla", "bla"], 
    6, 
    "preparingInstruction",
);

console.log(tiramisu);

