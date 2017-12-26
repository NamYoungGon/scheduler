import React, { Component } from 'react';

import { setPopup } from './../../lib/popup'
import './index.css';

class Scheduler extends Component {
    constructor(props) {
        super(props)

        this.state = {
            who: '',
            startDate: '',
            endDate: '',
            summary: ''
        }
    }

    
    handleAddEvent = () => {
        this.clearEventInput()
        setPopup('popup-add-event', true)
    }
    
    handleClickSaveEvent = () => {
        
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
                                    <Calendar date={this.props.date}/>
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
        const date = new Date(year, month - 1, 1)
        const lastDateArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
            lastDateArr[1] = 29;
        
        const lastDate = lastDateArr[month - 1]
        const currentDay = date.getDay()
        const totalWeek = Math.ceil((currentDay + lastDate) / 7)

        const newData = []
        for (let i = 0; i < lastDateArr[month - 1]; i++) {
            newData.push({
                date: {
                    year,
                    month,
                    day: i + 1
                }
            })
        }

        if (currentDay > 0) {
            const newMonth = month - 1 === 0 ? 12 : month - 1
            const newYear = month - 1 === 0 ? year - 1 : year
            const newLastDateArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

            for (let i = 0; i < currentDay; i++) {
                newData.splice(0, 0, {
                    date: {
                        year: newYear,
                        month: newMonth,
                        day: newLastDateArr[newMonth - 1] - i,

                        // 이전 달
                        pm: true
                    }
                })
            }
        }

        const newDataLen = newData.length
        if (newDataLen % 7 !== 0) {
            const newMonth = month + 1 === 13 ? year + 1 : year
            const newYear = month + 1 === 13 ? 1 : month + 1
            const newLastDateArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

            for (let i = 0; i < 7 - (newDataLen % 7); i++) {
                newData.push({
                    date: {
                        year: newYear,
                        month: newMonth,
                        day: 1 + i,

                        // 다음 달
                        nm: true
                    }
                })
            }
        }

        const calendar = []
        for (let i = 0; i < totalWeek; i++) {
            calendar.push(<Week key={i} dates={newData.slice(i * 7, (i + 1) * 7)}/>)
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
        const { dates } = this.props
        const week = [];
        for (var i = 0; i < 7; i++) {
            week.push(<Day key={i} date={dates[i].date}/>)
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
        const { date } = this.props
        const { year, month, day, pm, nm } = date
        const dayClass = pm || nm ? 'dim' : ''

        return (
            <td>
                <p><span className={dayClass}>{day}</span></p>
                <div></div>
            </td>
        )
    }
}

export default Scheduler;