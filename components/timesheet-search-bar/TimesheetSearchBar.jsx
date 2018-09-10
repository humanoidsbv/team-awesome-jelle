import React from 'react';

import './timesheet-search-bar.scss';

const TimesheetSearchBar = () => (
  <div className="timesheet-search-bar">
    <p className="timesheet-search-bar__title">
      Timesheets
    </p>
    <p className="timesheet-search-bar__entry-counter">
      12 entries
    </p>
    <div className="timesheet-search-bar__search-box-wrapper">
      <input
        className="timesheet-search-bar__search-box"
        readOnly
        placeholder="Search"
      />
      <img
        alt=""
        className="timesheet-search-bar__search-icon"
        src="/../../static/icons/magnifying-glass.svg"
        height="16px"
        width="16px"
      />
    </div>
  </div>
);

export default TimesheetSearchBar;
