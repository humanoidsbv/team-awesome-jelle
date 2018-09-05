import React from 'react';

import './index.scss';

import HeaderContainer from '../components/header';
import AddTeamMemberContainer from '../components/add-team-member';


const TeamMembers = () => (
  <React.Fragment>
    <HeaderContainer />
    <main className="add-team-member-page-wrapper">
      <AddTeamMemberContainer />
    </main>
  </React.Fragment>
);

export default TeamMembers;
