//My Solution
function chunkArrayInGroups(array,number){
  let finalArray = [];
  let firstChunk = array.splice(0,number);
  finalArray.push(firstChunk)
  console.log(array)
  let numberOfChunksLeft = Math.round(array.length / number);
  if(array.length > number && number % 2 == 0){
    for(let i = 0; i < numberOfChunksLeft; i++){
      finalArray.push(array.splice(0,number));
      console.log(`This is the array at this stage of the loop1: `, array);
    }
  }
  else if(array.length > number && number % 2 != 0){
    for(let i = 0; i < numberOfChunksLeft; i++){
      finalArray.push(array.splice(0,number));
      console.log(`This is the array at this stage of the loop2: `, array);
    }
  }
  else if(array.length === 0){
    console.log(`This is the array at this stage for condition3: `, array);
    return finalArray
  }
  else{
    console.log(`This is the array at this stage for condition4: `, array)
    finalArray.push(array.splice(0));

  }
  console.log(array);
  if(array.length !== 0){
    finalArray.push(array);
  }
  return finalArray;
}
const result = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8] , 10)
console.log(result);

//ChatGpt's Solution
/*function chunkArrayInGroups(array, number) {
  let finalArray = [];

  while (array.length > 0) {
    finalArray.push(array.splice(0, number);
  }

  return finalArray;
}*/