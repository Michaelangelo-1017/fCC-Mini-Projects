//Solution 1
function findLongestWordLength(string){
    const trimmedString = string.trim();
    if (trimmedString == ""){
        return 0;
    }
    else{
        const wordsArray = string.split(/\s+/);
        const lengthArray = wordsArray.map((word) => word.length);
        console.log(lengthArray);
        const sortedArray = lengthArray.sort((a,b) => a - b);
        return sortedArray[sortedArray.length-1]
    }
}

const result = findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");
console.log(result)

//Solution 2
function findLongestWordLength1(string){
    const trimmedString = string.trim();
    if (trimmedString == ""){
        return 0;
    }
    else{
        const wordsArray = string.split(/\s+/);
        const sortedArray = wordsArray.sort((a,b) => a.length - b.length);
        return sortedArray[sortedArray.length - 1].length
    }
}

const result1 = findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(result1)