function generateValues(){
  const red = Math.floor(Math.random() * (256 - 0)) + 0;
  const green = Math.floor(Math.random() * (256 - 0)) + 0;
  const blue = Math.floor(Math.random() * (256 - 0)) + 0;
  const array = [];
  array.push(red,green,blue);
  return array;
}

console.log(205 % 16)

function convertToHex(number){
  const hexArray = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
  const firstDigit = Math.trunc(number / 16);
  const secondDigit = number % 16;
  return hexArray[firstDigit] + hexArray[secondDigit]
}           

function generateHex(color) {
  if(color !== "red" && color !== "green" && color !== "blue"){
    return "Invalid color"
  }
  let itsGreater = true;
  let rgbArray;
  let colorOutput;
  while(itsGreater){
    rgbArray = generateValues();
    if(color === "red"){
      const [red,green,blue] = rgbArray;
      if(red > blue && red > green){
        console.log(rgbArray)
        const redString = convertToHex(red);
        const blueString = convertToHex(blue);
        const greenString = convertToHex(green);
        colorOutput = redString + greenString + blueString;
        itsGreater = false;
      }
    }
    else if(color === "green"){
      const [red,green,blue] = rgbArray;
      if(green > blue && green > red){
        const redString = convertToHex(red);
        const blueString = convertToHex(blue);
        const greenString = convertToHex(green);
        colorOutput = redString + greenString + blueString;
        itsGreater = false;
      }
    }
    else if(color === "blue"){
      const [red,green,blue] = rgbArray;
      if(blue > green && blue > red){
        const redString = convertToHex(red);
        const blueString = convertToHex(blue);
        const greenString = convertToHex(green);
        colorOutput = redString + greenString + blueString;
        itsGreater = false;
      }
    }
  }
  return colorOutput;
}

const result = generateHex("red");
console.log(result)