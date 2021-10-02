const question = document.getElementById("question");
const options = Array.from(document.getElementsByClassName("option-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");
const loader = document.getElementById("loader");
const game = document.getElementById("game");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let avaiableQuestions = [];

let questions = [];

// ====== Load all questions from questions.JSON file  ====== //
fetch("./questions.json").then(res => {
    return res.json();
}).then(loadedQuestion => {
    console.log(loadedQuestion);
    questions = loadedQuestion;
    game.classList.remove("hidden");
    loader.classList.add("hidden");
    startGame();
}).catch(err => {
    console.log(err);
});





const score_points = 5;
const max_questions = 5;

// ====== Start Game Controllers ====== //

/**
 * Start the game with Score 0 and Questions 1/25.
 * After each question answered load a new random question.
 */
function startGame() {
    questionCounter = 0;
    score = 0;
    avaiableQuestions = [...questions];
    getNewQuestion();
};

/**
 * Get a random question from Data,
 * Get number from data-number to access the questions atributes,
 * Splice out question used to not repeat questions
 */
function getNewQuestion() {

    if (score > 10 && questionCounter >= max_questions) {
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign("./end.html");
    } else if (score <10 && questionCounter >= max_questions) {
        return window.location.assign("./nopass.html");
    }

    
    // If there are no more question or the game finish, redirect to another page
    // if (avaiableQuestions.length === 0 || questionCounter > max_questions) {
    //     localStorage.setItem("mostRecentScore", score);

        //Go to and page
    //     return window.location.assign("./end.html")
    // }

    // Increment Question Count +1 after gamer reply the question
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${max_questions}`;

    const questionIndex = Math.floor(Math.random() * avaiableQuestions.length);
    currentQuestion = avaiableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    options.forEach(option => {
        const number = option.dataset["number"];
        option.innerText = currentQuestion["option" + number];
    });

    avaiableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;

};

//Event listener to click in options

options.forEach(option => {
    option.addEventListener("click", i => {
        if(!acceptingAnswers)
            return;

        acceptingAnswers = false;

        const selectedOption = i.target;
        const selectedAnswer = selectedOption.dataset["number"];

        let classToApply = "incorrect";
            if (selectedAnswer == currentQuestion.answer) {
                classToApply = "correct";
            };

            if (classToApply === "correct") {
                increaseScore(score_points);
            }

        selectedOption.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedOption.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);

    });
});


/**
 * Increase the game score for each correct answer.
 * As SCRUM MASTER real test the player needs 85% of correct answer to pass in this quiz
 * But just because this is a quiz the player has only 25 random questions.
 */
function increaseScore(num) {
    score += num;
    scoreText.innerText = score+"%";
};
