var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your name? \n");

console.log("Welcome " + userName + ", DO YOU KNOW SHUBHAM?");

var score = 0;
function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;
  } else {
    console.log("Oops!! wrong!");
  }

  console.log("current score: ", score);
  console.log("-------------");
}

var questions = [
  {
    question: "Where do I live?\n",
    answer: "Patna",
  },
  {
    question: "My favorite superhero Cartoon character is...?\n",
    answer: "Tom",
  },
  {
    question: "What is my favourite food?\n",
    answer: "idli",
  },
];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer);
}

console.log("Your total Score", score);
