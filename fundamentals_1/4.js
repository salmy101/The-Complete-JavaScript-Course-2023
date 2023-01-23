//conditional operator / ternary

// const bill = 275;
// const bill = 40;
const bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`the bill was ${bill}, the tip is ${tip}, so the total is ${bill + tip}`)