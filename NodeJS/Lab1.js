/*
1. Create an arrow function named “mySum”. 
1.1 Your function should accept an arbitrary number of arguments using the REST operator.
1.2 Your function should return the sum of all of its inputs.
1.3 Put this function in a different module and export it. Then, in this module, import the module that contains your function and call it from this module.
2. Create an array of numbers named “myArr”. Your array may have any length (try different lengths to test it). 
2.1 Call your function passing as arguments the members of myArr array using the SPREAD operator. Assign the result to a “result” variable and console log it.
3. Create a new array named “mySecondArr”. Map the contents of your myArr array to mySecondArr array using an anonymous function that multiplies each member of myArr by 2.
3.1 Filter the contents of your mySecondArr using an anonymous function that console logs the numbers above average number (you’ll need to find the average first).
3.2 Use setTimeout() function. Pass it a callback function as a parameter that console logs “Goodbye” after 3 seconds.
4. Create an “Employee” object that has the following key-value pairs: “name”, “email”, “department” and “startDate”.  
4.1 Destructure your object to create a new object, called “Person”, that only has name and email keys (and the corresponding values).
*/

// myModule.js
const mySum = (...args) => {
    return args.reduce((acc, curr) => acc + curr, 0);
  };
  
module.exports = mySum;

// main.js
const mySum = require('./myModule');

const myArr = [1, 2, 3, 4, 5];
const result = mySum(...myArr);
console.log(result); // Output: 15


const mySecondArr = myArr.map(num => num * 2);

const average = mySecondArr.reduce((acc, curr) => acc + curr, 0) / mySecondArr.length;
const filteredArr = mySecondArr.filter(num => num > average);

console.log(filteredArr);


setTimeout(() => {
    console.log("Goodbye");
}, 3000);

const Employee = {
name: "John Doe",
email: "johndoe@example.com",
department: "Sales",
startDate: "2022-01-01"
};

const { name, email } = Employee;
const Person = { name, email };

console.log(Person);
  