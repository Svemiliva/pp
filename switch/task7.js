/*Write a program that takes as input a city name and outputs the country where the city is.
You may choose which cities and countries you want to output yourself, however there has
to be at least 5 countries and 15 cities. Note that each country must have a different
number of cities. Input different from the listed cities should output a message&quot;Please
choose a different city&quot;.*/

var city = "Kotor"

switch (city) {
    case "Belgrade":
    case "Novi Sad":
    case "Niš":
    case "Kruševac":
    case "Prizren":

        console.log("Serbia")

        break;

    case "Ljubljana":
    case "Maribor":
    case "Celje":
    case "Piran":
    case "Portorož":
    case "Velenje":

        console.log("Slovenia")
        break;

    case "Zagreb":
    case "Dubrovnik":
    case "Pula":
    case "Rovinj":

        console.log("Croatia")
        break;

    case "Skoplje":
    case "Ohrid":


        console.log("Macedonia")
        break;

    case "Podgorica":
    case "Budva":
    case "Kotor":

        console.log("Montenegro")
        break;


    default:

        console.log("Please choose a different city")
        break;
}