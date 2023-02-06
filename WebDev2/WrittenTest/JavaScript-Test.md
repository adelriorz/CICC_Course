# Javascript Test

<small>Just a quick test to test your javascript understanding.</small>
___

## 1) What is ES6?

```bash
ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.
```

## 2) Name at least 3 examples of ES6 features

```bash
1. let and const keywords
2. Arrow Functions
3. Multi-line Strings
4. Default Parameters
5. Template Literals
6. Destructuring Assignment
7. Enhanced Object Literals
8. Promises
9. Classes
10. Modules
```

## 3) What is the difference between let and const?

```bash
* var, let, and const are keywords that allow us to declare variables.

* Scope of a variable tells us where we can access this variable inside our code and where we can't. It is one of the decisive reasons for the difference between let and var and const in javascript.

* Hoisting provides features to hoist our variables and function declaration to the top of its scope before code execution.

* var is a nice and innocent way to declare a variable, which gets hoisted to the top of the scope.

* let and const are the modern ways to declare variables, which also get hoisted but don't initialize.
```

## 4) How do you access object values? Give 3 examples

```bash
1. Dot property accessor: object.property
2. Square brackets property accessor: object['property']
3. Object destructuring: const { property } = object
```

## 5) What does setInterval and setTimeout do?

```bash
* setTimeout allows us to run a function once after the interval of time. 

* setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
```

## 6) What are promises?

```bash
Promises are a pattern for handling asynchronous code in JavaScript. They provide a way to register callbacks for handling the eventual success or failure of an asynchronous operation, without having to pass around callbacks or handle multiple return values.

A Promise in JavaScript represents the eventual completion or failure of an asynchronous operation, and its resulting value. Promises have a then method, which allows you to register callbacks to be notified when the operation is complete, either successfully or with an error.

Promises can also be used to chain multiple asynchronous operations, by returning a new Promise in the then method. The returned Promise will resolve when the asynchronous operation it represents is complete. This allows you to write clean, readable, and composable asynchronous code.

For example:

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

## 7) Convert this async function to async/await

```bash
getQuote()
    .then((quote) => {
        console.log(quote)
    })
    .catch((error) => {
        console.error(error)
    })

/* async/await */
async function displayQuote() {
    try {
        const quote = await getQuote();
        console.log(quote);
    } catch (error) {
        console.error(error);
    }
}
```

## 8) Convert this code to arrow function

```bash
function greeting(firstname, lastname){
    return `Hi ${firstname} ${lastname}`;
}

/*Arrow function*/
const greeting = (firstname, lastname) => `Hi ${firstname} ${lastname}`;
```

## 9) Explain what a callback function is

```bash
A callback function is a function that is passed as an argument to another function, to be “called back” at a later time. A function that accepts other functions as arguments is called a higher-order function, which contains the logic for when the callback function gets executed. It’s the combination of these two that allow us to extend our functionality.
```

## 10) What does the functions pop and push do to an array?

```bash
The pop() method in JavaScript removes an item from the end of an array, whereas the push() method adds an item to the end of an array. The returning value of the pop() method is the item that is removed from the array.
```

## 11) What is the expected answer to this code?

```bash
let string1 = "";
let object1 = {a:1, b:2, c:3};

for(const property1 in object1){
    string1 += object1[property1]
}

console.log(string1);

/*Result*/
The expected output of the code is 6.

The for...in loop is used to iterate over the properties of the object1 object. The string1 variable is concatenated with the value of each property in the object using the += operator. After the loop, the value of string1 is "123", which is the string representation of the sum of the values of all properties in object1.
```

## 12) What data type would Array.map() and Array.filter() return?

```bash
Both Array.map() and Array.filter() return arrays. The Array.map() method returns a new array with the results of calling a provided function on every element in the calling array,.

Array.filter() method returns a new array with all elements that pass the test implemented by the provided function.
```

## 13) What data type would Array.includes() and Array.some() return?

```bash
The Array.includes() method returns a boolean value indicating whether an array includes a certain element.

Array.some() method returns a boolean value indicating whether at least one element in the array passes the test implemented by the provided function.
```

## 14) Write down the 4 main methods of rest api

```bash
GET: This method retrieves data from a server.

POST: This method submits data to the server for processing and storage.

PUT: This method updates data on the server.

DELETE: This method deletes data from the server.
```

## 15) What is the difference between JSON and a JavaScript object?

```bash
JSON (JavaScript Object Notation) is a lightweight data interchange format that is used to transmit data between a server and a client or between different systems. JSON is a text-based format, and its syntax is similar to that of a JavaScript object literal.

A JavaScript object, on the other hand, is a data structure that is used to store and manage data in a programmatic manner. JavaScript objects are defined using curly braces {} and can contain properties and methods.

The main difference between JSON and a JavaScript object is that JSON is a text-based format that can be used to exchange data between different systems, while a JavaScript object is a data structure that is used within JavaScript programs. JSON data can be easily converted to a JavaScript object, and vice versa, using JSON.parse() and JSON.stringify() functions.
```