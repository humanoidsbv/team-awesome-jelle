import React from 'react';

import PropTypes from 'prop-types';

import { calculateCumulativeDuration } from '../../services/convert-time/convert-time';

import './timesheet-date.scss';

const TimesheetDate = ({ date, startTime, timesheetEntries }) => (
  <React.Fragment>
    <div className="timesheet-date">
      <p className="timesheet-date__date">
        {`
          ${new Date(date).toLocaleDateString('en-NL', { weekday: 'long' })}
          ${new Date(date).toLocaleDateString('nl-NL', { day: 'numeric', month: 'numeric' })}
        `}
      </p>
      <p className="timesheet-date__total-time">
        {calculateCumulativeDuration(startTime, timesheetEntries)}
      </p>
    </div>
  </React.Fragment>
);

TimesheetDate.propTypes = {
  timesheetEntries: PropTypes.arrayOf(PropTypes.shape({
    employer: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })).isRequired,
  date: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired
};

export default TimesheetDate;
