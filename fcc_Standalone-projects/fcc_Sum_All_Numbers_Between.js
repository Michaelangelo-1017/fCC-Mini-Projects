function sumAll([a,b]){
  let sum = 0;
  if (a > b){
    for(let i = a; i >= b; i--){
      sum += i
    }
  }
  else if(b > a){
    for(let i = b; i >= a; i--){
      sum += i
    }
  }
  else{
    sum = a + b;
    console.log("The 2 numbers are the same.")
  }
  return sum;
};

const result = sumAll([7,3]);
console.log(result);
