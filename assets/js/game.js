const question = document.getElementById("question");
const options = Array.from(document.getElementsByClassName("option-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let avaiableQuestions = [];

import questions from "./questions.js";

// ====== Constants ====== //

const score_points = 5;
const max_questions = 20;

// ====== Start Game Controller ====== //

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

    // If there are no more question or the game finish, redirect to another page
    if (avaiableQuestions.length === 0 || questionCounter > max_questions) {
        return window.location.assign("./index.html")
    }

    questionCounter++;
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
            }

        getNewQuestion();
    });
});

startGame();