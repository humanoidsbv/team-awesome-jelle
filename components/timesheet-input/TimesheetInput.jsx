import React from 'react';

import PropTypes from 'prop-types';

import { convertDateToIso, convertTimeToIso } from '../../services/convert-time/convert-time';
import './timesheet-input.scss';

class TimesheetInput extends React.Component {
  static defaultState = {
    defaultFormValues: {
      employer: 'Port of Rotterdam',
      activity: 'Design',
      date: '',
      startTime: '',
      endTime: ''
    },
    defaultValidity: {
      employer: true,
      activity: true,
      date: true,
      startTime: true,
      endTime: true
    },
    isFormVisible: false
  }

  static propTypes = {
    onSave: PropTypes.func.isRequired,
    isFormSaving: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
    this.inputForm = React.createRef();
  }

  state = {
    timeEntry: TimesheetInput.defaultState.defaultFormValues,
    validity: TimesheetInput.defaultState.defaultValidity,
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
    this.setState({ timeEntry: TimesheetInput.defaultState.defaultFormValues });
    this.toggleForm();
  }

  handleBlur = ({ target }) => {
    this.setState(prevState => ({
      validity: {
        ...prevState.validity,
        [target.name]: target.validity.valid
      }
    }));
  }

  validateForm = () => this.inputForm.current && Array
    .from(this.inputForm.current.elements)
    .every(formItem => formItem.validity.valid)

  render() {
    const { isFormSaving } = this.props;
    const {
      isFormVisible, timeEntry, validity
    } = this.state;
    const {
      employer, activity, date, startTime, endTime
    } = timeEntry;

    return (
      <div className="timesheet-input">
        <button
          className={`
            timesheet-input__new-button
            timesheet-input__new-button${isFormVisible ? '--invisible' : '--visible'}
          `}
          onClick={this.toggleForm}
          type="button"
        >
          New time entry
        </button>
        <button
          className={`
            timesheet-input__close-button
            timesheet-input__close-button${isFormVisible ? '--visible' : '--invisible'}
          `}
          onClick={this.toggleForm}
          type="button"
        />
        <form
          ref={this.inputForm}
          onSubmit={this.handleSubmit}
          className={`
            timesheet-input__form
            timesheet-input__form${isFormVisible ? '--open' : '--closed'}
            `}
        >
          <div className="timesheet-input__employer">
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
          <div className="timesheet-input__activity">
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
                required
                type="text"
                name="activity"
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
          <div className="timesheet-input__date">
            <label
              className="timesheet-input__label"
              htmlFor="date"
              id="date"
            >
              DATE
              <input
                className={`
                  timesheet-input__select
                  timesheet-input__select${validity.date ? '--valid' : '--invalid'}
                `}
                id="date"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                name="date"
                pattern="(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-]\d{4}"
                required
                type="text"
                value={date}
              />
            </label>
          </div>
          <div className="timesheet-input__time">
            <div className="timesheet-input__start-time">
              <label
                className="timesheet-input__label"
                htmlFor="from"
              >
              FROM
                <input
                  className={`
                    timesheet-input__select
                    timesheet-input__select${validity.startTime ? '--valid' : '--invalid'}
                  `}
                  id="from"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  name="startTime"
                  pattern="([01]?[0-9]|2[0-3]).[0-5][0-9]"
                  required
                  type="text"
                  value={startTime}
                />
              </label>
            </div>
            <div className="timesheet-input__end-time">
              <label
                className="timesheet-input__label"
                htmlFor="to"
              >
                TO
                <input
                  className={`
                    timesheet-input__select
                    timesheet-input__select${validity.endTime ? '--valid' : '--invalid'}
                  `}
                  id="to"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  name="endTime"
                  pattern="([01]?[0-9]|2[0-3]).[0-5][0-9]"
                  required
                  type="text"
                  value={endTime}
                />
              </label>
            </div>
          </div>
          <div className="timesheet-input__add-button-wrapper">
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
        </form>
      </div>
    );
  }
}
export default TimesheetInput;
