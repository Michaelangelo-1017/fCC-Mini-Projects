//This function has 3 parameters(character, integer and boolean), the character parameter represents the character that would be repeated to make the pyramid, the integer parameter represents the number of rows in the pyramid and the boolean takes in either true or false, if it's false the tip/vertex of the pyramid faces up and if it's true the tip/vertex faces the bottom.
function pyramid(character,integer,boolean){
  let storedPyramid = "";
  let count;
  let space = " ";
  if(boolean === false){
    for(let i = 1;i <= integer; i++){
        //the if helps to start the first row since there needed to be a new line on top of the pyramid
      if(i == 1){
        //console.log(character.repeat(i)) //this acted as a checker

        //space.repeat(integer - 1) makes sure that the characters are align in the center by adding spaces to the front of them depending on what the integer is

        storedPyramid = "\n" + space.repeat(integer - 1) + character.repeat(i) + "\n"
      }
      //the else takes care of the rest of the rows, making sure each iterable starts on a new line
      else{ 
        count = i * 2 - 1;
        //console.log(character.repeat(count)) //this acted as a checker

        //I used count instead of "i" for the repeat here because the "i" had to increase by 1 but the repeated pattern had to be increased through a calculation

        storedPyramid += space.repeat(integer - i) + character.repeat(count) + "\n"
      }
    }
  }
  else if(boolean === true){
    for(let j = integer; j > 0; j--){
      if(j == integer){
        count = j * 2 - 1;
        storedPyramid += "\n" + space.repeat(integer - j) + character.repeat(count) + "\n"
      }
      else{
        count = j * 2 - 1;
        storedPyramid += space.repeat(integer - j) + character.repeat(count) + "\n"
      }
    }
  }
  return storedPyramid;
}

const pyramidResult = pyramid("o",-1,true)
console.log(pyramidResult)

//This code below was produced by chatgpt as a more efficient version of my code above
//Chatgpt replaced my integer and boolean parameter names with height and inverted, which actually makes more sense now that I think about it
/*
function pyramid(character, height, inverted) {
    
  let result = "\n";

  for (let i = 0; i < height; i++) {
  //chatgpt created a level variable which used a ternary conditional to arrange the pyramid i.e whether the tip/vertex has to be at the top or bottom, which is smart because it prevented the need for separating them and running similar codes differently
    const level = inverted ? height - i - 1 : i;
    const spaces = " ".repeat(height - level - 1);
    const chars = character.repeat(level * 2 + 1);
    result += spaces + chars + "\n";
  }

  return result;
}

console.log(pyramid("o", 4, false)); // upright
console.log(pyramid("o", 4, true));  // inverted
*/