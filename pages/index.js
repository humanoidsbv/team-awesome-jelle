import React from 'react';

import './index.scss';
import TimesheetInput from '../components/timesheet-input/TimesheetInput';
import Timesheet from '../components/timesheet/Timesheet';

export default () => (
  <main className="timesheet-page-wrapper">
    <TimesheetInput />
    <Timesheet />
    <Timesheet />
  </main>
);
