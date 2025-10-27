function milePace(miles, duration) {
    const colonIndex = duration.indexOf(":");
    const minutes = duration.slice(0,colonIndex);
    const seconds = duration.slice(colonIndex+1);
    const totalTimeInSeconds = (parseInt(minutes) * 60) + parseInt(seconds);
    const eachTimeTakenInSecs = totalTimeInSeconds / miles;
    const toMinutes = Math.trunc(eachTimeTakenInSecs / 60);
    const toSeconds = Math.trunc(eachTimeTakenInSecs - (toMinutes * 60))
    let toMinutesString = `${toMinutes}`;
    let toSecondsString = `${toSeconds}`;
    if(toMinutesString.length === 1){
        toMinutesString = "0" + toMinutesString
    }
    if(toSecondsString.length === 1){
        toSecondsString += "0"
    }
    return `${toMinutesString}:${toSecondsString}`;
}

const test = milePace(10, "24:00");
console.log(test)