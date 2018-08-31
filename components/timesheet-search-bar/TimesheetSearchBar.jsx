import React from 'react';

<<<<<<< HEAD
=======
import PropTypes from 'prop-types';

>>>>>>> 6a66c19034a6331a1edcf822bf22325df107f928
import './timesheet-search-bar.scss';

const TimesheetSearchBar = () => (
  <div className="timesheet-search-bar-wrapper">
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
