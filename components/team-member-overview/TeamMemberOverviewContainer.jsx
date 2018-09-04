import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TeamMemberOverview from './TeamMemberOverview';

import {
  requestTeamMembers,
  isAddingSelector,
  teamMembersSelector,
  toggleForm
} from '../../ducks/team-members';

const mapStateToProps = state => ({
  teamMembers: teamMembersSelector(state),
  isAdding: isAddingSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onRequestTeamMembers: requestTeamMembers,
  onToggleForm: toggleForm
}, dispatch);

const TeamMemberOverviewContainer = props => (
  <TeamMemberOverview {...props} />
);

TeamMemberOverviewContainer.propTypes = TeamMemberOverview.PropTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TeamMemberOverviewContainer);
