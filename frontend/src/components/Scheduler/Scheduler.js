import React, { Component } from 'react';
import update from 'react-addons-update';
import { SketchPicker } from 'react-color';

import Calendar from './Calendar';
import { setPopup, dimmerClick } from './../../lib/popup';
import { addLeadingZero } from './../../lib/date';
import { isDate, isAfter } from './../../lib/validate';

// const data = {
//     '2017-12-27': [
//         {
//             dvo: 1514362423935,
//             who: 'Nam',
//             startDate: '2017-12-27',
//             endDate: '2017-12-27',
//             summary: 'Nam'
//         },
//         {
//             dvo: 1514362444722,
//             who: 'Young',
//             startDate: '2017-12-27',
//             endDate: '2017-12-27',
//             summary: 'Young'
//         }
//     ]    
// }

const users = [
    {
        no: 1,
        name: '홍길동',
        color: '#74c1c1'
    },
    {
        no: 2,
        name: '아무개',
        color: '#fd6262'
    },
    {
        no: 3,
        name: '철수',
        color: '#00ceff'
    }
]

class Scheduler extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users,
            colorPicker: {
                color: '#fff',
                idx: -1  
            },
            event: {
                who: '0',
                startDate: '',
                endDate: '',
                summary: ''
            },
            events: {},
            userInput: {
                display: false,
                value: ''
            }
        }
    }
    
    handleClickOpenEventPopup = (settion = {}) => {
        this.clearEventInput()
        setPopup('popup-add-event', true)

        if (settion.date) {
            this.setState({
                event: update(
                    this.state.event, {
                        startDate: {
                            $set: settion.date
                        },
                        endDate: {
                            $set: settion.date
                        }
                    }
                )
            })
        }
    }
    
    handleClickSaveEvent = () => {
        const { who, startDate, endDate, summary } = this.state.event

        if (who === '' || who === '0') {
            alert('\'Who\' is not selected.')
            return false
        }

        if (isDate(startDate) === false || isDate(endDate) === false) {
            alert('Enter the date')
            return false   
        }

        if (isAfter(startDate, endDate)) {
            alert('The previous date must be before the later date')
            return false 
        }
        
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
                for (; kDay <= kEndDay; kDay++) {
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
    
    handleClickCloseEventPopup = () => {
        setPopup('popup-add-event', false)
    }

    handleChangeInput = e => {
        this.setState({
            event: update(
                this.state.event, {
                    [e.target.name]: {
                        $set: e.target.value
                    }
                }
            )
        })
    }

    clearEventInput = () => {
        this.setState({
            event: {
                who: '',
                startDate: '',
                endDate: '',
                summary: ''
            }
        })
    }

    handleClickOpenColorPicker = (e) => {
        const colorPickerPopup = e.target.parentElement
        const idx = parseInt(colorPickerPopup.dataset.idx, 10)
        const color = this.state.users[idx].color

        this.setState({
            colorPicker: { idx, color }
        })

        setPopup('popup-color-picker', true)

        dimmerClick(() => {
            setPopup('popup-color-picker', false)
        })
    }

    handleChangeColor = (color) => {
        const idx = this.state.colorPicker.idx

        this.setState({
            users: update(
                this.state.users, {
                    [idx]: {
                        color: {
                            $set: color.hex
                        }
                    }
                }
            ),
            colorPicker: update(
                this.state.colorPicker, {
                    color: {
                        $set: color.hex
                    }
                }
            )
        })
    }

    handleClickAddUser = () => {
        this.setState({
            userInput: update(
                this.state.userInput, {
                    display: {
                        $set: !this.state.userInput.display
                    }
                }
            )
        })
    }

    handleChangeUserInput = e => {
        const { value } = e.target

        this.setState({
            userInput: update(
                this.state.userInput, {
                    value: {
                        $set: value
                    }
                }
            )
        })
    }

    handleKeyPressUserInput = e => {
        const keyCode = e.keyCode

        if (keyCode === 13) {
            this.setState({
                users: update(
                    this.state.users, {
                        $push: [
                            {
                                no: this.state.users.length + 1,
                                name: this.state.userInput.value,
                                color: '#000',
                            }
                        ]
                    }
                ),
                userInput: update(
                    this.state.userInput, {
                        value: {
                            $set: ''
                        }
                    }
                )
            })
        }
    }

    render() {
        const { handlePrevMonth, handleNextMonth } = this.props
        const { year, month } = this.props.date
        const { users, userInput } = this.state
        
        const userListOptions = users.map((user, index) => {
            const { no, name } = user
            return (
                <option key={index} value={no}>{name}</option>
            )
        })

        const userList = users.map((user, index) => {
            const { name, color } = user
            const styles = {
                backgroundColor: color
            }

            return (
                <li data-idx={index} key={index}>
                    <div className='user-event-color' style={styles} onClick={this.handleClickOpenColorPicker}></div>
                    <span className='user-name'>{name}</span>
                </li>
            )
        })

        const displayUserInput = userInput.display === false ? null : (
            <div className="display-user-input">
                <input type="text" value={this.state.userInput.value} onChange={this.handleChangeUserInput} onKeyDown={this.handleKeyPressUserInput} />
            </div>            
        )
        return (
            <div>
                <div className="toolbar">
                    <button onClick={handlePrevMonth}>◀</button>
                    <button onClick={handleNextMonth}>▶</button>
                    <button onClick={this.handleClickOpenEventPopup}>Add Event</button>
                    <span>
                        {year} {addLeadingZero(month)}
                    </span>
                </div>
                <div className="calendar-wrap">
                    <div className="side-pnl">
                        <div className="side-user-pnl">
                            <div className="user-list-header">
                                <div className="f-lv-3">User</div><button className="b-lv-3 add-user" onClick={this.handleClickAddUser}>+</button>
                                {displayUserInput}
                            </div>
                            <ul>
                                {userList}
                            </ul>
                        </div>
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
                                        <Calendar date={this.props.date} events={this.state.events} users={this.state.users} handleClickOpenEventPopup={this.handleClickOpenEventPopup} />
                                    </table>
                                </div>
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
                                <label>Who</label>
                                <select name="who" value={this.state.event.who} onChange={this.handleChangeInput}>
                                    <option value="0">선택</option>
                                    {userListOptions}
                                </select>
                            </div>
                            <div className="field-group f-r">
                                <label>When</label>
                                <div className="f-l">
                                    <input type="date" name="startDate" className="date" value={this.state.event.startDate} onChange={this.handleChangeInput} /> to <input type="date" name="endDate" className="date" value={this.state.event.endDate} onChange={this.handleChangeInput} />
                                </div>
                            </div>
                            <div className="field-group f-r">
                                <label>Summary</label><input type="text" name="summary" value={this.state.event.summary} onChange={this.handleChangeInput} />
                            </div>
                        </div>
                        <div className="popup-footer">
                            <div className="popup-footer-inner">
                                <div className="f-r">
                                    <button onClick={this.handleClickSaveEvent}>Save</button>
                                    <button onClick={this.handleClickCloseEventPopup}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="popup color-picker" id="popup-color-picker" aria-hidden="true" ref={pickerPopup => this.pickerPopup = pickerPopup}>
                    <SketchPicker ref={picker => this.picker = picker}  color={this.state.colorPicker.color} onChangeComplete={ this.handleChangeColor }/>
                </div>
                <div className="dimmer" tabIndex="0" aria-hidden="true"></div>
            </div>
        );
    }
}

export default Scheduler;