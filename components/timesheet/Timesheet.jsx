import React from 'react';
import PropTypes from 'prop-types';
import TimesheetEntry from '../timesheet-entry/TimesheetEntry';

import './timesheet.scss';

const Timesheet = (props) => {
  Timesheet.propTypes = {
    data: React.PropTypes.shape({
      date: PropTypes.string.isRequired,
      employer: PropTypes.string.isRequired,
      startTime: PropTypes.string.isRequired,
      endTime: PropTypes.string.isRequired
    })
  };
  Timesheet.defaultProps = {
    data:
  }
  AddAddressComponent.defaultProps = {
  cityList: [],
  provinceList: [],
};
  return (
    <div className="timesheet-wrapper">
      <p className="timesheet-wrapper__date">
        29-07-2018
      </p>
      <TimesheetEntry
        employer={props.employer}
        startTime={props.startTime}
        endTime={props.endTime}
      />
    </div>
  );
};


export default Timesheet;
