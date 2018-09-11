import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TeamMemberOverview from './TeamMemberOverview';

import {
  changeSortingDirection,
  changeSortByProperty,
  requestTeamMembers,
  teamMembersSelector,
  teamMembersSortBySelector,
  teamMembersSortDirectionSelector
} from '../../ducks/team-members';

const mapStateToProps = state => ({
  teamMembers: teamMembersSelector(state),
  sortBy: teamMembersSortBySelector(state),
  sortDirection: teamMembersSortDirectionSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onChangeSortByProperty: changeSortByProperty,
  onChangeSortingDirection: changeSortingDirection,
  onRequestTeamMembers: requestTeamMembers
}, dispatch);

const TeamMemberOverviewContainer = props => (
  <TeamMemberOverview {...props} />
);

TeamMemberOverviewContainer.propTypes = TeamMemberOverview.PropTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TeamMemberOverviewContainer);
