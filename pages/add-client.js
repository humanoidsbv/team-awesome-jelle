import React from 'react';

import './index.scss';

import HeaderContainer from '../components/header';
import AddClientContainer from '../components/add-client';


const Clients = () => (
  <React.Fragment>
    <HeaderContainer />
    <main className="page-wrapper">
      <AddClientContainer />
    </main>
  </React.Fragment>
);

export default Clients;
