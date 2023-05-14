let currentQuestion = 0;
let correctAnswer = 0;
let AUDIO_SUCCESS = new Audio("audio/true.mp3");
let AUDIO_ERROR = new Audio("audio/false.mp3");

function init() {
  document.getElementById("progress").innerHTML = questions.length;

  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    displayQuestion();
  } else {
    pesentCalculate();
    let question = questions[currentQuestion];
    renderQuestionCard(question);
  }
}

function pesentCalculate() {
    let persent = currentQuestion / questions.length;
    persent = Math.round(persent * 100);
    document.getElementById("progress-bar").innerHTML = `${persent}%`;
    document.getElementById("progress-bar").style = `width: ${persent}%`;
}

function displayQuestion() {
  document.getElementById("end-screan").style = "";
  document.getElementById("question-body").style = "display:none";
  document.getElementById("end-img").style = "";
  document.getElementById("quastion-img").style = "display:none";
  document.getElementById("number").innerHTML = questions.length;
  document.getElementById("correct-answer").innerHTML = correctAnswer;
  document.getElementById("false-answer").innerHTML =
    questions.length - correctAnswer;
}

function renderQuestionCard(question) {
  document.getElementById("question-number").innerHTML = currentQuestion + 1;
  document.getElementById("quastion-text").innerHTML = question["question"];
  document.getElementById("answer-1").innerHTML = question["answer_1"];
  document.getElementById("answer-2").innerHTML = question["answer_2"];
  document.getElementById("answer-3").innerHTML = question["answer_3"];
  document.getElementById("answer-4").innerHTML = question["answer_4"];
  document.getElementById("quastion-img").src = question["img"];
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectidQuestionNumber = selection.slice(-1);
  let idOfRightAnswer = `answer-${question["correct_answer"]}`;

  if (selectidQuestionNumber == question["correct_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    AUDIO_SUCCESS.play();
    correctAnswer++;
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
    AUDIO_ERROR.play();
  }
  disabledAnswer();
}

function disabledAnswer() {
  document.getElementById("next-button").disabled = false;
  document.getElementById("answer-1").parentNode.style.pointerEvents = "none";
  document.getElementById("answer-2").parentNode.style.pointerEvents = "none";
  document.getElementById("answer-3").parentNode.style.pointerEvents = "none";
  document.getElementById("answer-4").parentNode.style.pointerEvents = "none";
}

function activatedAnswer() {
  document.getElementById("next-button").disabled = true;
  document.getElementById("answer-1").parentNode.style.pointerEvents = "auto";
  document.getElementById("answer-2").parentNode.style.pointerEvents = "auto";
  document.getElementById("answer-3").parentNode.style.pointerEvents = "auto";
  document.getElementById("answer-4").parentNode.style.pointerEvents = "auto";
}

function nextQuestion() {
    currentQuestion++;
    activatedAnswer();
    resetCard();
    showQuestion();
    pesentCalculate(); 
  }
  

function resetCard() {
  document.getElementById("answer-1").parentNode.classList.remove("bg-success");
  document.getElementById("answer-1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer-2").parentNode.classList.remove("bg-success");
  document.getElementById("answer-2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer-3").parentNode.classList.remove("bg-success");
  document.getElementById("answer-3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer-4").parentNode.classList.remove("bg-success");
  document.getElementById("answer-4").parentNode.classList.remove("bg-danger");
}

function restartGame() {
  currentQuestion = 0;
  document.getElementById("end-screan").style = "display:none";
  document.getElementById("question-body").style = "";
  document.getElementById("end-img").style = "display:none";
  document.getElementById("quastion-img").style = "";
  correctAnswer = 0;
  document.getElementById("progress-bar").style = `width: 0`;
  init();
}
