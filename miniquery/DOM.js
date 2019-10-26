const DOM = {
    hide: (value) =>{
        if (value[0] === '#') {
            document.getElementById(value.substring(1)).style.display = 'none'
        } else if (value[0] === '.') {
            document.getElementsByClassName(value.substring(1)).style.display = 'none'
        } else {
            document.getElementsByName(value).style.display = 'none'
        }
    },
    addClass: (before, after) => {
        const className = document.getElementsByClassName(before.substring(1))
        className.classList.add(after)
    },
    removeClass: (before, after) => {
        const className = document.getElementsByClassName(before.substring(1))
        className.classList.remove(after)
    }
}