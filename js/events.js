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
    body
} from './elements.js'

export default function ({
    timer
}) {   
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    let isDarkMode

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
        togglePlay(btnForest, forest)
    })

    rain.addEventListener('click', function() {
        togglePlay(btnRain, rain)
    })

    cafeteria.addEventListener('click', function() {
        togglePlay(btnCafeteria, cafeteria)
    })

    fire.addEventListener('click', function() {
        togglePlay(btnFire, fire)
    })

    sun.addEventListener('click', function() {
        darkMode(sun)
    })

    moon.addEventListener('click', function() {
        darkMode(moon)
    })

    function togglePlay(audio, classDiv) {
        if(audio.paused) {
            audio.play()
            toggleColor(classDiv, true)
        } else { 
            audio.pause()
            toggleColor(classDiv, false)
        }
    }

    function toggleColor(classDiv, isColorWhite) {
        if(isColorWhite){
            classDiv.style.backgroundColor = '#02799D'
            classDiv.classList.add('icon-white')
            isDarkMode ? classDiv.style.backgroundColor = '#0A3442' : classDiv.style.backgroundColor = '#02799D'
        } else {
            classDiv.style.backgroundColor = '#E1E1E6'
            classDiv.classList.remove('icon-white')
            isDarkMode ? classDiv.style.backgroundColor = '#29292E' : classDiv.style.backgroundColor = '#E1E1E6'
        }
    }

    function darkMode(icon) {
        if(icon === sun) {
            body.classList.add('dark')
            sun.classList.add('hide')
            isDarkMode = true
        } else {
            body.classList.remove('dark')
            sun.classList.remove('hide')
            isDarkMode = false
        }
    }
}