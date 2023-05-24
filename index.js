const teamCollection = document.querySelector("#team-collection")
const teamDropdown = document.querySelector("#team-dropdown-form")


document.addEventListener("DOMContentLoaded", () => {
    fetchTeams()
    teamDropdown.addEventListener("change", handleChange)
})

function fetchTeams() {
    fetch("http://localhost:3001/teams")
    .then(resp => resp.json())
    .then(teams => {
        console.log(teams)
        teamCollection.innerHTML = renderAllTeams(teams)
    })
}


function renderAllTeams(allTeams) {
    return allTeams.map(team => renderTeam(team)).join("")
}

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

//Function for filtering by team name
function handleChange(e) {
    const teamName = e.target.value
}