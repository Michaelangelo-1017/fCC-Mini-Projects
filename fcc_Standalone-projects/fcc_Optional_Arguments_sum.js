function addTogether(num1, num2){
    if(typeof(num1) === "number" && typeof(num2) === "number"){
        return num1 + num2
    }
    if(typeof(num1) !== "number" || (typeof(num2) !== "number" && arguments.length == 2)){
        return undefined
    }
    if(num2 === undefined){
        return function sum(num){
            if(typeof(num) === "number"){
                return num1 + num
            }
        }
    }
}

const test = addTogether(2)([7]);
console.log(test)