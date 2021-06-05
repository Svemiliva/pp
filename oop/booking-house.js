"use strict";

(function () {
    var CONTINENTS = Object.freeze({
        EUROPE: "EU",
        ASIA: "AS",
        AFRICA: "AF",
        SOUTH_AMERICA: "SA",
        NORTH_AMERICA: "NA",
        AUSTRALIA: "AU",
    })

    function Country(name, odds, continent) {
        if (continent != "EU" && continent != "AS" && continent != "AF" && continent != "SA" && continent != "NA" && continent != "AU") {
            throw new Error("Please insert valid continent");
        }
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    };

    function Person(name, surname, dateOfBirth) {
        if (!name || !surname) {
            throw new Error('Fields name and surname are required')
        }
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
        this.getFormatedString = function () {
            return this.name + ", " + this.surname + ", " + this.dateOfBirth
        }
    }

    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = address.country;
        var now = new Date;
        var currentYear = now.getFullYear();
        this.getFormatedString = function () {
            return this.country + " " + this.betAmount * country.odds + ", " + person + " " + (currentYear - person.dateOfBirth.getFullYear()) + " years old.";
        }


    }

    function Address(country, city, postalCode, street, streetNumber) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.streetNumber = streetNumber
        this.getFormatedString = function () {
            var countryLetters = this.country[0] + this.country[2];
            return this.street + " " + streetNumber + ", " + this.postalCode + " " + this.city + ", " + countryLetters.toUpperCase();
        }

    }

    function BettingPlace(address) {
        this.address = address;
        this.listOfPlayers = [];

    }

    function BettingHouse(competition, numOfPlayers) {
        this.competition = competition;
        this.listOfPlaces = [];
        this.numOfPlayers = numOfPlayers;

    }

    try {

        var serbia = new Country("Serbia", 5, CONTINENTS.EUROPE)
        console.log(serbia);

        var person1 = new Person("Pera", "Peric", new Date("07.01.1991."))
        console.log(person1.getFormatedString());
        var address1 = new Address("Serbia", "Belgrade", "11000", "Nemanjina", 4)
        console.log(address1.getFormatedString());
        var player1 = new Player (person1, 500, "SR")

        console.log(player1.getFormatedString());


    } catch (error) {
        console.log("Error message: " + error.message);
    }



})();