// Palindrome Checker
// Return true if the given string is a palindrome, otherwise return false

function palindrome(str) {
  let lowCaseStr = str.toLowerCase();
  let regexStr = /\W|_/g;
  let letterStr = lowCaseStr.replace(regexStr, "");
  let letterArray = [];
  return letterStr;
}

console.log(palindrome("SIFISO"));

// Caesars Cipher
// One of the simplest and most widely know ciphers is a caesar cipher, also known as a shift cipher
// In a shift cipher meanings of the letters are shifted by some set amount

function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let newStr;
  return alphabet;
}

console.log(rot13("sifiso"));
