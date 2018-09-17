import React from 'react';
import PropTypes from 'prop-types';

import TimesheetSearchBar from '../timesheet-search-bar/TimesheetSearchBar';
import TimesheetDate from '../timesheet-date/TimesheetDate';
import TimesheetEntry from '../timesheet-entry/TimesheetEntry';
import AddTimesheet from '../add-timesheet/AddTimesheet';

import { calculateCumulativeDuration } from '../../services/convert-time/convert-time';


import './timesheet.scss';

class Timesheet extends React.Component {
  static propTypes = {
    timesheetEntries: PropTypes.arrayOf(PropTypes.shape({
      clientName: PropTypes.number.isRequired,
      clientLabelName: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      startTime: PropTypes.string.isRequired,
      endTime: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    })).isRequired,
    clientNameAndId: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    })).isRequired,
    isFormSaving: PropTypes.bool.isRequired,
    onDeleteTimesheetEntry: PropTypes.func.isRequired,
    onPostTimesheetEntry: PropTypes.func.isRequired,
    onRequestTimeEntries: PropTypes.func.isRequired,
    onRequestClients: PropTypes.func.isRequired,
    onChangeActiveFilter: PropTypes.func.isRequired,
    activeFilter: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.props.onRequestTimeEntries();
    this.props.onRequestClients();
  }

  handleAddTimesheetEntry = newEntry => this.props.onPostTimesheetEntry(newEntry);

  handleDeleteTimesheetEntry = (timesheetEntryId) => {
    this.props.onDeleteTimesheetEntry(timesheetEntryId);
  }

  render() {
    const {
      timesheetEntries, isFormSaving,
      onChangeActiveFilter, activeFilter,
      clientNameAndId
    } = this.props;

    return (
      <div className="timesheet">
        <TimesheetSearchBar
          onChangeActiveFilter={onChangeActiveFilter}
          activeFilter={activeFilter}
        />
        <div className="timesheet__wrapper">
          <AddTimesheet
            clients={clientNameAndId}
            onSave={this.handleAddTimesheetEntry}
            isFormSaving={isFormSaving}
          />
          <ul>
            {timesheetEntries.map((timesheetEntry, index, array) => (
              <React.Fragment key={timesheetEntry.id}>
                {(!index || (timesheetEntry.date !== array[index - 1].date)) && (
                <TimesheetDate
                  date={timesheetEntry.date}
                  totalTime={calculateCumulativeDuration(
                    timesheetEntry.startTime, timesheetEntries
                  )}
                />
                )}
                <TimesheetEntry
                  clientName={timesheetEntry.clientLabelName}
                  endTime={timesheetEntry.endTime}
                  id={timesheetEntry.id}
                  onDelete={this.handleDeleteTimesheetEntry}
                  startTime={timesheetEntry.startTime}
                />
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Timesheet;
