const textInTextarea = document.getElementById("text-input");
const pText = document.getElementById("char-count")
let typedText;
let char;
textInTextarea.addEventListener("input", () => {
    if (textInTextarea.value.length > 50) {
        textInTextarea.value = textInTextarea.value.slice(0, 50);
    }
    typedText = textInTextarea.value;
    char = typedText.length;
    
    console.log(`Real time text: ${typedText}`)
    
    pText.innerHTML = `Character Count: ${char}/50`
    if(char < 50){
        pText.style.color = "green"
    }
    else{
        pText.style.color = "red";
        
    }
    console.log(char)
})
