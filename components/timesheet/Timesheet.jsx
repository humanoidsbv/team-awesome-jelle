import React from 'react';
import TimesheetEntry from '../timesheet-entry/TimesheetEntry';

import './timesheet.scss';

const Timesheet = () => (
  <div className="timesheet-wrapper">
    <p className="timesheet-wrapper__date">
      29-07-2018
    </p>
    <TimesheetEntry />
  </div>
);


export default Timesheet;
