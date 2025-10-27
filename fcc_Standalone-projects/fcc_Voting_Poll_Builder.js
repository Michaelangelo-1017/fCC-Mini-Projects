console.log("You have to vote")
const poll = new Map();
function addOption(option){
    const stringValue = String(option);
    console.log(stringValue)
    if(stringValue.trim() == "" || option === undefined){
        return "Option cannot be empty."
    }
    if(poll.has(option)){
        return `Option "${option}" already exists.`
    }
    else{
        const newSet = new Set();
        poll.set(option, newSet);
        console.log(poll)
        return `Option "${option}" added to the poll.`
    }
}
addOption("Mali");
addOption("Senegal");
addOption("Algeria");

function vote(option,voterId){
    const optionStringValue = String(option);
    const voterIdStringValue = String(voterId);
    if(option === undefined || voterId === undefined || optionStringValue.trim() == "" || voterIdStringValue.trim() == ""){
        console.log("Option or voterId cannot be empty.")
        return "Option cannot be empty."
    }
    if(!poll.has(option)){
        console.log(`Option "${option}" does not exists.`)
        return `Option "${option}" does not exist.`
    }
    else{
        const voters = poll.get(option);
        if (voters.has(voterId)){
        console.log(`Voter ${voterId} has already voted for "${option}".`);
        return `Voter ${voterId} has already voted for "${option}".`;
        }
        else{
        voters.add(voterId);
        console.log(`Voter "${voterId}" voted for "${option}".`)
        return `Voter ${voterId} voted for "${option}".`
        }
    }
}
vote("Algeria", "traveler1");
vote("Senegal", "traveler2");
vote("Algeria", "traveler3");
vote("Algeria", "traveler1");
vote("Nigeria", "traveler2");

function displayResults(){
    const pollResultsStringArr = ["Poll Results:"];
    poll.forEach((val,key) => {
        pollResultsStringArr.push(`${key}: ${val.size} votes`);
        console.log(pollResultsStringArr)
    })
    const pollResultsString = pollResultsStringArr.join("\n")
    return pollResultsString
}

//Testing Block
/*const result = addOption("Nigeria");
const result1 = addOption("Algeria");
console.log(result)
console.log(result1)*/
console.log(displayResults())

/*
console.log("You have to vote")
const poll = new Map();
function addOption(option){
  const stringValue = String(option);
  console.log(stringValue)
  if(stringValue.trim() == "" || option === undefined){
    return "Option cannot be empty."
  }
  if(poll.has(option)){
    return `Option "${option}" already exists.`
  }
  else{
    const newSet = new Set();
    poll.set(option, newSet);
    console.log(poll)
    return `Option "${option}" added to the poll.`
  }
}
addOption("Mali");
addOption("Senegal");
addOption("Algeria");

function vote(option,voterId){
  const optionStringValue = String(option);
  const voterIdStringValue = String(voterId);
  if(option === undefined || voterId === undefined || optionStringValue.trim() == "" || voterIdStringValue.trim() == ""){
    console.log("Option or voterId cannot be empty.")
    return "Option cannot be empty."
  }
  if(!poll.has(option)){
    console.log(`Option "${option}" does not exists.`)
    return `Option "${option}" does not exist.`
  }
  else{
    const voters = poll.get(option);
    const allVoters = [];
      poll.forEach((val, key) => {
        //const eachOption = poll.get(key)
        val.forEach(value => allVoters.unshift(value))
        //allVoters.push(eachOption.has(voterId))
      });
    console.log(`All the voters are : ${allVoters}`)
    if(allVoters.includes(voterId)){
      //console.log(`Voter ${voterId} has already voted for an option, no voting twice`);
      return `Voter ${voterId} has already voted for an option, no voting twice`;
    }
    if (voters.has(voterId)){
      console.log(`Voter ${voterId} has already voted for "${option}".`);
      return `Voter ${voterId} has already voted for "${option}".`;
    }
    else{
      voters.add(voterId);
      console.log(`Voter "${voterId}" voted for "${option}".`)
      
      return `Voter ${voterId} voted for "${option}".`
    }
  }
}
vote("Algeria", "traveler1");
vote("Senegal", "traveler2");
vote("Algeria", "traveler3");
vote("Algeria", "traveler1");
vote("Algeria", "traveler2");
vote("Algeria", "traveler4");

function displayResults(){
  const pollResultsStringArr = ["Poll Results:"];
  poll.forEach((val,key) => {
    pollResultsStringArr.push(`${key}: ${val.size} votes`);
    console.log(pollResultsStringArr)
  })
  const pollResultsString = pollResultsStringArr.join("\n")
  return pollResultsString
}

//Testing Block
const result = addOption("Nigeria");
const result1 = addOption("Algeria");
console.log(result)
console.log(result1)
console.log(displayResults())
*/