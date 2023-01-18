//BMI = mass / height * 2

/* 1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John. 
*/

const mass1 = 78;
const height1 = 1.69;

const mass2 = 92;
const height2 = 1.95;


const BMI1 = 78 / (1.69 ** 2);
console.log("Mark:",BMI1);

const BMI2 = 92 / (1.95 ** 2);
console.log("John:", BMI2)

// const markHigherBMI = true;
const markHigherBMI = BMI1 > BMI2
console.log(markHigherBMI)