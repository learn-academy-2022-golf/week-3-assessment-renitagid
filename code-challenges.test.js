// ASSESSMENT 3: Coding Practical Questions with Jest

// const { it } = require("node:test");
// const { describe } = require("yargs");

// const { it } = require("node:test")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
describe("fibonacci", () => {
  const fibLength1 = 6;
  const fibLength2 = 10;
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});

// ReferenceError: fibonacci is not defined

// b) Create the function that makes the test pass.
//The fibonacci sequence is a pattern in which each number is calculated by adding the previous two numbers.
// Create a function called fibonacci that has a parameter number
// create a variable containing an array of 0 and 1, called fiboArray. Use let keyword to declare the function as it will be updated.
// We will need 0 and 1 in the array to start the initial logic for this sequence, since it takes two numbers to start (i.e. 0 + 1 = 1, then 1 + 1 is 2, 1 + 2 is 3, 2 + 3 is 5, etc.)
// Use a for loop to iterate through the given number argument of loops.
// At each iteration, it will update the array, by copying whatever is already in the array, and adding a new value
// The new value will be the sum of the value at the current index added to the value at the previous index.
// Since the prompt request for the output to start at 1, not 0, we will use the built in method .shift() to remove the 0 value at the beginning of the array.
// Note: one edge case this does not work for is if the user inputs any number that is less than or equal to 0. The code will return [1]. I would probably go back and add an if statement to address this edge case, with a statement that runs the code only if number >0

const fibonacci = (number) => {
  let fiboArray = [0, 1];
  for (let i = 1; i < number; i++) {
    fiboArray = [...fiboArray, fiboArray[i] + fiboArray[i - 1]];
  }
  fiboArray.shift();

  return fiboArray;
};

//   Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
describe("sortValues", () => {
  const studyMinutesWeek1 = {
    sunday: 90,
    monday: 30,
    tuesday: 20,
    wednesday: 15,
    thursday: 30,
    friday: 15,
    saturday: 60,
  };
  const studyMinutesWeek2 = {
    sunday: 100,
    monday: 10,
    tuesday: 45,
    wednesday: 60,
    thursday: 20,
    friday: 15,
    saturday: 65,
  };
  it("takes in an object and returns an array of the values sorted from least to greatest", () => {
    expect(sortValues(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90]);
    expect(sortValues(studyMinutesWeek2)).toEqual([
      10, 15, 20, 45, 60, 65, 100,
    ]);
  });
});

// ReferenceError: sortValues is not defined

// b) Create the function that makes the test pass.
// Create a function called sortValues that has a parameter of object
// use a built in object method, .values(), which returns an array of the object's values.
// Use a built in array method, .sort() which reorders the array into most - least. It takes an argument of an arrow function, which allows it to sort numbers with different decimals correctly
// return the array

const sortValues = (object) => {
  let valuesArray = Object.values(object);
  return valuesArray.sort((a, b) => a - b);
};

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("summedArray", () => {
  const accountTransactions1 = [100, -17, -23, -9];
  const accountTransactions2 = [250, -89, 100, -96];
  const accountTransactions3 = [];
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
    expect(summedArray(accountTransactions1)).toEqual([100, 83, 60, 51]);
    expect(summedArray(accountTransactions2)).toEqual([250, 161, 261, 165]);
    expect(summedArray(accountTransactions3)).toEqual([]);
  });
});

// ReferenceError: summedArray is not defined

// // b) Create the function that makes the test pass.
// Create a function called summedArray with a parameter of an array
// Use a for loop to iterate through each item in the array
// Within the for loop, starting at 0 index, set the current value to the sum of the current value plus the next value.
// 

const summedArray = (array) => {
  for (let i = 1; i < array.length; i++) {
    array[i] = array[i] + array[i-1]
  }
  return array;
};

//Received the following error:
//expect(received).toEqual(expected) // deep equality

// - Expected  - 3
// + Received  + 3

//   Array [
// -   100,
//     83,
// -   60,
// -   51,
// +   -40,
// +   -32,
// +   NaN,
//   ]

// I realized my logic was a little off in the for loop. i should actually start at the index of 1 and add itself to the preceding number for it to iterate correctly.

// // 
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total

//Another note, I initially thought about using a map since input and output are arrays of equal size. However, when thinking about the logic of the parameters, I wasn't sure how to access other items in the array from within the map function, so a for loop seemed to make more sense.