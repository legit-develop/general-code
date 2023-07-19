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
