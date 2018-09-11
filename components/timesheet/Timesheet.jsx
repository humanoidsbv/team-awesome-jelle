import React from 'react';
import PropTypes from 'prop-types';

import TimesheetSearchBar from '../timesheet-search-bar/TimesheetSearchBar';
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
    onRequestTimeEntries: PropTypes.func.isRequired,
    onChangeActiveFilter: PropTypes.func.isRequired,
    activeFilter: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.props.onRequestTimeEntries();
  }

  handleAddTimesheetEntry = newEntry => this.props.onPostTimesheetEntry(newEntry);

  handleDeleteTimesheetEntry = (timesheetEntryId) => {
    this.props.onDeleteTimesheetEntry(timesheetEntryId);
  }

  render() {
    const {
      timesheetEntries, isFormSaving,
      onChangeActiveFilter, activeFilter
    } = this.props;
    return (
      <div className="timesheet">
        <TimesheetSearchBar
          onChangeActiveFilter={onChangeActiveFilter}
          activeFilter={activeFilter}
        />
        <div className="timesheet__wrapper">
          <TimesheetInput
            onSave={this.handleAddTimesheetEntry}
            isFormSaving={isFormSaving}
          />
          {timesheetEntries.map((timesheetEntry, index, array) => (
            <React.Fragment key={timesheetEntry.id}>
              {(!index || (timesheetEntry.date !== array[index - 1].date)) && (
              <TimesheetDate
                date={timesheetEntry.date}
                startTime={timesheetEntry.startTime}
                timesheetEntries={timesheetEntries}
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
      </div>
    );
  }
}

export default Timesheet;
