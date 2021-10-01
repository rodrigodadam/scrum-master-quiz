const username = document.getElementById("username");
const saveScore = document.getElementById("saveScore");
let endForm = document.getElementById("endForm");
const totalScore = document.getElementById("totalScore");
let mostRecentScore = localStorage.getItem("mostRecentScore");

totalScore.innerText = mostRecentScore;

// Block the Save Button if the player do not submit a text on input.

endForm.addEventListener("input", () => {
    if (username.value.length > 0) {
        saveScore.removeAttribute("disabled");
    } else {
        saveScore.setAttribute("disabled", "disabled");
    }
});


function saveHighScore(e) {
    e.preventDefault();
};