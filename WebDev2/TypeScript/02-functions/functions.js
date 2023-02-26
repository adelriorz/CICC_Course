//Always avoid 'any' type
/**
 *   function functionName(param: number){
 *      return param + param;
 *   }
 *
 */
//function parameter annotation
function sum(num) {
    return num + num;
}
console.log(sum(2));
var x = sum(2);
console.log(typeof x);
console.log(typeof sum(2));
// sum('2')
// sum(true)
// sum([1,2,3])
function greet(person) {
    return 'Hello ' + person;
}
console.log(greet("John"));
// console.log(greet(1));
