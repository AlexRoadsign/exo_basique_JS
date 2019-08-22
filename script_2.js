// Ask the user for a number
let n = prompt("What number would you like to calculate in the factorial function?", "0");

// Function to calculate the factorial
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(n))