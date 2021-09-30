const username = document.getElementById("username");
const saveScore = document.getElementById("saveScore");
let endForm = document.getElementById("endForm");
// Event Listener

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