function isUnnaturalPrime(n) {
    if(Math.abs(n) === 0 || Math.abs(n) === 1){
        return false
    }
    let count = 0
    for(let i = 1; i <= Math.abs(n); i++){
        if(Math.abs(n) % i === 0){
        count++
        }
    }
    console.log(count);
    if(count > 2){
        return false;
    }
    else{
        return true;
    }
}

const test = isUnnaturalPrime(-44);
console.log(test)