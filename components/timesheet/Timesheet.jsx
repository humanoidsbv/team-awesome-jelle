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

  handleAddTimesheetEntry = (newEntry) => {
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
          onSave={this.handleAddTimesheetEntry}
        />
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
