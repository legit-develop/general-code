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

//Match all the letters and numbers
// [A-Za-z0-9_]  - character class matches upper and lower and numbers
// \w alternative match

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important-var";
let testLong = longHand.test(numbers);
let testShort = shortHand.test(numbers);
let test_long = longHand.test(varNames);

//Using shorthand characters class
let quote_sample = "The five boxing wizard jump quickly";
let quote_regex = /\w/g;
let sample_test = quote_regex.test(quote_sample);

//Match everything except letters and numbers
// \W
// [^A-Za-z0-9_]

let num_letter_short = /\W/;
let numbus = "42";
let sentence = "Coding!";
let result_1 = numbus.match(num_letter_short);

//Example
let sample_quote = "The five boxing wizards jump quickly";
let nonAlphabetRegex = /\W/g;
let alphabet_result = sample_quote.match(nonAlphabetRegex);

//Match all numbers
// \d
let movieName = "2001: A space Odyssey";
let digitRegex = /\d/g;
let digit_result = movieName.match(digitRegex);

//Matching all non digit elements
// \D
let non_num_regex = /\D/g;
let non_num_result = movieName.match(non_num_regex);
let movie_result = movieName.match(non_num_regex);

//username possible restriction

let user_name = "JackOfAllTrades";
let user_regex = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let user_result = user_name.match(user_regex);

//Match white space
// \s
let whiteSpace = "whitespace demonstrate in between";
let space_regex = /\s/g;
let space_regex_result = whiteSpace.match(space_regex);

//Match non-whiteSpaces
// \S
// [^\r\t\f\n\v]
let non_white_space = /\S/g;
let non_whitespace_result = whiteSpace.match(non_white_space);

//Specify upper and lower number of matches
let A4 = "aaaah";
let A2 = "aah";
let multiple_a = /a{3,5}h/;

//Match the entire string with one or more letters
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\Sno/;
let oh_result = ohRegex.test(ohStr);

//Specify only the lower number of matches
let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/;
let result_ha = haRegex.test(haStr);

//Specify the exact number of matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result_tim = timRegex.test(timStr);

//check for zero or one of the preceding elements

let usa_word = "favorite";
let brit_word = "favourite";
let favRegex = /favou?rite/;
let usa_result = favRegex.test(usa_word);
let brit_result = favRegex.test(brit_word);

//Positive and Negative lookahead
// Positive lookahead ?=...
// Negative lookahead ?!...

let pass_word = "abc123";
let check_pass_regex = /(?=\w{3,6})(?=\D*\d)/;
let result_check = check_pass_regex.test(pass_word);

//Password match greater greater than 5 letters and 2 consecutive digits

let sample_word = "astronaut";
let pw_regex = /(?=\w{6})(?=\D\{2}\d)/;
let result_pw = pw_regex.test(sample_word);

//Check for mix grouping
//Penguin or Pumpkin
let pump_str = "Pumpkin";
let peng_str = "Penguin";
let test_regex = /P(engu|umpk)in/;
let result_pump = test_regex.test(pump_str);
let result_peng = test_regex.test(peng_str);

//Check for Franklin Roosevelt or Eleanor Roosevelt

let ele_str = "Eleanor Roosevelt";
let fra_str = "Franklin Roosevelt";
let str_regex = /(Franklin D|Eleanor)\sRoosevelt/;
let result_ele = str_regex.test(ele_str);
let result_fra = str_regex.test(fra_str);

//Reuse Patterns using capture group
// \W
let repeatNum = "42 42 42";
let re_regex = /^(\d+) \1 \1$/;
let result_rex = re_regex.test(repeatNum);

//Use capture groups to search and replace

let wrong_text = "The sky is silver";
let silver_regex = /silver/;
let result_silver = wrong_text.replace(silver_regex, "blue");

//Changing order
let order_text = "one two three";
let order_regex = /(\w+)\s(\w+)\s(\w+)/;
let replace_text = "$3 $2 $1";
let result_replace = order_text.replace(order_regex, replace_text);

//Remove white spaces
let hello = " Hello, World!  ";
let spaceW_regex = /^\s+|\s+$/g;
let result_space = hello.replace(spaceW_regex, "");

//copy array
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

//Check index of an element in an array
let index_array = ["sifiso", "ben", "jill"];

function checkIndex(arr, element) {
  return arr.indexOf(element) === 1 ? true : false;
}

//Other iterate method include every() forEach() map()

//Dynamic objects
let food = {
  apples: 23,
};

let lastProperty = "strawberries";
food[lastProperty] = 10;

//Access property with bracket notation

let foods = {
  apples: 20,
  oranges: 32,
  plums: 28,
  bananas: 13,
};

foods["grapes"] = 10;

//fruit invetory

function fruitInventory(fruit) {
  return foods[fruit];
}

//Delete object Properties
delete foods.grapes;

//Iterate an object
for (let fruit in foods) {
  //console.log(fruit);
}

//count number of online users

const users = {
  Allan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function onlineUser(obj) {
  let count = 0;
  for (let user in obj) {
    if (obj[user].online === true) {
      count += 1;
    }
  }
  return count;
}

//Create an array out of object keys
function getArrayOfUsers(obj) {
  const userKeys = Object.keys(obj);
  return userKeys;
}

//Add an element in an array for an element

let friend_user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "John"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(obj, friend) {
  obj.data.friends.push(friend);
  return obj.data.friends;
}

//Basic Algorithm scripting

//1. Convert celcius to Frahrenheit

function convertCtoF(celcius) {
  let fahnrenheit = (celcius * 9) / 5 + 32;
  return fahnrenheit;
}

//2. Reverse a string

let reverse_str = "Sifiso";

function reverseStr(str) {
  return str.split("").reverse().join("");
}

function reverseString(str) {
  let str_reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    str_reverse += str[i];
  }
  return str_reverse;
}

function turnString(str) {
  let turnStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    turnStr += str[i];
  }
  return turnStr;
}

//Factorize a number
function factorize(num) {
  let arr = [];
  let sum = 1;

  for (let i = num; i > 0; i--) {
    arr.push(i);
  }

  for (let j = 0; j < arr.length; j++) {
    sum = sum * arr[j];
  }

  return sum;
}

//Longest word in the string

function longStr(str) {
  let wordArr = str.split(" ");
  let numWord = [];
  let longWord = 0;
  for (let i = 0; i < wordArr.length; i++) {
    numWord.push(wordArr[i].length);
  }
  longWord = Math.max(...numWord);

  return longWord;
}

//Alternative solution

function findLongStr(str) {
  let strArr = str.split(" ");
  let longestStr = "";
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= longestStr.length) longestStr = strArr[i];
  }
  return `long word is ${longestStr} with ${longestStr.length} letters`;
}

//return largest number in a multidimensional array

function largeOfFour(arr) {
  let largeNum = [];
  for (let i = 0; i < arr.length; i++) {
    largeNum.push(Math.max(...arr[i]));
  }
  return largeNum;
}

function confirmEnding(str, target) {
  let lastString = str.slice(-target.length);
  if (lastString === target) {
    return true;
  } else {
    return false;
  }
}

//Repeat a string
//Using repeat() method
function repeatString(str, num) {
  let repeatStr = str.repeat(num);

  return repeatStr;
}

//Using basic algorithm

function repeatStrNum(str, num) {
  let myStr = "";
  for (let i = num; i > 0; i--) {
    if (num < 0) {
      return myStr;
    } else {
      myStr += str;
    }
  }
  return myStr;
}

//Cut the string

function truncateString(str, num) {
  if (str.length > num) {
    let cutStr = str.slice(0, num);
  }
  return str + "...";
}

//Finders Keepers
function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
}

//Check if value is a boolean
function booWho(value) {
  if (typeof value === "boolean") {
    return true;
  } else {
    return false;
  }
}

//Title case a sentence

function caseTitle(str) {
  let strSplit = str.toLowerCase().split(" ");
  let arrayStr = [];
  for (let i = 0; i < strSplit.length; i++) {
    arrayStr.push(strSplit[i][0].toUpperCase() + strSplit[i].slice(1));
  }
  return arrayStr.join(" ");
}

//Slice and Splice

function frankenSplice(arr1, arr2, n) {
  let newArray = [...arr2];
  return [...newArray.splice(n - n, n), ...arr1, ...newArray];
}

//Falsy Bouncer

function bouncer(arr) {
  let falsyArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i]) === true) {
      falsyArray.push(arr[i]);
    }
  }
  return falsyArray;
}

//Where Do I belong
function insertIndex(arr, index) {
  let sortArray = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortArray.length; i++) {
    if (index <= sortArray[i]) {
      return i;
    }
  }
  return sortArray.length;
}

//Mutation

function mutation(arr) {
  let firstElement = arr[0].toLowerCase();
  let secondElement = arr[1].toLowerCase();
  for (let i = 0; i < secondElement.length; i++) {
    if (firstElement.indexOf(secondElement[i]) === -1) {
      return false;
    }
  }
  return true;
}

//Create Multidimensional Array

function multDimArray(arr, size) {
  let dimesionalArray = [];
  for (let i = 0; i <= arr.length; i++) {
    dimesionalArray.push(arr.splice(0, size));
  }
  return dimesionalArray;
}

//Object Orientated Programming
//Accessing properties with dot notation and bracket
//A property that is a method is actually a function
//this keyword helps to reference the object even if the name changes.

//Constructors
//Are functions that create new objects
//They define properties and behaviors that will belong to the new object
//They are a blue print for creating a new object

//this keyword
function Bird() {
  (this.name = "Albert"), (this.color = "blue"), (this.numLegs = 2);
}

//Constructor Conventions
//Are defined with Capitalized name
//use keyword this to set properties of the object they will create
//They define properties instead of returning a value

//Create an instance of an object
let blueBird = new Bird();

//Constructor function arguments
//They help the constructor to create unique values

function Fearther(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let eagle = new Fearther("john", "black");

let cardinal = new Fearther("Bruce", "red");

cardinal instanceof Fearther;

//Own Properties - Properties defined directly on the instance
function Fly(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Fly("Donals");

//Add own property toan array

let ownProp = [];
for (let property in duck) {
  if (duck.hasOwnProperty(property)) {
    ownProp.push(property);
  }
}

//Use prototype to reduce duplicate

Fly.prototype.numLugs = 2;

//All instances automatically have the properties on the prototype
//Prototype as a recipe for creating objects
//Nearly every object in javascript has a prototype property which is part of the constructor function that created it
//Own properties are defined directly on the object instance
//Prototype properties are defined on the prototype.

//Own properties are defined directly on the object constructor
//Prototype properties are defined on the prototype

function Faculty(department) {
  this.department = department; //Own Property
}

Faculty.prototype.campus = "Arcadia";

let beth = new Faculty("Chemical Engineering");

//Add own property to ownProps
//Add prototype property to prototype props

let setOwnProps = [];
let prototypeProps = [];

for (let property in beth) {
  if (beth.hasOwnProperty(property)) {
    setOwnProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

let checkBethConstructor = beth.constructor === Faculty;

//constructor property is a reference to the constructor function that created the instances
function joinBird(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}

//since the constructor property can be overwritten it is generally better to use the instanceof method to check the type of an object

//Change the prototype to a new object
//A more efficient way is to get the prototype to a new object that already containing properties. Properties are all added at once.

Bird.prototype = {
  numLegs: 2,
  cat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};

//Remember to set the constructor property when changing the prototype
duck.constructor = Bird; //false
duck.constructor === Object; //true
//duck instance of Bird        //true

//Whenever a prototype is set manually also define the constructor property
Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};

//Where Objects's Prototype comes from
//Objects inherit its prototype directly from the constructor function that enable it

Bird.prototype.isPrototypeOf(duck); //duck is the object

//Prototype Chain
//All javascript objects have prototype
//Object's prototype is itself an object and can have its own prototype.

//Prototype of Bird.prototype is Object prototype
duck.hasOwnProperty("name");

//hasOwnProperty is defined in Object.prototype which can be accessed by duck
// chain:   Object -> Bird -> Duck
//Object is a supertype for all objects in Javascript

//Use inheritance for (DRY) = don't repeat yourself
Bird.prototype = {
  constructor: Bird,
  describe: function () {
    console.log("My name is " + this.name);
  },
};

Dog.prototype = {
  constructor: Dog,
  describe: function () {
    console.log("My name is " + this.name);
  },
};

//Describe method (function) is describe twice. Create a supertype to house the method

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  describe: function () {
    console.log("My name is " + this.name);
  },
};

//Remove describe method/function to both instances

Bird.prototype = {
  // constructor = Bird
};

Dog.prototype = {
  constructor: Dog,
};

//Inherit behaviors from a supertype
//1st create an instance of supertype

let animal = new Animal(); //has disadvantages
//let animal = Object.create(Animal.prototype);

//animal.eat();
animal instanceof Animal;

//create 2 instance (transfer describe methods)
//let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

//Set the child prototype to an instance of the parent
Bird.prototype = Object.create(Animal.prototype);

//The bird has inherited properties of Animal
//let duck = new Bird ("Donald");
//duck.eat();

//duck inherits all of Animals properties including the eat method

//Reset an inherited constructor property
//When an object inherit its prototype from another object, it also inherits the supertypes constructor property

function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
//let duck = new Bird()
duck.constructor;

//But duck and all instances of Bird should show that they were constructed by Bird
//and not animal. To do so you manually set the constructor property of Bird if Bird Object

Bird.prototype.constructor = Bird;
duck.constructor;

//Add methods after inheritance
//A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited method
//In addition to what is inherited from Animal, add a behavior that is unique to bird

Bird.prototype.fly = function () {
  console.log("I'm flying");
};

//Instances of bird will have both eat() and fly methods
//let duck = new Bird;
duck.eat(); //'nom nom nom'
duck.fly(); //I'm flying

ChildObject.prototype = Object.create(ParentObject.prototype);

//Constructor function from start to finish
function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log("Woof");
};

//let beagle = new Dog()
beagle.eat();
beagle.bark();

//Override Inherited Methods
ChildObject.prototype = Object.create(ParentObject.prototype);
ChildObject.prototype.methodName = function () {};

//We override by adding a method to ChildObject.prototype using the same method name as the one to override
function Animal() {}
Animal.prototype.eat = function () {
  return "nom nom nom";
};

function Bird() {}
Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function () {
  return "peck peck peck";
};

//let duck = new Bird();

//Interpretation
//duck => Is eat() defined here? No
//Bird => Is eat() defined here? Yes - execute and stop searching
//Animal => Is eat() define here? Yes but the code stop at bird
//Object => Javascript stopped search before reacting level

//Use a mixin to add common behavior between unrelated objects
//Inheritance doe not work well for unrelated objects Bird of Airplane
//Unrelated objects its better to use maxims

let fluMixin = function (obj) {
  obj.fly = function () {
    console.log("flying woosh");
  };
};

//The flyMixin takes an object and gives it to fly method

let bird = {
  name: "Donald",
  numLegs: 2,
};

let plane = {
  model: "777",
  numPassenger: 524,
};

flyMixin(bird);
flyMixin(plane);

bird.fly();
plane.fly();

//Use closure to protect properties within an object from being modified externally
///The simplest way to make this public property private is by creating a variable within the constructor function

function Bird() {
  let hatchedEgg = 10;
  this.getHatchedEggCount = function () {
    return hatchedEgg;
  };
}

//let duck = new Bird()
duck.getHatchedEggCount();

//getHatchedEggCount is a privilledge method it has access to the private variable hatchegg
//function always has access to the context in which it was created - closure

//Immediately Invoked Function Expression IIFE

(function () {
  console.log("run now");
})();

//Use IIFE to create a module

function glideMixin(obj) {
  obj.glide = function () {
    //console.log('Gliding on the water');
  };
}

function flyMixin(obj) {
  obj.fly = function () {
    //console.log('flying, woosh');
  };
}
