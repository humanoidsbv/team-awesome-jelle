import React from 'react';

import './timesheet-entry.scss';

import { calculateDuration } from '../../services/convert-time/convert-time';

import { TimesheetEntryModel } from '../../ducks/time-entries';


interface TimesheetEntryProps {
  timesheet: TimesheetEntryModel;
  onDelete;
}

const TimesheetEntry = ({timesheet, onDelete} : TimesheetEntryProps ) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      onDelete(timesheet.id);
    }
  }

  return (
    <div className="timesheet-entry">
      <p className="timesheet-entry__employer">
        {timesheet.clientName}
      </p>

      <button
        className="timesheet-entry__delete-button"
        onClick={handleDelete}
        type="submit"
      >
        <svg
          className="timesheet-entry__delete-icon"
        />
          Delete
      </button>
      <div className="timesheet-entry__time">
        <p className="timesheet-entry__time-range">
          {`${new Date(timesheet.startTime).toLocaleTimeString('nl-NL', { hour: 'numeric', minute: 'numeric' })} - ${new Date(timesheet.endTime).toLocaleTimeString('nl-NL', { hour: 'numeric', minute: 'numeric' })}`}
        </p>
        <p className="timesheet-entry__cumulative-time">
          {calculateDuration(timesheet.startTime, timesheet.endTime)}
        </p>
      </div>
    </div>
  )
}

export default TimesheetEntry;
