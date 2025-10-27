//Variables
const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");
 

//Test Block
/*let word = "dog";
let sentence = "The dog chased another dog.";
let regex1 = new RegExp(word, "g");
console.log(regex1)
console.log(sentence.match(regex1));*/
const reg = /\d+/;
console.log(reg.test("Gu1n34 P1g5"))


//Function
function getFlags() {
  //console.log(`caseInsensitive : ${caseInsensitiveFlag.checked}`);
  //console.log(`globalFlag : ${globalFlag.checked}`)
  if (caseInsensitiveFlag.checked && globalFlag.checked){
    return "ig";
    
  }
  else if (globalFlag.checked && caseInsensitiveFlag.checked === false){
    return "g";
  }
  else if (caseInsensitiveFlag.checked && globalFlag.checked === false){
    return "i"
  }
  else{
    return "";
  }
} 

//Event Listeners
testButton.addEventListener("click", () => {
  const flag = getFlags();
  const regex = new RegExp(regexPattern.value, flag);   
  console.log(flag);
  console.log(regex);
  console.log(stringToTest.innerHTML);
  if (regex.test(stringToTest.innerHTML)){
    console.log("it works"); 
    testResult.innerText = stringToTest.innerHTML;
    stringToTest.innerHTML = stringToTest.innerHTML.replace(regex, match => `<span>${match}</span>`);
    console.log(stringToTest.innerHTML);
    let spanEl = document.createElement("span");
    spanEl.textContent = stringToTest.textContent;
    stringToTest.innerHTML = "";
    spanEl.setAttribute("class","highlight")
    stringToTest.appendChild(spanEl);
      
  }
  else{
    console.log("doesn't work");
    testResult.innerText = "no match"
    
    const addedSpan = document.querySelector(".highlight")
    if (stringToTest.contains(addedSpan)){
      stringToTest.removeChild(addedSpan)
    }
    
  }
})