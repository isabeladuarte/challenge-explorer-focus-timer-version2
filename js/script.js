import Timer from './timer.js'
import Events from './events.js'

import {
    secondsDisplay,
    minutesDisplay
} from './elements.js'

const timer = Timer({
    minutesDisplay, 
    secondsDisplay, 
})

Events({timer})

