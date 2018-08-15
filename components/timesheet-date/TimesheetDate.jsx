import React from 'react';

import PropTypes from 'prop-types';

import './timesheet-date.scss';

const TimesheetDate = ({ date }) => (
  <p className="timesheet-wrapper__date">
    {date}
  </p>
);

TimesheetDate.propTypes = {
  date: PropTypes.string.isRequired
};

export default TimesheetDate;
