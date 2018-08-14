import React from 'react';
import TimesheetEntry from '../timesheet-entry/TimesheetEntry';

import data from '../../pages/mock-timesheet-entries.json';

import './timesheet.scss';

const displayTimesheets = data.map((currentTimesheet, index, array) => (
  (index !== 0 && currentTimesheet.date === array[index - 1].date)
    ? (
      <TimesheetEntry
        {...currentTimesheet}
      />
    )
    : (
      <React.Fragment>
        <p className="timesheet-wrapper__date">
          {currentTimesheet.date}
        </p>
        <TimesheetEntry
          {...currentTimesheet}
        />
      </React.Fragment>
    )
));

const Timesheet = () => (
  <div className="timesheet-wrapper">
    {displayTimesheets}
  </div>
);

export default Timesheet;
