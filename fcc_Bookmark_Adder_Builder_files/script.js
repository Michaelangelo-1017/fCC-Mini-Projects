//variables
const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const addBookmarkBtn = document.getElementById("add-bookmark-button");
const categoryDropdown = document.getElementById("category-dropdown");
const closeFormBtn = document.getElementById("close-form-button");
const addBookmarkBtnForm = document.getElementById("add-bookmark-button-form");
const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url")
const bookmarkListSection = document.getElementById("bookmark-list-section");
const viewCategoryBtn = document.getElementById("view-category-button");
const categoryList = document.getElementById("category-list");
const closeListBtn = document.getElementById("close-list-button");
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button");
const categoryName1 = document.querySelector("#form-section .category-name");
const categoryName2 = document.querySelector("#bookmark-list-section .category-name");

//Functions
localStorage.removeItem("bookmarks")
/*function getBookmarks(){
  const bookmarksData = JSON.parse(localStorage.getItem("bookmarks"));
  if(bookmarksData === null || bookmarksData.length === 0){
    console.log(Array.isArray(bookmarksData) === false)
    return [];
  }
  else{
    const isBookmarkValid = (item)=> typeof item === "object" && ["name","category","url"].every(prop=>item.hasOwnProperty(prop));
    if(!bookmarksData.every(isBookmarkValid)){
      return [];
    }
    else{
      return bookmarksData;
    }
  }
}*/

function getBookmarks() {
  let bookmarksData;

  try {
    bookmarksData = JSON.parse(localStorage.getItem("bookmarks"));
  } catch (e) {
    // If JSON is malformed
    return [];
  }

  if (!Array.isArray(bookmarksData)) {
    return [];
  }

  const isBookmarkValid = (item) =>
    item &&
    typeof item === "object" &&
    ["name", "category", "url"].every((key) =>
      Object.prototype.hasOwnProperty.call(item, key)
    );

  if (!bookmarksData.every(isBookmarkValid)) {
    return [];
  }

  return bookmarksData;
}

function displayOrCloseForm(){
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden"); 
}

function updateBookmarks(){
  const objectToAdd = {
    name: nameInput.value,
    category: categoryDropdown.value,
    url: urlInput.value
  }
  const myBookmarks = getBookmarks();
  myBookmarks.push(objectToAdd);
  localStorage.setItem("bookmarks",JSON.stringify(myBookmarks));
}

function resetValues(){
  nameInput.value = "";
  urlInput.value = "";
}

function displayOrHideCategory(){
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}

/*function deleteBookmark(){
  const radios = categoryList.querySelector('input[type="radio"][name="bookmark"]:checked');
  if(radios === null){
    console.log("Nothing to see here");
    return;
  }
  else{
    console.log("Some are checked")
    const myBookmarks = getBookmarks();
    const labelAss = categoryList.querySelector(`label[for="${radios.id}"]`)
    const dataArrIndex = myBookmarks.findIndex(
    (item) => item.name === radios.id);
    console.log(dataArrIndex)
    radios.remove();
    labelAss.remove();
    myBookmarks.splice(dataArrIndex, 1);
    localStorage.setItem("bookmarks", JSON.stringify(myBookmarks));
  } 
}*/

function deleteBookmark() {
  const selectedRadio = categoryList.querySelector('input[type="radio"][name="bookmark"]:checked');

  if (!selectedRadio) {
    console.log("Nothing is selected");
    return;
  }

  const myBookmarks = getBookmarks();
  const selectedName = selectedRadio.value;
  const selectedCategory = categoryName2.innerText.toLowerCase();

  // Find and remove the matching bookmark
  const updatedBookmarks = myBookmarks.filter(
    bookmark => !(bookmark.name === selectedName && bookmark.category === selectedCategory)
  );

  // Update localStorage
  localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

  // Refresh displayed bookmark list
  const remaining = updatedBookmarks.filter(item => item.category === selectedCategory);

  if (remaining.length === 0) {
    categoryList.innerHTML = `<p>No Bookmarks Found</p>`;
  } else {
    categoryList.innerHTML = "";
    remaining.forEach(item => {
      categoryList.innerHTML += `
        <div class="radio-container">
          <input type="radio" id="${item.name}" value="${item.name}" name="bookmark">
          <label for="${item.name}"><a href="${item.url}">${item.name}</a></label>
        </div>`;
    });
  }
}

//Event Listeners
addBookmarkBtn.addEventListener("click", ()=>{
  categoryName1.innerText = categoryDropdown.value.charAt(0).toUpperCase() + categoryDropdown.value.slice(1);
  displayOrCloseForm();   
})  

closeFormBtn.addEventListener("click",displayOrCloseForm);

addBookmarkBtnForm.addEventListener("click",()=>{
  if(!nameInput.value.trim()){
    alert("Please input a name");
    nameInput.style.borderColor = "red";
  }
  if(!urlInput.value.trim()){
    alert("Please input a url link");
    urlInput.style.borderColor = "red";
  }
  if(nameInput.value.trim() && urlInput.value.trim()){
    updateBookmarks();
    resetValues();
    displayOrCloseForm();
    urlInput.style.borderColor = "lime";
    nameInput.style.borderColor = "lime";
  }
  
})

viewCategoryBtn.addEventListener("click", ()=>{
  categoryName2.innerText = categoryDropdown.value.charAt(0).toUpperCase() + categoryDropdown.value.slice(1);
  const myBookmarks = getBookmarks();
  if(myBookmarks.every(item=> item.category != categoryDropdown.value)){ 
    categoryList.innerHTML = `<p>No Bookmarks Found</p>`
  } 
  else{
    categoryList.innerHTML = "";
    const containsCategory = myBookmarks.filter(item=> item.category === categoryDropdown.value)
    containsCategory.forEach(item=> {
      categoryList.innerHTML += 
      `
      <div id="radio-container">
        <input type="radio" id="${item.name}" value="${item.name}" name="bookmark">
        <label for="${item.name}"><a href="${item.url}">${item.name}</a></label>
      </div> 
      ` 
    })
  }
  displayOrHideCategory();
})

closeListBtn.addEventListener("click", displayOrHideCategory);

deleteBookmarkBtn.addEventListener("click",deleteBookmark)