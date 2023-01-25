'use strict'; 



// function calcAve(arr) {
  //  const  sum = arr.reduce( (a, b) =>  a + b, 0); //(reduce with default value of 0)
  //   console.log(sum / arr.length) 
  // }
  const calcAve = (a, b, c) => (a + b + c) / 3; //automatic return in arrow function

let aveDolphins = calcAve(44,23,71)
let aveKoalas = calcAve(65, 54, 49)

console.log(aveDolphins,aveKoalas)



function checkWinner(aveDolphins, aveKoalas) {
  if (aveDolphins >=  2 * aveKoalas) {
    console.log(`Dolphins win ${aveDolphins} vs. ${aveKoalas}`)
  } else if(aveKoalas >=  2 * aveDolphins) {
    console.log(`Koalas win ${aveKoalas} vs. ${aveDolphins}`)
  } else {
    console.log(`no winner :(`)
  }
}

checkWinner(aveDolphins, aveKoalas);

//TEST 2
aveDolphins = calcAve(85, 54, 41)
aveKoalas = calcAve(23, 34, 27)
console.log("TEST 2",aveDolphins,aveKoalas)
checkWinner(aveDolphins, aveKoalas);

