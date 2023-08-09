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

//Example
const abantu = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camper", age: 10 },
];

const sumOfAges = abantu.reduce((sum, user) => sum + user.age, 0);

//Example
const peopleObj = abantu.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
});

// Example 3
// Use method of your choice to get the average rating for movies produced by director christor

function getRating(watchList) {
  let director_chris = watchList.filter(
    (item) => item.Director === "Christopher Nola"
  );
  let ratings = director_chris.reduce((acc, element) => {
    return acc + Number(element.imdbTating);
  }, 0);

  let ratingAverage = ratings / director_chris.length;

  return ratingAverage;
}

// Use higher-order function map, filter reduce to solve complex problems
// square list function should return a new array containing the square of only the positive integers (decimal numbers are not integers) when array of real numbers passed into it

const squareList = (arr) => {
  let positive_num = arr.filter((item) => item > 0);
  let whole_num = positive_num.filter((item) => item % parseInt(item) === 0);
  let square_num = whole_num.map((item) => item * item);
  return square_num;
};

// Sort an Array alphabetically using the sort method
// The sort method sorts the elements of an array according to the call callback function

function ascendingOrder(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 7, 2, 1]);

// reverse order
function reverseAlpha(arr) {
  return arr.sort((a, b) => {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(["l", "h", "z", "b", "s", "z", "s", "i", "h", "b"]);

// Javascript default sorting method is by string unicode point value, which may return unexpected result. Therefore, it is encourage to provide a callback to specify how to sort the array items
// If compare function (a,b) returns a value less than 0 for the two elements a and b, then a will come before b
// If compare function (a,b) returns a value greater than 0 for two elements a an b the b will come before a
// If compare function (a,b) returns a value equals to 0 for the 2 element a and b, a and b will remain

//Example

// Use sort method in the alphabetical order function to sort the elements of arr in alphabet order. Should return a sorted array

function alphabeticalOrder(arr) {
  arr.sort();
  return arr;
}

alphabeticalOrder(["a", "d", "c", "a", "z"]);

// Return a sorted array without changing the original array
// Side effect of the sort method is that it changes the order of the elements in the original array.
// One way to avoid this is to concatenate on empty array to the one being sorted (slice and concat return a new array) then run the sort method

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  let newArray = [...arr];
  newArray.sort((a, b) => a - b);
  return newArray;
}

nonMutatingSort(globalArray);

// Split a string into an array using the split method
// split(), split the string into an arm of string
// delimiter determine how the string will be split

//Example
const str = "Hello World!";
const bySpace = str.split("");

//By Digit
const digitStr = "How2are7you4245today";
const byDigit = digitStr.split(/\d+/g);

//split a string by space - . ,

function splitify(str) {
  return str.split(/[\" ",-.]/g);
}

// combine an array into a string using join method
// delimiter determines how the string is join
// original string separated by , - .

function sentensify(str) {
  let newStr = str.split(/[\,-.]/g);
  return newStr.join(" ");
}

// Apply functional programming to convert string to URL slugs
// Many content management site (cms) have the title of posts added to part of the URL for simple bookmarking purpose (.../stop-using-reduced)

// Example
// Fill in the urlSlug so it converts a string title and returns the hyphenated version for the URL
// Fullfil the following requirements
// The input is a string with spaces and title cased words
// The output is a string with the spaces between words replaced by a hyphen
// The out put should all be lower cased letters.
// The output should not have any spaces

function urlSlug(title) {
  return title.toLowerCase().trim().split(/\s+/g).join(".");
}

// use the every method to check that every element in an array meets a criteria
// every() checks if every element passes a particular test. It returns a Boolean value

// Example
const numbers = [1, 5, 8, 0, 10, 9];

numbers.every((current) => current <= 10);

// Example 2
// Use the every method to check if every element in arr is positive

function positiveNum(arr) {
  let result = arr.every((el) => el > 0);
  return result;
}

positiveNum([1, 2, 3, 4, 5]);

// use the some method to check that any elements in an Array meet a criteria
const critNum = [-10, -50, -8, -220, -110];
critNum.some((el) => el < 10);

// Example 1
// Check if the array has some positive values

function somePositive(arr) {
  let result = arr.some((el) => el > 0);
  return result;
}

somePositive(critNum);

// Introduction to currying and partial application
// arity of a function is the number of arguments it requires
// currying a function means to convert a function of N arity into N functions of arity 1

// Example 1
function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function (y) {
    return x + y;
  };
}

// arrow function example
const Curried = (x) => (y) => x + y;

// This is useful in your program if you cannot supply all arguments to a function at one time.
// You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it is available
const funcForY = curried(1);

// Similar partial application can be described as applying a few arguments to a function at a time and retrieving another function.
// that is applied to more arguments.

function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10);

// Intermediate Algorithm Scripting

// Sum all numbers in a range
// a 2 number array will be passed. Return the sum of those 2 number including the one between them

function sumAll(arr) {
  let firstNum = arr[0];
  let secondNum = arr[1];
  let newArray = [];
  if (firstNum > secondNum) {
    [firstNum, secondNum] = [secondNum, firstNum];
  }
  let sum = 0;
  for (let i = firstNum; i <= secondNum; i++) {
    newArray.push(i);
  }
  for (let j = 0; j < newArray.length; j++) {
    sum += newArray[j];
  }
  return sum;
}

sumAll([5, 2]);

//alternative method
function sumAllNum(arr) {
  arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}

sumAllNum([11, 4]);

// Diff two arrays

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
// Return the symmetric difference of the two arrays

function diffArray(arr1, arr2) {
  let newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArray.push(arr1[i]);
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1) {
      newArray.push(arr2[j]);
    }
  }
  return newArray;
}

diffArray([1, 2, 3, 8], [2, 4, 5, 8]);

// Seek and destroy
// You will be provided with an initial array followed by one or two more argument.
// Remove all elements from the initial array that are of the same value as these arguments

function destroyer(arr) {
  let argArr = [];
  let finalArray = [];
  for (let i = 0; i < arguments.length; i++) {
    argArr.push(arguments[i]);
  }
  argArr.splice(0, 1);
  for (let i = 0; i < arr.length; i++) {
    if (argArr.indexOf(arr[i]) === -1) {
      finalArray.push(arr[i]);
    }
  }
  return arr;
}

destroyer([2, 3, 4, 5], 2, 5);

//Alternative seek and destroyer

function destroyerMain(arr) {
  let args = [...arguments];
  let targets = args.splice(1);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (targets.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

destroyerMain([2, 7, 5], 2, 5);

// Make a function that looks through an array of object (first argument) and returns
// an array of all objects that have matching name, value pairs (second arguments). each
// name and value pair of the source object has to be present in the object from
// collection if it is to be included in the refund array

// Spinal Tap Case
// Convert a string into a spinal case
// Spinal cae is all lowercase words joined by dashes

function spinalCase(str) {
  let lowCaseStr = str.toLowerCase();
  let splitStr = lowCaseStr.split("");
  let joinDash = splitStr.join("-");
  return joinDash;
}

spinalCase("DHLAMINI");

// Spinal Case alternative
function alterCaseSpinal(str) {
  let regexStr = /[\s_]+/;
  let replaceStr = str.replace(/([a-z])([A-Z])/g, "$1_$2");

  return replaceStr.split(regexStr).join("-").toLowerCase();
}

alterCaseSpinal("SIFISO Dhlamini Bheki");

// Pig latin
// Pig latin is a way of altering english words
// If a word begin with a consonant, take the first consonant or consonant cluster
// move it to the end of the word and add ay to it
// If a word begin with a vowel, just add way at the end

function translatePigLatin(str) {
  let myStr = str.toLowerCase();
  let vowel = /[aeiou]/;
  let vowelResult = myStr.match(vowel);
  let firstIndex = myStr.indexOf(vowelResult);
  let finalString = "";
  if (firstIndex > 0) {
    finalString = `${myStr.slice(firstIndex)}${myStr.slice(0, firstIndex)}ay`;
  } else if (vowelResult === null) {
    finalString = `${myStr}ay`;
  } else {
    final = `${myStr}way`;
  }
  return finalString;
}

translatePigLatin("movement");

// Search and replace
// Perform a search and replace on the sentence using the arguments and return the new sentence
// First argument is the sentence to perform the search and replace on
// Second argument is the word that you will be replacing (before)
// Third argument is what you will be replacing the second argument with other

function myReplace(str, before, after) {
  let beforeFirstLetter = before[0];
  let afterFirstLetter = after[0];
  if (beforeFirstLetter === beforeFirstLetter.toUpperCase()) {
    after = `${afterFirstLetter.toUpperCase()}${after.slice(1)}`;
  } else if (beforeFirstLetter === beforeFirstLetter.toLowerCase()) {
    after = `${afterFirstLetter.toLowerCase()}${after.slice(1)}`;
  }
  return str.replace(before, after);
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

// DNA Pairing
// Pair of SNA strands consist of nucleaos pair

function pairElement(str) {
  let pairArray = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "G") {
      pairArray.push([`${str[i]}`, "C"]);
    } else if (str[i] === "C") {
      pairArray.push([`${str[i]}`, "G"]);
    } else if (str[i] === "A") {
      pairArray.push([`${str[i]}`, "T"]);
    } else if (str[i] === "T") {
      pairArray.push([`${str[i]}`, "A"]);
    }
  }
  return pairArray;
}

pairElement("CTCTA");

// Alternative method

function elementPair(str) {
  let pairedArr = [];
  function pairCheck(letter) {
    if (letter === "A") {
      return "T";
    } else if (letter === "C") {
      return "G";
    } else if (letter === "T") {
      return "A";
    } else if (letter === "G") {
      return "C";
    }
  }

  for (let letter of str) {
    pairedArr.push(letter, pairCheck(letter));
  }
  return pairedArr;
}

elementPair(["CTCTA"]);

// Missing letter
// Find the missing letter in a passed letter range and return it
// If all letters are present in the range, return undefined

function missLetter(str) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let letterIndex = alphabets.indexOf(str[0]);
  let targetLetter = alphabets.slice(letterIndex);
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== targetLetter[i]) {
      return targetLetter[i];
    }
  }
  return undefined;
}
missLetter("mike");

// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique
// values in the order of the original provided array

function uniqueValue(arr) {
  let args = [...arguments];
  let uniqueValueArray = [];
  let combineArrays = [];

  for (let i = 0; i < args.length; i++) {
    combineArrays.push(...args[i]);
  }

  uniqueValueArray.push(...new Set(combineArrays));
  return uniqueValueArray;
}

uniqueValue([1, 3, 2], [5, 2, 1, 4], [2, 10]);

// Alternative Method
function uniteUnique(arr) {
  let args = [...arguments];
  let unique = [];
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (unique.indexOf(args[i][j] === -1)) {
        unique.push(args[i][j]);
      }
    }
  }
  return unique;
}

uniteUnique([1, 2, 3], [1, 5, 6, 7], [2, 6, 9]);

// Convert HTML entities
// Convert the characters $ < > " ' in a string to their corresponding HTML entities

function convertHTMLEntities(str) {
  let newStr = "";
  const entities = {
    '"': "&quat;",
    "'": "&apos;",
    "<": "&it;",
    ">": "&gt;",
    "&": "&amp;",
  };
  for (let prop of str) {
    if (entities[prop]) {
      newStr += entities[prop];
    } else {
      newStr += prop;
    }
  }
  return newStr;
}

convertHTMLEntities("'Sifiso & Beth'");
