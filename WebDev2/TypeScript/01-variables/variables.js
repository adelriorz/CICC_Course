/**--------------------------
 * Delayed initialization and implicit any
 *----------------------------*/
var movies = ['Alien', 'Predator'];
var foundMovie;
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    if (movie === 'Alien') {
        foundMovie = movie;
    }
}
foundMovie();
foundMovie = 1;
console.log(foundMovie);
