export default function Timer({
    minutesDisplay, 
    secondsDisplay
}){
    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent) // Pega valor inicial

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

    function updateDisplay(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function reset() {
        updateDisplay(minutes, 0)
        clearInterval(timerTimeOut)
    }

    return {
        countdown,
        updateDisplay,
        reset
    }
}