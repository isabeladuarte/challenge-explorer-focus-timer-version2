let buttonPlay = document.querySelector('.play'),
    buttonPause = document.querySelector('.pause'),
    buttonMore = document.querySelector('.more'),
    buttonLess = document.querySelector('.less')

let secondsDisplay = document.querySelector('.seconds')
let minutesDisplay = document.querySelector('.minutes')

let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)

let forest = document.querySelector('.forest')

buttonPlay.addEventListener('click', function () {
    countdown()
})

buttonPause.addEventListener('click', function() {
    clearInterval(timerTimeOut)
})

buttonMore.addEventListener('click', function() {
    minutes = minutes + 5
    updateDisplay(minutes, seconds)
})

buttonLess.addEventListener('click', function() {
    minutes = minutes - 5

    if(minutes < 0) {
        minutes = 0
    } else {
        updateDisplay(minutes, seconds)
    }
})

forest.addEventListener('click', function() {
   let audio = new Audio('audio/Floresta.mp3') 
    audio.play()
})


function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countdown() {
    timerTimeOut = setTimeout(function() {
        let minutes = Number(minutesDisplay.textContent)
        let seconds =  Number(secondsDisplay.textContent)
        
        updateDisplay(minutes, 0)

        if(seconds <= 0) {
            seconds = 60
            --minutes
        }

        updateDisplay(minutes, String(seconds - 1))

        countdown()
    }, 1000)
}
