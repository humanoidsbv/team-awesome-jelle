import React from 'react';
import PropTypes from 'prop-types';

import TimesheetDate from '../timesheet-date/TimesheetDate';
import TimesheetEntry from '../timesheet-entry/TimesheetEntry';
import TimesheetInput from '../timesheet-input/TimesheetInput';

import { fetchTimesheetEntries, postTimesheetEntry, deleteTimesheetEntry } from '../../services/fetch-timesheet-entries/fetch-timesheet-entries';

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
    onDeleteTimesheetEntry: PropTypes.func.isRequired,
    onDeleteTimesheetEntrySucces: PropTypes.func.isRequired,
    onPostTimesheetEntry: PropTypes.func.isRequired,
    onPostTimesheetEntrySucces: PropTypes.func.isRequired,
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

  handleAddTimesheetEntry = (newEntry) => {
    const { onPostTimesheetEntry, onPostTimesheetEntrySucces } = this.props;
    onPostTimesheetEntry();
    postTimesheetEntry(newEntry).then((postedEntry) => {
      onPostTimesheetEntrySucces(postedEntry);
    });
  };

  handleDeleteTimesheetEntry = (timesheetEntryId) => {
    const { onDeleteTimesheetEntry, onDeleteTimesheetEntrySucces } = this.props;
    onDeleteTimesheetEntry();
    deleteTimesheetEntry(timesheetEntryId).then(() => {
      onDeleteTimesheetEntrySucces(timesheetEntryId);
    });
  }


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
