// 1. Candies
// Determine how many pieces of candy will be eaten by all the children together
// Individual pieces of candy can not be split

function childCandy(child, candy) {
  let numberOfCandies = Math.floor(candy / child);
  return numberOfCandies * child;
}

childCandy(3, 14);

// 2. Bank Deposit
// You have deposited a specific amount of dollars into your bank account.
// Each year your balance increases at the same growth rate.
// Find out how long it would take for your balance a pass specific threshold with the assumption that you don't make any additional deposits

function depositProfit(deposit, rate, threshold) {
  let year = 0;
  let currentValue = deposit;
  while (threshold > currentValue) {
    currentValue += currentValue * (rate / 100);
    year++;
  }
  return year;
}

depositProfit(100, 20, 170);

// 3. Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size
// (second argument) and returns them as two-dimension array

function chunkyMonkey(arr, num) {
  let twoArray = [];
  let count = 0;
  while (count < arr.length) {
    twoArray.push(arr.slice(count, (count += num)));
  }
  return twoArray;
}

chunkyMonkey([2, 3, 4, 5, 6], 3);

// 4. Century Year
// Given a year, return the century it is in. The first century span from the year 1 up to and including the year 100.
// The second - from the year 101 up to and including the year 200.

function centuryYear(year) {
  let yearType = Math.floor(year / 100);
  if (yearType % 2 === 0) {
    return yearType;
  } else {
    return yearType + 1;
  }
}

centuryYear(1700);

// 5. Reverse a string
// Reverse the provided string
// You may need to turn the string into an array before you can reverse it.
// The result must be a string

function reverseString(str) {
  let lowStr = str.toLowerCase();
  let splitStr = lowStr.split("");
  let revStr = splitStr.reverse();
  return revStr.join("");
}

reverseString("SIFISO");

// 5. Sort by length
// Given an array of strings, sort them in the order of increasing length.
// If two strings have the same length, their relative order must be the same as in the initial array

function sortArray(arr) {
  return arr.sort((arr1, arr2) => arr1 - arr1);
}

sortArray([1, 2, 5, 3, 4, 2, 8, 1]);

// 6. Count Vowels Consonant
// You are given a string s that consists of only lowercase English letter.
// If vowels ('a', 'e', 'i', 'o', 'u') are given a value of 1 and consonants are given a value of 2
// return the sum of all the letters in the input string.

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const strSplit = str.split("");
  return strSplit;
}

console.log(countVowels("sifiso-dhlamini"));
