// 1. Candies
// Determine how many pieces of candy will be eaten by all the children together
// Individual pieces of candy can not be split

function childCandy(child, candy) {
  let numberOfCandies = Math.floor(candy / child);
  return numberOfCandies * child;
}

childCandy(3, 14);

console.log("sifiso dhlamini");

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

console.log(depositProfit(100, 20, 170));
