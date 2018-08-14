import React from 'react';
import PropTypes from 'prop-types';


import './timesheet-entry.scss';

const TimesheetEntry = ({ employer, endTime, startTime }) => {
  TimesheetEntry.propTypes = {
    employer: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired
  };

  return (
    <div className="timesheet-entry-wrapper">
      <p className="timesheet-entry__employer">
        {employer}
      </p>
      <p className="timesheet-entry__time">
        {`${startTime} - ${endTime}`}
      </p>
    </div>
  );
};


export default TimesheetEntry;
