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



// Lastly, create an array of numbers, loop through the array, and output only even numbers.
// Pseudocode
// 1. Declare the array with a set of numbers in it.
// 2. Initialize a variable "even"
// 2. create a loop, for loop structure
// 3. initialize the first value to position 0 of the array
// 4. initialize the last value to position -1 of the array
// 5. If the number in the array divided by 2 gives no remainder, thats an even number
// 6. Print out the number
// 7. Loop through each element in the array to check if its divisible by 2 without any remainder
// 8. Print out the result


const numbers = [4, 7, 8, 9, 5, 3, 2, 55];
function arrayOfNos() {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      console.log(numbers[i]);
    }
  }
}

arrayOfNos();