//Always avoid 'any' type
/**
 *   function functionName(param: number){
 *      return param + param;
 *   }
 *
 */

//function parameter annotation
function sum(num):string{
    return num + num;
}

console.log(sum(2))
let x = sum(2) as string
console.log(typeof x) //KIV
console.log(typeof sum(2))
// sum('2')
// sum(true)
// sum([1,2,3])

function greet(person:string){
    return 'Hello ' + person;
}

console.log(greet("John"));
// console.log(greet(1));

//Multiple parameters
const doSomething = (person: string, age: number) => {
    console.log(`Hello ${person} you are ${age} years old`);
}

doSomething('John', 30);
doSomething('Jane')

//Default parameters
const doSomething2 = (person: string, age: number = 30) => {
    console.log(`Hello ${person} you are ${age} years old`);
}

doSomething2('John', 30);
doSomething2('Jane')

//Optional parameters
const doSomething3 = (person: string, age?: number) => {
    console.log(`Hello ${person} you are ${age} years old`);
}

doSomething3('John', 30);
doSomething3('Jane')

//Return type annotation

function add1(n1: number,n2: number):number { return n1 + n2 }
const add2 = (n1: number,n2: number):number => n1+ n2;

const square = (n: number)=> n*n;
square(3); //inferred return as number

function random(num: number): number | string { //explicitly define return type as union type

    if(num === 0){
        return false;
    }

    if(Math.random() > 0.5){
        return num.toString();
    }

    return num;
}

random(5) //inferred as number | string | boolean (union type)

//Anonymous functional contextual typing

const colors = ['red', 'green', 'blue'];
colors.map(color => color.toUpperCase());
// colors.map(function(color){ });

function sample(color){

}

// The void type

function printTwice(message: string): void{ //explicitly define return type as void
    console.log(message);
    console.log(message);

    return ""
}

printTwice('Hello World');

// Never type

function makeError(message: string): never{
    return undefined
    throw new Error(message);

}

function gameLoop():never{
    while(true){
        console.log("Game loop running...")
    }
    return true;
}

