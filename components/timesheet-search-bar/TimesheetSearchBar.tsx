import React from 'react';

import SelectBox from '../../shared/components/select-box/SelectBox';

import { ClientOptionModel } from '../../ducks/clients';

import './timesheet-search-bar.scss';

interface TimesheetSearchBarProps {
  activeFilter: string;
  onChangeActiveFilter: (newActiveValue: string) => void;
  clientOptions: ClientOptionModel[];
}

const TimesheetSearchBar = ({ activeFilter, clientOptions, onChangeActiveFilter } : TimesheetSearchBarProps) => (
  <div className="timesheet-search-bar">
    <h1 className="timesheet-search-bar__title">
      Timesheets
    </h1>
    <h2 className="timesheet-search-bar__entry-counter">
      12 entries
    </h2>
    <SelectBox
      activeValue={activeFilter}
      name="filter-clients"
      onChange={event => onChangeActiveFilter(event.target.value)}
      options={[{ label: 'All Clients', value: '' }, ...clientOptions]}
      type="filter"
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

export default TimesheetSearchBar;
