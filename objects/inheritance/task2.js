/*Applications:
1. Create constructor functions with properties representing the following:
○ WebApp: name, url, technologies, licence, stars
○ MobileApp: name, platforms, licence, stars
2. All web applications should inherit methods:
○ getData which prints out all the information
○ reactBased which checks if one of the used technologies is React
3. All mobile applications should inherit methods:
○ getData which prints out all the informations
○ forAndroid which checks if one of the platforms the application is developed for is
Android

4. Both web and mobile applications should inherit methods:
○ isCCLicence which checks if the licence of the application is CC (Creative
Commons)
○ like which increases the number of stars by one
○ showStars which prints out the number of stars*/
function App(name, licence, stars) {
    this.name= name;
    this.licence= licence;
    this.stars = stars;
}
App.prototype.isCCLicence = function () {
    if (this.licence == "Creative Commons") {
        return true;
    } else return false;
}
App.prototype.increasesTheNumberOfStars = function () {
   this.stars++
}
App.prototype.showStars = function () {
    console.log(this.stars);
 }


function WebApp(name, url, technologies, licence, stars) {
    App.call(this, name, licence, stars)
    this.url= url;
    this.technologies= technologies;
}
WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getData= function () {
    console.log(this.name + ", " + this.url + ", " +  this.technologies + ", " +  this.licence + ", " +  this.stars);
}

WebApp.prototype.reactBased = function () {
    if (this.technologies == "react") {
        return true;
    } else return false;
}

function MobileApp(name, platforms, licence, stars) {
    App.call(this, name, licence, stars);
    this.platform= platforms;
}
MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getData= function () {
    console.log(this.name + ", " +   this.platforms + ", " +  this.licence + ", " +  this.stars);
}
MobileApp.prototype.isForAndroid = function () {
    if (this.platforms == "Android") {
        return true;
    } else return false;
}


var web1= new WebApp ("WebApp", "url", "technologies", "licence", 5)
console.log(web1);

var mob1= new MobileApp ("MobileApp", "platforms", "licence", 3)
console.log(mob1);
