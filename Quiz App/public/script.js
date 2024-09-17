const questionEle = document.getElementById("questionEle")
const choices = document.getElementById("choices")
const nextBtn = document.getElementById("nextBtn")
const result = document.getElementById('result')

const questions = [
    {
        questions: "Which is the largest continent in the world?",
        options: ["Asia", "Europe", "North America", "Africa"],
        answer: "Asia"
    },
    {
        questions: "Which is the largest country in the world?",
        options: ["Brazil", "Canada", "China", "Russia"],
        answer: "Russia"
    }, 
    {
        questions: "Which country has biggest economy in the world?", 
        options: ["China", "Germany", "Russia", "United States Of America"],
        answer: "United States Of America"
    },
    {
        questions: "Which is the largest animal in the world?",
        options: ["Giraffe", "Elephant", "Blue Whale", "Shark"],
        answer: "Blue Whale"
    },
    {
        questions: "Most spoken language in the world?",
        options: ["Chinese", "English", "Arabic", "Urdu"],
        answer: "English"
    }
]

let currentQuestionIndex = 0
let score = 0

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex]
    questionEle.textContent = currentQuestion.questions
    choices.textContent = ""

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button')
        button.textContent = option
        button.classList.add('choice-btn')
        button.addEventListener('click', () => checkAnswer(option, button))
        choices.appendChild(button)
    })
}


function checkAnswer(selectedOption, button) {
    const currentQuestion = questions[currentQuestionIndex]
    if(selectedOption === currentQuestion.answer) {
        score++
    } else {
        button.style.backgroundColor = 'red'
        button.style.color = 'white'
    }  
    Array.from(choices.children).forEach((btn) => {
        btn.disabled = true;

        if (btn.textContent === currentQuestion.answer) {
            btn.style.backgroundColor = 'green';
            btn.style.color = 'white';
        }
        btn.style.cursor = 'no-drop'
    });

    nextBtn.style.display = 'block';
    
}

function showResult() {
    questionEle.textContent = "Quiz Completed"
    choices.textContent = ""
    result.textContent = `You scored ${score} out of ${questions.length}!`
    nextBtn.textContent = "Play Again"
    nextBtn.addEventListener('click', () => {
        restartQuiz()
    })

}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length) {
        displayQuestion()
        nextBtn.style.display = 'block'
    } else {
        showResult()
    }
})

function restartQuiz() {
    score = 0
    currentQuestionIndex = 0
    displayQuestion()
}

displayQuestion()
nextBtn.style.display = 'none'