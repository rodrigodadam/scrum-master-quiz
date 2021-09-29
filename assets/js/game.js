const question = document.getElementById("question");
const options = Array.from(document.getElementsByClassName(".choice-text"))

let currentQuestion = {};
let acceptinsAnswers = true;
let score = 0;
let questionCounter = 0;
let avaiableQuestions = [];


