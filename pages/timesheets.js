import React from 'react';

import './index.scss';

import HeaderContainer from '../components/header';
import TimesheetContainer from '../components/timesheet';

const Timesheets = () => (
  <React.Fragment>
    <HeaderContainer />
    <main className="page-wrapper">
      <TimesheetContainer />
    </main>
  </React.Fragment>
);

export default Timesheets;
