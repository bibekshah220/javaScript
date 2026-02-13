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