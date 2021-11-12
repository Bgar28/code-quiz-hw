// variables
const startButton = document.querySelector('#start-btn')
const timerEl = document.querySelector('#timer')
const starterEl = document.querySelector('#starter-content')
const quizContent = document.querySelector('#quiz-content')
const questionResult = document.querySelector('#question-result')
let timer = 60
let currentQuestion = 0
timerEl.textContent = 0
const submitBtn = document.createElement('button')
const correct = 'Correct'
const incorrect = 'Incorrect'
var userInitialsArr = []

var score = 0

function clearResultMsg() {
    // stops the "correct" & "incorrect" msg from displaying
    setTimeout(function () {
        questionResult.textContent = ''
    }, 1000)
}

function incrementScoreAndDisplayResult(textContent) {
    if (textContent === quiz[currentQuestion].answer) {
        score++;
        questionResult.textContent = correct
    }
    else {
        questionResult.textContent = incorrect
    }
}

function renderHighScorePage(initials) {
    const end = document.createElement('h1')
    end.textContent = 'You have completed the quiz! Please enter your initials to save your highscore.'
    quizContent.append(end)
    const form = document.createElement('form')
    quizContent.append(form)
    initials.setAttribute('type', 'text')
    initials.setAttribute('name', 'name')
    initials.setAttribute('placeholder', 'Name or initials')
    form.append(initials)
    submitBtn.setAttribute('id', 'submit')
    submitBtn.textContent = 'Submit'
    form.append(submitBtn)
    const finalScore = document.createElement('p')
    finalScore.textContent = 'Score: ' + score
    quizContent.append(finalScore)
}

// when start button is clicked, the timer starts its countdown from 60 secs
startButton.addEventListener('click', function () {
    // add a class name of "hide" to get rid of the starter content after the button is clicked 
    starterEl.classList.add('hide');

    // variables for the questions/choices
    const container = document.createElement('div')
    quizContent.append(container)
    const question = document.createElement('p')
    container.append(question)
    question.textContent = quiz[currentQuestion].question
    const choicesGroup = document.createElement('ul')
    choicesGroup.classList.add('choicesList')
    container.append(choicesGroup)

    // loops through the questions
    for (let i = 0; i < quiz[currentQuestion].choices.length; i++) {
        const choiceEL = document.createElement('li')
        const buttonEL = document.createElement('button')
        buttonEL.textContent = quiz[currentQuestion].choices[i]

        // when a button choice is clicked, display either "correct" or "incorrect" 
        buttonEL.addEventListener('click', function (event) {
            const textContent = event.target.firstChild.textContent;
            const initials = document.createElement('input')


            if (currentQuestion < quiz.length - 1) {


                incrementScoreAndDisplayResult(textContent)

                // always increment to next question
                currentQuestion++
                // go to next question
                question.textContent = quiz[currentQuestion].question
                // envokes changeChoices function
                changeChoices()
                clearResultMsg()

            } else {
                incrementScoreAndDisplayResult(textContent)
                clearResultMsg()



                // after last question is clicked, the timer stops
                clearInterval(timerInterval)

                // after last question is clicked, user is able to enter their highscore
                container.remove()
                question.remove()
                renderHighScorePage(initials)



                // store the user's intials in local storage
                submitBtn.addEventListener('click', function (e) {
                    e.preventDefault()
                    var user = initials.value

                    var scoreRecord = localStorage.getItem('users')

                    if (scoreRecord) {
                        var parsedScores = JSON.parse(scoreRecord)
                        parsedScores.push({
                            user,
                            score
                        })
                        localStorage.setItem('users', JSON.stringify(parsedScores))
                        return;
                    }
                    localStorage.setItem('users', JSON.stringify([{
                        user,
                        score
                    }]))

                    console.log(userInitialsArr)
                })
            }


        })
        choiceEL.append(buttonEL)
        choicesGroup.append(choiceEL)

    }

    // loops through the choices for each question and adds the text of the choices to the list
    function changeChoices() {
        for (let j = 0; j < choicesGroup.children.length; j++) {
            choicesGroup.children[j].children[0].textContent = quiz[currentQuestion].choices[j]
        }

    }

    // timer function
    const timerInterval = setInterval(function () {
        timer--;
        timerEl.textContent = timer
        if (timer === 0) {
            clearInterval(timerInterval)
        }

    }, 1000)

})

// array containing quiz questions/answers
const quiz = [
    {
        question: 'Inside which element do we link our JavaScript file?',
        choices: ['<link>', '<script>', '<title>', '<a>'],
        answer: '<script>'
    },

    {
        question: 'How many days did it take to build Javascript?',
        choices: ['10', '7', '100', '730'],
        answer: '10'

    },

    {
        question: 'What is 12 % 5?',
        choices: ['2.4', '5', '0', '2'],
        answer: '2'

    },

    {
        question: 'Which is the correct syntax of a FOR loop?',
        choices: ['for ( var i=0; i < 5; i++)', 'for i=5 < 0', 'for var = 0 i++ < 1', 'for (var i++)'],
        answer: 'for ( var i=0; i < 5; i++)'

    },

    {
        question: 'How do you add a single line comment in Javascript?',
        choices: ['** Lorem ipsum dolor sit amet **', '<! Lorem ipsum dolor sit amet !>', '/* Lorem ipsum dolor sit amet */', '// Lorem ipsum dolor sit amet'],
        answer: '// Lorem ipsum dolor sit amet'

    }
]