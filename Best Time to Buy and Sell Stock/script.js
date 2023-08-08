"use strict";
const prices = [4, 1, 5, 2, 7];
// const prices = [7, 1, 5, 3, 6, 4];
// const prices = [7,6,4,3,1];

const maxProfit = function (prices) {
  let maximumProfit = 0;
  let cheapestPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < cheapestPrice) cheapestPrice = prices[i];
    const curProfit = prices[i] - cheapestPrice;
    maximumProfit = curProfit > maximumProfit ? curProfit : maximumProfit;
  }

  return maximumProfit;
};
console.log(maxProfit(prices));
