// String Variable With Explicit Annotation
var movieTitle = "Amadeus";
movieTitle = "Arrival";
movieTitle = 9; //This results in an error!
movieTitle.toUpperCase();
// Number Variable with explicit annotation
var numCatLives = 9;
numCatLives += 1;
numCatLives = "zero"; //Error!
// Explicitly typed boolean variable:
var gameOver = false;
gameOver = true;
gameOver = "true"; //error!!
// Type Inference
var tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
tvShow = false;
var isFunny = false;
isFunny = true;
isFunny = "asd";
// the any type
var thing = "hello"; //This is not a great idea!
thing = 1;
thing = false;
thing();
thing.toUpperCase();
var movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
var foundMovie;
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    if (movie === "Amadeus") {
        foundMovie = "Amadeus";
    }
}
