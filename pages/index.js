import React from 'react';

import './index.scss';

import Header from '../components/header/Header';
import TimesheetContainer from '../components/timesheet';

const Index = () => (
  <React.Fragment>
    <Header />
    <main className="timesheet-page-wrapper">
      <TimesheetContainer />
    </main>
  </React.Fragment>
);

export default Index;
