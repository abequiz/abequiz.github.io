const questions = [
    {
        question: "The basic operations done in the food process engineering are called as __________",
        answers: [
            { text: "Processing", correct: false },
            { text: "Unit operations", correct: true },
            { text: "Process management", correct: false },
            { text: "Unit process", correct: false },
        ]
    },
    {
        question: "Which mechanism is utilized when particle concussion by a single rigid force?",
        answers: [
            { text: "Impact", correct: true },
            { text: "Shear", correct: false },
            { text: "Compression", correct: false },
            { text: "Tear", correct: false },
        ]
    },
    {
        question: "What is the mechanism of nut cracker?",
        answers: [
            { text: "Impact", correct: false },
            { text: "Shear", correct: false },
            { text: "Compression", correct: true },
            { text: "All of the above", correct: false },
        ]
    },
    {
        question: "What is shear force?",
        answers: [
            { text: "Force acting in direction parallel to surface of a body", correct: true },
            { text: "Force acting in direction perpendicular to surface of a body", correct: false },
            { text: "Force acting in direction longitudinal to surface of a body", correct: false },
            { text: "Force acting in direction vertical to surface of a body", correct: false },
        ]
    },
    {
        question: "What is use of edge runner?",
        answers: [
            { text: "To shear the pieces", correct: false },
            { text: "To tear the pieces", correct: false },
            { text: "To crush the pieces", correct: true },
            { text: "To compress the pieces", correct: false },
        ]
    },
    {
        "question": "It is the water retained about individual soil particles by molecular action and can be removed only by heating",
        "answers": [
            { "text": "Permanent wilting point", "correct": false },
            { "text": "Hygroscopic water", "correct": true },
            { "text": "Hydrophobic water", "correct": false },
            { "text": "Microscopic water", "correct": false }
        ]
    },
    {
        "question": "A geologic formation that contains water into the field ditches",
        "answers": [
            { "text": "Aquifuge", "correct": true },
            { "text": "Aquifer", "correct": false },
            { "text": "Aquitard", "correct": false },
            { "text": "Aquiclude", "correct": false }
        ]
    },
    {
        "question": "A geologic formation which transmits water at a rate insufficient to be economically developed for pumping",
        "answers": [
            { "text": "Aquifuge", "correct": false },
            { "text": "Aquifer", "correct": false },
            { "text": "Aquitard", "correct": false },
            { "text": "Aquiclude", "correct": true }
        ]
    }
    
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    nextButton.addEventListener("click", function () {
        window.location.href = "selection.html";
    });
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
