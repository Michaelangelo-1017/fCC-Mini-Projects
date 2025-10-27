//Variables
const slider = document.getElementById("myRange");
const display = document.getElementById("display");
const drumPads = document.querySelectorAll(".drum-pad")
const acceptableKeys = /[qweasdzxc]/;
 // Display the default slider value
const drumPadSounds = [
    {
        buttonId : "heater1",
        audioId : "Q",
        displayText:  "Heater 1"
    },
    {
        buttonId : "heater2",
        audioId : "W",
        displayText:  "Heater 2" 
    },
    {
        buttonId : "heater3",
        audioId : "E",
        displayText:  "Heater 3" 
    },
    {
        buttonId : "heater4",
        audioId : "A", 
        displayText:  "Heater 4"
    },
    {
        buttonId : "heater6",
        audioId : "S", 
        displayText:  "Clap"
    },
    {
        buttonId : "DscOh",
        audioId : "D", 
        displayText:  "Open-HH"
    },
    {
        buttonId : "kicknHat",
        audioId : "Z", 
        displayText:  "Kich-n'Hat"
    },
    {
        buttonId : "RP4KICK1",
        audioId : "X",
        displayText:  "Kick" 
    },
    {
        buttonId : "CevH2",
        audioId : "C", 
        displayText:  "Closed-HH"
    }
];
const userData = {
    sounds : drumPadSounds,
    currentSound : null,
    currentTime : 0
}

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    display.innerHTML = `Volume : ${this.value}`;
}

function playSound(id){
    const theSound = userData.sounds.find((sound) => sound.buttonId === id);
    /*const btnEl = document.getElementById(`${theSound.buttonId}`)
    console.log(btnEl)*/
    const audioEl = document.getElementById(`${theSound.audioId}`);
    audioEl.play();
    display.innerText = theSound.displayText
}

function playSound1(id){
  const theSound = userData.sounds.find((sound) => sound.audioId === id);
  /*const btnEl = document.getElementById(`${theSound.buttonId}`)
  console.log(btnEl)*/
  const audioEl = document.getElementById(`${theSound.audioId}`);
  audioEl.play();
  display.innerText = theSound.displayText
}

drumPads.forEach(pad => {
    const btnId = pad.id;
    pad.addEventListener("click", ()=>{
        console.log(`The id for this button is ${btnId}`)
        playSound(btnId);
    })
})

let keyValue = ""
document.addEventListener("keydown", (event)=>{
    keyValue = event.key;
    console.log(`The key pressed is ${keyValue}`)
    if (acceptableKeys.test(keyValue)){
        playSound1(keyValue.toUpperCase());
    }
    else{
        console.log("This is not an acceptable key")
    }
})


