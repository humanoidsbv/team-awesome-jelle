import React from 'react';
import PropTypes from 'prop-types';
import TimesheetEntry from '../timesheet-entry/TimesheetEntry';

import './timesheet.scss';

const Timesheet = ({ date, employer, startTime, endTime }) => {
  Timesheet.propTypes = {
    date: PropTypes.string.isRequired,
    employer: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired
  };
  return (

    <div className="timesheet-wrapper">
      <p className="timesheet-wrapper__date">
        {date}
      </p>
      <TimesheetEntry
        employer={employer}
        startTime={startTime}
        endTime={endTime}
      />
    </div>
  );
};


export default Timesheet;
