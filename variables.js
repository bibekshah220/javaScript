
// let is a keyword used to declare a variable in JavaScript. It allows you to create a variable that can be reassigned later in the code. In this example, we declare a variable named 'name' and assign it the value 'bibek'. We then log the value of 'name' to the console, which will output 'bibek'.
let name = 'bibek';
console.log(name); 
// const is a keyword used to declare a constant variable in JavaScript. A constant variable cannot be reassigned after it has been declared. In this example, we declare a constant variable named 'age' and assign it the value 25. We then log the value of 'age' to the console, which will output 25.
const age = 25;
console.log(age);
//var is an older keyword used to declare a variable in JavaScript. It has function scope and can be reassigned. However, it is generally recommended to use 'let' or 'const' instead of 'var' for better readability and to avoid potential issues with variable hoisting. In this example, we declare a variable named 'city' using 'var' and assign it the value 'Kathmandu'. We then log the value of 'city' to the console, which will output 'Kathmandu'.
var city = 'Kathmandu';
console.log(city);  

// scope refers to the accessibility of variables in different parts of the code. Variables declared with 'let' and 'const' have block scope, meaning they are only accessible within the block they are defined in. Variables declared with 'var' have function scope, meaning they are accessible throughout the entire function they are defined in. In this example, we declare a variable named 'message' inside a block and log it to the console. The variable is only accessible within that block, so it will output 'Hello, World!' when logged.
{
    let message = 'Hello, World!';
    console.log(message); // Output: Hello, World!
}   
// function scope refers to the accessibility of variables within a function. Variables declared with 'let' and 'const' inside a function are only accessible within that function, while variables declared with 'var' are accessible throughout the entire function. In this example, we declare a variable named 'greeting' inside a function and log it to the console. The variable is only accessible within that function, so it will output 'Hello, Function!' when logged.
function greet() {
    let greeting = 'Hello, Function!';
    console.log(greeting); // Output: Hello, Function!
}                                                   
// block scope refers to the accessibility of variables within a block of code, such as an if statement or a loop. Variables declared with 'let' and 'const' inside a block are only accessible within that block, while variables declared with 'var' are accessible throughout the entire function. In this example, we declare a variable named 'number' inside an if statement and log it to the console. The variable is only accessible within that block, so it will output 10 when logged.
if (true) {
    let number = 10;
    console.log(number); // Output: 10
}   
// hosting refers to the behavior of variable declarations in JavaScript. Variables declared with 'var' are hoisted to the top of their scope, meaning they can be accessed before they are declared. However, variables declared with 'let' and 'const' are not hoisted and will result in a ReferenceError if accessed before declaration. In this example, we declare a variable named 'hoistedVar' using 'var' and log it to the console before its declaration. It will output 'undefined' because it is hoisted. On the other hand, if we try to access a variable declared with 'let' or 'const' before its declaration, it will throw a ReferenceError.
console.log(hoistedVar); // Output: undefined
var hoistedVar = 'I am hoisted!'; // This will work because 'hoistedVar' is hoisted to the top of its scope.
let notHoisted = 'I am not hoisted!';
console.log(notHoisted); // This will throw a ReferenceError because 'notHoisted' is not hoisted.   

// undefined is a primitive value in JavaScript that represents the absence of a value or an uninitialized variable. When a variable is declared but not assigned a value, it is automatically assigned the value of undefined. In this example, we declare a variable named 'uninitializedVar' without assigning it a value. When we log the value of 'uninitializedVar' to the console, it will output 'undefined'.
let uninitializedVar;
console.log(uninitializedVar); // Output: undefined   
                  