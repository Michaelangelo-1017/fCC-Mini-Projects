//Variables
const generateBtn = document.getElementById("generate-btn");
const startingArr = document.getElementById("starting-array");
const arrayContainer = document.getElementById("array-container");
const sortBtn = document.getElementById("sort-btn")
let generatedArr;
let finalArr;

//Functions
const generateElement = () => {
  return Math.floor(Math.random() * (100)) + 1
}

const generateArray = () => {
  const newArray = [];
  for(let i = 1; i <= 5; i++){
    newArray.push(generateElement());
  }
  return newArray
};

const generateContainer = () => {
  const newDiv = document.createElement("div");
  return newDiv;
}

const fillArrContainer = (element, arr) => {
arr.forEach((int)=>{
   element.innerHTML += `<span>${int}</span>`
})
}

const isOrdered = (int1, int2) =>{
  return int1 <= int2;
}

const swapElements = (arr,index) =>{ 
  const int1 = arr[index];
  const int2 = arr[index+1]
  if(!isOrdered(int1,int2)){
    arr[index] = int2;
    arr[index+1] = int1;
  }
  return arr;    
}

const highlightCurrentEls = (element, index) =>{
  const spanEls = element.querySelectorAll("span")
  spanEls[index].style.border = "2px dashed red";
  spanEls[index+1].style.border = "2px dashed red";
}

const multiFunction = (arr,isFirstRun) =>{
  let arr1 = [...arr];
  const arr2 = [...arr].sort((a,b)=>a-b)
  if(arr1.every((item,index)=>item===arr2[index])){
    for(let j = 0; j < arr1.length - 1; j++){
      const newDiv = generateContainer();
      const sortArr = swapElements(arr1,j)
      fillArrContainer(newDiv,sortArr);
      arrayContainer.appendChild(newDiv);
      highlightCurrentEls(newDiv,j);
      arr1 = [...sortArr] ;
      //console.log("I think it worked")
    }
    console.log(`This is arr1 : ${arr1}.\nThis is arr2 : ${arr2.sort((a, b) => a - b)}\nIt is sorted`)
    const newDiv = generateContainer();
    fillArrContainer(newDiv,arr1);
    arrayContainer.appendChild(newDiv); 
    newDiv.style.border = "3px solid green";
    finalArr = arr1;
    return;
  }
  if(isFirstRun === true){
    highlightCurrentEls(startingArr,0);
    const newDiv = generateContainer()
    arr1 = swapElements(arr1,0)
    fillArrContainer(newDiv,arr1);
    highlightCurrentEls(newDiv,1);
    arrayContainer.appendChild(newDiv);
  }
  else{
    const newDiv = generateContainer()
    fillArrContainer(newDiv,arr1);
    arr1 = swapElements(arr1,0)
    highlightCurrentEls(newDiv,0);
    arrayContainer.appendChild(newDiv);
    console.log(`arr1 is ${JSON.stringify(arr1)} and i is : 0`);

  }
  
  for (let i = 1 ; i < arr1.length - 1; i++){
    if(i === 1 && isFirstRun === true){
      const sortArr = swapElements(arr1,i);
      arr1 = [...sortArr] ;
      const newDiv = generateContainer();
      fillArrContainer(newDiv,sortArr);
      arrayContainer.appendChild(newDiv);
      highlightCurrentEls(newDiv,2);
      console.log(`isFirstRun 1: ${isFirstRun}`)
    }
    else if(i === 2 && isFirstRun === true){
      const sortArr = swapElements(arr1,i);
      arr1 = [...sortArr] ;
      const newDiv = generateContainer();
      fillArrContainer(newDiv,sortArr);
      arrayContainer.appendChild(newDiv);
      highlightCurrentEls(newDiv,3);
      console.log(`isFirstRun 2: ${isFirstRun}`)
    }
    else if(i === 3 && isFirstRun === true){
      const sortArr = swapElements(arr1,i);
      arr1 = [...sortArr] ;
      const newDiv = generateContainer();
      fillArrContainer(newDiv,sortArr);
      console.log(`isFirstRun 3: ${isFirstRun}`)
    }
    else{
      console.log(`arr1 is ${JSON.stringify(arr1)} and i is : ${i}`)
      const newDiv = generateContainer();
      fillArrContainer(newDiv,arr1);
      const sortArr = swapElements(arr1,i)
      arrayContainer.appendChild(newDiv);
      highlightCurrentEls(newDiv,i);
      arr1 = [...sortArr] ;
      console.log(`arr1 is ${JSON.stringify(arr1)} and i is : ${i}`)
      //console.log(`Iteration No: ${i}`)
      console.log(`isFirstRun else 1: ${isFirstRun}`)
    }
  }
  isFirstRun = false;
  multiFunction(arr1,isFirstRun);
}

const multiFunction1 = (arr) =>{
  let arr1 = [...arr];
  const arr2 = [...arr].sort((a,b)=>a-b)
  if(arr1.every((item,index)=>item===arr2[index])){
    for(let j = 0; j < arr1.length - 1; j++){
      const newDiv = generateContainer();
      const sortArr = swapElements(arr1,j)
      fillArrContainer(newDiv,sortArr);
      arrayContainer.appendChild(newDiv);
      highlightCurrentEls(newDiv,j);
      arr1 = [...sortArr] ;
      console.log("I think it worked")
    }
    console.log(`This is arr1 : ${arr1}.\nThis is arr2 : ${arr2.sort((a, b) => a - b)}\nIt is sorted`)
    const newDiv = generateContainer();
    fillArrContainer(newDiv,arr1);
    arrayContainer.appendChild(newDiv); 
    newDiv.style.border = "3px solid green";
    finalArr = arr1;
    return;
  }
  /*for (let i = 0 ; i < arr1.length - 1; i++){
    const newDiv = generateContainer();
    const sortArr = swapElements(arr1,i)
    fillArrContainer(newDiv,sortArr);
    arrayContainer.appendChild(newDiv);
    highlightCurrentEls(newDiv,i);
    arr1 = [...sortArr] ;
    //console.log(`Iteration No: ${i}`)
    
  }*/
  multiFunction1(arr1);
}

//Event Listeners
generateBtn.addEventListener("click",()=>{
  startingArr.innerHTML = "";
  generatedArr = generateArray();
  fillArrContainer(startingArr, generatedArr);
  sortBtn.style.display = "inline-block"
  const allDivs = arrayContainer.querySelectorAll("div");
    allDivs.forEach(div => {
      if (div.id !== "starting-array") {
        div.remove(); // Removes the div from the DOM
      }
    });
})

sortBtn.addEventListener("click",()=>{
  if(generatedArr === undefined){
    alert("You have to generate an array first!");
    return;
  }
  
  multiFunction(generatedArr, true);  
  
})


