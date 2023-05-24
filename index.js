const teamCollection = document.querySelector("#team-collection")
const teamDropdown = document.querySelector("#team-dropdown-form")
const likeButton = document.getElementsByClassName("like-button")

document.addEventListener("DOMContentLoaded", () => {
    fetchTeams()
    teamDropdown.addEventListener("change", handleChange)//Event listener for filtering by team name
})

//Fetch to collect data from the db.json file and append it to the dom in the form of a card for each team:
function fetchTeams() {
    fetch("http://localhost:3001/teams")
    .then(resp => resp.json())
    .then(teams => {
        // console.log(teams)
        teamCollection.innerHTML = renderAllTeams(teams)
    })
}


function renderAllTeams(allTeams) {
    return allTeams.map(team => renderTeam(team)).join("")//iterate over each object in the array and create a card for each NBA team
}

//Function that will actually create the team cards in the DOM in conjunction with the .map() method
function renderTeam(team){
    return `
    <div class="team-card" id="${team.id}">
        <div class="team-card-frame">
            <img src="${team.logo}" class="team-logo" />
            <h1>${team.full_name}</h1>
            <h2>${team.abbreviation}</h2>
            <h2>${team.titles}</h2>
            <button class="like-button">Like &#128077</button>
        </div>

    </div>
    `
}

// //Function for filtering by team name using the "change" event listener:
function handleChange(e) {
    e.preventDefault()
    const teamName = e.target.value.toLowerCase(); // Convert the team name to lowercase for case-insensitive comparison
    const teamCards = document.getElementsByClassName("team-card"); // Get all team cards
    
    for (let i = 0; i < teamCards.length; i++) {
        const card = teamCards[i];
        const cardTitle = card.getElementsByTagName("h1")[0].textContent.toLowerCase(); // Get the team name from the card and convert it to lowercase
        
        if (cardTitle.includes(teamName)) {
            card.style.display = "block"; // Show the card if the team name matches the filter
        } else {
            card.style.display = "none"; // Hide the card if the team name does not match the filter
        }
    }
}