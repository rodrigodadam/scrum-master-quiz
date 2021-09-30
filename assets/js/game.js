const question = document.getElementById("question");
const options = Array.from(document.getElementsByClassName("option-text"));

let currentQuestion = {};
let acceptinsAnswers = true;
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
    console.log(avaiableQuestions);
    getNewQuestion();
};

/**
 * Get a random question from Data,
 * Get number from data-number to access the questions atributes
 */
function getNewQuestion() {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * avaiableQuestions.length);
    currentQuestion = avaiableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    options.forEach(option => {
        const number = option.dataset["number"];
        option.innerText = currentQuestion["option" + number];
    });
}

startGame();