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
  return splitStr;
}

console.log(reverseString("DHLAMINI"));
