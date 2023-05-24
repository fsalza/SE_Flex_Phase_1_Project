const teamCollection = document.querySelector("#team-collection")


document.addEventListener("DOMContentLoaded", () => {
    fetchTeams()
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
            <button class="delete-button">Like </button>
        </div>

    </div>
    `
}