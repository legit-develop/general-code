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
console.log(result1);
