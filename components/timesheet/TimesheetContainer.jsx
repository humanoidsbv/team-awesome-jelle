import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  deleteTimesheetEntry,
  requestTimeEntries,
  postTimesheetEntry,
  timesheetEntriesSelector,
  isFormSavingSelector
}
  from '../../ducks/time-entries';

import Timesheet from './Timesheet';

const mapStateToProps = state => ({
  timesheetEntries: timesheetEntriesSelector(state),
  isFormSaving: isFormSavingSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onDeleteTimesheetEntry: deleteTimesheetEntry,
  onRequestTimeEntries: requestTimeEntries,
  onPostTimesheetEntry: postTimesheetEntry
}, dispatch);

const TimesheetContainer = props => (
  <Timesheet {...props} />
);

TimesheetContainer.propTypes = Timesheet.PropTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TimesheetContainer);
