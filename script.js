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
var intials = document.createElement('input')


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
    choicesGroup.classList.add('choicesList')
    container.append(choicesGroup)
    for (let i=0; i < quiz[currentQuestion].choices.length; i++){
        const choiceEL = document.createElement('li')
        const buttonEL = document.createElement('button')
        buttonEL.textContent = quiz[currentQuestion].choices[i]
        buttonEL.addEventListener('click', function(event){
            if(currentQuestion < quiz.length-1){

                const textContent = event.target.firstChild.textContent;
                if(textContent===quiz[currentQuestion].answer){
                    questionResult.textContent = 'Correct'
                }
                else{
                    questionResult.textContent = 'Incorrect'
                }
                    
                    // always increment to next question
                    currentQuestion++
                    // go to next question
                    question.textContent = quiz[currentQuestion].question
                    changeChoices()
                    // buttonEL.textContent = quiz[currentQuestion].choices[i]
                    // settimeout to remove class from questionResults
                    const msgTimer = setTimeout(function(){
                        questionResult.textContent = ''
                    },1000)
            } else {
                // after last question is clicked, user is able to enter their highscore
                container.remove()
                question.remove()
                const end = document.createElement('h1')
                end.textContent = 'You have completed the quiz! Please enter your intials to save your highscore.'
                quizContent.append(end)
                const form = document.createElement('form')
                quizContent.append(form)
                intials.setAttribute('type', 'text')
                intials.setAttribute('name', 'name')
                intials.setAttribute('placeholder', 'Name or intials')
                form.append(intials)
                var userInput = intials.value
                submitBtn.setAttribute('id', 'submit')
                submitBtn.textContent = 'Submit'
                form.append(submitBtn)
                submitBtn.addEventListener('click', function(e, userInput){
                    e.preventDefault()
                    console.log(userInput)
                })
            }
                
            
        })
        choiceEL.append(buttonEL)
        choicesGroup.append(choiceEL)
    
    }

    function changeChoices(){
        for (let j=0; j < choicesGroup.children.length; j++){
            choicesGroup.children[j].children[0].textContent = quiz[currentQuestion].choices[j]
        }

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