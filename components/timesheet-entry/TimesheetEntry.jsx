import React from 'react';

import PropTypes from 'prop-types';

import './timesheet-entry.scss';

class TimesheetEntry extends React.Component {
  static propTypes = {
    employer: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    startTime: PropTypes.string.isRequired
  }

  toggleDeleting = () => {
    this.setState(({ isEntryDeleting }) => ({ isEntryDeleting: !isEntryDeleting }));
  }

  handleDelete = () => {
    this.props.onDelete(this.props.id);
  }

  render() {
    const {
      employer, endTime, startTime
    } = this.props;

    return (
      <div className="timesheet-entry-wrapper">
        <p className="timesheet-entry__employer">
          {employer}
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
        <p className="timesheet-entry__time">
          {`${new Date(startTime).toLocaleTimeString('nl-NL', { hour: 'numeric', minute: 'numeric' })}
           -
           ${new Date(endTime).toLocaleTimeString('nl-NL', { hour: 'numeric', minute: 'numeric' })}`}
        </p>
      </div>
    );
  }
}


export default TimesheetEntry;
