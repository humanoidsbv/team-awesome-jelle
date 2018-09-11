import React from 'react';

import PropTypes from 'prop-types';

import './timesheet-date.scss';

const TimesheetDate = ({ date, totalTime }) => (
  <div className="timesheet-date">
    <p className="timesheet-date__date">
      {`
        ${new Date(date).toLocaleDateString('en-NL', { weekday: 'long' })}
        ${new Date(date).toLocaleDateString('nl-NL', { day: 'numeric', month: 'numeric' })}
      `}
    </p>
    <p className="timesheet-date__total-time">
      {totalTime}
    </p>
  </div>
);

TimesheetDate.propTypes = {
  date: PropTypes.string.isRequired,
  totalTime: PropTypes.string.isRequired
};

export default TimesheetDate;
