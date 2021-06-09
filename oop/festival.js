"use strict";

(function () {

    function Genre(name) {
        if (!name) {
            throw new Error("Field name is required");
        }
        this.name = name;

        this.getData = function () {
            return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
        }
    }

    function Movie(title, genre, length) {
        if (!genre && genre instanceof Genre) {
            throw new Error("Please insert valid genre");
        }
        if (!title || !length) {
            throw new Error("Fields title and length are required");
        }
        this.title = title;
        this.genre = genre;
        this.length = length;

        this.getData = function () {
            return this.title + ", " + this.length + "min" + ", " + genre.getData();
        }
    }

    function Program(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.totalNumberOfMovies = this.listOfMovies.length;
        this.addMovie = function (movie) {
            if (!movie && movie instanceof Movie) {
                throw new Error("Please insert valid movie");
            }
            this.listOfMovies.push(movie);
        }
        this.getData = function () {
            var now = new Date(date);
            var day = now.getDate();
            var month = now.getMonth() + 1;
            var year = now.getFullYear();
            var ddmmyy = day + "." + month + "." + year;
            this.totalLength = function () {
                var result = 0;
                this.listOfMovies.forEach(function (movie) {
                    result += movie.length;
                });
                return result;
            };
            this.movieList = function () {
                var result = "";
                this.listOfMovies.forEach(function (movie) {
                    result += "\t\t\t\t" + movie.title + ", " + movie.length + " min" + ", " + movie.genre.name + "\n";
                });
                return result;
            }
            return "\t\t" + ddmmyy + ", Program duration is " + this.totalLength() + " min" + "\n" + this.movieList();
        }
    }

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numberOfMovies = function () {
            var count = 0;
            this.listOfPrograms.forEach(function (program) {
                count += program.totalNumberOfMovies;
            });
            return count;
        }
        this.addProgram = function (program) {
            if (!program && program instanceof Program) {
                throw new Error("Please insert valid program");
            }
            this.listOfPrograms.push(program);
        }
        this.getData = function () {
            this.programData = function () {
                var result = "";
                this.listOfPrograms.forEach(function (program) {
                    result += program.getData();
                })
                return result + "\n";
            }
            return this.name + " has " + this.numberOfMovies() + " movie titles" + "\n" + this.programData();
        }
    }

    function createMovie(movieTitle, movieGenre, movieLength) {
        return new Movie(movieTitle, movieGenre, movieLength);
    }

    function createProgram(date) {
        return new Program(date);
    }

    try {

        var festival1 = new Festival("Cannes");

        var program1 = createProgram("Oct 7 2021");
        var program2 = createProgram("Oct 8 2021");

        var genre1 = new Genre("Action");
        var genre2 = new Genre("Drama");
        var genre3 = new Genre("Comedy");

        var movie1 = createMovie("The Shawshank Redemption", genre2, 130);
        var movie2 = createMovie("Fast and Furious 7", genre1, 150);
        var movie3 = createMovie("The Transporter", genre1, 93);
        var movie4 = createMovie("Stuart Little", genre3, 92);

        program1.addMovie(movie1);
        program1.addMovie(movie2);
        program2.addMovie(movie3);
        program2.addMovie(movie4);

        festival1.addProgram(program1);
        festival1.addProgram(program2);

        console.log(festival1.getData());

    } catch (error) {
        console.log("Error message: " + error.message)
    }

})()