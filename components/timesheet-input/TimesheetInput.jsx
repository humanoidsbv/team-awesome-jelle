import React from 'react';

import PropTypes from 'prop-types';

import ConvertDateTime from '../../services/convert-date-time/convert-date-time';
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
    onSave: PropTypes.func.isRequired
  };

  state = {
    timeEntry: TimesheetInput.defaultFormValues,
    isFormVisible: false
  }

  toggleForm = () => {
    this.setState(({ isFormVisible }) => (
      {
        isFormVisible: !isFormVisible
      }
    ));
  }

  convertDateToUs = (date) => {
    const splittedDate = date.split('-');
    return `${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`;
  }

  convertToIsoString = (date, time) => new Date(`${date} ${time}`).toISOString();

  // convertDateTime = (prevState) => {
  //   const { date, startTime, endTime } = prevState.timeEntry;
  //
  //   const convertedDate = this.convertDateToUs(date);
  //
  //   const convertedStartTime = this.convertToIsoString(
  //     convertedDate, startTime.replace('.', ':')
  //   );
  //   const convertedEndTime = this.convertToIsoString(
  //     convertedDate, endTime.replace('.', ':')
  //   );
  //
  //   return {
  //     ...prevState.timeEntry,
  //     date: convertedDate,
  //     startTime: convertedStartTime,
  //     endTime: convertedEndTime
  //   };
  // }

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
    event.preventDefault();

    const prevState = { ...this.state };
    onSave(ConvertDateTime(prevState));
    this.setState({ timeEntry: TimesheetInput.defaultFormValues });
    this.toggleForm();
  }

  render() {
    const {
      isFormVisible, timeEntry
    } = this.state;
    const {
      employer, activity, date, startTime, endTime
    } = timeEntry;

    return (
      <form>
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
              type="submit"
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
            <div className="timesheet-input__field-item timesheet-input__field-item--full">
              <label
                className="timesheet-input__label"
                htmlFor="date"
                id="date"
              >
                Date
                <input
                  className="timesheet-input__select"
                  id="date"
                  onChange={this.handleChange}
                  name="date"
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
                  TO
                  <input
                    className="timesheet-input__select"
                    id="to"
                    onChange={this.handleChange}
                    name="endTime"
                    type="text"
                    value={endTime}
                  />
                </label>
              </div>
            </div>
            <button
              className="timesheet-input__add-button"
              type="submit"
              readOnly
              onClick={this.handleSubmit}
            >
                Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default TimesheetInput;
