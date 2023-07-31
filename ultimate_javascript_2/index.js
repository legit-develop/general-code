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
