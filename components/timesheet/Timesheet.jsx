import React from 'react';
import PropTypes from 'prop-types';

import TimesheetDate from '../timesheet-date/TimesheetDate';
import TimesheetEntry from '../timesheet-entry/TimesheetEntry';
import TimesheetInput from '../timesheet-input/TimesheetInput';

import { fetchTimesheetEntries, postTimesheetEntry } from '../../services/fetch-timesheet-entries/fetch-timesheet-entries';

import './timesheet.scss';

class Timesheet extends React.Component {
  static propTypes = {
    timesheetEntries: PropTypes.arrayOf(PropTypes.shape({
      employer: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      startTime: PropTypes.string.isRequired,
      endTime: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    })).isRequired,
    onRequestTimeEntries: PropTypes.func.isRequired,
    onRequestTimeEntriesSucces: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { onRequestTimeEntries, onRequestTimeEntriesSucces } = this.props;
    onRequestTimeEntries();
    fetchTimesheetEntries().then((timesheetEntries) => {
      onRequestTimeEntriesSucces(timesheetEntries);
    });
  }

  handleAddTimesheetEntry = newEntry => (
    postTimesheetEntry(newEntry).then(() => {
      this.setState(({ timesheetEntries }) => (
        { timesheetEntries: [newEntry, ...timesheetEntries] }
      ));
    })
  )

  render() {
    const { timesheetEntries } = this.props;
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
              id={timesheetEntry.id}
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
