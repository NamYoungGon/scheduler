function addLeadingZero(value) {
    return (value < 10 ? '0' : '') + value
}

function getDate() {
    const _d = new Date()

    const year = _d.getFullYear()
    const month = _d.getMonth() + 1
    const day = _d.getDate()

    return {
        year,
        month,
        day
    }
}

module.exports = {
    addLeadingZero,
    getDate
}