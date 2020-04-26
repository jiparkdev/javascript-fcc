// =================
// FreeCodeCamp Link
// =================

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

// =========
// OBJECTIVE
// =========

// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (DOLLAR)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

// ==========
// TEST CASES
// ==========

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.

let curs = {
  "ONE HUNDRED": 100,
  TWENTY: 20,
  TEN: 10,
  FIVE: 5,
  ONE: 1,
  QUARTER: 0.25,
  DIME: 0.1,
  NICKEL: 0.05,
  PENNY: 0.01,
};

function curQty(cur, val) {
  let qty = parseFloat(Math.floor(val / curs[cur])).toFixed(2);
  return qty;
}

// let curs = [
//   100,
//   20,
//   10,
//   5,
//   1,
//   0.25,
//   0.10,
//   0.05,
//   0.01
// ];

function checkCashRegister(price, cash, cid) {
  let ccid = cid.slice();
  ccid.reverse();
  let cidObj = {};
  for (let i = 0; i < ccid.length; i++) {
    cidObj[ccid[i][0]] = ccid[i][1];
  }
  let change = cash - price;
  const totalCID = ccid.reduce((acc, val) => {
    return acc + val[1];
  }, 0);
  if (totalCID < change) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  if (totalCID === change) {
    return { status: "CLOSED", change: ccid };
  }
  let pulledArr = [];
  for (let cur in curs) {
    let chgPulledAmount = dec(change, cidObj, cur);
    change = parseFloat(chgPulledAmount[0]).toFixed(2);
    if (chgPulledAmount[1][cur] > 0) {
      // console.log(change, chgPulledAmount[1]);
      pulledArr.push([cur, chgPulledAmount[1][cur]]);
    }
  }
  console.log(pulledArr);
  return { status: "OPEN", change: pulledArr };
}

function dec(change, cidObj, cur) {
  let pulledAmount = {};
  // Amount of cur dollars pulled out from the drawer.
  pulledAmount[cur] = 0;
  // How many cur dollar bills can fit into the change?
  let a = curQty(cur, change);
  // How many cur dollar bills are there in the drawer?
  let b = curQty(cur, cidObj[cur]);
  // Whichever quantity is reached first. Decrement until then.
  let counter = 0;
  while (counter < a || counter < b) {
    if (a === 0 || b === 0) {
      break;
    }
    let chgCurDiff = (change - curs[cur]).toFixed(2);
    // console.log(change, curs[cur], chgCurDiff);
    if (cidObj[cur] > 0 && chgCurDiff >= 0) {
      change -= curs[cur];
      cidObj[cur] -= curs[cur];
      pulledAmount[cur] += curs[cur];
    }
    counter++;
  }
  return [change, pulledAmount];
}

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
