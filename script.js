// DOM Elements
const home = document.getElementById('home');
const quiz = document.getElementById('quiz');
const quizListContainer = document.getElementById('quiz-list');
const quizTitle = document.getElementById('quiz-title');
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const end = document.getElementById('end');
const finalScore = document.getElementById('finalScore');
const playAgainBtn = document.getElementById('play-again');
const goHomeBtn = document.getElementById('go-home');

// Game variables
let currentQuiz = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Constants
const CORRECT_BONUS = 10;

// Initialize the app
function initializeApp() {
    // Create quiz list buttons dynamically
    for (const quizKey in quizzes) {
        const quizBtn = document.createElement('button');
        quizBtn.className = 'btn';
        quizBtn.innerHTML = quizzes[quizKey].title;
        quizBtn.addEventListener('click', () => startQuiz(quizKey));
        quizListContainer.appendChild(quizBtn);
    }
}

// Start Quiz
function startQuiz(quizType) {
    currentQuiz = quizzes[quizType];
    quizTitle.innerText = currentQuiz.title;
    
    home.classList.add('hide');
    quiz.classList.remove('hide');
    
    // Reset game state
    questionCounter = 0;
    score = 0;
    availableQuestions = [...currentQuiz.questions];
    
    // Get a new question
    getNewQuestion();
}

// Get a new question
function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= currentQuiz.questions.length) {
        // Save score to local storage
        localStorage.setItem('mostRecentScore', score);
        
        // Show end screen
        quiz.classList.add('hide');
        end.classList.remove('hide');
        finalScore.innerText = score;
        return;
    }
    
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${currentQuiz.questions.length}`;
    
    // Update progress bar
    const progressPercentage = (questionCounter / currentQuiz.questions.length) * 100;
    progressBarFull.style.width = `${progressPercentage}%`;
    
    // Select a random question
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    const currentQuestion = availableQuestions[questionIndex];
    
    question.innerText = currentQuestion.question;
    
    // Update choices
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    
    // Remove used question
    availableQuestions.splice(questionIndex, 1);
    
    // Allow answers
    acceptingAnswers = true;
}

// Check answer when user clicks a choice
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;
        
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = parseInt(selectedChoice.dataset['number']);
        
        // Get current question
        const currentQuestion = currentQuiz.questions[questionCounter - 1];
        
        // Determine if answer is correct
        const classToApply = selectedAnswer === currentQuestion.answer ? 'correct' : 'incorrect';
        
        // Add points if correct
        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }
        
        // Add feedback class
        selectedChoice.parentElement.classList.add(classToApply);
        
        // Wait before showing next question
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

// Increment Score
function incrementScore(num) {
    score += num;
    scoreText.innerText = score;
}

// Play Again
playAgainBtn.addEventListener('click', () => {
    end.classList.add('hide');
    home.classList.remove('hide');
});

// Go Home
goHomeBtn.addEventListener('click', () => {
    end.classList.add('hide');
    home.classList.remove('hide');
});

// Initialize the app when the DOM content is loaded
document.addEventListener('DOMContentLoaded', initializeApp);
