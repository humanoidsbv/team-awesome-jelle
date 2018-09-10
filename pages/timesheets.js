import React from 'react';

import './index.scss';

import HeaderContainer from '../components/header';
import TimesheetSearchBar from '../components/timesheet-search-bar/TimesheetSearchBar';
import TimesheetContainer from '../components/timesheet';

const Timesheets = () => (
  <React.Fragment>
    <HeaderContainer />
    <TimesheetSearchBar />
    <main className="page-wrapper">
      <TimesheetContainer />
    </main>
  </React.Fragment>
);

export default Timesheets;
