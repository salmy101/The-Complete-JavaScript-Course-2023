"use strict";

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
}

// calcTip(100);

const bills = [125, 555, 44];

let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];



console.log("BILL:", bills, "TIPS:", tips)
