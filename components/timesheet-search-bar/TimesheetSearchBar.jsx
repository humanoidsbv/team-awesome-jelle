import React from 'react';
import PropTypes from 'prop-types';

import './timesheet-search-bar.scss';

import SelectBox from '../../shared/components/select-box/SelectBox';

const TimesheetSearchBar = ({ activeFilter, onChangeActiveFilter }) => (
  <div className="timesheet-search-bar">
    <p className="timesheet-search-bar__title">
      Timesheets
    </p>
    <p className="timesheet-search-bar__entry-counter">
      12 entries
    </p>
    <SelectBox
      activeValue={activeFilter}
      name="filter-clients"
      onChange={event => onChangeActiveFilter(event.target.value)}
      options={[{ label: 'All Clients', value: '' },
        { label: 'Port of Rotterdam', value: 'Port of Rotterdam' },
        { label: 'Hike One', value: 'Hike One' },
        { label: 'Humanoids', value: 'Humanoids' }
      ]}
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
