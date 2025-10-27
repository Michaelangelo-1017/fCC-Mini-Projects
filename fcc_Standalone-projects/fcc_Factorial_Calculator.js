const num = 11;
function factorialCalculator(number){
  let result = 1;
  /*for(let i = 1; i <= number; i++){
    result *= i;
  }*/
  let i = 1;
  while(i <= number){
    result *= i;
    i++;
  }
  return result;
}

let factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
console.log("I am a boy");