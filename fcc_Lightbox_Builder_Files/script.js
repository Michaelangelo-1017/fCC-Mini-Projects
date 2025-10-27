const gallery = document.querySelector(".gallery");
const theLightBox = document.querySelector(".lightbox")
const lightboxImage = document.getElementById("lightbox-image")
const galleryItem = document.querySelectorAll(".gallery-item");
const closeBtn = document.getElementById("close-btn");
//console.log(galleryItem)
/*gallery.addEventListener("click",(e) => {
  if (e.target.classList.contains("gallery-item")){
    theLightBox.style.display = "flex";
  };
}) */ 

galleryItem.forEach((img) => {
  img.addEventListener("click", () => {
    theLightBox.style.display = "flex";
    const originalSrc = img.src;
    const updatedSrc = originalSrc.replace("-thumbnail", "");
    lightboxImage.src = updatedSrc;
    console.log(`The original src was: ${originalSrc}, now the src is ${img.src}`);
  })
}); 

closeBtn.addEventListener("click", () => {
  if(theLightBox.style.display == "flex"){
    theLightBox.style.display = "none";
  }
});

theLightBox.addEventListener("click", () => {
  if(theLightBox.style.display == "flex"){
    theLightBox.style.display = "none";
  }
});

