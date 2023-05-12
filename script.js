let currentQuestion = 0;

function init() {
    document.getElementById('progress').innerHTML = questinons.length;
    showQuestion();
};

function showQuestion() {
    let question = questinons[currentQuestion];

    document.getElementById('quastion-text').innerHTML = question['question'];
    document.getElementById('answer-1').innerHTML = question['answer_1'];
    document.getElementById('answer-2').innerHTML = question['answer_2'];
    document.getElementById('answer-3').innerHTML = question['answer_3'];
    document.getElementById('answer-4').innerHTML = question['answer_4'];
};