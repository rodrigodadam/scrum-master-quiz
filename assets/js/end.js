const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
let endForm = document.getElementById("endForm");
const totalScore = document.getElementById("totalScore");
let mostRecentScore = localStorage.getItem("mostRecentScore");
const maxPassScore = 3;
let passScores = JSON.parse(localStorage.getItem("passScores")) || [];


totalScore.innerText = mostRecentScore;

// Block the Save Button if the player do not submit a text on input.

endForm.addEventListener("input", () => {
    if (username.value.length > 0) {
        saveScoreBtn.removeAttribute("disabled");
    } else {
        saveScoreBtn.setAttribute("disabled", "disabled");
    }
});


function savePassScore(e) {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    passScores.push(score);

    passScores.sort((a, b) => b.score - a.score);

    passScores.splice(3);
    
    console.log(passScores)

};

