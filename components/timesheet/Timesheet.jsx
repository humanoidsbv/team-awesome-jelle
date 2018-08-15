import React from 'react';

import TimesheetDate from '../timesheet-date/TimesheetDate';
import TimesheetEntry from '../timesheet-entry/TimesheetEntry';

import timesheetEntries from '../../pages/mock-timesheet-entries.json';

import './timesheet.scss';


const Timesheet = () => (
  <div className="timesheet-wrapper">
    {timesheetEntries.map((timesheetEntry, index, array) => (
      <React.Fragment key={timesheetEntry.id}>
        {(!index || (timesheetEntry.date !== array[index - 1].date)) && (
        <TimesheetDate
          date={timesheetEntry.date}
        />
        )}
        <TimesheetEntry
          {...timesheetEntry}
        />
      </React.Fragment>
    ))}
  </div>
);

export default Timesheet;
