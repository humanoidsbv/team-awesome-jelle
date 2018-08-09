import React from 'react';
import './TimesheetInput.scss';

const TimesheetInput = () => (

  <div className="timesheet-field">
    <div className="timesheet-field__field-item timesheet-field__field-item--full">
      <label
        className="timesheet-field-label"
        htmlFor="employer"
        id="employer"
      >
        <select
          className="timesheet-field-select"
          id="employer"
          readOnly
          type="text"
          value="Port of Rotterdam"
        >
          <option value="">
Port of Rotterdam
          </option>
        </select>
        EMPLOYER
      </label>


    </div>
    <div className="timesheet-field__field-item timesheet-field__field-item--full">
      <label
        className="timesheet-field-label"
        htmlFor="activity"
        id="activity"
      >
        <select
          className="timesheet-field-select"
          id="activity"
          readOnly
          type="text"
          value="Design"
        >
          <option value="">
            Design
          </option>
        </select>
          ACTIVITY
      </label>
    </div>
    <div className="timesheet-field__field-item timesheet-field__field-item--full">
      <label
        className="timesheet-field-label"
        htmlFor="date"
        id="date"
      >
        <select
          className="timesheet-field-select"
          id="date"
          readOnly
          type="text"
          value="29-07-2018"
        >
          <option value="">
  29-07-2018
          </option>
        </select>
          Date
      </label>
    </div>
    <div className="timesheet-field__field-item timesheet-field__field-item--half">
      <label
        className="timesheet-field-label"
        htmlFor="from"
      >
        <select
          className="timesheet-field-select"
          id="from"
          readOnly
          type="text"
          value="09:00"
        >
          <option value="">
  09:00
          </option>
        </select>
          FROM
      </label>
    </div>
    <div className="timesheet-field__field-item timesheet-field__field-item--last">
      <label
        className="timesheet-field-label"
        htmlFor="to"
      >
        <select
          className="timesheet-field-select"
          id="to"
          readOnly
          type="text"
          value="17:00"
        >
          <option value="">
  09:00
          </option>
        </select>
          TO
      </label>
    </div>
    <button
      className="timesheet-field__button"
      type="submit"
    >
        Add
    </button>
  </div>
);

export default TimesheetInput;
