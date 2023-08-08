"use strict";
const s = "([}}])";

const validParentheses = function (s) {
  if (s.length % 2 == 1) {
    return false;
  }

  let arr = s.split("");
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") stack.push(")");
    else if (arr[i] === "[") stack.push("]");
    else if (arr[i] === "{") stack.push("}");
    else if (stack.slice(-1).toString() === arr[i]) stack.pop();
    else return false;
  }
  return !stack.length ? true : false;
};
console.log(validParentheses(s));
