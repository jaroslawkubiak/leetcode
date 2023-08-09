"use strict";
// const s = "abcabcbb"; // 3 abc
// const s = "pwwkew"; //3 wke
const s = "dvdf"; //3 vdf
// const s = " "; //1

const substring = function (s) {
  let longest = "";
  const indexList = {};
  let currString = "";
  if (s.length == 1) return s.length;

  for (let i = 0; i < s.length; i++) {
    if (!currString.includes(s[i])) {
      currString += s[i];
      indexList[s[i]] = i;
    } else {
      //string zawiera już ten znak
      longest = currString.length > longest.length ? currString : longest;
      currString = s.slice(indexList[s[i]] + 1, i + 1);
      indexList[s[i]] = i;
    }
  }
  longest = currString.length > longest.length ? currString : longest;
  return longest.length;
};
console.log(`LONGEST: ${substring(s)}`);
