import {
    buttonPlay,
    buttonStop,
    buttonMore,
    buttonLess,
    btnForest,
    btnRain,
    btnCafeteria,
    btnFire,
    forest,
    rain,
    cafeteria,
    fire,
    secondsDisplay,
    minutesDisplay,
    sun,
    moon,
    volume
} from './elements.js'

export default function ({
    timer,
    darkMode,
    sounds
}) {   
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    buttonPlay.addEventListener('click', function () {
        timer.countdown()
    })
    
    buttonStop.addEventListener('click', function() {
        timer.reset()
    })

    buttonMore.addEventListener('click', function() {
        minutes = minutes + 5
        seconds = seconds + 0
        timer.updateDisplay(minutes, seconds)
    })
    
    buttonLess.addEventListener('click', function() {
        minutes = minutes - 5
    
        if(minutes < 0) {
            minutes = 0
        } else {
            timer.updateDisplay(minutes, seconds)
        }
    })    

    forest.addEventListener('click', function() {
        sounds.togglePlay(btnForest, forest)
    })

    rain.addEventListener('click', function() {
        sounds.togglePlay(btnRain, rain)
    })

    cafeteria.addEventListener('click', function() {
        sounds.togglePlay(btnCafeteria, cafeteria)
    })

    fire.addEventListener('click', function() {
        sounds.togglePlay(btnFire, fire)
    })

    sun.addEventListener('click', function() {
        darkMode.darkMode(sun)
    })

    moon.addEventListener('click', function() {
        darkMode.darkMode(moon)
    })
}