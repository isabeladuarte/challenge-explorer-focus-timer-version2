import {
    sun,
    html
} from './elements.js'

export default function darkMode(){
    function darkMode(icon) {
        if(icon === sun) {
            html.classList.add('dark')
            sun.classList.add('hide')
        } else {
            html.classList.remove('dark')
            sun.classList.remove('hide')
        }
    }

    return {
        darkMode
    }
}
