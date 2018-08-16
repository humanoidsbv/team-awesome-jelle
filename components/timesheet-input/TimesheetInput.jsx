import React from 'react';

import PropTypes from 'prop-types';
import './timesheet-input.scss';

class TimesheetInput extends React.Component {
  static propTypes = {
    addTimesheetEntry: PropTypes.func.isRequired
  };

  state = {
    isFormVisible: false
  }

toggleForm = () => {
  this.setState(({ isFormVisible }) => (
    {
      isFormVisible: !isFormVisible
    }
  ));
}

render() {
  const { isFormVisible } = this.state;
  const { addTimesheetEntry } = this.props;

  return (
    <div className="timesheet-input-wrapper">
      <button
        className={`
          timesheet-input__new-button
          timesheet-input__new-button${isFormVisible ? '--open' : '--closed'}
        `}
        onClick={this.toggleForm}
        type="submit"
      >
        <img
          alt="plus sign"
          className="timesheet-field__plus-svg"
          src="/static/icons/plus.svg"
        />
        {' '}
        New time entry
      </button>
      <div className={`
        timesheet-input-form
        timesheet-input-form${isFormVisible ? '--open' : '--closed'}
        `}
      >
        <button
          className="timesheet-input-form__close-button"
          onClick={this.toggleForm}
          type="submit"
        />
        <div className="timesheet-input-form__field-item timesheet-input-form__field-item--employer">
          <label
            className="timesheet-input-form__label"
            htmlFor="employer"
            id="employer"
          >
          EMPLOYER
            <select
              className="timesheet-input-form__select"
              id="employer"
              readOnly
              type="text"
              value="Port of Rotterdam"
            >
              <option value="">
                Port of Rotterdam
              </option>
            </select>
          </label>
        </div>
        <div className="timesheet-input-form__field-item timesheet-input-form__field-item--full">
          <label
            className="timesheet-input-form__label"
            htmlFor="activity"
            id="activity"
          >
            ACTIVITY
            <select
              className="timesheet-input-form__select"
              id="activity"
              readOnly
              type="text"
              value="Design"
            >
              <option value="">
                Design
              </option>
            </select>

          </label>
        </div>
        <div className="timesheet-input-form__field-item timesheet-input-form__field-item--full">
          <label
            className="timesheet-input-form__label"
            htmlFor="date"
            id="date"
          >
            Date
            <select
              className="timesheet-input-form__select"
              id="date"
              readOnly
              type="text"
              value="29-07-2018"
            >
              <option value="">
                29-07-2018
              </option>
            </select>
          </label>
        </div>
        <div className="timesheet-input-form__time-wrapper">
          <div className="timesheet-input-form__field-item timesheet-input-form__field-item--from">
            <label
              className="timesheet-input-form__label"
              htmlFor="from"
            >
            FROM
              <select
                className="timesheet-input-form__select"
                id="from"
                readOnly
                type="text"
                value="09:00"
              >
                <option value="">
                  09:00
                </option>
              </select>
            </label>
          </div>
          <div className="timesheet-input-form__field-item timesheet-input-form__field-item--to">
            <label
              className="timesheet-input-form__label"
              htmlFor="to"
            >
              TO
              <select
                className="timesheet-input-form__select"
                id="to"
                readOnly
                type="text"
                value="17:00"
              >
                <option value="">
                  17:00
                </option>
              </select>
            </label>
          </div>
        </div>
        <button
          className="timesheet-input-form__add-button"
          type="submit"
          onClick={addTimesheetEntry}
        >
            Add
        </button>
      </div>
    </div>
  );
}
}
export default TimesheetInput;
