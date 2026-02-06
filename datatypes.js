// primitive data types is a category of data types in JavaScript that represent simple values. They include:

// 1. number: represents numeric values, both integers and floating-point numbers. For example:
let age = 30;
let price = 19.99;
let temperature = -5.5;
// 2. string: represents a sequence of characters enclosed in single quotes, double quotes, or backticks. For example:
let name = 'bibek';
let greeting = "Hello, World!";
let message = `Welcome to JavaScript!`;
// 3. boolean: represents a logical value that can be either true or false. For example:
let isloggedIn = true;
let hasPermiaaion = false;  
// 4. undefined: represents the absence of a value or an uninitialized variable. For example:
let boss;
console.log(boss); // Output: undefined
// 5. bigint: represents large integers that cannot be represented by the number data type. For example:
let bigNumber = 1234567890123456789012345678901234567890n;
Number.MAX_SAFE_INTEGER; // Output: 9007199254740991
2**53 - 1; // Output: 9007199254740991
// 6. symbol: represents a unique identifier that can be used as a property key in objects. For example:
let uniqueId = Symbol('id');
let anotherUniqueId = Symbol('id');
console.log(uniqueId === anotherUniqueId); // Output: false 

// 2. structured data types is a category of data types in JavaScript that represent complex values. They include:

// 1. object: represents a collection of key-value pairs. Objects can contain properties and methods. For example:
let person = {
    name: 'bibek',
    age: 30,
    greet: function() {
        console.log('Hello!');// Output: Hello!
    }
};  
// non data structured data types is a category of data types in JavaScript that represent values that are not structured or organized. They include:

// 1. null: represents the intentional absence of any object value. It is often used to indicate that a variable should have no value. For example:
let emptyValue = null;
console.log(emptyValue); // Output: null    
// array: represents an ordered collection of values. Arrays can contain elements of any data type, including other arrays and objects. For example:
let numbers = [1, 2, 3, 4, 5];
let mixedArray = [1, 'hello', true, null, { name: 'bibek' }];
// map: represents a collection of key-value pairs where the keys can be of any data type. Maps maintain the order of insertion and allow for efficient retrieval of values based on their keys. For example:
let myMap = new Map();
myMap.set('name', 'bibek');
myMap.set('age', 30);
console.log(myMap.get('name')); // Output: bibek
console.log(myMap.get('age')); // Output: 30  
// set: represents a collection of unique values. Sets do not allow duplicate values and can contain elements of any data type. For example:
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2);   
console.log(mySet); // Output: Set { 1, 2 }
// date: represents a specific point in time. The Date object provides methods for working with dates and times. For example:
let currentDate = new Date();
console.log(currentDate); // Output: current date and time
// strctural root data types is a category of data types in JavaScript that represent values that are structured or organized in a specific way. They include:

// 1. function: represents a reusable block of code that performs a specific task. Functions can take parameters and return values. For example:    