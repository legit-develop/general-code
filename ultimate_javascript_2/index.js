//functional programming
//Isolated functions = there are no dependance on the state of the program, which includes global variables that are subject to change
//Pure functions - the same input always gives the same output
//functions with limited side effects - any changes or mutation to the state of the program outside of the function are carefully controlled.

//Functional Programming Terminology
// Callbacks are function that are slipped or passed into another function to decide the invocation of that function
// Functions that can be assigned to a variable, passed into another function, or returned from another function just like normal value are called first class functions
// All Javascript functions are first class function
// The function that take a function as an argument, or return a function as a return value are called higher order functions
// When functions are passed into or returned from another function, than those functions which were passed in or returned can be called lambda

const prepareGreenTea = () => "green tea";
const prepareBlackTea = () => "black tea";

const getTea = (prepareTea, numOfCup) => {
  const teaCups = [];
  for (let cups = 1; cups < numOfCup; cups) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Hazard of Using Imperative Code
// Imperative style in programming is one that gives the computer a set of statement to perform a task
// functional programming is a form of declarative programming. You tell computer what you want done by calling a method or function, e.g use map instead for loop

// Avoid Mutations and Side effects using functional programming
// One of the core principles of functional programming is to not change things
// In FP, changing or altering things is called mutation and the outcome is called a side effect
// Ideally a function should be a pure function, meaning that it does not cause any side effect

//Examples

//Fill in the code for the function increment so it returns the value of the global variable fixedValue by 1. fixedvalue should not change

let fixedValue = 3;

function increment() {
  return fixedValue + 1;
}

//Pass Arguments to Avoid External dependance in a function
// Always declare your dependencies explicitly
// If a function depends on a variable or object being present, then pass that variable or object directly into the functions as an argument.
// The function is easier to test, you know exactly what input it takes and it want depend on anything else in your program
// The function would always produce the same output for the same output for the same set of inputs, no matter what part of the code execute it.

let fixedNum = 2;

function incrementer(num) {
  return num + 1;
}

// Refactor global variable out of functions
// Don't alter a variable or object - create bew variable and objects and return them if need be from a function
//    const newArr = arrVar
// arrVar create a reference to the existing variable and not a copy, change newArr will change  value in arrVar
// Declare function parameters

// Example
// Write 2 functions to add and remove a book from an array. the booklist array should not change

const bookList = ['Grit', 'Growth mindset', 'Acre of Diamonds'];

const add = (arr, bookName) => {
  const newArray = [...arr];
  newArray.unshift(bookName);
  return newArray;
}


const remove = (arr, bookName) => {
  const newArray = [...arr];
  console.log(newArray);
  let bookIndex = newArray.indexOf(bookName);
  for(let el of newArray){
    if(el == bookName){
      newArray.splice(bookIndex, 1);
    }
  }
return newArray
}

// Use the map method to extract data from an array
// The map method iterates over each item in an array and returns a new array containing the result of the callback function on each element. It does not mutate the original string

// The callback has 3 arguments
// 1. Current element being processed
// 2. Index of that element
// 3. Array upon which the map method was called

// Example

const users = [
  {name: 'John', age: 32},
  {name: 'Bety', age: 40},
  {name: 'Simon', age: 50}
]

let user = users.map(el => el.name);

// Example 2
const watchList = [
  {
    title: 'Inception',
    year: 2010
  },
  {
    title: 'Interstellar',
    year: 2015
  }, {
    title: "The Dark Knight",
    year: 2008
  }
]

const ratings = watchList.map(list => {
  return {
    name: list.title,
    age: list.year
  }
})

