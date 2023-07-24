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
    },
    {
        question: "The discharge of the first emitter in a dropper line is 12 lph. What is the allowable minimum discharge in the last emitter?",
        answers: [
            { text: "9.6 lph", correct: true },
            { text: "10.8 lph", correct: false },
            { text: "10.6 lph", correct: false },
            { text: "9.8 lph", correct: false }
        ]
    },
    {
        question: "The soil has a field capacity and permanent wilting point of 27% and 13%, respectively. What is the readily available moisture in cm of water per cm of soil if the bulk density is 1.25 g/cc?",
        answers: [
            { text: "10.25 cm/m", correct: false },
            { text: "17.5 cm/m", correct: false },
            { text: "13.12 cm/m", correct: true },
            { text: "14.0 cm/m", correct: false }
        ]
    },
    {
        question: "What discharge can be expected from an unconfined well 200 mm in diameter if the drawdown is 5 m in an aquifer saturated to a depth of 18 m? Assume the permeability and the radius of influence to be 20 m/day and 150 m, respectively.",
        answers: [
            { text: "14.3 lps", correct: false },
            { text: "13.8 lps", correct: false },
            { text: "15.4 lps", correct: true },
            { text: "2.61 lps", correct: false }
        ]
    },
    {
        question: "Determine the net application depth if the apparent specific gravity is 1.40 and the rooting depth is 0.8 m. Management allowable depletion is 50%.",
        answers: [
            { text: "44.8 cm", correct: false },
            { text: "4.48 cm", correct: true },
            { text: "448 cm", correct: false },
            { text: "4.48 mm", correct: false }
        ]
    },
    {
        question: "A carrot refrigerator takes 5000 J of heat energy from the cold reservoir at 270 K and pumps it to the hot reservoir at 300 K. Calculate the coefficient of performance of this refrigerator.",
        answers: [
            { text: "10.9", correct: false },
            { text: "9", correct: true },
            { text: "11.90", correct: false },
            { text: "9.10", correct: false }
        ]
    },
    {
        question: "A domestic food freezer maintains a temperature of -20 ℃. The ambient air temperature is 40 ℃. If heat leaks into the freezers at a continuous rate of 5.0 KJ/s, what is the least power to pump this heat out continuously?",
        answers: [
            { text: "1.18 KW", correct: true },
            { text: "11.8 KW", correct: false },
            { text: "18.1 KW", correct: false },
            { text: "1.81 KW", correct: false }
        ]
    },
    {
        question: "A refrigerator uses 1500 J of mechanical work to absorb 4500 J from the cold reservoir at 250 K. The hot reservoir is at 300 K. Calculate the coefficient of performance for this refrigerator.",
        answers: [
            { text: "6 J", correct: false },
            { text: "60 J", correct: false },
            { text: "600 J", correct: false },
            { text: "6000 J", correct: true }
        ]
    },
    {
        question: "A pulley has a constant angular acceleration of 3 rad/sec². When the angular velocity is 2 rad/sec, the total acceleration of a point on the rim of the pulley is 10 ft/sec². Compute the diameter of the pulley.",
        answers: [
            { text: "2 ft", correct: false },
            { text: "3 ft", correct: false },
            { text: "4 ft", correct: true },
            { text: "5 ft", correct: false }
        ]
    },
    {
        question: "A truck is traveling forward at 25 m/s. The truck bed is loaded with boxes, whose coefficient of friction with the bed is 0.4. What is the shortest time that the truck can be brought to a stop such that the boxes do not shift?",
        answers: [
            { text: "6.4 sec", correct: true },
            { text: "6.0 sec", correct: false },
            { text: "10.4 sec", correct: false },
            { text: "22.4 sec", correct: false }
        ]
    },
    {
        question: "Using a constant angular acceleration, a water turbine is brought to its normal operating speed of 180 rpm in 6 minutes. How many complete revolutions did the turbine make in coming to normal speed?",
        answers: [
            { text: "240 rev", correct: false },
            { text: "540 rev", correct: true },
            { text: "245 rev", correct: false },
            { text: "640 rev", correct: false }
        ]
    },
    {
        question: "During the operation of a punch press, its flywheel decelerates uniformly from 400 rpm to 200 rpm in 1 sec. The rim of the flywheel weighs 1288 lb, its inside and outside diameters are 56 in and 60 in, and it is attached to its hub by 6 spokes. What average shearing force is developed between the rim and each spoke during the 1 sec interval?",
        answers: [
            { text: "F = 350 lb", correct: true },
            { text: "F = 250 lb", correct: false },
            { text: "F = 400 lb", correct: false },
            { text: "F = 500 lb", correct: false }
        ]
    }     
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timerDisplay = document.getElementById("timer-display");
const startButton = document.getElementById("start-btn");

let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
const maxTime = 180; // 2 minutes in seconds
let remainingTime = maxTime;

function updateTimer() {
  if (remainingTime <= 0) {
    // Automatically move to the next question if time runs out
    selectAnswer({ target: null });
  } else {
    remainingTime--;
    const formattedTime = formatTime(remainingTime * 1000); // Convert to milliseconds
    timerDisplay.textContent = formattedTime;
  }
}

function formatTime(milliseconds) {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
}

function startTimer() {
  remainingTime = maxTime;
  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function showTimer() {
  timerDisplay.style.display = "block";
}

function hideTimer() {
  timerDisplay.style.display = "none";
}

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
  startTimer(); // Start the timer when the quiz starts
  startButton.disabled = true; // Disable the "Start Quiz" button after starting
  startButton.style.display = "none"; // Hide the "Start Quiz" button after starting
  showTimer(); // Show the timer when the quiz starts
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
  if (remainingTime <= 0) {
    // If the time runs out, automatically mark the answer as incorrect
    Array.from(answerButtons.children).forEach(button => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
  } else {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn && selectedBtn.dataset.correct === "true";

    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else if (selectedBtn) {
      selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
  }

  nextButton.style.display = "block";
  stopTimer();
}

function showScore() {
  resetState();
  hideTimer(); // Hide the timer when showing the score
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
    startTimer(); // Start the timer for the next question
    showTimer(); // Show the timer for the next question
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

startButton.addEventListener("click", () => {
  startQuiz(); // Start the quiz and the timer when the "Start Quiz" button is clicked
});
