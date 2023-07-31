// Create a simple age calculator program that accepts two inputs that is birth year and current year
// and return the age of the user which you are to solve following the problem-solving technique,
// write out the pseudocode on how to solve this problem?

// Pseudocode
// 1. Ask birthYear from user , this is the first input
// 2. Ask currentYear from user, this is the second input
// 3. To get the age do currentYear - birthYear
// 4. set the answer of the deduction to "age"
// 5. Let the function return the "age"

let birthYear = parseInt(prompt("Enter the Birth Year: "));
let currentYear = parseInt(prompt("Enter the Current Year: "));
let age;

function ageCalculator() {
  age = currentYear - birthYear;
  return age;
}

console.log(ageCalculator());