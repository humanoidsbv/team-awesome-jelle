import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ClientOverview from './ClientOverview';

import {
  clientsItemSelector,
  requestClients
} from '../../ducks/clients';

const mapStateToProps = state => ({
  clients: clientsItemSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onRequestClients: requestClients
}, dispatch);


const ClientOverviewContainer = props => (
  <ClientOverview {...props} />
);

ClientOverviewContainer.propTypes = ClientOverview.PropTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ClientOverviewContainer);
