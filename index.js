const teamCollection = document.querySelector("#team-collection")


document.addEventListener("DOMContentLoaded", () => {
    fetchTeams()
})

function fetchTeams() {
    fetch("http://localhost:3001/teams")
    .then(resp => resp.json())
    .then(teams => {
        console.log(teams)
        teamCollection.innerHTML = renderTeams(teams)
    })
}


