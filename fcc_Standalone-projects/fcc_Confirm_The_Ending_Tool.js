function confirmEnding(stringToCheck, stringToCheckAgainst){
    const lengthOfEnd = stringToCheckAgainst.length;
    console.log(lengthOfEnd);
    console.log(typeof lengthOfEnd);
    const endOfString1 = stringToCheck.slice(-lengthOfEnd);
    console.log(endOfString1)
    const doesItMatch = endOfString1.toLowerCase() === stringToCheckAgainst.toLowerCase() ? true : false;
    return doesItMatch;
}

const result = confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
console.log(result)