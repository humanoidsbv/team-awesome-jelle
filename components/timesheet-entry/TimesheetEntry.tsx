import React from 'react';

import './timesheet-entry.scss';

import { calculateDuration } from '../../services/convert-time/convert-time';

interface TimesheetEntryProps {
  clientName: string;
  endTime: string;
  id: number;
  onDelete;
  startTime: string;
}

const handleDelete = () => {
  if (window.confirm('Are you sure you want to delete this item?')) {
    this.props.onDelete(this.props.id);
  }
}

const  TimesheetEntry = ({ clientName, endTime, startTime } : TimesheetEntryProps ) => (
<div className="timesheet-entry">
  <p className="timesheet-entry__employer">
    {clientName}
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
      {`${new Date(startTime).toLocaleTimeString('nl-NL', { hour: 'numeric', minute: 'numeric' })} - ${new Date(endTime).toLocaleTimeString('nl-NL', { hour: 'numeric', minute: 'numeric' })}`}
    </p>
    <p className="timesheet-entry__cumulative-time">
      {calculateDuration(startTime, endTime)}
    </p>
  </div>
</div>
);



export default TimesheetEntry;
