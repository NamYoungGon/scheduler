import React, { Component } from 'react';

import Scheduler from './../components/Scheduler'

class SchedulerContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            date: {
                year: 2017,
                month: 12,
                day: 26
            },
            selectedDate: {
                year: 2017,
                month: 12,
                day: 26   
            }
        }
    }

    handlePrevMonth = () => {
        let { year, month, day } = this.state.date

        year = month - 1 === 0 ? year - 1 : year
        month = month - 1 === 0 ? 12 : month - 1
        day = 1

        this.setState({ date: { year, month, day } })
    }

    handleNextMonth = () => {
        let { year, month, day } = this.state.date

        year = month + 1 === 13 ? year + 1 : year
        month = month + 1 === 13 ? 1 : month + 1
        day = 1

        this.setState({ date: { year, month, day } })
    }

    render() {
        return (
            <div>
                <Scheduler date={this.state.date} handlePrevMonth={this.handlePrevMonth} handleNextMonth={this.handleNextMonth}/>
            </div>
        );
    }
}

export default SchedulerContainer;