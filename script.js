// variables
const startButton = document.querySelector('#start-btn')
const timerEl = document.querySelector('#timer') 
timerEl.textContent = 0

startButton.addEventListener('click', function(){
    let timer = 60
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
        question: 'Inside which element for we link our JavaScript file?',
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