let questions =
[
    {
        "question": "Wer hat HTML erfunden ?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wer hat tttt erfunden",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wer hat HTML erfunden",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wer hat HTML erfunden",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wer hat HTML erfunden",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
];

let currentQuestion = 0;

function init() {
    document.getElementById("all-questions").innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {

    if(currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';
    } else {

    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion +1; // das erhöht die Anzeige der Fragen das +1 ist dafür damit es nicht bei 0 beginnt.
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-success');
    }else {
        console.log('Falsche Antwort')
        document.getElementById(selection).parentNode.classList.add('bg-danger')
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success')
        document.getElementById(idOfRightAnswer).innerHTML += '  ==> Dies wäre die Richtige Antwort gewesen!' // partendNode ist für das übergeordnete Element um dort die classe hinzuzufügen!
        document.getElementById(selection).innerHTML += '  ==> Falsche Antwort!'
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++; // von 0 auf 1 erhöhen zeigt die nächste Frage an !
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion(); // ruft die Funktion showQuestion auf durch das currentQuestion++ springen wir immer eine Frage weiter.

}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}