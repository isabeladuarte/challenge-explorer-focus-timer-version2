// Buttons
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonMore = document.querySelector('.more')
const buttonLess = document.querySelector('.less')

// Buttons Sounds
const forest = document.querySelector('.forest')
const rain = document.querySelector('.rain')
const cafeteria = document.querySelector('.cafeteria')
const fire = document.querySelector('.fire')

// Audios
const btnForest = new Audio('https://github.com/isabeladuarte/challenge-explorer-focus-timer-version2/blob/master/audio/Floresta.mp3?raw=true') 
const btnRain = new Audio('https://github.com/isabeladuarte/challenge-explorer-focus-timer-version2/blob/master/audio/Chuva.mp3?raw=true') 
const btnCafeteria = new Audio('https://github.com/isabeladuarte/challenge-explorer-focus-timer-version2/blob/master/audio/Cafeteria.mp3?raw=true') 
const btnFire = new Audio('https://github.com/isabeladuarte/challenge-explorer-focus-timer-version2/blob/master/audio/Lareira.mp3?raw=true') 

// Seconds and Minutes
const secondsDisplay = document.querySelector('.seconds')
const minutesDisplay = document.querySelector('.minutes')

export {
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
} 