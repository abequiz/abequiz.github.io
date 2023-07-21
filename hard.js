const questions = [
    {
        question: "Are these statements about the specific heat true? Statement 1: Specific heat of ice is double the specific heat of water. Statement 2: Specific heat of foods decreases during freezing.",
        answers: [
            { text: "True, True", correct: false},
            { text: "False, True", correct: true},
            { text: "False, False", correct: false},
            { text: "True, False", correct: false},
        ]
    },
    {
        question: "A flat blade turbine having six blades is centrally installed in a vertical tank. The tank is 6 ft (1.83 m) in diameter; the turbine is 2 ft. (0.61 m) in diameter and is positioned 2 ft (0.61 m) from the bottom of the tank. The turbine blades are 5 in. (127 mm) wide. The tank is filled to a depth of 6 ft (1.83 m) with a solution of 50 percent caustic soda, at 150°F (65.6°C), which has a viscosity of 12 cP and a density of 93.5 lb/ft3 (1498 kg/m3). The turbine is operated at 90 r/min. the tank is baffled. What power will be required to operate the mixer? (Given KL=403680).",
        answers: [
            { text: "2.47 kW", correct: true},
            { text: "6.05 kW", correct: false},
            { text: "2.46 KW", correct: false},
            { text: "2.69 KW", correct: false},
        ]
    },
    {
        question: "Thermal energy is transported through the molecules due to _______and _______.",
        answers: [
            { text: "Lattice waves, longitudinal waves", correct: false},
            { text: "Gobfree protons, free electronsi", correct: false},
            { text: "Lattice waves, free protons", correct: false},
            { text: "Lattice waves, free electrons", correct: true},
        ]
    },
    {
        question: "Modern refrigerators usually use a refrigerant called ______________",
        answers: [
            { text: "CFC-134a", correct: false},
            { text: "HFC-134a", correct: true},
            { text: "HFC-134b", correct: false},
            { text: "Freezer", correct: false},
        ]
    },
    {
        question: "Are these statements about the sedimentation velocity true? Statement 1: It is an analytical ultracentrifugation method.Statement 2: It is used for determining the molecular mass.",
        answers: [
            { text: "False, False", correct: false},
            { text: "True, False", correct: false},
            { text: "True, True", correct: true},
            { text: "False, True", correct: false},
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
    questionElement.innerHTML = `You scored ${score*5} out of ${questions.length*5}!`;
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