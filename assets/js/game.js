const question = document.getElementById("question");
const options = Array.from(document.getElementsByClassName(".choice-text"))

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
};

startGame();

