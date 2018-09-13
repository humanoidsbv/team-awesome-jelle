import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddClient from './AddClient';

import {
  postClient
} from '../../ducks/clients';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  onPostClient: postClient
}, dispatch);

const AddClientContainer = props => (
  <AddClient {...props} />
);


AddClientContainer.propTypes = AddClient.PropTypes;

export default connect(mapStateToProps, mapDispatchToProps)(AddClientContainer);
