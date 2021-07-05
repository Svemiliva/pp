class App {
    constructor(name, licence, stars) {
        this.name = name;
        this.licence = licence;
        this.stars = stars;
    }
    isCCLicence() {
        if (this.licence == "Creative Commons") {
            return true;
        } else return false;
    }

    increasesTheNumberOfStars() {
        this.stars++
    }

    showStars() {
        console.log(this.stars);
    }
}

class WebApp extends App {
    constructor(name, url, technologies, licence, stars,) {
        super(name, licence, stars);
        this.url = url;
        this.technologies = technologies;

    }

    getData() {
        console.log(this.name + ", " + this.url + ", " + this.technologies + ", " + this.licence + ", " + this.stars);
    }

    reactBased() {
        if (this.technologies == "react") {
            return true;
        } else return false;
    }



}


class MobileApp extends App {
    constructor(name, platforms, licence, stars) {
        super(name, licence, stars);
        this.platforms = platforms;
    }

    getData() {
        console.log(this.name + ", " + this.platforms + ", " + this.licence + ", " + this.stars);
    }

    isForAndroid() {
        if (this.platforms == "Android") {
            return true;
        } else return false;
    }

}

var web1 = new WebApp("WebApp", "url", "technologies", "licence", 5)

console.log(web1.isCCLicence());
console.log(web1.increasesTheNumberOfStars());
console.log(web1.showStars());
console.log(web1.getData());
console.log(web1.reactBased());



var mob1 = new MobileApp("MobileApp", "platforms", "licence", 3)
console.log(mob1.getData());
