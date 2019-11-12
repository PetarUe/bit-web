function Genre(name) {
    this.name = name;
}
Genre.prototype.getGenreData = function () {
    return "Genre: " + this.name;
}

var action = new Genre("Action");
var drama = new Genre("Drama");
var mistery = new Genre("Mistery");

/* console.log(action.getGenreData().print()); */


function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
}

Movie.prototype.getMovieData = function () {
    return "Title: " + this.title + ", " + this.length + "min" + ", " + this.genre.getGenreData();
}

var game = new Movie("The Game", 104, drama);
var greenMile = new Movie("Green mile", 129, drama);
var town = new Movie("The town", 110, action);
var mysticRiver = new Movie("Mistic River", 124, mistery);

/* console.log(game.getMovieData()); */

function Program(date) {
    this.date = date;
    this.listOfMovies = [];
}

Program.prototype.addMovie = function (movie) {
    this.listOfMovies.push(movie);
}

Program.prototype.getProgramLength = function () {
    var totalLength = 0;
    for (var i = 0; i < this.listOfMovies.length; i++) {
        var movie = this.listOfMovies[i];
        totalLength += movie.length;

    }
    return totalLength;
}

Program.prototype.getProgramData = function () {
    var output = this.date + ", " + this.getProgramLength() + "min\n";
    for (var i = 0; i < this.listOfMovies.length; i++) {
        var movie = this.listOfMovies[i];
        output += movie.getMovieData() + "\n";
    }

    return output
}



var dayOne = new Program("11.06.2019");
var dayTwo = new Program("12.06.2019");

dayOne.addMovie(game);
dayOne.addMovie(town);
dayTwo.addMovie(greenMile);
dayTwo.addMovie(mysticRiver);


/*  console.log(dayOne.getProgramData());
 */


function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.numberOfMovies = 0;
}


Festival.prototype.addProgram = function (program) {
    this.listOfPrograms.push(program);
}

Festival.prototype.getFestivalData = function () {
    result = this.name + "has " + this.numberOfMovies + " movie titles \n"

    for (i = 0; i < this.listOfPrograms.length; i++) {
        var program = this.listOfPrograms[i];
        result += program.getProgramData();
    }

    return result;
}


var best = new Festival("Bestival - best festival ");

best.addProgram(dayOne);
best.addProgram(dayTwo);

console.log(best.getFestivalData().print());








