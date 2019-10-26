class SweetSelector {
    static select(value) {
        if (value[0] === '#') {
            return document.getElementById(value.slice(1))
        } else if (value[0] === '.') {
            return document.getElementsByClassName(value.slice(1))
        } else {
            return document.getElementsByName(value)
        }
    }
}