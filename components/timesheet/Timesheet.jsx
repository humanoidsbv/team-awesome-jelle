import React from 'react';
import PropTypes from 'prop-types';

import TimesheetDate from '../timesheet-date/TimesheetDate';
import TimesheetEntry from '../timesheet-entry/TimesheetEntry';
import TimesheetInput from '../timesheet-input/TimesheetInput';

import './timesheet.scss';

class Timesheet extends React.Component {
  static propTypes = {
    timesheetEntries: PropTypes.arrayOf(PropTypes.shape({
      employer: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      startTime: PropTypes.string.isRequired,
      endTime: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    })).isRequired,
    isFormSaving: PropTypes.bool.isRequired,
    onDeleteTimesheetEntry: PropTypes.func.isRequired,
    onPostTimesheetEntry: PropTypes.func.isRequired,
    onRequestTimeEntries: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { onRequestTimeEntries } = this.props;
    onRequestTimeEntries();
  }

  handleAddTimesheetEntry = (newEntry) => {
    const { onPostTimesheetEntry } = this.props;
    return onPostTimesheetEntry(newEntry);
  }

  handleDeleteTimesheetEntry = (timesheetEntryId) => {
    const { onDeleteTimesheetEntry } = this.props;
    onDeleteTimesheetEntry(timesheetEntryId);
  }


  render() {
    const { timesheetEntries, isFormSaving } = this.props;
    return (
      <div className="timesheet-wrapper">
        <TimesheetInput
          onSave={this.handleAddTimesheetEntry}
          isFormSaving={isFormSaving}
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
              endTime={timesheetEntry.endTime}
              id={timesheetEntry.id}
              onDelete={this.handleDeleteTimesheetEntry}
              startTime={timesheetEntry.startTime}
            />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default Timesheet;
