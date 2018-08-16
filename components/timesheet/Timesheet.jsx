import React from 'react';

import TimesheetDate from '../timesheet-date/TimesheetDate';
import TimesheetEntry from '../timesheet-entry/TimesheetEntry';
import TimesheetInput from '../timesheet-input/TimesheetInput';

import mockedTimesheetEntries from '../../pages/mock-timesheet-entries.json';

import './timesheet.scss';

class Timesheet extends React.Component {
  state = {
    timesheetEntries: mockedTimesheetEntries
  }

  addTimesheetEntry = () => {
    const newEntry = {
      employer: 'Port of Antwerp',
      id: '5',
      startTime: '15:00',
      endTime: '15:30',
      date: '30-07-2018'
    };
    this.setState(state => ({
      timesheetEntries: [
        newEntry,
        ...state.timesheetEntries
      ]
    }));
  }

  render() {
    const { timesheetEntries } = this.state;
    return (
      <div className="timesheet-wrapper">
        <TimesheetInput
          addTimesheetEntry={this.addTimesheetEntry}
        />
        {/*
        <button
          className="testbutton"
          onClick={this.addTimesheetEntry()}
          type="submit"
        /> */}
        {timesheetEntries.map((timesheetEntry, index, array) => (
          <React.Fragment key={timesheetEntry.id}>
            {(!index || (timesheetEntry.date !== array[index - 1].date)) && (
            <TimesheetDate
              date={timesheetEntry.date}
            />
            )}
            <TimesheetEntry
              employer={timesheetEntry.employer}
              startTime={timesheetEntry.startTime}
              endTime={timesheetEntry.endTime}
            />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default Timesheet;
