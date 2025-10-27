function getAverage(scoresArray){
  let sum = 0;
  for(let scores of scoresArray){
    //console.log(scores)
    let num = Number(scores);
    if(isNaN(num)){
    return "One of the scores is not a number";
    //console.log(sum)
  }
    sum += num;
  }
    return sum / scoresArray.length;
}

function getGrade(studentScore){
  let truncScore = Math.trunc(studentScore);
  //console.log(truncScore);
  if(studentScore > 100 || isNaN(Number(studentScore))){
    return "Score must be a number and cannot be greater than 100";
  }
  else if(truncScore == 100){
    return "A+";
  }
  else if(truncScore >= 90){
    return "A";
  }
  else if(truncScore >= 80){
    return "B";
  }
  else if(truncScore >= 70){
    return "C";
  }
  else if(truncScore >= 60){
    return "D";
  }
  else{
    return "F";
  }
}

function hasPassingGrade(studentScore){
  /*const passOrFail = getGrade(studentScore) == "F" ? false : true;
  return passOrFail;*/
  const grade = getGrade(studentScore);
  if( grade == "Score must be a number and cannot be greater than 100"){
    return "There was an error in the student's score."
  }
  else{
    /*const passOrFail = getGrade(studentScore) == "F" ? false : true;
    return passOrFail;*/
    return grade !== "F";
  }
}

function studentMsg(scoresArray, studentScore){
  let message = "";
  const studentAverage = getAverage(scoresArray);
  const averageMsg = studentAverage === "One of the scores is not a number" ? "Class Average couldn't be calculated" : studentAverage;
  const studentGrade = getGrade(studentScore);
  const gradeMsg = studentGrade === "Score must be a number and cannot be greater than 100" ? "Student's grade couldn't be calculated" : studentGrade;
  const passOrFail = hasPassingGrade(studentScore);
  if(passOrFail == "There was an error in the student's score." ){
    message = `Class average: ${averageMsg}. Your grade: ${gradeMsg}. ${passOrFail}`
    return message
  }
  else{
    message = passOrFail ? `Class average: ${averageMsg}. Your grade: ${gradeMsg}. You passed the course.` : `Class average: ${averageMsg}. Your grade: ${gradeMsg}. You failed the course.`;
  return message;
  }
}

const average = getAverage(['20p','30','50', 60]);
const grade = getGrade("100");
const didStudentPass = hasPassingGrade("100");
const theStudentMsg = studentMsg(["70", 90, 100, '80'],"60a");
const theStudentMsg1 = studentMsg(["70", 90, 100, '80'],"60");
console.log(average);
console.log(grade);
console.log(didStudentPass);
console.log(theStudentMsg);
console.log(theStudentMsg1);

