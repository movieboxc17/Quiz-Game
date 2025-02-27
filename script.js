// Quiz data collection
const quizzes = [
    {
        title: "General Knowledge Quiz",
        questions: [
            {
                question: "What is the capital of France?",
                choices: ["London", "Berlin", "Paris", "Madrid"],
                answer: 3
            },
            {
                question: "Which planet is known as the Red Planet?",
                choices: ["Venus", "Mars", "Jupiter", "Saturn"],
                answer: 2
            },
            {
                question: "Who painted the Mona Lisa?",
                choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                answer: 3
            },
            {
                question: "What is the largest ocean on Earth?",
                choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                answer: 4
            },
            {
                question: "Which element has the chemical symbol 'O'?",
                choices: ["Gold", "Oxygen", "Osmium", "Oganesson"],
                answer: 2
            }
        ]
    },
    {
        title: "Computer Science Quiz",
        questions: [
            {
                question: "What does HTML stand for?",
                choices: ["Hyper Text Markup Language", "High-level Text Machine Language", "Hyper Transfer Markup Language", "Hyper Technical Modern Language"],
                answer: 1
            },
            {
                question: "Which programming language is known as the 'mother of all languages'?",
                choices: ["Java", "C", "Python", "FORTRAN"],
                answer: 2
            },
            {
                question: "What year was JavaScript created?",
                choices: ["1985", "1995", "2000", "2005"],
                answer: 2
            },
            {
                question: "Which company developed the first commercially available GUI?",
                choices: ["Microsoft", "Apple", "Xerox", "IBM"],
                answer: 3
            },
            {
                question: "What does CPU stand for?",
                choices: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Central Processor Unlimited"],
                answer: 1
            }
        ]
    },
    {
        title: "Science Quiz",
        questions: [
            {
                question: "What is the hardest natural substance on Earth?",
                choices: ["Platinum", "Iron", "Diamond", "Titanium"],
                answer: 3
            },
            {
                question: "Which gas makes up the majority of Earth's atmosphere?",
                choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                answer: 3
            },
            {
                question: "How many bones does an adult human have?",
                choices: ["186", "206", "226", "246"],
                answer: 2
            },
            {
                question: "What is the smallest unit of life?",
                choices: ["Cell", "Atom", "Molecule", "Organelle"],
                answer: 1
            },
            {
                question: "What is the speed of light in a vacuum?",
                choices: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"],
                answer: 1
            }
        ]
    }
];

// DOM Elements
const homeEl = document.getElementById('home');
const quizListEl = document.getElementById('quiz-list');
const quizEl = document.getElementById('quiz');
const endEl = document.getElementById('end');
const quizTitleEl = document.getElementById('quiz-title');
const questionEl = document.getElementById('question');
const choicesEl = Array.from(document.getElementsByClassName('choice-text'));
const progressTextEl = document.getElementById('progressText');
const scoreTextEl = document.getElementById('score');
const progressBarFullEl = document.getElementById('progressBarFull');
const finalScoreEl = document.getElementById('final-score');
const playAgainBtn = document.getElementById('play-again');
const goHomeBtn = document.getElementById('go-home');

// Game variables
let currentQuiz = {};
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Constants
const CORRECT_BONUS = 10;

// Initialize quizzes on the home screen
function initializeQuizList() {
    quizListEl.innerHTML = '';
    quizzes.forEach((quiz, index) => {
        const quizButton = document.createElement('button');
        quizButton.innerText = quiz.title;
        quizButton.classList.add('btn');
        quizButton.addEventListener('click', () => startQuiz(index));
        quizListEl.appendChild(quizButton);
    });
}

// Start quiz function
function startQuiz(quizIndex) {
    currentQuiz = quizzes[quizIndex];
    quizTitleEl.innerText = currentQuiz.title;
    homeEl.classList.add('hide');
    quizEl.classList.remove('hide');
    
    score = 0;
    questionCounter = 0;
    availableQuestions = [...currentQuiz.questions];
    getNewQuestion();
}

// Get new question function
function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= currentQuiz.questions.length) {
        // End the quiz
        endQuiz();
        return;
    }
    
    questionCounter++;
    progressTextEl.innerText = `Question ${questionCounter}/${currentQuiz.questions.length}`;
    progressBarFullEl.style.width = `${(questionCounter / currentQuiz.questions.length) * 100}%`;
    
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    questionEl.innerText = currentQuestion.question;
    
    choicesEl.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion.choices[number - 1];
    });
    
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
}

// Handle choice selection
choicesEl.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;
        
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = parseInt(selectedChoice.dataset['number']);
        
        const classToApply = selectedAnswer === currentQuestion.answer ? 'correct' : 'incorrect';
        
        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }
        
        selectedChoice.parentElement.classList.add(classToApply);
        
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

// Increment score
function incrementScore(num) {
    score += num;
    scoreTextEl.innerText = score;
}

// End quiz
function endQuiz() {
    quizEl.classList.add('hide');
    endEl.classList.remove('hide');
    finalScoreEl.innerText = `Your score: ${score}/${currentQuiz.questions.length * CORRECT_BONUS}`;
}

// Button event listeners
playAgainBtn.addEventListener('click', () => {
    endEl.classList.add('hide');
    quizEl.classList.remove('hide');
    startQuiz(quizzes.indexOf(currentQuiz));
});

goHomeBtn.addEventListener('click', () => {
    endEl.classList.add('hide');
    homeEl.classList.remove('hide');
});

// Initialize the app
initializeQuizList();
