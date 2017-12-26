function setPopup(id, show) {
    let popup = document.getElementById(id)
    
    popup.setAttribute('aria-hidden', !show)
    
    if (show === true) {
        let { clientWidth, clientHeight } = popup
        let { scrollHeight, scrollWidth, scrollTop, scrollLeft } = document.body
        
        popup.style.top = ( (scrollHeight / 2) - (clientHeight / 2) + scrollTop ) + 'px'
        popup.style.left = ( (scrollWidth / 2) - (clientWidth / 2) + scrollLeft ) + 'px'
    }
    
    setDimmer(show)
}

function setDimmer(show) {
    document.querySelector('.dimmer').setAttribute('aria-hidden', !show)
}

module.exports = {
    setDimmer,
    setPopup
}