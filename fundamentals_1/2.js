const BMI1 = 78 / (1.69 ** 2);
const BMI2 = 92 / (1.95 ** 2);

bmiCalculation = () => {
  if(BMI1 > BMI2) {
    console.log(`Mark's BMI:${BMI1}, is higher than John's${BMI2}!`)
  } else{
    console.log(`\John's BMI:${BMI2}, is higher than Mark's BMI:${BMI1}!`)


  };
}

bmiCalculation();