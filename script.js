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

let rightQuestions = 0; // Hier legen wir fest das die Anzahl der richtigen Fragen zu Beginn auf 0 steht.
let currentQuestion = 0;
let AUDIO_RIGHT = new Audio('audio/win.mp3');
let AUDIO_WRONG = new Audio('audio/wrong.mp3');

function init() {
    document.getElementById("all-questions").innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {

    if(gameIsOver()) { // Wenn currentQuestion größer als questions.length ist für den Code aus.
        showEndscreen();
    } else { // Wenn currentQuestion kleiner ist als questions.length für diesen Code aus
        updateProgressBar();
        nextQuestionUpdate();
    }
}

function showEndscreen() {
    document.getElementById('questionBody').style = 'display: none';
    document.getElementById('cardImage').src = "./img/trophy1.png"
    document.getElementById('cardTitle').innerHTML = 'Quiz beendet!'
    document.getElementById('questiontext').innerHTML = `Du hast <b>${rightQuestions}</b> von <b>${currentQuestion}</b> Fragen richtig beantwortet!`
    document.getElementById('next-button').style = 'display: none';
    document.getElementById('restart-button').style = 'display: block';
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function nextQuestionUpdate() {
    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion +1; // das erhöht die Anzeige der Fragen das +1 ist dafür damit es nicht bei 0 beginnt.
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function updateProgressBar() {
    let percent = (currentQuestion +1) / questions.length; // hier erhöhen wir die Progress bar
    percent = Math.round(percent * 100); // Math.round ist um die Kommastellen zu runden , percent * 100 dient dazu Beispiel das dort nicht 0.14% steht!
    document.getElementById('progress-bar').innerHTML = `${percent}%` // hier werden die Prozent Zahlen in der Anzeige erhöht
    document.getElementById('progress-bar').style = ` width: ${percent}%` // Hier wird dafür gesorgt das die Progressbar auch Optisch größer wird.
}

function answer(selection) { // Hier übergeben wir an selection ( answer_1 bis answer_7)
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1); // mit dem Befehel slice -1 holen wir uns den letzten teil von hinten gezählt aus dem String
    let idOfRightAnswer = `answer_${question['right_answer']}`; // hiermit holen wir uns die richtige Antwort aus dem Array
    if(rightAnswerSelected(selectedQuestionNumber , question)) {
        document.getElementById(selection).parentNode.classList.add('bg-success'); // Wenn die richtige Antwort gewählt wurde füge die klasse bg-success hinzu (Grün färben).
        AUDIO_RIGHT.play();
        rightQuestions ++; // Wenn die Antwort richtig ist erhöhe rightQuestions um 1.
    }else {
        document.getElementById(selection).parentNode.classList.add('bg-danger')
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success')
        document.getElementById(idOfRightAnswer).innerHTML += '  ==> Dies wäre die Richtige Antwort gewesen!' // partendNode ist für das übergeordnete Element um dort die classe hinzuzufügen!
        document.getElementById(selection).innerHTML += '  ==> Falsche Antwort!'
        AUDIO_WRONG.play();
    }
    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber ,question) {
    return selectedQuestionNumber == question['right_answer'];
}

function nextQuestion() {
    currentQuestion++; // von 0 auf 1 erhöhen zeigt die nächste Frage an !
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons(); // Entfernt die Farbe damit bei der nächsten Frage keine Farben schon vorher gesetzt sind.
    showQuestion(); // ruft die Funktion showQuestion auf durch das currentQuestion++ springen wir immer eine Frage weiter.
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger'); // Beim klicken auf Nächste Frage (nextQuestion) werden die gesetzten Farben wieder entfernt
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartQuiz() {
    document.getElementById('cardImage').src = "./img/quiz-time.jpg" // Das Endscreen Bild wieder mit dem Start Bild tauschen
    document.getElementById('questionBody').style = 'display: block'; // Die Quizfragen wieder einblenden
    document.getElementById('next-button').style = 'display: block'; // Nächste Frage Button wieder einblenden
    document.getElementById('restart-button').style = 'display: none'; // Quiz Neustarten Button ausblenden
    rightQuestions = 0; // Setzt rightQuestions wieder auf den Wert 0
    currentQuestion = 0; // Setzt currentQuestion wieder auf den Wert 0
    init();
}