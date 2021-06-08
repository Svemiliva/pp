"use strict";

(function () {

    function Genre(genreName) {
        this.genreName = genreName;

        this.getData = function () {
            return this.genreName[0] + this.genreName[this.genreName.length - 1];
        };
    };


    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;

        this.getData = function () {
            return this.title + ", " + this.length + "min, " + genre.getData().toUpperCase();
        };

    };

    function Program(date, numberOfMoviesInAllPrograms) {
        this.date = new Date(date);
        this.listOfPrograms = [];
        this.numberOfMoviesInAllPrograms = numberOfMoviesInAllPrograms
        this.addMovie = function (movie) {
            this.listOfPrograms.push(movie);
        };
        this.getData= function () {                            //ovo uradi
            return this.date + ", " + totalProgramLength + "\n" + "\t \t" + movie.getData();
        }
    };

    function Festival(festivalName, numberOfMovies) {

        this.festivalName = festivalName;
        this.listOfPrograms = [];
        this.numberOfMovies = numberOfMovies;
        this.addProgram = function (program) {
            this.listOfPrograms.push(program);
        };
        this.getData= function () {                           //i ovo
            return this.festivalName + " has " + this.numberOfMovies + + " titles."+ "\n" + "\t \t" + program.getData();
        }

    };

function createMovie(title, length, genre) {
    var genre = new Genre(genre);
    var movie = new Movie(title, length, genre.getData());
    return movie;
};
function createProgram(date) {
    var program = new Program(date) ;
    return program;
};




    try {
        var genre1 = new Genre("Action");
        var movie1 = new Movie("The Shawshank Redemption", 130, genre1);
        console.log(movie1.getData());

        console.log(listOfPrograms);
    } catch (error) {
        console.log('Error message: ' + error.message);
    }















})();