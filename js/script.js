import Timer from './timer.js'
import Dark from './dark-mode.js'
import Sounds from './sounds.js'
import Events from './events.js'

import {
    minutesDisplay,
    secondsDisplay
} from './elements.js'

const timer = Timer({
    minutesDisplay, 
    secondsDisplay, 
})

const darkMode = Dark()

const sounds = Sounds()

Events({timer, darkMode, sounds})

