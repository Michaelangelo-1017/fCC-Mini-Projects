//Variables
const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultText = document.getElementById("result");
const resetBtn = document.getElementById("reset-btn");
const regexSymbols = /[\W|_|\s]{1,}/g;
let reversedWord = "";


//Test Block
/*const testWord = " _ey$e"
console.log(regexSymbols.test("eye"));
const cleanWord = testWord.replaceAll(regexSymbols, "");
console.log(`cleanWord is ${cleanWord}`)
const charArray = cleanWord.toLowerCase().split("");
console.log(`charArray is ${charArray}`);
const reversedArray = charArray.reverse()
console.log(`reversedArray is ${reversedArray}`)
reversedWord = reversedArray.join("");
if(reversedWord === cleanWord.toLowerCase()){
  console.log("it is a palindrome");
}
else{
  console.log("it is not a palindrome");
}*/

//Palindrome checker Function Creation
function palindromeChecker(word){
  if(word.trim() == ""){
    alert("Please input a value");
    return false;
  }
  else if(regexSymbols.test(word)){
    alert("It passes but with symbols");
    const cleanWord = word.replaceAll(regexSymbols, "")
    const charArray = cleanWord.toLowerCase().split("");
    const reversedArray = charArray.reverse()
    reversedWord = reversedArray.join("");
    if(reversedWord === cleanWord.toLowerCase()){
      return true;
    }
    else{
      return false;
    }
    
  }
  else{
    alert("It passes without symbols");
    const charArray = word.toLowerCase().split("");
    const reversedArray = charArray.reverse()
    reversedWord = reversedArray.join("");
    if(reversedWord === word.toLowerCase()){
      return true;
    }
    else{
      return false;
    }
  }
}


//Event Listener for Check Button
checkBtn.addEventListener("click", () => {
  if(palindromeChecker(textInput.value)){
    resultText.innerText = `${textInput.value} is a palindrome`
  }
  else{
    resultText.innerText = `${textInput.value} is not a palindrome`
  };
  resetBtn.style.display = "initial"
});

//Event Listener for Reset Button
resetBtn.addEventListener("click", () => {
  resultText.innerText = "";
  textInput.innerText = "";
  resetBtn.style.display = "none";
}) 