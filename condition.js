//  condition statements
let a = 10;
if (a > 5) {
    console.log("a is greater than 5");
} else {
    console.log("a is not greater than 5");
}   
// if-else if-else statement
let b = 15;         
if (b < 10) {
    console.log("b is less than 10");
} else if (b >= 10 && b < 20) {
    console.log("b is between 10 and 20");
} else {
    console.log("b is 20 or greater");
}       
// switch statement
let day = 3;            
switch (day) {
    case 1:
        console.log("Monday");  
        break;
    case 2:
        console.log("Tuesday");     
        break;
    case 3:
        console.log("Wednesday");       
        break;
    case 4:
        console.log("Thursday");    
        break;
    case 5:
        console.log("Friday");  
        break;
    case 6:
        console.log("Saturday");    
        break;
    case 7:
        console.log("Sunday");  
        break;
    default:
        console.log("Invalid day");  
}   
// else if statement
let score = 85;
if (score >= 90) {
    console.log("Grade: A");        
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
// Nested if statement
let num = 25;       
if (num > 0) {
    if (num % 2 === 0) {
        console.log("num is a positive even number");
    } else {
        console.log("num is a positive odd number");
    }
} else if (num < 0) {
    console.log("num is a negative number");
} else {
    console.log("num is zero");
}
// Ternary operator
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote.
let isEven = (num % 2 === 0) ? "Even" : "Odd";
console.log(isEven); // Output: Odd 
let isAdult = (age >= 18) ? "Adult" : "Minor";
console.log(isAdult); // Output: Adult  
let accessLevel = (age >= 18) ? "Full Access" : "Restricted Access";
console.log(accessLevel); // Output: Full Access  
  let isWeekend = (day === 6 || day === 7) ? "It's the weekend!" : "It's a weekday.";
console.log(isWeekend); // Output: It's a weekday! 

// Logical operators
let isRaining = true;
let hasUmbrella = false;    
if (isRaining && !hasUmbrella) {
    console.log("You might get wet!");
} else if (isRaining && hasUmbrella) {
    console.log("You are protected from the rain.");
} else {
    console.log("It's not raining.");
}