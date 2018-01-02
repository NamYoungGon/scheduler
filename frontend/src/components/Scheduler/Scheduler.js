import React, { Component } from 'react';
import update from 'react-addons-update';

import { addLeadingZero } from './../../lib/time';
import { setPopup } from './../../lib/popup';
import './index.css';

const data = {
    '2017-12-27': [
        {
            valueOf: 1514362423935,
            who: 'Nam',
            startDate: '2017-12-27',
            endDate: '2017-12-27',
            summary: 'Nam'
        },
        {
            valueOf: 1514362444722,
            who: 'Young',
            startDate: '2017-12-27',
            endDate: '2017-12-27',
            summary: 'Young'
        }
    ],
    '2017-11-25': [
        {
            valueOf: 1514365608904,
            who: 'Young',
            startDate: '2017-11-25',
            endDate: '2017-12-04',
            summary: '123123123'
        }
    ],
    '2017-11-26': [
        {
            valueOf: 1514365608904,
            who: 'Young',
            startDate: '2017-11-25',
            endDate: '2017-12-04',
            summary: '123123123'
        }
    ],
    '2017-11-27': [
        {
            valueOf: 1514365608904,
            who: 'Young',
            startDate: '2017-11-25',
            endDate: '2017-12-04',
            summary: '123123123'
        },
        {
            valueOf: 1514879765598,
            who: 'Young',
            startDate: '2017-11-27',
            endDate: '2017-11-29',
            summary: '123123123'
        }
    ],
    '2017-11-28': [
        {
            valueOf: 1514365608904,
            who: 'Young',
            startDate: '2017-11-25',
            endDate: '2017-12-04',
            summary: '123123123'
        },
        {
            valueOf: 1514879765598,
            who: 'Young',
            startDate: '2017-11-27',
            endDate: '2017-11-29',
            summary: '123123123'
        }
    ],
    '2017-11-29': [
        {
            valueOf: 1514365608904,
            who: 'Young',
            startDate: '2017-11-25',
            endDate: '2017-12-04',
            summary: '123123123'
        },
        {
            valueOf: 1514879765598,
            who: 'Young',
            startDate: '2017-11-27',
            endDate: '2017-11-29',
            summary: '123123123'
        }
    ],
    '2017-11-30': [
        {
            valueOf: 1514365608904,
            who: 'Young',
            startDate: '2017-11-25',
            endDate: '2017-12-04',
            summary: '123123123'
        }
    ],
    '2017-12-01': [
        {
            valueOf: 1514365608904,
            who: 'Young',
            startDate: '2017-11-25',
            endDate: '2017-12-04',
            summary: '123123123'
        }
    ],
    '2017-12-02': [
        {
            valueOf: 1514365608904,
            who: 'Young',
            startDate: '2017-11-25',
            endDate: '2017-12-04',
            summary: '123123123'
        }
    ],
    '2017-12-03': [
        {
            valueOf: 1514365608904,
            who: 'Young',
            startDate: '2017-11-25',
            endDate: '2017-12-04',
            summary: '123123123'
        }
    ],
    '2017-12-04': [
        {
            valueOf: 1514365608904,
            who: 'Young',
            startDate: '2017-11-25',
            endDate: '2017-12-04',
            summary: '123123123'
        },
        {
            valueOf: 1514362457537,
            who: 'Young',
            startDate: '2017-12-04',
            endDate: '2017-12-12',
            summary: 'Young'
        }
    ],
    '2017-12-05': [
        {
            valueOf: 1514362457537,
            who: 'Young',
            startDate: '2017-12-04',
            endDate: '2017-12-12',
            summary: 'Young'
        }
    ],
    '2017-12-06': [
        {
            valueOf: 1514362457537,
            who: 'Young',
            startDate: '2017-12-04',
            endDate: '2017-12-12',
            summary: 'Young'
        },
        {
            valueOf: 1514897641344,
            who: 'Gon',
            startDate: '2017-12-06',
            endDate: '2017-12-06',
            summary: 'Gon'
        }
    ],
    '2017-12-07': [
        {
            valueOf: 1514362457537,
            who: 'Young',
            startDate: '2017-12-04',
            endDate: '2017-12-12',
            summary: 'Young'
        },
        {
            valueOf: 1514899164639,
            who: 'Gon2',
            startDate: '2017-12-07',
            endDate: '2017-12-08',
            summary: 'Gon2'
        }
    ],
    '2017-12-08': [
        {
            valueOf: 1514362457537,
            who: 'Young',
            startDate: '2017-12-04',
            endDate: '2017-12-12',
            summary: 'Young'
        },
        {
            valueOf: 1514899164639,
            who: 'Gon2',
            startDate: '2017-12-07',
            endDate: '2017-12-08',
            summary: 'Gon2'
        }
    ],
    '2017-12-09': [
        {
            valueOf: 1514362457537,
            who: 'Young',
            startDate: '2017-12-04',
            endDate: '2017-12-12',
            summary: 'Young'
        }
    ],
    '2017-12-10': [
        {
            valueOf: 1514362457537,
            who: 'Young',
            startDate: '2017-12-04',
            endDate: '2017-12-12',
            summary: 'Young'
        }
    ],
    '2017-12-11': [
        {
            valueOf: 1514362457537,
            who: 'Young',
            startDate: '2017-12-04',
            endDate: '2017-12-12',
            summary: 'Young'
        }
    ],
    '2017-12-12': [
        {
            valueOf: 1514362457537,
            who: 'Young',
            startDate: '2017-12-04',
            endDate: '2017-12-12',
            summary: 'Young'
        }
    ],
    '2017-12-29': [
        {
            valueOf: 1514879456537,
            who: 'Young',
            startDate: '2017-12-29',
            endDate: '2018-01-03',
            summary: 'Young'
        }
    ],
    '2017-12-30': [
        {
            valueOf: 1514879456537,
            who: 'Young',
            startDate: '2017-12-29',
            endDate: '2018-01-03',
            summary: 'Young'
        }
    ],
    '2017-12-31': [
        {
            valueOf: 1514879456537,
            who: 'Young',
            startDate: '2017-12-29',
            endDate: '2018-01-03',
            summary: 'Young'
        }
    ],
    '2018-01-01': [
        {
            valueOf: 1514879456537,
            who: 'Young',
            startDate: '2017-12-29',
            endDate: '2018-01-03',
            summary: 'Young'
        }
    ],
    '2018-01-02': [
        {
            valueOf: 1514879456537,
            who: 'Young',
            startDate: '2017-12-29',
            endDate: '2018-01-03',
            summary: 'Young'
        }
    ],
    '2018-01-03': [
        {
            valueOf: 1514879456537,
            who: 'Young',
            startDate: '2017-12-29',
            endDate: '2018-01-03',
            summary: 'Young'
        }
    ],
    
}

const eventHeight = 25

class Scheduler extends Component {
    constructor(props) {
        super(props)

        this.state = {
            who: '',
            startDate: '',
            endDate: '',
            summary: '',
            events: data
        }
    }

    
    handleAddEvent = () => {
        this.clearEventInput()
        setPopup('popup-add-event', true)
    }
    
    handleClickSaveEvent = () => {
        const { who, startDate, endDate, summary } = this.state

        if (!this.state.events[startDate]) {
            this.setState({
                [startDate]: []
            })
        }

        this.setState({
            events: update(this.state.events, {
                [startDate]: {
                    $push: [
                        {
                            startDate,
                            endDate,
                            who,
                            summary
                        }
                    ]
                }
            })
        })

        setPopup('popup-add-event', false)
        this.clearEventInput()
    }
    
    handleClickClosePopup = () => {
        setPopup('popup-add-event', false)
    }

    handleChangeInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clearEventInput = () => {
        this.setState({
            who: '',
            startDate: '',
            endDate: '',
            summary: ''
        })
    }

    render() {
        const { year, month, day } = this.props.date

        return (
            <div>
                <div className="toolbar">
                    <button onClick={this.props.handlePrevMonth}>◀</button>
                    <button onClick={this.props.handleNextMonth}>▶</button>
                    <button onClick={this.handleAddEvent}>Add Event</button>
                    <span>
                        {year} {month}
                    </span>
                </div>
                <div className="calendar-pnl">
                    <div className="calendar-outer-pnl">
                        <div className="calendar-inner-pnl">
                            <div className="calendar-table">
                                <table>
                                    <colgroup>
                                        <col width="10%" />
                                        <col width="10%" />
                                        <col width="10%" />
                                        <col width="10%" />
                                        <col width="10%" />
                                        <col width="10%" />
                                        <col width="10%" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>일</th>
                                            <th>월</th>
                                            <th>화</th>
                                            <th>수</th>
                                            <th>목</th>
                                            <th>금</th>
                                            <th>토</th>
                                        </tr>
                                    </thead>
                                    <Calendar date={this.props.date} events={this.state.events} />
                                </table>
                            </div>
                        </div>                    
                    </div>
                </div>
                <div className="popup popup-scheduler" id="popup-add-event">
                    <div className="popup-inner">
                        <div className="popup-title">
                            <h3>Add Event</h3>
                        </div>
                        <div className="popup-content">
                            <div className="field-group f-r">
                                <label>Who</label><input type="text" name="who" value={this.state.who} onChange={this.handleChangeInput} />
                            </div>
                            <div className="field-group f-r">
                                <label>When</label>
                                <div className="f-l">
                                    <input type="text" name="startDate" className="date" value={this.state.startDate} onChange={this.handleChangeInput} /> to <input type="text" name="endDate" className="date" value={this.state.endDate} onChange={this.handleChangeInput} />
                                </div>
                            </div>
                            <div className="field-group f-r">
                                <label>Summary</label><input type="text" name="summary" value={this.state.summary} onChange={this.handleChangeInput} />
                            </div>
                        </div>
                        <div className="popup-footer">
                            <div className="popup-footer-inner">
                                <div className="f-r">
                                    <button onClick={this.handleClickSaveEvent}>Save</button>
                                    <button onClick={this.handleClickClosePopup}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dimmer" tabIndex="0" aria-hidden="true"></div>
            </div>
        );
    }
}

class Calendar extends Component {
    render() {
        const { year, month, day } = this.props.date
        const [initYear, initMonth, initDay] = [year, month, day]
        const events = this.props.events
        const date = new Date(year, month - 1, 1)
        const lastDateArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
            lastDateArr[1] = 29;
        
        const lastDate = lastDateArr[month - 1]
        let prevLastDate
        let nextLastDate
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

            nextLastDate = lastDateArr[newMonth - 1]
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
        let weekLastDate
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

            weekLastDate = weekDate[6]
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
                        const { startDate, endDate, valueOf } = event

                        if (continueEvent[valueOf]) continue

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

                                event.display = true
                                event.width = diff

                                continueEvent[valueOf] = true
                            } else {
                                let diffLastDate
                                if (parseInt(startYear, 10) < initYear || parseInt(startMonth, 10) < initMonth) {
                                    diffLastDate = prevLastDate
                                } else {
                                    diffLastDate = lastDate
                                }

                                diffLastDate - parseInt(startDay)

                                diff = diffLastDate - parseInt(startDay, 10) + parseInt(endDay, 10)
                                if (diff + j > 7 - j) {
                                    diff = 7 - j
                                } else {
                                    diff = diff + 1
                                }

                                event.display = true
                                event.width = diff

                                continueEvent[valueOf] = true
                            }

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

                            // eventGridCell.forEach((isUsed, index) => {
                            //     if (!isUsed) {
                            //         for (let l = 0, tmpEventGridCell; l < diff; l++) {
                            //             tmpEventGridCell = eventGrid[i][j + l]
                            //             if (tmpEventGridCell[index]) {
                            //                 return true
                            //             }
                            //         }

                            //         for (let l = 0, tmpEventGridCell; l < diff; l++) {
                            //             tmpEventGridCell = eventGrid[i][j + l]
                            //             tmpEventGridCell[index] = true
                            //         }

                            //         isFind = true
                            //         row = index
                            //     }
                            // })

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
        const { year, month, day, pm, nm } = date
        const dayClass = pm || nm ? 'dim' : ''

        const eventRender = []
        let i = 0
        event.forEach((data, index) => {
            const { startDate, endDate, summary, who, display, width, row } = data
            
            if (!display) return true

            let classStr = `event-${width}-7 event-pnl`
            let styles = {
                top: (row * eventHeight) + 'px'
            }
            eventRender.push((
                <div className={classStr} style={styles} key={index}>{data.summary}</div>
            ))
            i++
        })

        return (
            <td>
                <p><span className={dayClass}>{day}</span></p>
                {eventRender}
            </td>
        )
    }
}

export default Scheduler;