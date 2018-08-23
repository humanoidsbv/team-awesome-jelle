import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  deleteTimesheetEntry,
  deleteTimesheetEntrySucces,
  requestTimeEntries,
  requestTimeEntriesSucces,
  postTimesheetEntry,
  postTimesheetEntrySucces,
  timesheetEntriesSelector
}
  from '../../ducks/time-entries';

import Timesheet from './Timesheet';

const mapStateToProps = state => ({
  timesheetEntries: timesheetEntriesSelector(state)
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

TimesheetContainer.propTypes = Timesheet.PropTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TimesheetContainer);
