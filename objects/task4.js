/*
Write a function that creates an object that represents a culinary recipe. Each recipe is
described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
preparing time, preparing instruction.
○ Add a method that prints out all the ingredients necessary for the meal
preparation.
○ Add a method that checks if a meal can be prepared for 15 minutes.
○ Add a method that changes the type of cuisine to the given value.----------------
○ Add a method that delete a given ingredient from the list of ingredients.*/

function recipe(name, typeCuisine, complexity, listOfIngredients, time, preparingInstruction) {
 
    var r= {
        name: name,
        cuisine: typeCuisine,
        preparingTime: time,
        listOfIngredients: listOfIngredients,
        preparingInstruction: preparingInstruction,
        complexity: function () {
            if (complexity>=1 && complexity<=5) {
                return complexity
            }
        }
        printIngredients: function () {
            console.log(listOfIngredients);
            
        }
        preparing: function () {
            if (time<15) {
                return true;
                
            }return false;
        }
        delIngredients: function (ingredient) {
            var filterIng = listOfIngredients.filter(function (value) {
                return value!== ingredient
            })

            
        }
    }

}