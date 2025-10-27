function mutation(array){
  let firstElement = array[0].toLowerCase();
  let secondElement = array[1].toLowerCase();
  let trueOrFalse;
  for(const letters of secondElement){
    if(firstElement.includes(letters) == true){
      console.log("letter found");
      trueOrFalse = true;
    }
    else{
      console.log("letter not found");
      trueOrFalse = false; 
    }
    if(trueOrFalse == false){
      break;
    }
  }
  return trueOrFalse;
}

const checker = mutation(["hello", "Hey"]);
console.log(checker)