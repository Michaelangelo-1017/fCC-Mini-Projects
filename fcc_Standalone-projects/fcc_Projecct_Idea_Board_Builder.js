//Solution 1 that passed, not good enough
/*const projectStatus = {
  PENDING: {description: "Pending Execution"},
  SUCCESS: {description: "Executed Successfully"},
  FAILURE: {description: "Execution Failed"}
};

class ProjectIdea{
  constructor(title,description){
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING
  }
  updateProjectStatus(newStatus){
    this.status = newStatus;
    //return this.status
  }
}

class ProjectIdeaBoard{
  constructor(title){
    this.title = title;
    this.ideas = [];
  }
  pin(instance){
    this.ideas.push(instance)
    return this.ideas
  }
  unpin(instance){
    if(!this.ideas.length || this.ideas.findIndex((idea)=> idea.title === instance.title) === -1){
      return this.ideas;
    }
    else{
      const index = this.ideas.findIndex((idea)=> idea.title === instance.title)
      this.ideas.splice(index,1)
    }
    
  }
  count(){
    return this.ideas.length;
  } 
  formatToString(){
    if(!this.ideas.length){
      console.log("It is working")
      return `${this.title} has ${this.count()} idea(s)\n`
    }
    else{
      return `${this.title} has ${this.count()} idea(s)\n${this.ideas[0].title} (${this.ideas[0].status.description}) - ${this.ideas[0].description}\n`
    }
  }
}


console.log(new ProjectIdea("Smart Window Locks", "An automation project allowing users to lock, unlock windows automatically based on weather conditions."))
console.log(new ProjectIdea("Fitness Tracker App", "An app that tracks user workouts, diet, and sleep patterns.").updateProjectStatus(projectStatus.SUCCESS))
console.log(new ProjectIdeaBoard("Tech").pin(new ProjectIdea("Smart Home System", "An integrated system to control lighting, temperature, and security devices remotely.")));
//console.log(new ProjectIdeaBoard("Empty Board").formatToString())
//console.log(new ProjectIdeaBoard("Tech Projects Board").pin(new ProjectIdea("Smart Home System", "An integrated system to control lighting, temperature, and security devices remotely.")))
const techProjects = new ProjectIdeaBoard("Tech Projects Board");
techProjects.pin(new ProjectIdea("Smart Home System", "An integrated system to control lighting, temperature, and security devices remotely."))
//console.log(techProjects)
console.log(techProjects.formatToString())*/


//Solution 2 that passed, works better
const projectStatus = {
  PENDING: {description: "Pending Execution"},
  SUCCESS: {description: "Executed Successfully"},
  FAILURE: {description: "Execution Failed"},
}

class ProjectIdea{
  constructor(title,description){
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }
  updateProjectStatus(newStatus){
    if(newStatus === this.status){
      console.log("The statuses are the same so no update");
      return;
    }
    this.status = newStatus
  }
}

class ProjectIdeaBoard{
  constructor(title){
    this.title = title;
    this.ideas = [];
  }
  pin(instance){
    this.ideas.push(instance)
  }
  unpin(instance){
    if(!this.ideas.length || this.ideas.findIndex((item)=>item.title === instance.title) === -1){
      return;
    }
    const index = this.ideas.findIndex((item)=>item.title === instance.title);
    this.ideas.splice(index,1)
  }
  count(){
    return this.ideas.length;
  }
  formatToString(){
    if(!this.ideas.length){
      return `${this.title} has ${this.count()} idea(s)\n`
    }
    else{
      let ideaString = ""
      for (const idea of this.ideas){
        ideaString += `${idea.title} (${idea.status.description}) - ${idea.description}\n`
      }
      return `${this.title} has ${this.count()} idea(s)\n${ideaString}`
    }
  }
}

const testIdea = new ProjectIdea("Creating an internet provider","A way to provide the internet for multiple people");
const testIdea1 = new ProjectIdea("Creating internet","A way to provide the internet");
const emptyIdea = new ProjectIdeaBoard("Empty Board");
console.log(emptyIdea.formatToString())
testIdea.updateProjectStatus(projectStatus.SUCCESS);
const testIdeaBoard = new ProjectIdeaBoard("Tech")
testIdeaBoard.pin(testIdea)
testIdeaBoard.pin(testIdea1)
//console.log(testIdea);
console.log(testIdeaBoard);
//testIdeaBoard.unpin(testIdea1);
console.log(testIdeaBoard.formatToString());
//console.log(testIdeaBoard.pin(testIdea))