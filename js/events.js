import {
    buttonPlay,
    buttonPause,
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
    minutesDisplay
} from './elements.js'

export default function ({
    timer
}) {   
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    buttonPlay.addEventListener('click', function () {
        timer.countdown()
    })
    
    buttonPause.addEventListener('click', function() {
        timer.reset()
    })

    buttonMore.addEventListener('click', function() {
        minutes = minutes + 5
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
        togglePlay(btnForest)
    })

    rain.addEventListener('click', function() {
        togglePlay(btnRain)
    })

    cafeteria.addEventListener('click', function() {
        togglePlay(btnCafeteria)
    })

    fire.addEventListener('click', function() {
        togglePlay(btnFire)
    })

    function togglePlay(audio) {
        return audio.paused ? audio.play() : audio.pause();
    }
}