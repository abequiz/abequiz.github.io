const questions = [
    {
        question: "What is a triple point of pure water?",
        answers: [
            { text: "-0.19°C", correct: false},
            { text: "0.11°C", correct: false},
            { text: "-0.01°C", correct: false},
            { text: "0.01°C", correct: true},
        ]
    },
    {
        question: "______________ of moisture measurement is based on chemical reactions.",
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
    },
    {
        question: "It is applicator used in drip, subsurface, or bubbler irrigation designed to dissipate pressure and to discharge a small uniform flow or trickle of water at a constant rate that does not vary significantly because of minor differences in pressure.",
        answers: [
            { text: "Emitters", correct: true },
            { text: "Effluent standard", correct: false },
            { text: "Distribution uniformity", correct: false },
            { text: "Depth", correct: false }
        ]
    },
    {
        question: "Accounting of water inflows, such as irrigation and rainfall, and outflows, such as evaporation, seepage and percolation.",
        answers: [
            { text: "Well log", correct: false },
            { text: "Watershed", correct: false },
            { text: "Water balance", correct: true },
            { text: "Wetted diameter", correct: false }
        ]
    },
    {
        question: "In-line canal structure designed to convey canal water from a higher level to a lower level, duly dissipating the excess energy resulting from the drop in elevation.",
        answers: [
            { text: "Drop", correct: true },
            { text: "Border irrigation", correct: false },
            { text: "Bearing capacity", correct: false },
            { text: "Confined aquifer", correct: false }
        ]
    },
    {
        question: "Numerical value on the uniformity of application for agricultural irrigation systems.",
        answers: [
            { text: "Equipment crossing", correct: false },
            { text: "Distribution uniformity", correct: true },
            { text: "Farm ditch", correct: false },
            { text: "Freeboard", correct: false }
        ]
    },
    {
        question: "Rate of evapotranspiration equal to or smaller than predicted crop evapotranspiration as affected by the level of available soil water, salinity, field size or other causes.",
        answers: [
            { text: "Actual crop evapotranspiration", correct: true },
            { text: "Aquifer", correct: false },
            { text: "Basin", correct: false },
            { text: "Application efficiency", correct: false }
        ]
    },
    {
        question: "Areas open for public entry such as golf courses, public and private parks, playgrounds, schoolyards and playing fields, residential landscapes and industrial park landscapes.",
        answers: [
            { text: "Application efficiency", correct: false },
            { text: "Active storage", correct: false },
            { text: "Area", correct: false },
            { text: "Access area", correct: true }
        ]
    },
    {
        question: "Ratio between water received at the inlet for a block of fields to that released at the project’s headwork.",
        answers: [
            { text: "Conveyance loss", correct: false },
            { text: "Confined aquifer", correct: false },
            { text: "Conveyance efficiency", correct: true },
            { text: "Crop coefficient", correct: false }
        ]
    },
    {
        question: "Channel which conveys irrigation water from the turnout to the paddy field.",
        answers: [
            { text: "Farm ditch", correct: true },
            { text: "Filter drain", correct: false },
            { text: "Freeboard", correct: false },
            { text: "Head ditch", correct: false }
        ]
    },
    {
        question: "Dam component which prevents migration of small particles and screen off fine materials that flow with seepage water and prevent piping.",
        answers: [
            { text: "Filter drain", correct: true },
            { text: "Hydraulic radius", correct: false },
            { text: "Invert", correct: false },
            { text: "Irrigation period", correct: false }
        ]
    },
    {
        question: "Geological formation shaped by the dissolution of a layer or layers of soluble bedrock, usually carbonate rocks such as limestone or dolomite.",
        answers: [
            { text: "Hydraulic jump", correct: false },
            { text: "Hydraulic depth", correct: false },
            { text: "Karst topography", correct: true },
            { text: "Inverted siphon", correct: false }
        ]
    },
    {
        question: "Deep percolation of water beyond the root zone of plants, resulting in the loss of salts or nutrients",
        answers: [
            { text: "Leaching", correct: true },
            { text: "Manifold", correct: false },
            { text: "Loading limit", correct: false },
            { text: "Lateral spacing", correct: false }
        ]
    },
    {
        question: "Inside bottom or still of the conduit",
        answers: [
            { text: "Irrigation period", correct: false },
            { text: "Karst topography", correct: false },
            { text: "Invert", correct: true },
            { text: "Inside slope", correct: false }
        ]
    },
    {
        question: "Occurrence or frequency of an earthquake in a region",
        answers: [
            { text: "Seepage", correct: false },
            { text: "Seismicity", correct: true },
            { text: "Side slope", correct: false },
            { text: "Seepage line", correct: false }
        ]
    },
    {
        question: "Distance between two sprinkler heads along the lateral",
        answers: [
            { text: "Storage capacity", correct: false },
            { text: "Side slope", correct: false },
            { text: "Spillway", correct: false },
            { text: "Sprinkler spacing", correct: true }
        ]
    },
    {
        question: "Area which contributes runoff or drains water into the reservoir",
        answers: [
            { text: "Water right", correct: false },
            { text: "Watershed", correct: true },
            { text: "Water balance", correct: false },
            { text: "Wastewater", correct: false }
        ]
    },
    {
        question: "It is the particle diameter corresponding to a 10% sieve passing",
        answers: [
            { text: "Effective rainfall", correct: false },
            { text: "Effective rooting depth", correct: false },
            { text: "Effective size", correct: true },
            { text: "Effluent", correct: false }
        ]
    },
    {
        question: "Small parallel channels, made to carry water in order to irrigate the crop",
        answers: [
            { text: "Hydraulic depth", correct: false },
            { text: "Hydraulic grade line", correct: false },
            { text: "Furrows", correct: true },
            { text: "Freeboard", correct: false }
        ]
    },
    {
        question: "The sum total of water lost in a given area through transpiration from plants, evaporation from soil and water surface, and for building tissues of plants.",
        answers: [
            { text: "Consumptive use", correct: true },
            { text: "Deep percolation", correct: false },
            { text: "Runoff", correct: false },
            { text: "Seepage", correct: false }
        ]
    },
    {
        question: "Water held by forces of surface tension and continuous film around soil particles is termed as",
        answers: [
            { text: "Hygroscopic water", correct: false },
            { text: "Gravitational water", correct: false },
            { text: "Capillary water", correct: true },
            { text: "Sea water", correct: false }
        ]
    },
    {
        question: "What is the term for water that penetrates into the soil and flows laterally in the surface soil to a stream channel?",
        answers: [
            { text: "Runoff", correct: false },
            { text: "Interflow", correct: true },
            { text: "Percolation", correct: false },
            { text: "All of the above", correct: false }
        ]
    },
    {
        question: "What is the line defined by the water level in a group of artesian wells?",
        answers: [
            { text: "Water table", correct: true },
            { text: "Piezometric surface", correct: false },
            { text: "Specific yield", correct: false },
            { text: "Nota", correct: false }
        ]
    },
    {
        question: "Which is the best method of irrigation for irregular topography?",
        answers: [
            { text: "Flooding", correct: false },
            { text: "Furrow", correct: false },
            { text: "Sprinkling", correct: true },
            { text: "Sub-irrigation", correct: false }
        ]
    },
    {
        question: "The part of the dam that releases surplus flush flood water which cannot be contained in the active storage of the reservoir.",
        answers: [
            { text: "Freeboard", correct: false },
            { text: "Spillway", correct: true },
            { text: "Gates", correct: false },
            { text: "Weir", correct: false }
        ]
    },
    {
        question: "Which type of soil is considered the most suitable for agricultural purposes?",
        answers: [
            { text: "Sandy soil", correct: false },
            { text: "Clay soil", correct: false },
            { text: "Loam soil", correct: true },
            { text: "Gravel soil", correct: false }
        ]
    },
    {
        question: "What is the primary function of a crop rotation strategy in agriculture?",
        answers: [
            { text: "Increasing the use of chemical fertilizers", correct: false },
            { text: "Minimizing soil erosion", correct: false },
            { text: "Enhancing biodiversity on the farm", correct: false },
            { text: "Managing pests and diseases", correct: true }
        ]
    },
    {
        question: "Which of the following is an essential factor to consider when designing a greenhouse for optimal plant growth?",
        answers: [
            { text: "Maximizing natural sunlight exposure", correct: true },
            { text: "Minimizing ventilation", correct: false },
            { text: "Using concrete flooring", correct: false },
            { text: "Installing incandescent lighting", correct: false }
        ]
    },
    {
        question: "What is the purpose of a bioreactor in the context of biosystems engineering?",
        answers: [
            { text: "Generating electricity from organic waste", correct: false },
            { text: "Filtering water for agricultural use", correct: false },
            { text: "Developing genetically modified crops", correct: false },
            { text: "Cultivating microorganisms for various applications", correct: true }
        ]
    },
    {
        question: "Which of the following is a common post-harvest processing method for grains?",
        answers: [
            { text: "Irrigation", correct: false },
            { text: "Drying", correct: true },
            { text: "Fertilization", correct: false },
            { text: "Pruning", correct: false }
        ]
    },
    {
        question: "What does the term 'precision agriculture' refer to?",
        answers: [
            { text: "Farming using only traditional methods", correct: false },
            { text: "A farming approach that relies solely on manual labor", correct: false },
            { text: "Using modern technology and data to optimize crop production", correct: true },
            { text: "A method of cultivating crops without the use of pesticides", correct: false }
        ]
    },
    {
        question: "Agricultural Machinery - Location and Method of Operation of Operator’s Controls – Control for Agricultural Tractors and Machinery",
        answers: [
            { text: "PAES 104:2000", correct: true },
            { text: "PAES 101:2000", correct: false },
            { text: "PAES 112:2000", correct: false },
            { text: "PAES 111:2000", correct: false }
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
const maxTime = 60;
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

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
  startTimer(); // Start the timer when the quiz starts
  startButton.disabled = true; // Disable the "Start Quiz" button after starting
  startButton.style.display = "none"; 
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
    startTimer(); // Start the timer for the next question
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
