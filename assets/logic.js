const recordEl = document.querySelector('#empty')
var scoreRecord = localStorage.getItem('users')
var parsedScores = JSON.parse(scoreRecord)
console.log(parsedScores)
const group = document.createElement('ul')
const scoreContainer = document.createElement('div')
const clearBtn = document.querySelector('#highscores-btn')

// adds each highscore from local storage and appends them to DOM
parsedScores.forEach(user => {
    const item = document.createElement('li')
    const span1 = document.createElement('span')
    span1.textContent = user.user
    const span2 = document.createElement('span')
    span2.textContent = user.score
    span1.classList.add('highscore')
    span2.classList.add('highscore')

    span1.classList.add('user')
    item.append(span1)
    item.append(span2)
    group.append(item)
    scoreContainer.append(group)
})
recordEl.append(scoreContainer)

// button clears highscores in local storage and removes it from DOM
clearBtn.addEventListener('click', function(e){
    e.preventDefault()
    localStorage.clear()
    scoreContainer.remove()
})
