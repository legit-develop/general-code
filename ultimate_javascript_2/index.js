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

const bookList = ["Grit", "Growth mindset", "Acre of Diamonds"];

const add = (arr, bookName) => {
  const newArray = [...arr];
  newArray.unshift(bookName);
  return newArray;
};

const remove = (arr, bookName) => {
  const newArray = [...arr];
  console.log(newArray);
  let bookIndex = newArray.indexOf(bookName);
  for (let el of newArray) {
    if (el == bookName) {
      newArray.splice(bookIndex, 1);
    }
  }
  return newArray;
};

// Use the map method to extract data from an array
// The map method iterates over each item in an array and returns a new array containing the result of the callback function on each element. It does not mutate the original string

// The callback has 3 arguments
// 1. Current element being processed
// 2. Index of that element
// 3. Array upon which the map method was called

// Example

const users = [
  { name: "John", age: 32 },
  { name: "Bety", age: 40 },
  { name: "Simon", age: 50 },
];

let user = users.map((el) => el.name);

// Example 2
const watchList = [
  {
    title: "Inception",
    year: 2010,
  },
  {
    title: "Interstellar",
    year: 2015,
  },
  {
    title: "The Dark Knight",
    year: 2008,
  },
];

const ratings = watchList.map((list) => {
  return {
    name: list.title,
    age: list.year,
  };
});

// Implement Map on a prototype
// map() is Array.prototype.map()
// map() is a pure function its output depends solely on its input and it takes another function

Array.prototype.myMap = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(this[i]);
  }
};

//Method 2
Array.prototype.myMap = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]), i, this);
  }
  return newArray;
};

// Use the filter method to extract data from the array
// Array.prototype.filter()   ->  filter()
// filter calls a function on each element of an array and return a new array containing only the element for which that function return a truthy value
// callback function accept 3 arguments
// current element being processed
// index of that element
// Array upon which the filter method was called

const student = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camper", age: 15 },
];

const under_30 = student.filter((item) => item.age < 30);

const title_rating = watchList.map((item) => {
  return {
    title: item.title,
    rating: item.imdbRating,
  };
});

const filterList = title_rating.filter((item) => item.rating > 8);

//Implement the filter method on a Prototype

Array.prototype.myFilter = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

// Return part of an array using a slice method
// Take 2 arguments
// 1. index of where to begin the slice
// 2. index for where to end the slice (and its non inclusive)

// If no arguments provider slice start of the beginning till the end. Copy entire array
// Does not mutate the original array, but returns a new one

const arr = ["cat", "dog", "tiger", "zebra"];
const newArray = arr.slice(1, 3);

//Example
function sliceArray(arr, beginSlice, endSlice) {
  return arr.slice(beginSlice, endSlice);
}

sliceArray([1, 2, 3, 4, 5], 1, 3);

// Remove elements from  an Array using slice instead of splice
// remove items and keep the rest of the array
// Takes 2 arguments
// index of where to start removing items
// number of items to remove
// If last item not provided will remove till the end
// If mutate the original array

// Combine two array using the concat method
// concat combine both array and string
[1, 2, 3].concat([4, 5, 6]);

// Functional programming is all about creating and using non-mutating functions
// push adds items to the end of the same array it is called [mutates array]
// concat does not mutate the array

// Use reduce method to analyze data
// Array.prototype.reduce()  => reduce
// Most general of all array operation can solve almost any array processing problem
// It iterate over each item in an array and return a single value [string, number, array, object]
// Callback function accepts 4 arguments
// Accumulator => assigned the return value of the callback function from previous iteration
// current element being processed
// index of that element
// Array upon which reduce is called
// In addition to the callback function, reduce take has an additional parameter which takes an initial value for the accumulator
// If the second parameter is not used, then the first iteration is skipped and the second iteration get passed the first element of the array as the accumulator
