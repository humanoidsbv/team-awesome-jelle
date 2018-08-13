import React from 'react';
import PropTypes from 'prop-types';


import './timesheet-entry.scss';

const TimesheetEntry = (props) => {
  TimesheetEntry.propTypes = {
    employer: PropTypes.string.isRequired,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired
  };

  return (
    <div className="timesheet-entry-wrapper">
      <p className="timesheet-entry__employer">
        {props.employer}
      </p>
      <p className="timesheet-entry__date">
        {props.startTime}
        {' '}
        -
        {' '}
        {props.endTime}
      </p>
    </div>
  );
};


export default TimesheetEntry;
