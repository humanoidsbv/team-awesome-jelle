import React from 'react';

import PropTypes from 'prop-types';

import './timesheet-entry.scss';

import { calculateDuration } from '../../services/convert-time/convert-time';

class TimesheetEntry extends React.Component {
  static propTypes = {
    clientName: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    startTime: PropTypes.string.isRequired
  }

  toggleDeleting = () => {
    this.setState(({ isEntryDeleting }) => ({ isEntryDeleting: !isEntryDeleting }));
  }

  handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      this.props.onDelete(this.props.id);
    }
  }

  render() {
    const {
      clientName, endTime, startTime
    } = this.props;

    return (
      <div className="timesheet-entry">
        <p className="timesheet-entry__employer">
          {clientName}
        </p>

        <button
          className="timesheet-entry__delete-button"
          onClick={this.handleDelete}
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
  }
}

export default TimesheetEntry;
