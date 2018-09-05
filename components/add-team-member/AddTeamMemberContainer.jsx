import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddTeamMember from './AddTeamMember';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const AddTeamMemberContainer = props => (
  <AddTeamMember {...props} />
);


AddTeamMemberContainer.propTypes = AddTeamMember.PropTypes;

export default connect(mapStateToProps, mapDispatchToProps)(AddTeamMemberContainer);
