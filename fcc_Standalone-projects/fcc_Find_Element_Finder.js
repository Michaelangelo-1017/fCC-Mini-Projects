function findElement(arr,func){
    const trueElementsArr = arr.filter(func);
    console.log(`trueElemetsArr : ${trueElementsArr}`)
    if (trueElementsArr[0] === undefined){
        return 
    }
    else{
        return trueElementsArr[0];
    }
}

const arrCheck = findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })
console.log(arrCheck)