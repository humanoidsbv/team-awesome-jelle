import React from 'react';

import PropTypes from 'prop-types';

import SelectBox from '../../shared/components/select-box/SelectBox';
import { convertDateToIso, convertTimeToIso } from '../../services/convert-time/convert-time';
import './add-timesheet.scss';

class AddTimesheet extends React.Component {
  static defaultState = {
    defaultFormValues: {
      clientName: 'Port of Rotterdam',
      activity: 'Design',
      date: '',
      startTime: '',
      endTime: ''
    },
    defaultValidity: {
      clientName: true,
      activity: true,
      date: true,
      startTime: true,
      endTime: true
    },
    isFormVisible: false
  }

  static propTypes = {
    onSave: PropTypes.func.isRequired,
    isFormSaving: PropTypes.bool.isRequired,
    clients: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    })).isRequired
  };

  constructor(props) {
    super(props);
    this.inputForm = React.createRef();
  }

  state = {
    timeEntry: AddTimesheet.defaultState.defaultFormValues,
    validity: AddTimesheet.defaultState.defaultValidity,
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
    this.setState({ timeEntry: AddTimesheet.defaultState.defaultFormValues });
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
    const { clients, isFormSaving } = this.props;
    const {
      isFormVisible, timeEntry, validity
    } = this.state;
    const {
      clientName, activity, date, startTime, endTime
    } = timeEntry;

    return (
      <section className="add-timesheet">
        <button
          className={`
            add-timesheet__new-button
            add-timesheet__new-button${isFormVisible ? '--invisible' : '--visible'}
          `}
          onClick={this.toggleForm}
          type="button"
        >
          New time entry
        </button>
        <button
          className={`
            add-timesheet__close-button
            add-timesheet__close-button${isFormVisible ? '--visible' : '--invisible'}
          `}
          onClick={this.toggleForm}
          type="button"
        />
        <form
          ref={this.inputForm}
          onSubmit={this.handleSubmit}
          className={`
            add-timesheet__form
            add-timesheet__form${isFormVisible ? '--open' : '--closed'}
            `}
        >
          <div className="add-timesheet__employer">
            <label
              className="add-timesheet__label"
              htmlFor="employer"
              id="employer"
            >
            EMPLOYER
            </label>
            <SelectBox
              activeValue={clientName}
              name="clientName"
              onChange={this.handleChange}
              options={clients}
            />
          </div>
          <div className="add-timesheet__activity">
            <label
              className="add-timesheet__label"
              htmlFor="activity"
              id="activity"
            >
              ACTIVITY
            </label>
            <SelectBox
              activeValue={activity}
              name="activity"
              onChange={this.handleChange}
              options={[{ label: 'Design', value: 'Design' },
                { label: 'Meeting', value: 'Meeting' }
              ]}
            />
          </div>
          <div className="add-timesheet__date">
            <label
              className="add-timesheet__label"
              htmlFor="date"
              id="date"
            >
              DATE
              <input
                className={`
                  add-timesheet__select
                  add-timesheet__select${validity.date ? '--valid' : '--invalid'}
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
          <div className="add-timesheet__time">
            <div className="add-timesheet__start-time">
              <label
                className="add-timesheet__label"
                htmlFor="from"
              >
              FROM
                <input
                  className={`
                    add-timesheet__select
                    add-timesheet__select${validity.startTime ? '--valid' : '--invalid'}
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
            <div className="add-timesheet__end-time">
              <label
                className="add-timesheet__label"
                htmlFor="to"
              >
                TO
                <input
                  className={`
                    add-timesheet__select
                    add-timesheet__select${validity.endTime ? '--valid' : '--invalid'}
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
          <div className="add-timesheet__add-button-wrapper">
            <button
              className={`
                add-timesheet__add-button
                add-timesheet__add-button${isFormSaving ? '--saving' : ''}
              `}
              type="submit"
              readOnly
              disabled={isFormSaving || !this.validateForm()}
            >
              {isFormSaving ? 'Saving' : 'Add'}
            </button>
          </div>
        </form>
      </section>
    );
  }
}
export default AddTimesheet;
