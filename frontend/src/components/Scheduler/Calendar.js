import React, { Component } from 'react';

import { addLeadingZero } from './../../lib/time';

const eventHeight = 25

class Calendar extends Component {
    render() {
        const { year, month } = this.props.date
        const [initYear, initMonth] = [year, month]
        const events = this.props.events
        const date = new Date(year, month - 1, 1)
        const lastDateArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
            lastDateArr[1] = 29;
        
        const lastDate = lastDateArr[month - 1]
        let prevLastDate

        const currentDay = date.getDay()
        const totalWeek = Math.ceil((currentDay + lastDate) / 7)

        const newData = []
        for (let i = 0; i < lastDateArr[month - 1]; i++) {
            newData.push({
                year: String(year),
                month: addLeadingZero(month),
                day: addLeadingZero(i + 1)
            })
        }

        if (currentDay > 0) {
            const newMonth = month - 1 === 0 ? 12 : month - 1
            const newYear = month - 1 === 0 ? year - 1 : year

            prevLastDate = lastDateArr[newMonth - 1]
            for (let i = 0; i < currentDay; i++) {
                newData.splice(0, 0, {
                    year: String(newYear),
                    month: addLeadingZero(newMonth),
                    day: addLeadingZero(lastDateArr[newMonth - 1] - i),

                    // 이전 달
                    pm: true
                })
            }
        }

        const newDataLen = newData.length
        if (newDataLen % 7 !== 0) {
            const newMonth = month + 1 === 13 ? 1 : month + 1
            const newYear = month + 1 === 13 ? year + 1 : year

            // nextLastDate = lastDateArr[newMonth - 1]
            for (let i = 0; i < 7 - (newDataLen % 7); i++) {
                newData.push({
                    year: String(newYear),
                    month: addLeadingZero(newMonth),
                    day: addLeadingZero(1 + i),

                    // 다음 달
                    nm: true
                })
            }
        }

        const eventGrid = []
        const weekDates = []
        const weekEvents = []
        let weekDate
        let weekEvent
        let continueEvent
        
        for (let i = 0; i < totalWeek; i++) {
            eventGrid[i] = []
            for (let j = 0; j < 7; j++) {
                eventGrid[i][j] = []
            }
        }

        for (let i = 0; i < totalWeek; i++) {
            weekDate = newData.slice(i * 7, (i + 1) * 7)
            weekDates.push(weekDate)

            weekEvent = new Array(7)
            weekEvent.fill([])

            continueEvent = {}

            for (let j = 0; j < 7; j++) {
                const { year, month, day } = weekDate[j]
                const dateStr = `${year}-${month}-${day}`
                const eventGridCell = eventGrid[i][j]
          
                if (events[dateStr]) {
                    const eventArr = events[dateStr]
                    const eventsLen = eventArr.length

                    for (let k = 0; k < eventsLen; k++) {
                        const event = eventArr[k]
                        const { startDate, endDate, dvo } = event
                        
                        if (continueEvent[dvo]) continue
                        
                        // continue event
                        if (startDate !== endDate) {
                            const [startYear, startMonth, startDay] = [year, month, day]
                            let [endYear, endMonth, endDay] = endDate.split('-')
                            let diff
                            
                            if (startYear === endYear && startMonth === endMonth) {
                                if (parseInt(startDay, 10) + 7 - j - 1 < parseInt(endDay, 10)) {
                                    endDay = parseInt(startDay, 10) + 7 - j - 1
                                }
                                
                                diff = parseInt(endDay, 10) - parseInt(startDay, 10) + 1
                            } else {
                                let diffLastDate
                                if (parseInt(startYear, 10) < initYear || parseInt(startMonth, 10) < initMonth) {
                                    diffLastDate = prevLastDate
                                } else {
                                    diffLastDate = lastDate
                                }

                                diff = diffLastDate - parseInt(startDay, 10) + parseInt(endDay, 10)
                                if (diff + j > 7 - j) {
                                    diff = 7 - j
                                } else {
                                    diff = diff + 1
                                }

                            }

                            event.display = true
                            event.width = diff
                            continueEvent[dvo] = true

                            let isFind = false
                            let row = 0
                            let eventGridCellLen = eventGridCell.length

                            for (let index = 0; index < eventGridCellLen; index++) {
                                if (!eventGridCell[index]) {
                                    let isBreak = false
                                    for (let l = 0, tmpEventGridCell; l < diff; l++) {
                                        tmpEventGridCell = eventGrid[i][j + l]
                                        if (tmpEventGridCell[index]) {
                                            isBreak = true
                                            break
                                        }
                                    }

                                    if (isBreak) break

                                    for (let l = 0, tmpEventGridCell; l < diff; l++) {
                                        tmpEventGridCell = eventGrid[i][j + l]
                                        tmpEventGridCell[index] = true
                                    }

                                    isFind = true
                                    row = index
                                }
                            }

                            if (!isFind) {
                                let index
                                for (let l = 0, tmpEventGridCell; l < diff; l++) {
                                    tmpEventGridCell = eventGrid[i][j + l]
                                    if (tmpEventGridCell[eventGridCellLen + l]) {
                                        continue
                                    }

                                    index = eventGridCellLen + l
                                    break
                                }

                                for (let l = 0, tmpEventGridCell; l < diff; l++) {
                                    tmpEventGridCell = eventGrid[i][j + l]
                                    tmpEventGridCell[index] = true
                                }

                                row = index
                            }

                            event.row = row
                        } else {
                            let isFind = false
                            let row = 0
                            let eventGridCellLen = eventGridCell.length

                            for (let index = 0; index < eventGridCellLen; index++) {
                                if (!eventGridCell[index]) {
                                    isFind = true
                                    eventGridCell[index] = true
                                    row = index

                                    break;
                                }
                            }

                            if (!isFind) {
                                eventGridCell[eventGridCellLen] = true
                                row = eventGridCellLen
                            }
                            
                            event.display = true
                            event.width = 1
                            event.row = row
                        }
                    }

                    weekEvent[j] = eventArr
                }
            }

            weekEvents.push(weekEvent)
        }

        const calendar = []
        for (let i = 0; i < totalWeek; i++) {
            calendar.push(<Week key={i} dates={weekDates[i]} events={weekEvents[i]} />)
        }

        return (
            <tbody>
                {calendar}
            </tbody>
        )
    }
}

class Week extends Component {
    render() {
        const { dates, events } = this.props
        const week = [];

        for (var i = 0; i < 7; i++) {
            const event = events[i]
            const date = dates[i]

            week.push(<Day key={i} date={date} event={event} />)
        }

        return (
            <tr>
                {week}
            </tr>
        )
    }
}

class Day extends Component {
    render() {
        const { date, event } = this.props
        const { day, pm, nm } = date
        const dayClass = pm || nm ? 'dim' : ''

        const eventRender = []
        event.forEach((data, index) => {
            const { summary, display, width, row } = data
            
            if (!display) return true

            let classStr = `event-${width}-7 event-pnl`
            let styles = {
                top: (row * eventHeight) + 'px'
            }
            eventRender.push((
                <div className={classStr} style={styles} key={index}>{summary}</div>
            ))
        })

        return (
            <td>
                <p><span className={dayClass}>{day}</span></p>
                {eventRender}
            </td>
        )
    }
}

export default Calendar;