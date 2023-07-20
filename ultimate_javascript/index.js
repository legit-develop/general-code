//Javascript Algorithm

//Escape element
//console.log("I'm the main man");
//console.log("Line number 1\n line number 2");
//console.log("Demostrating tab \t space");
//console.log("Carrige return \t move");
//console.log("word for \b boundary \b");
//console.log("form feed \f feed");
//console.log("backslash\\");

//Array
let myArray = [
  [1, 2],
  [3, 4],
]; //multidimensional array

let myArr = [1, 2, 3];
myArr.push(2); //add element at the end of the array
myArr.pop(); //remove element at the end
myArr.shift(); //remove element at the front
myArr.unshift(21); //add element at the front

//Comparison operator
//console.log(2 == "2"); //equality with type conversion
//console.log(2 === "2"); //strictly equality, no type conversion
//console.log(2 !== 3);
//console.log(4 < 3);
//console.log(5 > 2);

let username = "mike";
let answer;
switch (username) {
  case "sifiso":
    answer += "not a user";
    break;
  case "stan":
    answer += "found user";
    break;
  default:
    answer += "make a selection";
    break;
}

//Adding element of an array
function addAll(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
addAll([1, 2, 3, 4, 4]);

//Product of multidimensional Array
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

multiplyAll([1, 2, 3, 4]);

//Add object properties to as function parameters
const student = {
  name: "Mark Cuban",
  course: "Cyber security",
};

const courseMe = ({ name, course }) => console.log(name);

//courseMe(student);

//Promise

const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer;
  if (responseFromServer) {
    resolve("Got the data");
  } else {
    //reject("Did not receive data");
  }
});

makeServerRequest.then((result) => {
  console.log(result);
});

makeServerRequest.catch((error) => {
  console.log(error);
});

//Regular Expression
//string
const myString = "Hello, World!";
const strRegex = /Hello/; //any letter for the string will return true
let result = strRegex.test(myString);

//case sensitivity
const strCase = "sIfISo";
const strCaseRegex = /sifiso/i; //ignore case sensitivity
let result1 = strCaseRegex.test(strCase);

//extract matches
let exactStr = "Regular expressions";
let exactRegex = /expressions/;
let result1a = exactRegex.test(exactStr);

//more than one one/match
let repeatStr = "Move, move, and move";
let repeatRegex = /move/gi;
let result2 = repeatRegex.test(repeatStr);

//wildcards
// . all character
let allStr = "I'll hug a song";
let allstrRegex = /hu./;
let result3 = allstrRegex.test(allStr);

//Single character with multiple possibility
//Character classes [ ]

//match bag beg big bug and not bog
let bagStr = "bog";
let bagRegex = /b[aieu]g/;
let result3a = bagRegex.test(bagStr);

//find all vowels
let quoteSample =
  "Beware of bugs in the above code, I have only proved it correct";
let vowelRegex = /[aeiou]/gi;
let result4a = quoteSample.match(vowelRegex);

//Match letters of alphabet
let alphabetRegex = /[a-z]/gi;
let result4s = quoteSample.match(alphabetRegex);

//Match letters h - s and number 2 - 6
let sampleQuote = "Blueberry 3.141592653s";
let myRegex = /[h-s2-6]/gi;
let result5 = sampleQuote.match(myRegex);

//Match single characters not specified
// ^
//Match characters that are not numbers and vowels
let quoteSample1 = "4 blind mice";
let myaRegex = /[^0-9aeiou]/gi;
let result6 = quoteSample1.match(myaRegex);

//Match characters that appear more than once
let mySti = "Misksissippi";
let muRegex = /s+/gi;
let result5a = mySti.match(muRegex);

//Match characters that occur zero or more times
let chewieQuote = "Aaaaaaaaaarrrgh!";
let chewieRegex = /a*/i;
let result6a = chewieQuote.match(chewieRegex);

//Lazy Matching
//Find the smallest part of the regex pattern and return if as a match
let text = "<h1>Winter is coming</h1>";
let moRegex = /<.*?>/;
let result7 = text.match(moRegex);

//Match beginning string pattern [^] ^[]
let firstString = "Ricky is first and is found";
let firstRegex = /^Ricky/;
let result7a = firstRegex.test(firstString);

//Match ending string pattern
let theEnding = "This is a ending story";
let storyRegex = /story$/;
let storyTest = storyRegex.test(theEnding);
