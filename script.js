// variables
const startButton = document.querySelector('#start-btn')
const timerEl = document.querySelector('#timer') 
const starterEl = document.querySelector('#starter-content')
const quizContent = document.querySelector('#quiz-content')
const questionResult = document.querySelector('#question-result')
let timer = 60
let currentQuestion = 0
timerEl.textContent = 0

// when start button is clicked, the timer starts its countdown from 60 secs
startButton.addEventListener('click', function(){
   // add a class name of "hide" to get rid of the starter content after the button is clicked 
    starterEl.classList.add('hide');

    const container = document.createElement('div')
    quizContent.append(container)
    const question = document.createElement('p')
    container.append(question)
    question.textContent = quiz[currentQuestion].question
    const choicesGroup = document.createElement('ul')
    container.append(choicesGroup)
    for (let i=0; i < quiz[currentQuestion].choices.length; i++){
        const choiceEL = document.createElement('li')
        const buttonEL = document.createElement('button')
        buttonEL.textContent = quiz[currentQuestion].choices[i]
        buttonEL.addEventListener('click', function(event){
            const textContent = event.target.firstChild.textContent;
            if(textContent===quiz[currentQuestion].answer){
                questionResult.textContent = 'Correct'
                // add a show class to this 
            }
            else{
                questionResult.textContent = 'Incorrect'
                  // add a show class to this 
            }

            // always increment to next question
            currentQuestion++
            // go to next question
            question.textContent = quiz[currentQuestion].question

            // settimeout to remove class from questionResults
            
            
        })
        choiceEL.append(buttonEL)
        choicesGroup.append(choiceEL)
    
    }



    const timerInterval = setInterval(function(){
    timer--;
    timerEl.textContent = timer
    if(timer === 0){
        clearInterval(timerInterval)
    }

    },1000)

})

// variable containing quiz questions/answers
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