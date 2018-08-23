import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  deleteTimesheetEntry,
  deleteTimesheetEntrySucces,
  requestTimeEntries,
  requestTimeEntriesSucces,
  postTimesheetEntry,
  postTimesheetEntrySucces
}
  from '../../ducks/time-entries';

import Timesheet from './Timesheet';

const mapStateToProps = state => ({
  timesheetEntries: state.timesheetEntries.items
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onDeleteTimesheetEntry: deleteTimesheetEntry,
  onDeleteTimesheetEntrySucces: deleteTimesheetEntrySucces,
  onRequestTimeEntries: requestTimeEntries,
  onRequestTimeEntriesSucces: requestTimeEntriesSucces,
  onPostTimesheetEntry: postTimesheetEntry,
  onPostTimesheetEntrySucces: postTimesheetEntrySucces
}, dispatch);

const TimesheetContainer = props => (
  <Timesheet {...props} />
);

TimesheetContainer.propTypes = {
  timesheetEntries: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TimesheetContainer);
