import React from 'react';

import PropTypes from 'prop-types';

import { convertDateToIso, convertTimeToIso } from '../../services/convert-time/convert-time';
import './timesheet-input.scss';

class TimesheetInput extends React.Component {
  static defaultFormValues = {
    employer: 'Port of Rotterdam',
    activity: 'Design',
    date: '',
    startTime: '',
    endTime: ''
  }

  static propTypes = {
    onSave: PropTypes.func.isRequired,
    isFormSaving: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
    this.inputForm = React.createRef();
    this.selectEmployer = React.createRef();
    this.selectActivity = React.createRef();
    this.inputDate = React.createRef();
    this.inputStartTime = React.createRef();
    this.inputEndTime = React.createRef();
  }

  state = {
    timeEntry: TimesheetInput.defaultFormValues,
    isFormVisible: false
  }

  toggleForm = () => {
    this.setState(({ isFormVisible }) => ({ isFormVisible: !isFormVisible }));
  }

  handleChange = ({ target }) => {
    this.setState(prevState => ({
      timeEntry: {
        ...prevState.timeEntry,
        [target.name]: target.value
      }
    }));

    this.validateForm();
  };

  handleSubmit = (event) => {
    const { onSave } = this.props;
    const { timeEntry } = this.state;
    event.preventDefault();

    const newEntry = {
      ...timeEntry,
      date: convertDateToIso(timeEntry.date),
      startTime: convertTimeToIso(timeEntry.startTime, timeEntry.date),
      endTime: convertTimeToIso(timeEntry.endTime, timeEntry.date)
    };
    onSave(newEntry);
    this.setState({ timeEntry: TimesheetInput.defaultFormValues });
    this.toggleForm();
  }

  validateForm = () => this.inputForm.current && Array
    .from(this.inputForm.current.elements)
    .every(formItem => formItem.validity.valid)

  render() {
    const { isFormSaving } = this.props;
    const {
      isFormVisible, timeEntry
    } = this.state;
    const {
      employer, activity, date, startTime, endTime
    } = timeEntry;

    return (
      <form ref={this.inputForm} onSubmit={this.handleSubmit}>
        <div className="timesheet-input__wrapper">
          <button
            className={`
              timesheet-input__new-button
              timesheet-input__new-button${isFormVisible ? '--invisible' : '--visible'}
            `}
            onClick={this.toggleForm}
            type="button"
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
            timesheet-input__form
            timesheet-input__form${isFormVisible ? '--open' : '--closed'}
            `}
          >
            <button
              className="timesheet-input__close-button"
              onClick={this.toggleForm}
              type="button"
            />
            <div className="timesheet-input__field-item timesheet-input__field-item--employer">
              <label
                className="timesheet-input__label"
                htmlFor="employer"
                id="employer"
              >
              EMPLOYER
                <select
                  className="timesheet-input__select"
                  id="employer"
                  onChange={this.handleChange}
                  name="employer"
                  required
                  ref={this.selectEmployer}
                  type="text"
                  value={employer}
                >
                  <option>
                    Port of Rotterdam
                  </option>
                  <option>
                    Hike One
                  </option>
                </select>
              </label>
            </div>
            <div className="timesheet-input__field-item timesheet-input__field-item--full">
              <label
                className="timesheet-input__label"
                htmlFor="activity"
                id="activity"
              >
                ACTIVITY
                <select
                  className="timesheet-input__select"
                  id="activity"
                  readOnly
                  type="text"
                  name="activity"
                  ref={this.selectActivity}
                  required
                  onChange={this.handleChange}
                  value={activity}
                >
                  <option>
                    Design
                  </option>
                  <option>
                    Meeting
                  </option>
                </select>
              </label>
            </div>
            <div className="timesheet-input__field-item timesheet-input__field-item--date">
              <label
                className="timesheet-input__label"
                htmlFor="date"
                id="date"
              >
                DATE
                <input
                  className="timesheet-input__select"
                  id="date"
                  onChange={this.handleChange}
                  name="date"
                  pattern="(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-]\d{4}"
                  ref={this.inputDate}
                  required
                  type="text"
                  value={date}
                />
              </label>
            </div>
            <div className="timesheet-input__time-wrapper">
              <div className="timesheet-input__field-item timesheet-input__field-item--from">
                <label
                  className="timesheet-input__label"
                  htmlFor="from"
                >
                FROM
                  <input
                    className="timesheet-input__select"
                    id="from"
                    onChange={this.handleChange}
                    name="startTime"
                    pattern="([01]?[0-9]|2[0-3]).[0-5][0-9]"
                    ref={this.inputStartTime}
                    required
                    type="text"
                    value={startTime}
                  />
                </label>
              </div>
              <div className="timesheet-input__field-item timesheet-input__field-item--to">
                <label
                  className="timesheet-input__label"
                  htmlFor="to"
                >
                  TODATE
                  <input
                    className="timesheet-input__select"
                    id="to"
                    onChange={this.handleChange}
                    name="endTime"
                    pattern="([01]?[0-9]|2[0-3]).[0-5][0-9]"
                    ref={this.inputEndTime}
                    required
                    type="text"
                    value={endTime}
                  />
                </label>
              </div>
            </div>
            <button
              className={`
                timesheet-input__add-button
                timesheet-input__add-button${isFormSaving ? '--saving' : ''}
              `}
              type="submit"
              readOnly
              disabled={isFormSaving || !this.validateForm()}
            >
              {isFormSaving ? 'Saving' : 'Add'}
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default TimesheetInput;
