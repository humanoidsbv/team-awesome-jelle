import React from 'react';

import PropTypes from 'prop-types';

import './timesheet-entry.scss';

const TimesheetEntry = ({ employer, endTime, startTime }) => (

  <div className="timesheet-entry-wrapper">
    <p className="timesheet-entry__employer">
      {employer}
    </p>

    <button
      className="timesheet-entry__delete-button"
      type="submit"
    >
      <img
        alt="cancel sign"
        className="timesheet-field__plus-svg"
        src="../../static/icons/close.svg"
      />
      Delete
    </button>
    <p className="timesheet-entry__time">
      {`${new Date(startTime).toLocaleTimeString('nl-NL', { hour: 'numeric', minute: 'numeric' })}
       -
       ${new Date(endTime).toLocaleTimeString('nl-NL', { hour: 'numeric', minute: 'numeric' })}`}
    </p>
  </div>
);


TimesheetEntry.propTypes = {
  employer: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired
};


export default TimesheetEntry;
