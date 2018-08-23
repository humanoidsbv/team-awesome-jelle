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
    const { onDelete } = this.props;
    const { id } = this.props;

    onDelete(id);
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
  }
}


export default TimesheetEntry;
