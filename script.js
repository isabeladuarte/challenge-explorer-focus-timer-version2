let buttonPlay = document.querySelector('.play'),
    buttonPause = document.querySelector('.pause'),
    buttonMore = document.querySelector('.more'),
    buttonLess = document.querySelector('.less')

let secondsDisplay = document.querySelector('.seconds')
let minutesDisplay = document.querySelector('.minutes')

let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)

let forest = document.querySelector('.forest'),
    rain = document.querySelector('.rain'),
    cafeteria = document.querySelector('.cafeteria'),
    fire = document.querySelector('.fire')

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
   const audio = new Audio('https://github.com/isabeladuarte/challenge-explorer-focus-timer-version2/blob/master/audio/Floresta.mp3?raw=true') 
    audio.play()
})

rain.addEventListener('click', function() {
    const audio = new Audio('https://github.com/isabeladuarte/challenge-explorer-focus-timer-version2/blob/master/audio/Chuva.mp3?raw=true') 
    audio.play()
})

cafeteria.addEventListener('click', function() {
    const audio = new Audio('https://github.com/isabeladuarte/challenge-explorer-focus-timer-version2/blob/master/audio/Cafeteria.mp3?raw=true') 
    audio.play()
})

fire.addEventListener('click', function() {
    const audio = new Audio('https://github.com/isabeladuarte/challenge-explorer-focus-timer-version2/blob/master/audio/Lareira.mp3?raw=true') 
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
