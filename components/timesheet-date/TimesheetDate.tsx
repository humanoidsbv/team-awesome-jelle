import React from 'react';

import './timesheet-date.scss';

interface TimesheetDateProps {
  date: string;
  totalTime: string;
}

const TimesheetDate = ({ date, totalTime } : TimesheetDateProps) => (
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
);

export default TimesheetDate;
