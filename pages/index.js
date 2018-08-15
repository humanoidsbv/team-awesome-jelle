import React from 'react';

import './index.scss';

import Header from '../components/header/Header';
import TimesheetInput from '../components/timesheet-input/TimesheetInput';
import Timesheet from '../components/timesheet/Timesheet';

const Index = () => (
  <React.Fragment>
    <Header />
    <main className="timesheet-page-wrapper">
      <TimesheetInput />
      <Timesheet />
    </main>
  </React.Fragment>
);

export default Index;
