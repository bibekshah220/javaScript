alert("Hello, world!"); // one time pop up

prompt("What is your name?"); // one time pop up with input field

confirm("Do you want to continue?"); // one time pop up with OK and Cancel buttons

let num = prompt("Enter a number:", num) // one time pop up with input field and default value of num (10)
if (num % 10 === 0) {
    console.log("You entered: " + num);
} else {
    console.log("User cancelled the prompt.");
} // one time pop up with input field and default value of num (10) and handling user cancellation