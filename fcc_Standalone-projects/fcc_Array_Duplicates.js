function findDuplicates(arr) {
    const filteredArr = arr.filter((item,index,arr)=> arr.indexOf(item,index+1) !== -1)
    const duplicates = new Set(filteredArr);
    const noDuplicates = [];
    duplicates.forEach(item => noDuplicates.push(item));
    noDuplicates.sort((a,b)=> a-b)
    return noDuplicates;
}