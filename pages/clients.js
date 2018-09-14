import React from 'react';

import './index.scss';

import HeaderContainer from '../components/header';
import ClientOverviewContainer from '../components/client-overview';


const TeamMembers = () => (
  <React.Fragment>
    <HeaderContainer />
    <main className="page-wrapper">
      <ClientOverviewContainer />
    </main>
  </React.Fragment>
);

export default TeamMembers;
