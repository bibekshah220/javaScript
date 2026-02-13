// Assigmnet Operators
let a = 10;
a += 5; // a is now 15
a -= 3; // a is now 12
a *= 2; // a is now 24
a /= 4; // a is now 6
a %= 5; // a is now 1
a **= 3; // a is now 1
// Comparison Operators
let x = 5;
let y = 10;
console.log(x == y);   // Output: false
console.log(x != y);   // Output: true
console.log(x > y);    // Output: false
console.log(x < y);    // Output: true
console.log(x >= y);   // Output: false
console.log(x <= y);   // Output: true
// Logical Operators
let isLoggedIn = true;  
let hasPermission = false;
console.log(isLoggedIn && hasPermission); // Output: false
console.log(isLoggedIn || hasPermission); // Output: true
console.log(!isLoggedIn); // Output: false      
// Arithmetic Operators
let num1 = 15;
let num2 = 4;
console.log(num1 + num2); // Output: 19
console.log(num1 - num2); // Output: 11
console.log(num1 * num2); // Output: 60
console.log(num1 / num2); // Output: 3.75
console.log(num1 % num2); // Output: 3
console.log(num1 ** num2); // Output: 50625
// String Operators
let str1 = "Hello, ";
let str2 = "World!";
let greeting = str1 + str2;
console.log(greeting);
// Output: Hello, World!
let excitedGreeting = greeting + " How are you?";
console.log(excitedGreeting); 
// Output: Hello, World! How are you?
// Unary Operators
let number = 10;
console.log(+number); // Output: 10
console.log(-number);       // Output: -10
console.log(++number); // Output: 11
console.log(--number); // Output: 10
// Ternary Operator
let age = 20;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote.         
// Typeof Operator
let value = 42;
console.log(typeof value);  // Output: number
value = "Hello";
console.log(typeof value);  // Output: string           
value = true;
console.log(typeof value);  // Output: boolean
value = { name: "bibek" };
console.log(typeof value);  // Output: object   
value = null;
console.log(typeof value);  // Output: object
value = undefined;
console.log(typeof value);  // Output: undefined

value = Symbol('id');
console.log(typeof value);  // Output: symbol  

value = 12345678901234567890n;
// modulus operator
let a1 = 10;
let b1 = 3;
console.log(a1 % b1); // Output: 1 

// Exponentiation operator
let base = 2;
let exponent = 3;
console.log(base ** exponent); // Output: 8 

// Increment operator
let count = 5;
console.log(++count); // Output: 6

let count2 = 10
console.log(count2++); // Output: 10

let count3 = 20
console.log(++count3); // Output: 21

// Decrement operator
let total = 10;
console.log(--total); // Output: 9  

// unary operators
let num = 5;
console.log(+num); // Output: 5
a++; // a is now 2
console.log(a);
// post increment
let b = 5;
console.log(b++);   // Output: 5

// post decrement
let c = 5;
console.log(c--);   // Output: 5       
//pre increment
let d = 5;
console.log(++d);   // Output: 6        

//assignment operators
let e = 10;
e += 5; // e is now 15
e -= 3; // e is now 12
e *= 2; // e is now 24  

// comparison operators     
let f = 5;
let g = 10;
console.log(f == g);   // Output: false
console.log(f != g);   // Output: true
// logical operators
let isLoggedIn = true;  
let hasPermission = false;
console.log(isLoggedIn && hasPermission); // Output: false
// logical OR operator
console.log(isLoggedIn || hasPermission); // Output: true
// logical NOT operator
console.log(!isLoggedIn); // Output: false          