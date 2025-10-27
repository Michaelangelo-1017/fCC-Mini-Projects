function convert(val){
    const hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
    let string = "";
    string = string + hexValues[Math.trunc(val / 16)] + hexValues[val % 16]
    return string;
}
function rgbToHex(rgb) {
    const rgbRegex = /^rgb\(\d{1,3},\s*\d{1,3},\s*\d{1,3}\)$/;
    let finalString = "#";
    if(rgbRegex.test(rgb)){
        const numbersOnly = rgb.replace("rgb(","");
        const finalRGB = numbersOnly.replace(")","");
        const numbersArr = finalRGB.split(",");
        const red = parseInt(numbersArr[0]);
        const green = parseInt(numbersArr[1]);
        const blue = parseInt(numbersArr[2]);
        if(red > 255 || green > 255 || blue > 255 || red < 0 || green < 0 || blue < 0){
        return "The value exceeds 255 or is less than 0 hence this is an invalid rgb"
        }
        finalString = finalString + convert(red) + convert(green) + convert(blue);
    }else{
        return "This is not a valid rgb"
    }
    
    return finalString;
}
ß
const test = rgbToHex("rgb(1,1,001)");
console.log(test)