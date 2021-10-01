const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
let endForm = document.getElementById("endForm");
const totalScore = document.getElementById("totalScore");
let mostRecentScore = localStorage.getItem("mostRecentScore");

let highScores = JSON.parse(localStorage.getItem("highScores")) || [];


totalScore.innerText = mostRecentScore;

// Block the Save Button if the player do not submit a text on input.

endForm.addEventListener("input", () => {
    if (username.value.length > 0) {
        saveScoreBtn.removeAttribute("disabled");
    } else {
        saveScoreBtn.setAttribute("disabled", "disabled");
    }
});


function saveHighScore(e) {
    console.log("cliquei");
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    console.log(score);
    // highScores.push(score);
    // console.log(highScores)

};

