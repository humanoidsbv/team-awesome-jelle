import React from 'react';

import data from './mock-timesheet-entries.json';
import './index.scss';
import TimesheetInput from '../components/timesheet-input/TimesheetInput';
import Timesheet from '../components/timesheet/Timesheet';

export default () => (
  <main className="timesheet-page-wrapper">
    <TimesheetInput />
    <Timesheet
      data={data}
      employer="Port of Rotterdam"
      startTime="09:00"
      endTime="17:00"
    />
    <Timesheet
      employer="Hike One"
      startTime="13:00"
      endTime="18:00"
    />
    <Timesheet
      employer="Port of Rotterdam"
      startTime="09:00"
      endTime="17:00"
    />
  </main>
);
