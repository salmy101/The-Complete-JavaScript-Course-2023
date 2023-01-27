"use strict";

function calcTip(bill) {
  console.log(bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20)
}

// calcTip(100);

const bills = [125, 555, 44];

let tips = [];

tips.push(calcTip(125))
console.log(tips)
