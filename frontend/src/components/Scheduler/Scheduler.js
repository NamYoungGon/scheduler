import React, { Component } from 'react';
import update from 'react-addons-update';

import Calendar from './Calendar';
import { setPopup } from './../../lib/popup';
import { addLeadingZero } from './../../lib/time';

const data = {
    '2017-12-27': [
        {
            dvo: 1514362423935,
            who: 'Nam',
            startDate: '2017-12-27',
            endDate: '2017-12-27',
            summary: 'Nam'
        },
        {
            dvo: 1514362444722,
            who: 'Young',
            startDate: '2017-12-27',
            endDate: '2017-12-27',
            summary: 'Young'
        }
    ],
    '2017-11-25': [
        {
            dvo: 1514365608904,
            who: 'Young',
            startDate: '2017-11-25',
            endDate: '2017-12-04',
            summary: '123123123'
        }
    ],
    '2017-11-26': [
        {
            dvo: 1514365608904,
            who: 'Young',
            startDate: '2017-11-25',
            endDate: '2017-12-04',
            summary: '123123123'
        }
    ],
    '2017-11-27': [
        {
            dvo: 1514365608904,
            who: 'Young',
            startDate: '2017-11-25',
            endDate: '2017-12-04',
            summary: '123123123'
        },
        {
            dvo: 1514879765598,
            who: 'Young',
            startDate: '2017-11-27',
            endDate: '2017-11-29',
            summary: '123123123'
        }
    ],
    '2017-11-28': [
        {
            dvo: 1514365608904,
            who: 'Young',
            startDate: '2017-11-25',
            endDate: '2017-12-04',
            summary: '123123123'
        },
        {
            dvo: 1514879765598,
            who: 'Young',
            startDate: '2017-11-27',
            endDate: '2017-11-29',
            summary: '123123123'
        }
    ],
    '2017-11-29': [
        {
            dvo: 1514365608904,
            who: 'Young',
            startDate: '2017-11-25',
            endDate: '2017-12-04',
            summary: '123123123'
        },
        {
            dvo: 1514879765598,
            who: 'Young',
            startDate: '2017-11-27',
            endDate: '2017-11-29',
            summary: '123123123'
        }
    ],
    '2017-11-30': [
        {
            dvo: 1514365608904,
            who: 'Young',
            startDate: '2017-11-25',
            endDate: '2017-12-04',
            summary: '123123123'
        }
    ],
    '2017-12-01': [
        {
            dvo: 1514365608904,
            who: 'Young',
            startDate: '2017-11-25',
            endDate: '2017-12-04',
            summary: '123123123'
        }
    ],
    '2017-12-02': [
        {
            dvo: 1514365608904,
            who: 'Young',
            startDate: '2017-11-25',
            endDate: '2017-12-04',
            summary: '123123123'
        }
    ],
    '2017-12-03': [
        {
            dvo: 1514365608904,
            who: 'Young',
            startDate: '2017-11-25',
            endDate: '2017-12-04',
            summary: '123123123'
        }
    ],
    '2017-12-04': [
        {
            dvo: 1514365608904,
            who: 'Young',
            startDate: '2017-11-25',
            endDate: '2017-12-04',
            summary: '123123123'
        },
        {
            dvo: 1514362457537,
            who: 'Young',
            startDate: '2017-12-04',
            endDate: '2017-12-12',
            summary: 'Young'
        }
    ],
    '2017-12-05': [
        {
            dvo: 1514362457537,
            who: 'Young',
            startDate: '2017-12-04',
            endDate: '2017-12-12',
            summary: 'Young'
        }
    ],
    '2017-12-06': [
        {
            dvo: 1514362457537,
            who: 'Young',
            startDate: '2017-12-04',
            endDate: '2017-12-12',
            summary: 'Young'
        },
        {
            dvo: 1514897641344,
            who: 'Gon',
            startDate: '2017-12-06',
            endDate: '2017-12-06',
            summary: 'Gon'
        }
    ],
    '2017-12-07': [
        {
            dvo: 1514362457537,
            who: 'Young',
            startDate: '2017-12-04',
            endDate: '2017-12-12',
            summary: 'Young'
        },
        {
            dvo: 1514899164639,
            who: 'Gon2',
            startDate: '2017-12-07',
            endDate: '2017-12-08',
            summary: 'Gon2'
        }
    ],
    '2017-12-08': [
        {
            dvo: 1514362457537,
            who: 'Young',
            startDate: '2017-12-04',
            endDate: '2017-12-12',
            summary: 'Young'
        },
        {
            dvo: 1514899164639,
            who: 'Gon2',
            startDate: '2017-12-07',
            endDate: '2017-12-08',
            summary: 'Gon2'
        }
    ],
    '2017-12-09': [
        {
            dvo: 1514362457537,
            who: 'Young',
            startDate: '2017-12-04',
            endDate: '2017-12-12',
            summary: 'Young'
        }
    ],
    '2017-12-10': [
        {
            dvo: 1514362457537,
            who: 'Young',
            startDate: '2017-12-04',
            endDate: '2017-12-12',
            summary: 'Young'
        }
    ],
    '2017-12-11': [
        {
            dvo: 1514362457537,
            who: 'Young',
            startDate: '2017-12-04',
            endDate: '2017-12-12',
            summary: 'Young'
        }
    ],
    '2017-12-12': [
        {
            dvo: 1514362457537,
            who: 'Young',
            startDate: '2017-12-04',
            endDate: '2017-12-12',
            summary: 'Young'
        }
    ],
    '2017-12-29': [
        {
            dvo: 1514879456537,
            who: 'Young',
            startDate: '2017-12-29',
            endDate: '2018-01-03',
            summary: 'Young'
        }
    ],
    '2017-12-30': [
        {
            dvo: 1514879456537,
            who: 'Young',
            startDate: '2017-12-29',
            endDate: '2018-01-03',
            summary: 'Young'
        }
    ],
    '2017-12-31': [
        {
            dvo: 1514879456537,
            who: 'Young',
            startDate: '2017-12-29',
            endDate: '2018-01-03',
            summary: 'Young'
        }
    ],
    '2018-01-01': [
        {
            dvo: 1514879456537,
            who: 'Young',
            startDate: '2017-12-29',
            endDate: '2018-01-03',
            summary: 'Young'
        }
    ],
    '2018-01-02': [
        {
            dvo: 1514879456537,
            who: 'Young',
            startDate: '2017-12-29',
            endDate: '2018-01-03',
            summary: 'Young'
        }
    ],
    '2018-01-03': [
        {
            dvo: 1514879456537,
            who: 'Young',
            startDate: '2017-12-29',
            endDate: '2018-01-03',
            summary: 'Young'
        }
    ],
    
}

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
        
        let [startYear, startMonth, startDay] = startDate.split('-')
        let initStartYear = parseInt(startYear, 10)
        let initStartMonth = parseInt(startMonth, 10)
        let initStartDay = parseInt(startDay, 10)
        let [endYear, endMonth, endDay] = endDate.split('-')
        let initEndYear = parseInt(endYear, 10)
        let initEndMonth = parseInt(endMonth, 10)
        let initEndDay = parseInt(endDay, 10)
        let newEvents = {}
        let newEvent = {
            startDate,
            endDate,
            who,
            summary,
            dvo: new Date().valueOf()
        }

        const lastDateArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        for (let iYear = initStartYear; iYear <= initEndYear; iYear++) {
            if ((iYear % 4 === 0 && iYear % 100 !== 0) || iYear % 400 === 0)
                lastDateArr[1] = 29;

            let jMonth = initStartYear === iYear ? initStartMonth : 1
            let jEndMonth = initEndYear === iYear ? initEndMonth : 12
            for (; jMonth <= jEndMonth; jMonth++) {
                let kDay = (initStartYear === iYear && initStartMonth === jMonth) ? initStartDay : 1
                let kEndDay = (initEndYear === iYear && initEndMonth === jMonth) ? initEndDay : lastDateArr[jMonth - 1]
                for (;kDay <= kEndDay; kDay++) {
                    let completeDate = `${iYear}-${addLeadingZero(jMonth)}-${addLeadingZero(kDay)}`
                    if (!this.state.events[completeDate])
                        this.state.events[completeDate] = []
                    
                    newEvents[completeDate] = {
                        $push: [Object.assign({}, newEvent)]
                    }
                }
            }
        }

        this.setState({
            events: update(this.state.events, newEvents)
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
        const { year, month } = this.props.date

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

export default Scheduler;