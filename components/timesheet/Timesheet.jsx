import React from 'react';
import PropTypes from 'prop-types';
import TimesheetEntry from '../timesheet-entry/TimesheetEntry';

import './timesheet.scss';

const Timesheet = ({ data }) => {
  Timesheet.propTypes = {
    data: PropTypes.shape({
      date: PropTypes.string.isRequired,
      employer: PropTypes.string.isRequired,
      startTime: PropTypes.string.isRequired,
      endTime: PropTypes.string.isRequired
    })
  };
  Timesheet.defaultProps = {
    data: {
      date: '01-01-1970',
      employer: 'Humanoids',
      startTime: '00:00',
      endTime: '00:00'
    }
  };
  return (

    <div className="timesheet-wrapper">
      <p className="timesheet-wrapper__date">
        {data.date}
      </p>
      <TimesheetEntry
        data={data}
      />
    </div>
  );
};


export default Timesheet;
