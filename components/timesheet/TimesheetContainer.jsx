import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  deleteTimesheetEntry,
  requestTimeEntries,
  postTimesheetEntry,
  timesheetEntriesSelector,
  isFormSavingSelector,
  timesheetActiveFilterSelector,
  changeActiveFilter
}
  from '../../ducks/time-entries';

import { clientNameAndIdSelector, requestClients } from '../../ducks/clients';

import Timesheet from './Timesheet';

const mapStateToProps = state => ({
  timesheetEntries: timesheetEntriesSelector(state),
  isFormSaving: isFormSavingSelector(state),
  activeFilter: timesheetActiveFilterSelector(state),
  clientNameAndId: clientNameAndIdSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onDeleteTimesheetEntry: deleteTimesheetEntry,
  onRequestClients: requestClients,
  onRequestTimeEntries: requestTimeEntries,
  onPostTimesheetEntry: postTimesheetEntry,
  onChangeActiveFilter: changeActiveFilter
}, dispatch);

const TimesheetContainer = props => (
  <Timesheet {...props} />
);

TimesheetContainer.propTypes = Timesheet.PropTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TimesheetContainer);
