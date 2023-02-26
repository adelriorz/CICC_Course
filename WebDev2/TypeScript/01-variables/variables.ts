//First type annotation syntax
// var/let/const variableName:datatype = value;

// Type annotation (explicit/implicit)
let movieTitle = "Avengers";
movieTitle = "Inception";
// movieTitle = 123; // Error
// movieTitle.map()

let numCatLives = 9; // Implicit type annotation
numCatLives -= 1;
// numCatLives = 'zero'   // Error

let gameOver = false; // Implicit type annotation
gameOver = true;
// gameOver = "true"   // Error

null
undefined

let nothing:null = null;
let nothing2:undefined = undefined;
// nothing2 = "hello";

/**--------------------------
** Type inference
*   - Typescript will try to infer the type of a variable
*   - If it can't, it will default to the any type  (bad)
*--------------------------**/

let tvShow = 'The Boys'; // Implicit type annotation
// tvShow = 123; // Error


/**--------------------------
** The 'any' type
*--------------------------**/

let whatever:any = 'hello';
whatever = 123;
// whatever = true;
// whatever = null;
// whatever = undefined;
// whatever();
// whatever.toUpperCase();
// whatever.map()

/**--------------------------
 * Delayed initialization and implicit any
 *----------------------------*/

const movies = ['Alien', 'Predator'];
// let foundMovie;
let foundMovie:string;

for(let movie of movies){
    if(movie === 'Alien'){
        foundMovie = movie;
    }
}

foundMovie();
foundMovie = 1;