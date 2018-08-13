import React from 'react';

import './timesheet-input.scss';

const TimesheetInput = () => (
  <div className="timesheet-field">
    <button
      className="timesheet-field__button timesheet-field__button--new"
      type="submit"
    >
      + New time entry
    </button>

    <button
      className="timesheet-field__button timesheet-field__button--close"
      type="submit"
    />
    <div className="timesheet-field__field-item timesheet-field__field-item--full">
      <label
        className="timesheet-field__label"
        htmlFor="employer"
        id="employer"
      >
        EMPLOYER
        <select
          className="timesheet-field__select"
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
    <div className="timesheet-field__field-item timesheet-field__field-item--full">
      <label
        className="timesheet-field__label"
        htmlFor="activity"
        id="activity"
      >
        ACTIVITY
        <select
          className="timesheet-field__select"
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
    <div className="timesheet-field__field-item timesheet-field__field-item--full">
      <label
        className="timesheet-field__label"
        htmlFor="date"
        id="date"
      >
        Date
        <select
          className="timesheet-field__select"
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
    <div className="timesheet-field__field-item timesheet-field__field-item--half">
      <label
        className="timesheet-field__label"
        htmlFor="from"
      >
        FROM
        <select
          className="timesheet-field__select"
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
    <div className="timesheet-field__field-item timesheet-field__field-item--last">
      <label
        className="timesheet-field__label"
        htmlFor="to"
      >
        TO
        <select
          className="timesheet-field__select"
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
    <button
      className="timesheet-field__button timesheet-field__button--add"
      type="submit"
    >
        Add
    </button>
  </div>
);

export default TimesheetInput;
