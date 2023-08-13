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
  for (let i = 0; i < str.length; i++) {
    let index = alphabet.indexOf(str[i]);
    if (index >= 13) {
      newStr += alphabet[index - 13];
    } else if (index < 13 && index > -1) {
      newStr += alphabet[index + 13];
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

rot13("SERR PBQR PNZC");

// Telephone number validator
// Return true if the passed string looks like a valid US phone number

function telephoneCheck(str) {
  let regexStr = /^1?\s?(\d{3}|\(\d{3}\)-?\s?\s?\d{3}-?\s?\d{4}$)/gm;
  return regexStr.test(str);
}

telephoneCheck("555-555-555");
