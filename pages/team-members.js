import React from 'react';

import './index.scss';

import HeaderContainer from '../components/header';
import TeamMemberOverviewContainer from '../components/team-member-overview';


const TeamMembers = () => (
  <React.Fragment>
    <HeaderContainer />
    <main className="team-member-page-wrapper">
      <TeamMemberOverviewContainer />
    </main>
  </React.Fragment>
);

export default TeamMembers;
