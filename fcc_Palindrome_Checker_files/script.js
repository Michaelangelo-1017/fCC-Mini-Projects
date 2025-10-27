//Variables for the program
const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const resetBtn = document.getElementById("reset-btn");
const regex1 = /_{1,}|\W{1,}/g;
const regex2 = /\d{1,}/;
const regex3 = /_{0,}|\s{0,}|/
let replacedWord = "";

//Test block
/*let testWord = "_&*(pap_$"
console.log(regex1.test(testWord))
console.log(testWord)
let value = true;

console.log(`Original replacedWord is: ${replacedWord}`)
if(regex1.test(testWord)){
  replacedWord = testWord.replace(regex1, "");
  console.log(`First modification of replacedWord is: ${replacedWord}`);
  do{
    replacedWord = replacedWord.replace(regex1, "");
    console.log(`Second modification of replacedWord is: ${replacedWord}`);
}while(regex1.test(replacedWord));
    
  }
console.log(`Final replacedWord is: ${replacedWord}`);*/

//Function for checking
function palindromeChecker(word){
    if(word.trim() === ""){
        alert("Please input a value");
        return false;
    }
    /*else if(regex2.test(word)){
        alert("Please do not input numbers");
        return false;
    }*/
    else{
        //alert("This passes");
        if(regex1.test(word)){
            console.log("There are foreign characters");
            replacedWord = word.replace(regex1, "");
            console.log(`replaced word is ${replacedWord}`)
            const charArray = replacedWord.toLowerCase().split("");
            
            const reversedString = charArray.reverse().join("");
            console.log(`replaced word is ${replacedWord} and reversed string is ${reversedString}`)
            return replacedWord.toLowerCase() === reversedString
        }
        else{
            console.log("There are no foreign characters");
            const charArray = word.toLowerCase().split("");
            const reversedString = charArray.reverse().join("");
            console.log(`The word is ${word} and reversed string is ${reversedString}`)
            console.log(word.toLowerCase() === reversedString);
            return word.toLowerCase() === reversedString;
        }
    }
}

//Event Listener for button
checkBtn.addEventListener("click", () => {
    (palindromeChecker(textInput.value)) ? result.innerText = `${textInput.value} is a palindrome` : result.innerText = `${textInput.value} is not a palindrome`;
    resetBtn.style.display = "flow-root";
});
resetBtn.addEventListener("click", () => {
    result.innerText = "";
    resetBtn.style.display = "none";
    textInput.value = "";
})