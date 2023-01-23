const dolphinAve = (97 + 112 + 86) / 3;
const koalasAve = (109 + 95 + 78) / 3;

console.log(dolphinAve, koalasAve)

if(dolphinAve > koalasAve && dolphinAve >= 100 ) {
  console.log(`The Dolphn team won the competition with an average score of
  ${Math.floor(dolphinAve)}, and the Koalas Team lost with an average score of ${Math.floor(koalasAve)}.`)
} else if(koalasAve > dolphinAve && koalasAve >= 100) {
  console.log(`The Koalas Team won the competition with an average score of ${Math.floor(koalasAve)}. The Dolphn team lost with an average score of
  ${Math.floor(dolphinAve)}`)
} else if(dolphinAve === koalasAve && dolphinAve >=100 && koalasAve >= 100) {
  console.log(`There has been a tie between the Dolphins and the Koalas!`)
} else {
  console.log("no winner, both below 100")
}//the last scenario would logically be a tie so no need for the else block