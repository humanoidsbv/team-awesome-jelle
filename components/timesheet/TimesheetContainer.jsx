import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { requestTimeEntries, requestTimeEntriesSucces } from '../../ducks/time-entries';

import Timesheet from './Timesheet';

const mapStateToProps = state => ({
  timesheetEntries: state.timesheetEntries.items
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onRequestTimeEntries: requestTimeEntries,
  onRequestTimeEntriesSucces: requestTimeEntriesSucces
}, dispatch);

const TimesheetContainer = props => (
  <Timesheet {...props} />
);

TimesheetContainer.propTypes = {
  timesheetEntries: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TimesheetContainer);
