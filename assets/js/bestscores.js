const bestScoresList = document.getElementById("bestScoresList");
const passScores = JSON.parse(localStorage.getItem("passScores")) || [];

bestScoresList.innerHTML = passScores.map(score => {
    return `<li class=best-score>${score.name}-${score.score}</li>`;
    })
    .join("");