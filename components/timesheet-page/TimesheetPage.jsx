import React from 'react';
import TimesheetInput from './timesheet-input/TimesheetInput';
import Timesheet from './timesheet/Timesheet';

import './timesheet-page.scss';

const TimesheetPage = () => (
  <main className="timesheet-page-wrapper">
    <TimesheetInput />
    <Timesheet />
    <Timesheet />
  </main>

);

export default TimesheetPage;
