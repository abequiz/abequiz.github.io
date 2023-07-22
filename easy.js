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
            { text: "None of the above", correct: false },
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
            question: "It is the water retained about individual soil particles by molecular action and can be removed only by heating",
            answers: [
                { text: "Permanent wilting point", correct: false },
                { text: "Hygroscopic water", correct: true },
                { text: "Hydrophobic water", correct: false },
                { text: "Microscopic water", correct: false }
            ]
        },
        {
            question: "A geologic formation that contains water into the field ditches",
            answers: [
                { text: "Aquifuge", correct: true },
                { text: "Aquifer", correct: false },
                { text: "Aquitard", correct: false },
                { text: "Aquiclude", correct: false }
            ]
        },
        {
            question: "A geologic formation which transmits water at a rate insufficient to be economically developed for pumping",
            answers: [
                { text: "Aquifuge", correct: false },
                { text: "Aquifer", correct: false },
                { text: "Aquitard", correct: false },
                { text: "Aquiclude", correct: true }
            ]
        },
        {
            question: "Irrigation method is used for row crops wherein only a part of the surface is wetted",
            answers: [
                { text: "Basin flooding", correct: false },
                { text: "Furrow irrigation", correct: true },
                { text: "Border irrigation", correct: false },
                { text: "Border-strip flooding", correct: false }
            ]
        },
        {
            question: "The infiltration equation based on the exhaustion process is the",
            answers: [
                { text: "Horton's", correct: true },
                { text: "Lewis-Kostiakov's", correct: false },
                { text: "Philip's", correct: false },
                { text: "Darcy's", correct: false }
            ]
        },
        {
            question: "The aggregation of soil particles into peds",
            answers: [
                { text: "Soil texture", correct: false },
                { text: "Clay", correct: false },
                { text: "Soil structure", correct: true },
                { text: "Soil porosity", correct: false }
            ]
        },
        {
            question: "What are the size reduction laws?",
            answers: [
                { text: "Rittinger’s Law", correct: false },
                { text: "Kick’s Law", correct: false },
                { text: "Bond’s Law", correct: false },
                { text: "Bond’s Law, Rittinger’s Law, and Kick’s Law", correct: true }
            ]
        },
        {
            question: "What are the factors affecting size reduction?",
            answers: [
                { text: "Shape and size", correct: true },
                { text: "Temperature", correct: false },
                { text: "Pressure", correct: false },
                { text: "Viscosity", correct: false }
            ]
        },
        {
            question: "What is milling degree?",
            answers: [
                { text: "Related to barn", correct: false },
                { text: "Related to husk", correct: true },
                { text: "Related to germ", correct: false },
                { text: "Related to endosperm", correct: false }
            ]
        },
        {
            question: "How is sludge removed from the sedimentation tank?",
            answers: [
                { text: "Scraper", correct: false },
                { text: "Air", correct: false },
                { text: "Vacuum devices", correct: false },
                { text: "Scraper and vacuum devices", correct: true }
            ]
        },
        {
            question: "Specific Heat (kJ/kg K) of apple is",
            answers: [
                { text: "1.88", correct: true },
                { text: "1.67", correct: false },
                { text: "1.76", correct: false },
                { text: "1.42", correct: false }
            ]
        },
        {
            question: "The specific heat of a material can be determined by",
            answers: [
                { text: "calorimetry", correct: true },
                { text: "manometers", correct: false },
                { text: "barometers", correct: false },
                { text: "anemometer", correct: false }
            ]
        },
        {
            question: "______ is the heat content in a system per unit mass",
            answers: [
                { text: "Specific heat", correct: false },
                { text: "Enthalpy", correct: true },
                { text: "Entropy", correct: false },
                { text: "Latent heat", correct: false }
            ]
        },
        {
            question: "Who designed the refrigerator?",
            answers: [
                { text: "Oliver Evans", correct: true },
                { text: "Charles Chamberland", correct: false },
                { text: "Nicolas Appert", correct: false },
                { text: "Clarence Birdseye", correct: false }
            ]
        },
        {
            question: "The first ice making machine used for brewing was invented by _________",
            answers: [
                { text: "James Harrison", correct: true },
                { text: "Charles Chamberland", correct: false },
                { text: "Nicolas Appert", correct: false },
                { text: "Clarence Birdseye", correct: false }
            ]
        },
        {
            question: "_________ is the difference between the boiling point temperature of the refrigerant in the evaporator coil and the actual temperature of the refrigerant gas as it leaves the evaporator",
            answers: [
                { text: "Superheat", correct: true },
                { text: "Critical point", correct: false },
                { text: "Supercool", correct: false },
                { text: "Drastic point", correct: false }
            ]
        },
        {
            question: "___________ freezers are used for deep freezing fish fillets.",
            answers: [
                { text: "Air blast", correct: true },
                { text: "Slow type", correct: false },
                { text: "Normal", correct: false },
                { text: "Low velocity", correct: false }
            ]
        },
        {
            question: "The principle of flash cooling is achieved in _____________",
            answers: [
                { text: "thermoelectric refrigeration", correct: false },
                { text: "steam-jet refrigeration", correct: true },
                { text: "evaporative cooling", correct: false },
                { text: "absorption refrigeration", correct: false }
            ]
        },
        {
            question: "In the ___________, an electric current sent through a junction of two dissimilar materials results in either heating or cooling of the junction.",
            answers: [
                { text: "Peltier effect", correct: true },
                { text: "Seebeck effect", correct: false },
                { text: "Joule effect", correct: false },
                { text: "Thomson effect", correct: false }
            ]
        },
        {
            question: "Dry ice is the solid form of ___________",
            answers: [
                { text: "carbon dioxide", correct: true },
                { text: "Sulphur dioxide", correct: false },
                { text: "ammonium choride", correct: false },
                { text: "carbontetraoxide", correct: false }
            ]
        },
        {
            question: "What are ideal conditions for an evaporative cooling system?",
            answers: [
                { text: "Hot and humid conditions", correct: false },
                { text: "Hot and dry conditions", correct: true },
                { text: "Cold and humid conditions", correct: false },
                { text: "Cold and dry conditions", correct: false }
            ]
        },
        {
            question: "Who invented chillers?",
            answers: [
                { text: "Louis Pasteur", correct: false },
                { text: "Charles Chamberland", correct: false },
                { text: "Willis Carrier", correct: true },
                { text: "Clarence Birdseye", correct: false }
            ]
        },
        
            {
                question: " _______ is used for cooling of products, mechanisms and factory machinery under control temperature.",
                answers: [
                    { text: "Chiller", correct: true },
                    { text: "Ice ", correct: false },
                    { text: "Alcohol", correct: false },
                    { text: "Ice or alcohol according to the product", correct: false }
                ]
            },
            {
                question: "What is the ideal chilled water temperature?",
                answers: [
                    { text: "42°F", correct: true },
                    { text: "52°F", correct: false },
                    { text: "49°F ", correct: false },
                    { text: "50°F", correct: false }
                ]
            },
            {
                question: "________ invented the quick freezing method in 1924.",
                answers: [
                    { text: "Clarence Birdseye", correct: true },
                    { text: "Charles Chamberland", correct: false },
                    { text: "Willis Carrier", correct: false },
                    { text: "Clarence Birdseye", correct: false }
                ]
            },
            {
                question: "____ chillers are also called as centrifugal chiller type refrigeration systems.",
                answers: [
                    { text: "Low-pressure", correct: true },
                    { text: "Low-temperature", correct: false },
                    { text: "Low-velocity", correct: false },
                    { text: "High-pressure", correct: false }
                ]
            },
            {
                question: "______ chiller is powered by a heat source like steam and uses no moving parts.",
                answers: [
                    { text: "Screw driven", correct: false },
                    { text: "Reciprocating", correct: false },
                    { text: "Centrifugal", correct: false },
                    { text: "Absorption", correct: true }
                ]
            },
            {
                question: "______ chillers are volume displacement units.",
                answers: [
                    { text: "Absorption", correct: false },
                    { text: "Reciprocating", correct: false },
                    { text: "Centrifugal", correct: true },
                    { text: "Screw driven", correct: false }
                ]
            },
            {
                question: "Freezer burn is a condition that occurs when frozen food has been damaged by _________",
                answers: [
                    { text: "dehydration", correct: false },
                    { text: "oxidation", correct: false },
                    { text: "dehydration and oxidation", correct: true },
                    { text: "dehydration and reduction", correct: false }
                ]
            },
            {
                question: "_____ is used to freeze particulate foods like peas, cut corn.",
                answers: [
                    { text: "Fluidized  bed freezer", correct: true },
                    { text: "Plate  freezer", correct: false },
                    { text: "Cryogenic  freezers", correct: false },
                    { text: "Belt  freezer", correct: false }
                ]
            },
            {
                question: "_____ is used to freeze food at a tremendously fast rate.",
                answers: [
                    { text: "Fluidized bed freezer", correct: false },
                    { text: "Plate freezer", correct: false },
                    { text: "Cryogenic freezers", correct: true },
                    { text: "Belt freezer", correct: false }
                ]
            },
            {
                question: "Where is sedimentation used?",
                answers: [
                    { text: "Water treatment", correct: true },
                    { text: "Oil production", correct: false },
                    { text: "Essential oil production", correct: false },
                    { text: "Salt production", correct: false }
                ]
            },
            {
                question: "What are benefits of sedimentation?",
                answers: [
                    { text: "Effective in removing fine particles", correct: true },
                    { text: "Effective in removing viruses", correct: false },
                    { text: "Effective in removing bacteria", correct: false },
                    { text: "Effective in removing yeast", correct: false }
                ]
            },
            {
                question: "What is the sedimentation principle?",
                answers: [
                    { text: "Centrifugal acceleration", correct: false },
                    { text: "Gravity", correct: false },
                    { text: "Electromagnetism", correct: false },
                    { text: "Gravity, centrifugal acceleration and electromagnetism", correct: true }
                ]
            },
            {
                question: "Where is sedimentation value used?",
                answers: [
                    { text: "Bread", correct: true },
                    { text: "Chocolate", correct: false },
                    { text: "Salt", correct: false },
                    { text: "Sugar", correct: false }
                ]
            },
            {
                question: "What are the factors affecting sedimentation?",
                answers: [
                    { text: "Concentration, particle size", correct: true },
                    { text: "Temperature , particle size", correct: false },
                    { text: "Pressure, concentration", correct: false },
                    { text: "Pressure, particle size", correct: false }
                ]
             },
             {
                question: "_____ is used to freeze food at a tremendously fast rate.",
                answers: [
                    { text: "Fluidized bed freezer", correct: false },
                    { text: "Plate freezer", correct: false },
                    { text: "Cryogenic freezers", correct: true },
                    { text: "Belt freezer", correct: false }
                ]
            },
            {
                question: "Where is sedimentation used?",
                answers: [
                    { text: "Water treatment", correct: true },
                    { text: "Oil production", correct: false },
                    { text: "Essential oil production", correct: false },
                    { text: "Salt production", correct: false }
                ]
            },
            {
                question: "What are benefits of sedimentation?",
                answers: [
                    { text: "Effective in removing fine particles", correct: true },
                    { text: "Effective in removing viruses", correct: false },
                    { text: "Effective in removing bacteria", correct: false },
                    { text: "Effective in removing yeast", correct: false }
                ]
            },
            {
                question: "What is sedimentation principle?",
                answers: [
                    { text: "Centrifugal acceleration", correct: false },
                    { text: "Gravity", correct: false },
                    { text: "Electromagnetism", correct: false },
                    { text: "Gravity, centrifugal acceleration and electromagnetism", correct: true }
                ]
            },
            {
                question: "Where does sedimentation value used?",
                answers: [
                    { text: "Bread", correct: true },
                    { text: "Chocolate", correct: false },
                    { text: "Salt", correct: false },
                    { text: "Sugar", correct: false }
                ]
            },
            {
                question: "What are the factors affecting sedimentation?",
                answers: [
                    { text: "Concentration, particle size", correct: true },
                    { text: "Temperature , particle size", correct: false },
                    { text: "Pressure, concentration", correct: false },
                    { text: "Pressure, particle size", correct: false }
                ]
            },
            {
                question: "Which law is related to sedimentation?",
                answers: [
                    { text: "Gauss’s law", correct: false },
                    { text: "Stroke’s law", correct: true },
                    { text: "Dalton’s law", correct: false },
                    { text: "Newton’s law", correct: false }
                ]
            },
            {
                question: "What is Zeleny test?",
                answers: [
                    { text: "Quality of pulses", correct: false },
                    { text: "Quality of wheat", correct: true },
                    { text: "Quality of sugar", correct: false },
                    { text: "Quality of oil", correct: false }
                ]
            },
            {
                question: "Who invented sedimentation?",
                answers: [
                    { text: "Newton", correct: false },
                    { text: "G.G. Stokes", correct: true },
                    { text: "Antonin Prandtl", correct: false },
                    { text: "Al-Kindi", correct: false }
                ]
            },
            {
                question: "Which unit operation involves the mechanically induced establishment of a flow pattern in a liquid mixture?",
                answers: [
                    { text: "Sedimentation", correct: false },
                    { text: "Agitation", correct: true },
                    { text: "Mixing", correct: false },
                    { text: "Crystallization", correct: false }
                ]
            },
            {
                question: "Lyophilization is also known as __________",
                answers: [
                    { text: "freeze drying", correct: true },
                    { text: "sundrying", correct: false },
                    { text: "tunnel drying", correct: false },
                    { text: "mechanical drying", correct: false }
                ]
            },
            {
                question: "Phase diagram is a graphical representation of the ______ states of a substance under different conditions of temperature and pressure.",
                answers: [
                    { text: "physical", correct: true },
                    { text: "chemical", correct: false },
                    { text: "electromagnetic", correct: false },
                    { text: "mechanical", correct: false }
                ]
            },
            {
                question: "________ diagrams represent the phase behavior of mixtures containing three components.",
                answers: [
                    { "text": "Ternary phase", "correct": true },
                    { "text": "Tertiary phase", "correct": false },
                    { "text": "Tri phase", "correct": false },
                    { "text": "Term phase", "correct": false }
                ]
            },
            {
                question: "The effect of ______on the system is seen only as a phase change.",
                answers: [
                    { "text": "Latent heat", "correct": true },
                    { "text": "Specific heat", "correct": false },
                    { "text": "Enthalpy", "correct": false },
                    { "text": "Entropy", "correct": false }
                ]
            },
            {
                question: "The term triple point was coined by _________",
                answers: [
                    { "text": "Rudolf Clausius", "correct": false },
                    { "text": "Thomas Young", "correct": false },
                    { "text": "Joseph Black", "correct": false },
                    { "text": "James Thomson", "correct": true }
                ]
            },
            {
                "question": "What is the critical point of water?",
                "answers": [
                    { "text": "374°C", "correct": true },
                    { "text": "157.5°C", "correct": false },
                    { "text": "31.0°C", "correct": false },
                    { "text": "240.9°C", "correct": false }
                ]
            },
            {
                question: "Who discovered critical point?",
                answers: [
                    { text: "Joseph Black", correct: false },
                    { text: "Charles Cagniard de la Tour", correct: true },
                    { text: "Henri Becquerel", correct: false },
                    { text: "Stephen Gray", correct: false }
                ]
            },
            {
                question: "Agricultural Machinery - Moldboard Plow - Methods of Test",
                answers: [
                    { text: "PAES 132:2004", correct: true },
                    { text: "PAES 131:2004", correct: false },
                    { text: "PAES 130:2002", correct: false },
                    { text: "PAES 129:2002", correct: false }
                ]
            },
            {
                question: "Agricultural Machinery - Moldboard Plow - Specifications",
                answers: [
                    { text: "PAES 132:2004", correct: false },
                    { text: "PAES 131:2004", correct: true },
                    { text: "PAES 130:2002", correct: false },
                    { text: "PAES 129:2002", correct: false }
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
