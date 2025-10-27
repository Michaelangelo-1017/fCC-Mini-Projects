//Football Team Info Object
const footballTeam = {
  team: "Manchester City",
  year: 2017,
  headCoach: "Pep Guardiola",
  players: [{
    name: "Sergio Aguero",
    position: "forward",
    isCaptain: false
  },
  {
    name: "Kevin De Bruyne",
    position: "midfielder",
    isCaptain: false
  },
  {
    name: "Vincent Kompany",
    position: "defender",
    isCaptain: true
  },
  {
    name: "Ederson Moraes",
    position: "goalkeeper",
    isCaptain: false
  },
{
    name: "Gabriel Jesus",
    position: "forward",
    isCaptain: false
  },
  {
    name: "David Silva",
    position: "midfielder",
    isCaptain: false
  },
  {
    name: "Nikolas Otamendi",
    position: "defender",
    isCaptain: false
  },
  {
    name: "Claudio Bravo",
    position: "goalkeeper",
    isCaptain: false
  }]
}

//Elements, IDs and Class Containers
const headCoachInfo = document.getElementById("head-coach");
const teamInfo = document.getElementById("team");
const yearInfo = document.getElementById("year");
const playersOption = document.getElementById("players");
const playerCards = document.getElementById("player-cards");

//Inner Text change
headCoachInfo.innerText = footballTeam.headCoach;
teamInfo.innerText = footballTeam.team;
yearInfo.innerText = footballTeam.year;

//Display Player Cards Function

function createPlayerCardsHtml(playerPosition){
  const thePlayers = playerPosition === "all" ? footballTeam.players : footballTeam.players.filter(({position}) => position === playerPosition);
  console.log(thePlayers); 
  const playerStrings = thePlayers.map((player) => {
    if(player.isCaptain){
      const insertedHtml = `
      <div class="player-card">
        <h2><span>(Captain)</span> ${player["name"]}<h2>
        <p>Position: ${player["position"]}</p>
      </div>`
      return insertedHtml
    }
    else{
      const insertedHtml = `
      <div class="player-card">
        <h2>${player["name"]}<h2>
        <p>Position: ${player["position"]}</p>
      </div>`
      return insertedHtml
    }
    
  })
  return playerStrings.join("");
}

//Displaying the cards
playersOption.addEventListener("change", ()=> {
  playerCards.innerHTML = createPlayerCardsHtml(playersOption.value);
})



//console.log(playerCards);
//console.log(footballTeam.players.name)
