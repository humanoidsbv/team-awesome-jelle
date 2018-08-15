import React from 'react';
import TimesheetEntry from '../timesheet-entry/TimesheetEntry';

import timesheetEntries from '../../pages/mock-timesheet-entries.json';

import './timesheet.scss';


const Timesheet = () => (
  <div className="timesheet-wrapper">
    {
      timesheetEntries.map((currentTimesheet, index, array) => (
        <React.Fragment key={currentTimesheet.id}>
          {
            (!index || (currentTimesheet.date !== array[index - 1].date)) && (
              <p className="timesheet-wrapper__date">
                {currentTimesheet.date}
              </p>
            )}
          <TimesheetEntry
            {...currentTimesheet}
          />
        </React.Fragment>
      ))}
  </div>
);

export default Timesheet;
