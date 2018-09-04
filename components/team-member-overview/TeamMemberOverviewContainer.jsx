import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TeamMemberOverview from './TeamMemberOverview';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const TeamMemberOverviewContainer = props => (
  <TeamMemberOverview {...props} />
);

TeamMemberOverviewContainer.propTypes = TeamMemberOverview.PropTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TeamMemberOverviewContainer);
