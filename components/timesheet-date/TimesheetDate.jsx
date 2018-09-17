import React from 'react';

import PropTypes from 'prop-types';

import './timesheet-date.scss';

const TimesheetDate = ({ date, totalTime }) => (
  <li>
    <h2 className="timesheet-date">
      <span className="timesheet-date__date">
        {`
          ${new Date(date).toLocaleDateString('en-NL', { weekday: 'long' })}
          ${new Date(date).toLocaleDateString('nl-NL', { day: 'numeric', month: 'numeric' })}
        `}
      </span>
      <span className="timesheet-date__total-time">
        {totalTime}
      </span>
    </h2>
  </li>
);

TimesheetDate.propTypes = {
  date: PropTypes.string.isRequired,
  totalTime: PropTypes.string.isRequired
};

export default TimesheetDate;
