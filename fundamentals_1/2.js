const BMI1 = 78 / 1.69 ** 2;
const BMI2 = 92 / 1.95 ** 2;

// bmiCalculation = () => {
//   if(BMI1 > BMI2) {
//     console.log(`Mark's BMI:${BMI1}, is higher than John's${BMI2}!`)
//   } else{
//     console.log(`\John's BMI:${BMI2}, is higher than Mark's BMI:${BMI1}!`)
//   };
// }

// bmiCalculation();

//No need to wite an entire function to make an if/else block of code ;)

if (BMI1 > BMI2) {
  console.log(`Mark's BMI:${BMI1}, is higher than John's${BMI2}!`); //template literals to add variables :)
} else {
  console.log(`John's BMI:${BMI2}, is higher than Mark's BMI:${BMI1}!`);
}
