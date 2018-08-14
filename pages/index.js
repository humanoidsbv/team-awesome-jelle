import React from 'react';

import data from './mock-timesheet-entries.json';
import './index.scss';
import TimesheetInput from '../components/timesheet-input/TimesheetInput';
import Timesheet from '../components/timesheet/Timesheet';

export default () => {
  const displayTimesheets = () => {
    data.map(mappedTimesheet => (
      <Timesheet
        date={mappedTimesheet.date}
        employer={mappedTimesheet.employer}
        endTime={mappedTimesheet.endTime}
        startTime={mappedTimesheet.startTime}
      />
    ));
  };


  return (
    <main className="timesheet-page-wrapper">
      <TimesheetInput />
      {displayTimesheets(data)}
    </main>
  );
};
