import React from 'react';
import PropTypes from 'prop-types';

import './timesheet-search-bar.scss';

import ClientSelector from './client-selector/ClientSelector';

const TimesheetSearchBar = ({ activeFilter, onChangeActiveFilter }) => (
  <div className="timesheet-search-bar">
    <p className="timesheet-search-bar__title">
      Timesheets
    </p>
    <p className="timesheet-search-bar__entry-counter">
      12 entries
    </p>
    <ClientSelector
      activeFilter={activeFilter}
      onChangeActiveFilter={onChangeActiveFilter}
    />
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

TimesheetSearchBar.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  onChangeActiveFilter: PropTypes.func.isRequired
};


export default TimesheetSearchBar;
