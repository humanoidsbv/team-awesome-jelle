import React from 'react';

import TimesheetSearchBar from '../timesheet-search-bar/TimesheetSearchBar';
import TimesheetDate from '../timesheet-date/TimesheetDate';
import TimesheetEntry from '../timesheet-entry/TimesheetEntry';
import AddTimesheet from '../add-timesheet/AddTimesheet';

import { calculateCumulativeDuration } from '../../services/convert-time/convert-time';

import { TimesheetEntryModel } from '../../ducks/time-entries';
import { ClientOptionModel } from '../../ducks/clients'

import './timesheet.scss';

interface TimesheetProps {
  activeFilter: string;
  timesheetEntries: TimesheetEntryModel[];
  clientOptions: ClientOptionModel[];
  isFormSaving: boolean;
  onDeleteTimesheetEntry;
  onPostTimesheetEntry;
  onRequestTimeEntries;
  onChangeActiveFilter;
}

class Timesheet extends React.Component<TimesheetProps, null> {
  componentDidMount() {
    this.props.onRequestTimeEntries();
  }

  handleAddTimesheetEntry = newEntry => this.props.onPostTimesheetEntry(newEntry);

  handleDeleteTimesheetEntry = (timesheetEntryId) => {
    this.props.onDeleteTimesheetEntry(timesheetEntryId);
  }

  render(){
    const {
      timesheetEntries, isFormSaving,
      onChangeActiveFilter, activeFilter,
      clientOptions
    } = this.props;

    return (
      <div className="timesheet">
        <TimesheetSearchBar
          onChangeActiveFilter={onChangeActiveFilter}
          activeFilter={activeFilter}
          clientOptions={clientOptions}
        />
        <div className="timesheet__wrapper">
          <AddTimesheet
            clientOptions={clientOptions}
            onSave={this.handleAddTimesheetEntry}
            isFormSaving={isFormSaving}
          />
          <ul>
            {timesheetEntries.map((timesheetEntry, index, array) => (
              <React.Fragment key={timesheetEntry.id}>
                {(!index || (timesheetEntry.date !== array[index - 1].date)) && (
                <li>
                  <TimesheetDate
                    date={timesheetEntry.date}
                    totalTime={calculateCumulativeDuration(
                      timesheetEntry.startTime, timesheetEntries
                    )}
                  />
                </li>
                )}
                <li>
                  <TimesheetEntry
                    clientName={timesheetEntry.clientName}
                    endTime={timesheetEntry.endTime}
                    id={timesheetEntry.id}
                    onDelete={this.handleDeleteTimesheetEntry}
                    startTime={timesheetEntry.startTime}
                  />
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Timesheet;
