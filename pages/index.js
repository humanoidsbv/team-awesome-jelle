import React from 'react';

import data from './mock-timesheet-entries.json';
import './index.scss';
import TimesheetInput from '../components/timesheet-input/TimesheetInput';
import Timesheet from '../components/timesheet/Timesheet';

export default () => {
  const displayTimesheets = data.map(mappedTimesheet => (
    <Timesheet
      {...mappedTimesheet}
    />
  ));

  return (
    <main className="timesheet-page-wrapper">
      <TimesheetInput />
      {displayTimesheets}
    </main>
  );
};
