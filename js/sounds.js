import {
    volume
} from './elements.js'

export default function sounds() {
    function togglePlay(audio, cardClass) {
        if(audio.paused) {
            audio.play()
            toggleColor(cardClass, true)
        } else { 
            audio.pause()
            toggleColor(cardClass, false)
        }

        function setVolume() {
            audio.volume = volume.value / 100
        }

        volume.addEventListener('mousemove', setVolume())
    }


    function toggleColor(cardClass, isSelected) {
        if(isSelected){
            cardClass.style.backgroundColor = 'var(--bg-cardSelected)'
            cardClass.classList.add('icon-white')
        } else {
            cardClass.style.backgroundColor = 'var(--bg-card)'
            cardClass.classList.remove('icon-white')
        }
    }

    return {
        togglePlay
    }
}