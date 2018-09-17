import React from 'react';
import PropTypes from 'prop-types';

import './timesheet-search-bar.scss';

import SelectBox from '../../shared/components/select-box/SelectBox';

const TimesheetSearchBar = ({ activeFilter, clients, onChangeActiveFilter }) => (
  <div className="timesheet-search-bar">
    <h1 className="timesheet-search-bar__title">
      Timesheets
    </h1>
    <h1 className="timesheet-search-bar__entry-counter">
      12 entries
    </h1>
    <SelectBox
      activeValue={activeFilter}
      name="filter-clients"
      onChange={event => onChangeActiveFilter(event.target.value)}
      options={clients}
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
  onChangeActiveFilter: PropTypes.func.isRequired,
  clients: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })).isRequired
};


export default TimesheetSearchBar;
