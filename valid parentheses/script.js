"use strict";
const x = -121;

const palindromeNumber = function (x) {
  const palindrome = x.toString();
  const reverseString = palindrome.split("").reverse().join("");
  return palindrome === reverseString ? true : false;
};
console.log(palindromeNumber(x));
