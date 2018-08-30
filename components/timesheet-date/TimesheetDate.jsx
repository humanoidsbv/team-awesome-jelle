import React from 'react';

import PropTypes from 'prop-types';

import './timesheet-date.scss';

const TimesheetDate = ({ date }) => (
  <p className="timesheet-wrapper__date">
    {`
      ${new Date(date).toLocaleDateString('en-NL', { weekday: 'long' })}
      ${new Date(date).toLocaleDateString('nl-NL', { day: 'numeric', month: 'numeric' })}
    `}
  </p>
);

TimesheetDate.propTypes = {
  date: PropTypes.string.isRequired
};

export default TimesheetDate;
