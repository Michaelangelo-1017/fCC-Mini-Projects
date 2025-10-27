document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".favorite-icon");
  const lists = document.querySelector("li");
  /*function classToggler(element){
    if (element.classList.contains("filled")){
      console.log("It contains filled already");
      element.classList.toggle("filled");
      console.log("filled removed")
    }
    else{
      console.log("There is no filled in the element's class");
      element.classList.toggle("filled");
      console.log("filled added");
    }
  }*/

  buttons.forEach(button => {
    button.addEventListener("click", (event) => {
    if (event.target.classList.contains("filled")){
      console.log("It contains filled already");
      button.classList.toggle("filled");
      button.innerHTML = "&#9825;"
      console.log("filled removed")
    } 
    else{
      console.log("There is no filled in the element's class");
      event.target.classList.toggle("filled");
      button.innerHTML = "&#10084;"
      console.log("filled added");
    }
  })
})
  
console.log(buttons);
  /*
  // Select all buttons in the list
const buttons = document.querySelectorAll('button');

// Loop through each button and add an event listener
buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(`Button with text "${button.textContent}" was clicked!`);
  });
});*/

})
