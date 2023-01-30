const salmaArray = [
  "Salma",
  "Ibrahim",
  23,
  1999,
  "developer",
  ["cc", "sunny", "SJ", "Q", "PIC"],
];

/*
multiple related elements in one variable called salmaArray
there is an array within an array, there is no way to anme things in ana rray, we can only reference by order num
so we have a data type called OBJECTS
*/

const salma = {
  firstName: "Salma",
  lastName: "Ibrahim",
  age: 2,
  job: "developer",
  siblings: ["cc", "sunny", "SJ", "Q", "PIC"],
};
/*group together diff varibale that belong together , but here order does not matter in
in order to retrieve them. Array ==> ordered data, OBJECTS ==> unstrectures but Like data */

//HOW TO RETIEVE+ CHANGE  DATA FROM OBJECTS

console.log(salma); 
console.log(salma.firstName); 
console.log(salma['lastName']); // bracket notation , uses the key in string form
// we can compute any key here 

const nameKey = "Name"
console.log(salma['first' + nameKey]) //returns the 'firstName' key
console.log(salma['last' + nameKey])



