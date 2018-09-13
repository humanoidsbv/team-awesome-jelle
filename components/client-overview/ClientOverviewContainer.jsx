import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ClientOverview from './ClientOverview';

import {
  changeSortingDirection,
  changeSortByProperty,
  clientsSelector,
  clientsSortBySelector,
  clientsSortDirectionSelector,
  requestClients
} from '../../ducks/clients';

const mapStateToProps = state => ({
  clients: clientsSelector(state),
  sortBy: clientsSortBySelector(state),
  sortDirection: clientsSortDirectionSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onChangeSortingDirection: changeSortingDirection,
  onChangeSortByProperty: changeSortByProperty,
  onRequestClients: requestClients
}, dispatch);


const ClientOverviewContainer = props => (
  <ClientOverview {...props} />
);

ClientOverviewContainer.propTypes = ClientOverview.PropTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ClientOverviewContainer);
