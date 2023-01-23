//TYPE CONVERSION = explicitly want to convert from one type to another

const inputYear = '1991'
//if we want to convert when thye turn 18 we do:
console.log(inputYear + 18)
//output = 199118 !!! not what we want

console.log(Number(inputYear)) //now it is a number and not a string
//BUT....
console.log(inputYear + 18)
/* still is 199118...why => Because the original value is not changes we need to store
it in a variable */
const convertedInputYear = Number(inputYear);

console.log(convertedInputYear)

console.log(convertedInputYear + 18) //wonderful, we have dont type conversion from a string  to a number
//OR this
console.log(Number(inputYear) + 18)



//will this work?
console.log(Number('Jonas')) //no we get Nan, cannot change something that doenst have a number in to to a num
console.log(typeof NaN) // NaN is a number

console.log(String(23)) // "23", white values in the terminal are strings, and yellow are numbers
console.log(String(23), 23) 

/*************************************/

//TYPE COERCION = happens when an operator is between with two value of differnt tyes

console.log("I am " + 23 + "years old")//how did it make the num a string ... because the operatro triggers the coecrerion and the num is 
//always converted to a string. the plus sign changes the num to string

console.log('23' - '10' - 3) //converts the strings into numbers, the minus will chage the strings to nums
console.log('23' + '10' + 3) // changes the 3 to a string, and concatenates = 23103

console.log('20' * '2')


let n = '1' + 1 //will chnage into  string and concatenate into => '11'
n = n - 1 //will chage into a num and subtract 11 - 1 => 10
console.log(n) 