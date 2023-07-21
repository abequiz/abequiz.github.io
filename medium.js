const questions = [
    {
        question: "What is a triple point of pure water?2. What is a triple point of pure water??",
        answers: [
            { text: "-0.19°C", correct: false},
            { text: "0.11°C", correct: false},
            { text: "-0.01°C", correct: false},
            { text: "0.01°C", correct: true},
        ]
    },
    {
        question: "______________ of moisture measurement is based on chemical reactions.?",
        answers: [
            { text: "Halogen drying", correct: false},
            { text: "Lyophilization", correct: false},
            { text: "Karl Fischer method", correct: true},
            { text: "Infrared drying", correct: false},
        ]
    },
    {
        question: "Which lines indicate dry bulb temperatures in the psychometric chart?",
        answers: [
            { text: "Diagonals lines", correct: false},
            { text: "Horizontal lines", correct: false},
            { text: "Curves", correct: false},
            { text: "Vertical lines", correct: true},
        ]
    },
    {
        question: "Which one of the following is non-destructive moisture measurement?",
        answers: [
            { text: "Lyophilization", correct: false},
            { text: "Nuclear moisture meter method", correct: true},
            { text: "Karl Fischer method", correct: false},
            { text: "Loss on drying moisture method", correct: false},
        ]
    },  
    {
        question: "The effect of ______on the system is seen only as a phase change.",
        answers: [
            { text: "Latent heat", correct: true},
            { text: "Enthalpy", correct: false},
            { text: "Specific heat", correct: false},
            { text: "Entropy", correct: false},
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
    questionElement.innerHTML = `You scored ${score*2} out of ${questions.length*2}!`;
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