const bestScoresList = document.getElementById("bestScoresList");
const passScores = JSON.parse(localStorage.getItem("passScores")) || [];
//Load the best scores from Local Storage as a Hall of the Fame.
// To create a secure service and avoid that the player change the scores into a Dev Tools, the best way is creating and storing the data into a Server/DB and not into a local storage.
bestScoresList.innerHTML = passScores.map(score => {
    return `<li class=best-score>${score.name} - ${score.score}%</li>`;
    })
    .join("");