// Sample quiz questions
const quizQuestions = [
    {
        question: "What does HTML stands for?",
        options: ["Hyper Text Programmer", "Hyper Text Markup Language", "Hyper text Multiple Language", "Hyper Tool Multi Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "How do you write 'Hello World' in alert box?",
        options: ["msgBox('Hello World')", "alertBox('Hello World')", "msg('Hello World')", "alert('Hello World')"],
        answer: "alert('Hello World')"
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "Javascript"],
        answer: "Javascript"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const userInfoSection = document.getElementById('user-info');
const userForm = document.getElementById('user-form');
const quizSection = document.getElementById('quiz');
const quizContainer = document.getElementById('quiz-container');
const nextButton = document.getElementById('next-question');
const submitButton = document.getElementById('submit-quiz');
const resultText = document.getElementById('result-text');

// Load quiz question
function loadQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    quizContainer.innerHTML = `
        <p>${currentQuestionIndex + 1}. ${question.question}</p>
        ${question.options.map(option => `
            <div class="form-check">
                <input class="form-check-input" type="radio" name="question" value="${option}">
                <label class="form-check-label">${option}</label>
            </div>
        `).join('')}
    `;
}

// Calculate quiz results
function calculateResults() {
    const selectedOption = document.querySelector('input[name="question"]:checked');
    if (selectedOption && selectedOption.value === quizQuestions[currentQuestionIndex].answer) {
        score++;
    }
}

// Display results in the modal
function displayResults() {
    resultText.textContent = `You scored ${score} out of ${quizQuestions.length}`;
    $('#resultModal').modal('show');
}

// Event listeners
userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    userInfoSection.classList.add('d-none');
    quizSection.classList.remove('d-none');
    loadQuestion();
});

nextButton.addEventListener('click', () => {
    calculateResults();
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        quizContainer.classList.add('d-none');
        nextButton.classList.add('d-none');
        submitButton.classList.remove('d-none');
    }
});




submitButton.addEventListener('click', displayResults);

// Initialize quiz
loadQuestion();
